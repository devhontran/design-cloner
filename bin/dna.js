#!/usr/bin/env node
// design-cloner CLI — distill websites, screenshots, showcases and Pinterest into a reusable Design DNA.
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { Library, TOOLKIT, slugify } from '../src/library.js';
import { launchBrowser } from '../src/lib/browser.js';
import { extractWeb } from '../src/extract/web.js';
import { checkConformance, reportMd } from '../src/check.js';

const HELP = `design-cloner — learn a Design DNA from references and turn it into a Claude skill + agent

Usage:
  dna learn <name> <source...>     extract sources, synthesize DNA, build skill + agent
  dna add <name> <source...>       same as learn (adds more sources to an existing DNA)
  dna synth <name>                 re-synthesize dna.auto.json from extracted sources
  dna build <name>                 regenerate tokens/specimen/skill/agent (after editing principles.md / overrides.json)
  dna show <name>                  print the DNA summary (DNA.md)
  dna list                         list learned DNAs
  dna shot <url|file> [outDir]     screenshot + raw style extraction of any page
  dna check <name|dna.json> <url|file> [--out dir]   score how well a page follows a DNA

Sources:
  https://site.com                 website (computed styles + desktop/full/mobile screenshots)
  https://pinterest.com/pin/...    Pinterest pin or board (downloads the pinned images)
  https://dribbble.com/shots/...   Dribbble / Behance / showcase galleries (downloads shot images)
  ./shot.png  ./folder/            local images or a folder of images
  ./page.html ./site/              local HTML (e.g. an exported template)
  web:<url> | img:<url> | gallery:<url>   force a source type

Options:
  --weight <n>        weight of the sources being added (default 1). Edit sources.json to re-weight later.
  --limit <n>         max images per gallery/Pinterest source (default 12)
  --no-mobile         skip the mobile pass for websites
  --claude-dir <dir>  where to install skills/agents (default: ${path.join(TOOLKIT, '.claude')}; use ~/.claude for all projects)
  --home <dir>        DNA library folder (default: ${path.join(TOOLKIT, 'dna')}, or $DNA_HOME)
  --no-screens        skip moodboard/specimen screenshots during build
`;

function parseArgs(argv) {
  const pos = [], opt = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--no-')) opt[a.slice(5)] = false;
    else if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=');
      if (v !== undefined) opt[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith('--')) opt[k] = argv[++i];
      else opt[k] = true;
    } else pos.push(a);
  }
  return { pos, opt };
}

const expandHome = (p) => (p && p.startsWith('~') ? path.join(process.env.HOME || '', p.slice(1)) : p);
const toUrl = (t) => {
  if (/^https?:|^file:/i.test(t)) return t;
  const abs = path.resolve(t);
  if (!existsSync(abs)) throw new Error(`Not found: ${t}`);
  return pathToFileURL(existsSync(path.join(abs, 'index.html')) ? path.join(abs, 'index.html') : abs).href;
};

async function doBuild(lib, name, opt) {
  const res = await lib.build(name, { claudeDir: expandHome(opt['claude-dir']) || undefined, screenshot: opt.screens !== false });
  const rel = (p) => path.relative(process.cwd(), p) || '.';
  console.log(`\n✓ DNA "${res.dna.name}" — ${res.dna.personality.keywords.join(', ')}`);
  console.log(`  library : ${rel(res.dir)}  (dna.json, DNA.md, tokens.css, specimen.png, moodboard.png)`);
  console.log(`  skill   : ${rel(res.skillDir)}/SKILL.md`);
  console.log(`  agent   : ${rel(res.agentFile)}`);
  if (res.principlesTodo) console.log(`\n  next    : write ${rel(path.join(res.dir, 'principles.md'))} by looking at moodboard.png, then run: dna build ${name}`);
}

async function main() {
  const { pos, opt } = parseArgs(process.argv.slice(2));
  const [cmd, ...args] = pos;
  const lib = new Library(expandHome(opt.home) || undefined);

  switch (cmd) {
    case 'learn':
    case 'add': {
      const [name, ...sources] = args;
      if (!name || !sources.length) throw new Error('Usage: dna learn <name> <source...>');
      await lib.add(name, sources, { weight: Number(opt.weight ?? 1), limit: Number(opt.limit ?? 12), mobile: opt.mobile !== false });
      await lib.synth(name);
      await doBuild(lib, name, opt);
      break;
    }
    case 'synth': {
      const dna = await lib.synth(args[0]);
      console.log(`✓ synthesized ${dna.sources.length} source(s) → ${path.join(lib.dir(args[0]), 'dna.auto.json')}`);
      break;
    }
    case 'build':
      if (!args[0]) throw new Error('Usage: dna build <name>');
      await doBuild(lib, args[0], opt);
      break;
    case 'show': {
      const f = path.join(lib.dir(args[0] || ''), 'DNA.md');
      console.log(existsSync(f) ? await fs.readFile(f, 'utf8') : `No DNA.md for "${args[0]}". Run dna build ${args[0]}.`);
      break;
    }
    case 'list': {
      const all = await lib.list();
      if (!all.length) console.log('No DNA learned yet. Try: dna learn my-style https://example.com ./inspo.png');
      all.forEach((d) => console.log(`${d.name.padEnd(24)} ${d.mode.padEnd(6)} ${String(d.sources).padStart(2)} src  ${d.keywords.slice(0, 6).join(', ')}`));
      break;
    }
    case 'shot': {
      const [target, outDir = path.join(process.cwd(), 'dna-shots', slugify(target || ''))] = args;
      if (!target) throw new Error('Usage: dna shot <url|file> [outDir]');
      const browser = await launchBrowser();
      try { await extractWeb(browser, toUrl(target), outDir, { mobile: opt.mobile !== false }); } finally { await browser.close(); }
      console.log(`✓ ${outDir}/desktop.png, full.png, mobile.png, raw.json`);
      break;
    }
    case 'check': {
      const [ref, target] = args;
      if (!ref || !target) throw new Error('Usage: dna check <name|path/to/dna.json> <url|file>');
      const dnaFile = ref.endsWith('.json') ? path.resolve(ref) : path.join(lib.dir(ref), 'dna.json');
      const dna = JSON.parse(await fs.readFile(dnaFile, 'utf8'));
      const outDir = opt.out || path.join(process.cwd(), 'dna-check', slugify(target));
      const browser = await launchBrowser();
      let raw;
      try { raw = await extractWeb(browser, toUrl(target), outDir, { mobile: opt.mobile !== false }); } finally { await browser.close(); }
      const res = checkConformance(dna, raw);
      const md = reportMd(target, dna.name, res);
      await fs.writeFile(path.join(outDir, 'report.md'), md);
      console.log(md);
      console.log(`\nscreenshots + report: ${outDir}`);
      process.exitCode = res.score >= Number(opt.min ?? 0) ? 0 : 1;
      break;
    }
    default:
      console.log(HELP);
  }
}

main().catch((e) => {
  console.error(`✗ ${e.message}`);
  process.exit(1);
});
