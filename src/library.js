// DNA library on disk: dna/<name>/{sources.json, sources/<id>/..., dna.auto.json, overrides.json, principles.md, dna.json, ...}
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { launchBrowser, newContext } from './lib/browser.js';
import { extractWeb } from './extract/web.js';
import { extractImageFile, downloadImage } from './extract/image.js';
import { extractGallery, GALLERY_HOSTS } from './extract/gallery.js';
import { synthesize } from './synthesize.js';
import { ramp, readableOn, neutralRamp } from './lib/color.js';
import { fontInfo } from './lib/fonts.js';
import { toCss, toTailwindV4, toTailwindPreset, toDtcg, toComponentsCss } from './generate/tokens.js';
import { specimenHtml, moodboardHtml } from './generate/pages.js';
import { summaryMd, principlesTemplate, skillMd, agentMd } from './generate/docs.js';

export const TOOLKIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG_EXT = /\.(png|jpe?g|webp|gif|avif)$/i;

export const slugify = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .replace(/^https?:\/\/(www\.)?/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'source';

const readJson = async (f, fallback) => { try { return JSON.parse(await fs.readFile(f, 'utf8')); } catch { return fallback; } };
const writeJson = (f, v) => fs.writeFile(f, JSON.stringify(v, null, 2));

/** Resolve a CLI source string into {type, input, url|file}. Prefix with web:/img:/gallery: to force a type. */
export function classifySource(raw) {
  let forced = null, input = raw;
  const m = raw.match(/^(web|img|image|gallery):(?!\/\/)(.+)$/i);
  if (m) { forced = m[1].toLowerCase() === 'image' ? 'img' : m[1].toLowerCase(); input = m[2]; }
  if (/^https?:\/\//i.test(input)) {
    const u = new URL(input);
    const type = forced || (IMG_EXT.test(u.pathname) ? 'img' : GALLERY_HOSTS.test(u.hostname) ? 'gallery' : 'web');
    return [{ type: type === 'img' ? 'image' : type, input, url: input }];
  }
  const abs = path.resolve(input);
  if (!existsSync(abs)) throw new Error(`Source not found: ${raw}`);
  if (existsSync(path.join(abs, 'index.html'))) return [{ type: 'web', input: abs, url: pathToFileURL(path.join(abs, 'index.html')).href }];
  if (/\.html?$/i.test(abs)) return [{ type: 'web', input: abs, url: pathToFileURL(abs).href }];
  if (IMG_EXT.test(abs)) return [{ type: 'image', input: abs, file: abs }];
  throw new Error(`Unsupported source: ${raw} (expected a URL, an image, an .html file or a folder)`);
}

export async function expandSources(list) {
  const out = [];
  for (const raw of list) {
    const abs = path.resolve(raw);
    if (!/^[a-z]+:/i.test(raw) && existsSync(abs) && (await fs.stat(abs)).isDirectory() && !existsSync(path.join(abs, 'index.html'))) {
      for (const f of (await fs.readdir(abs)).sort()) if (IMG_EXT.test(f)) out.push(...classifySource(path.join(abs, f)));
    } else out.push(...classifySource(raw));
  }
  return out;
}

export class Library {
  constructor(home = process.env.DNA_HOME || path.join(TOOLKIT, 'dna')) { this.home = home; }
  dir(name) { return path.join(this.home, slugify(name)); }

  async list() {
    if (!existsSync(this.home)) return [];
    const names = [];
    for (const d of await fs.readdir(this.home)) {
      const dna = await readJson(path.join(this.home, d, 'dna.json'), null);
      if (dna) names.push({ name: d, keywords: dna.personality.keywords, sources: dna.sources.length, mode: dna.color.mode });
    }
    return names;
  }

  /** Extract new sources into the library. */
  async add(name, rawSources, { weight = 1, limit = 12, mobile = true } = {}) {
    const dir = this.dir(name);
    await fs.mkdir(path.join(dir, 'sources'), { recursive: true });
    const index = await readJson(path.join(dir, 'sources.json'), []);
    const sources = await expandSources(rawSources);
    const browser = await launchBrowser();
    try {
      const ctx = await newContext(browser);
      const helper = await ctx.newPage();
      for (const src of sources) {
        const base = slugify(src.url && /^https?:/.test(src.url) ? src.input : path.basename(src.input).replace(IMG_EXT, '').replace(/\.html?$/i, ''));
        let id = base, n = 2;
        while (index.some((s) => s.id === id && s.input !== src.input)) id = `${base}-${n++}`;
        const out = path.join(dir, 'sources', id);
        process.stdout.write(`• [${src.type}] ${src.input}\n`);
        try {
          if (src.type === 'web') await extractWeb(browser, src.url, out, { mobile });
          else if (src.type === 'gallery') await extractGallery(browser, src.url, out, { limit });
          else {
            const file = src.file || await downloadImage(ctx, src.url, path.join(out, 'download'));
            await extractImageFile(helper, file, out);
          }
          const entry = { id, type: src.type, input: src.input, weight };
          const i = index.findIndex((s) => s.id === id);
          if (i >= 0) index[i] = entry; else index.push(entry);
          console.log(`  ✓ saved to ${path.relative(process.cwd(), out)}`);
        } catch (e) {
          console.error(`  ✗ failed: ${e.message.split('\n')[0]}`);
        }
      }
      await ctx.close();
    } finally {
      await browser.close();
    }
    await writeJson(path.join(dir, 'sources.json'), index);
    return index;
  }

  async loadSources(name) {
    const dir = this.dir(name);
    const index = await readJson(path.join(dir, 'sources.json'), []);
    const loaded = [];
    for (const s of index) {
      const sdir = path.join(dir, 'sources', s.id);
      const data = await readJson(path.join(sdir, s.type === 'web' ? 'raw.json' : 'analysis.json'), null);
      if (data && (s.weight ?? 1) > 0) loaded.push({ ...s, dir: sdir, data });
    }
    return loaded;
  }

  async synth(name) {
    const dir = this.dir(name);
    const sources = await this.loadSources(name);
    if (!sources.length) throw new Error(`No extracted sources for "${name}". Run: dna learn ${name} <url|image|pinterest>...`);
    const auto = synthesize(slugify(name), sources);
    await writeJson(path.join(dir, 'dna.auto.json'), auto);
    return auto;
  }

  async resolve(name) {
    const dir = this.dir(name);
    const auto = await readJson(path.join(dir, 'dna.auto.json'), null) || await this.synth(name);
    const overrides = await readJson(path.join(dir, 'overrides.json'), {});
    return applyOverrides(auto, overrides);
  }

  /** Generate tokens, pages, docs, and install the Skill + Agent. */
  async build(name, { claudeDir = path.join(TOOLKIT, '.claude'), screenshot = true } = {}) {
    const dir = this.dir(name);
    const dna = await this.resolve(name);
    const slug = slugify(name);
    await writeJson(path.join(dir, 'dna.json'), dna);
    const files = {
      'tokens.css': toCss(dna), 'components.css': toComponentsCss(dna), 'tailwind-v4.css': toTailwindV4(dna),
      'tailwind.preset.js': toTailwindPreset(dna), 'tokens.json': toDtcg(dna), 'specimen.html': specimenHtml(dna),
      'DNA.md': `# Design DNA — ${dna.name}\n\n**Personality:** ${dna.personality.keywords.join(' · ')}\n\n${summaryMd(dna)}`,
    };
    for (const [f, content] of Object.entries(files)) await fs.writeFile(path.join(dir, f), content);
    const principlesFile = path.join(dir, 'principles.md');
    if (!existsSync(principlesFile)) await fs.writeFile(principlesFile, principlesTemplate(dna));
    const principles = await fs.readFile(principlesFile, 'utf8');

    // moodboard + specimen screenshots
    const sources = await this.loadSources(name);
    const refs = [];
    for (const s of sources) {
      if (s.type === 'web') refs.push({ abs: path.join(s.dir, 'desktop.png'), label: s.data.title || s.input, palette: s.data.screenshot?.palette, id: s.id });
      else if (s.type === 'image') refs.push({ abs: path.join(s.dir, s.data.file), label: path.basename(s.input), palette: s.data.palette, id: s.id });
      else s.data.images.forEach((im, i) => refs.push({ abs: path.join(s.dir, im.file), label: `${s.data.title || s.input} #${i + 1}`, palette: im.palette, id: `${s.id}-${i + 1}` }));
    }
    const shown = refs.filter((r) => existsSync(r.abs)).slice(0, 18);
    await fs.writeFile(path.join(dir, 'moodboard.html'), moodboardHtml(dna, shown.map((r) => ({ ...r, src: path.relative(dir, r.abs) }))));
    if (screenshot) {
      const browser = await launchBrowser();
      try {
        const ctx = await newContext(browser, { width: 1600, height: 1000 });
        const page = await ctx.newPage();
        await page.goto(pathToFileURL(path.join(dir, 'moodboard.html')).href, { waitUntil: 'load' });
        await page.screenshot({ path: path.join(dir, 'moodboard.png'), fullPage: true, clip: { x: 0, y: 0, width: 1600, height: 4000 } }).catch(() => page.screenshot({ path: path.join(dir, 'moodboard.png'), fullPage: true }));
        await page.setViewportSize({ width: 1440, height: 900 });
        await page.goto(pathToFileURL(path.join(dir, 'specimen.html')).href, { waitUntil: 'load' });
        await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
        await page.screenshot({ path: path.join(dir, 'specimen.png'), fullPage: true });
        await ctx.close();
      } finally {
        await browser.close();
      }
    }

    // install skill + agent
    const skillName = `dna-${slug}`;
    const skillDir = path.join(claudeDir, 'skills', skillName);
    await fs.rm(path.join(skillDir, 'references'), { recursive: true, force: true });
    await fs.mkdir(path.join(skillDir, 'references'), { recursive: true });
    for (const f of ['dna.json', 'tokens.css', 'components.css', 'tailwind-v4.css', 'tailwind.preset.js', 'tokens.json', 'specimen.html']) await fs.copyFile(path.join(dir, f), path.join(skillDir, f));
    const references = [];
    for (const f of ['moodboard.png', 'specimen.png']) if (existsSync(path.join(dir, f))) { await fs.copyFile(path.join(dir, f), path.join(skillDir, 'references', f)); references.push(`references/${f}`); }
    for (const r of shown.slice(0, 8)) {
      const dest = `ref-${r.id}${path.extname(r.abs)}`;
      await fs.copyFile(r.abs, path.join(skillDir, 'references', dest));
      references.push(`references/${dest}`);
    }
    for (const s of sources.filter((x) => x.type === 'web')) {
      for (const v of ['full', 'mobile']) {
        const f = path.join(s.dir, `${v}.png`);
        if (existsSync(f)) { await fs.copyFile(f, path.join(skillDir, 'references', `ref-${s.id}-${v}.png`)); references.push(`references/ref-${s.id}-${v}.png`); }
      }
    }
    await fs.writeFile(path.join(skillDir, 'SKILL.md'), skillMd(dna, { skillName, principles, toolkit: TOOLKIT, skillDir, references }));
    const agentName = `${slug}-designer`;
    await fs.mkdir(path.join(claudeDir, 'agents'), { recursive: true });
    await fs.writeFile(path.join(claudeDir, 'agents', `${agentName}.md`), agentMd(dna, { agentName, skillName, skillDir, toolkit: TOOLKIT }));
    return { dna, dir, skillDir, agentFile: path.join(claudeDir, 'agents', `${agentName}.md`), principlesTodo: principles.includes('TODO: principles') };
  }
}

// ---------------------------------------------------------------- overrides
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
export function deepMerge(a, b) {
  if (!isObj(a) || !isObj(b)) return b === undefined ? a : b;
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = isObj(v) && isObj(a[k]) ? deepMerge(a[k], v) : v;
  return out;
}

/** Merge overrides and recompute values that depend on what was overridden. */
export function applyOverrides(auto, o) {
  if (!o || !Object.keys(o).length) return auto;
  const dna = deepMerge(auto, o);
  const roles = o.color?.roles || {};
  const R = dna.color.roles;
  if (roles.primary) {
    if (!o.color?.ramps?.primary) dna.color.ramps.primary = ramp(R.primary).ramp;
    if (!roles['primary-foreground']) R['primary-foreground'] = readableOn(R.primary);
    if (!roles.ring) R.ring = R.primary;
  }
  if (roles.accent) {
    if (!o.color?.ramps?.accent) dna.color.ramps.accent = ramp(R.accent).ramp;
    if (!roles['accent-foreground']) R['accent-foreground'] = readableOn(R.accent);
  }
  if (roles.background && !o.color?.ramps?.neutral) dna.color.ramps.neutral = neutralRamp(R.background);
  for (const [k, f] of Object.entries(o.typography?.families || {})) {
    if (f && f.name) dna.typography.families[k] = { ...fontInfo(f.name), weights: auto.typography.families[k]?.weights || [400, 500, 600, 700], ...f };
  }
  if (o.personality?.keywords) dna.personality.keywords = o.personality.keywords;
  return dna;
}
