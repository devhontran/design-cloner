// Synthesis: turn raw extractions from N sources into one weighted Design DNA.
import {
  hexToOklch, contrast, mix, isChromatic, hueDistance, readableOn, ramp, neutralRamp, oklchToHex, describeHue, deltaE, lightness,
} from './lib/color.js';
import { mergeColors, normalize, weightedMode, weightedMedian, clusterNumbers } from './lib/cluster.js';
import { fontInfo } from './lib/fonts.js';

const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const entries = (map) => Object.entries(map || {});
const wOf = (map) => Object.fromEntries(entries(map).map(([k, v]) => [k, typeof v === 'number' ? v : v.w]));

/** Palette-ish view of a visual (image/gallery) source. */
function visualStats(s) {
  return s.type === 'gallery' ? s.data.combined : s.data;
}

// ---------------------------------------------------------------- color
function buildColor(sources) {
  const bg = [], text = [], border = [], accent = [], heading = [], onPrimary = [];
  const add = (list, map, sw) => entries(normalize(map)).forEach(([hex, w]) => list.push({ hex, weight: w * sw }));
  const gradients = {};
  const cssVars = {};

  for (const s of sources) {
    const sw = s.weight ?? 1;
    if (s.type === 'web') {
      const { agg, colorVars, screenshot } = s.data;
      add(bg, wOf(agg.bg), sw);
      add(text, wOf(agg.text), sw);
      add(border, wOf(agg.border), sw);
      const acc = {};
      const bump = (hex, w) => { if (hex && isChromatic(hex, 0.05)) acc[hex] = (acc[hex] || 0) + w; };
      agg.buttons.forEach((b) => { bump(b.bg, 3); if (!b.bg) bump(b.color, 1); });
      agg.links.filter((l) => !l.inNav).slice(0, 30).forEach((l) => bump(l.color, 1));
      entries(colorVars).forEach(([k, v]) => {
        if (/primary|brand|accent|cta|highlight|link/i.test(k) && !/foreground|text-on|contrast/i.test(k)) bump(v, /primary|brand/i.test(k) ? 4 : 2);
        cssVars[k] = v;
      });
      entries(normalize(wOf(agg.text))).forEach(([h, w]) => bump(h, w * 5));
      entries(normalize(wOf(agg.bg))).forEach(([h, w]) => bump(h, w * 5));
      (screenshot?.palette || []).forEach((p) => bump(p.hex, p.share * 3));
      entries(agg.gradients).forEach(([g, v]) => {
        gradients[g] = (gradients[g] || 0) + v.w * sw;
        (g.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/gi) || []).forEach((c) => {
          const m = c.match(/\d+(\.\d+)?/g);
          if (c.startsWith('#')) bump(c.slice(0, 7), 0.5);
          else if (m && m.length >= 3) bump('#' + m.slice(0, 3).map((x) => Math.round(+x).toString(16).padStart(2, '0')).join(''), 0.5);
        });
      });
      add(accent, acc, sw);
      agg.headings.forEach((h) => heading.push({ hex: h.color, weight: sw * (h.tag === 'h1' ? 3 : h.tag === 'h2' ? 2 : 1) }));
      agg.buttons.forEach((b) => { if (b.bg && b.color && isChromatic(b.bg, 0.05)) onPrimary.push({ hex: b.color, bg: b.bg, weight: sw }); });
    } else {
      const st = visualStats(s);
      st.palette.forEach((p) => bg.push({ hex: p.hex, weight: p.share * sw * 0.8 }));
      const chrom = st.palette.filter((p) => isChromatic(p.hex, 0.05));
      const tot = chrom.reduce((a, p) => a + p.share, 0) || 1;
      chrom.forEach((p) => accent.push({ hex: p.hex, weight: (p.share / tot) * sw }));
    }
  }

  const BG = mergeColors(bg, 0.03), TX = mergeColors(text, 0.03), BD = mergeColors(border, 0.03), AC = mergeColors(accent, 0.05);
  const derived = [];

  const background = BG[0]?.hex || '#ffffff';
  const dark = lightness(background) < 0.5;
  const bgL = hexToOklch(background);

  // Headings carry the "true" foreground; paragraphs are often a softer secondary tone.
  const HD = mergeColors(heading, 0.03);
  const topTx = TX[0]?.weight || 0;
  let foreground = HD.find((c) => contrast(c.hex, background) >= 4.5 && !isChromatic(c.hex, 0.06))?.hex
    || TX.filter((c) => c.weight >= topTx * 0.2 && contrast(c.hex, background) >= 4.5).sort((a, b) => contrast(b.hex, background) - contrast(a.hex, background))[0]?.hex;
  if (!foreground) { foreground = oklchToHex({ l: dark ? 0.96 : 0.2, c: Math.min(0.02, bgL.c), h: bgL.h }); derived.push('foreground'); }

  let surface = BG.slice(1).find((c) => { const d = deltaE(c.hex, background); return d > 0.008 && d < 0.14 && Math.abs(lightness(c.hex) - bgL.l) < 0.12; })?.hex;
  if (!surface) {
    surface = dark ? oklchToHex({ ...bgL, l: Math.min(1, bgL.l + 0.05) }) : (bgL.l < 0.985 ? '#ffffff' : oklchToHex({ ...bgL, l: bgL.l - 0.025 }));
    derived.push('surface');
  }
  const muted = oklchToHex({ ...bgL, l: dark ? Math.min(1, bgL.l + 0.09) : Math.max(0, bgL.l - 0.045) });

  const fgC = contrast(foreground, background);
  let mutedFg = TX.find((c) => c.hex !== foreground && !isChromatic(c.hex, 0.06) && contrast(c.hex, background) >= 3 && contrast(c.hex, background) < fgC - 0.5)?.hex;
  if (!mutedFg) { mutedFg = mix(foreground, background, 0.4); derived.push('muted-foreground'); }

  // hairline borders may be strong (e.g. black rules on editorial layouts): keep whatever neutral dominates
  let borderC = BD.find((c) => !isChromatic(c.hex, 0.08))?.hex;
  if (!borderC) { borderC = mix(foreground, background, dark ? 0.82 : 0.88); derived.push('border'); }

  const chromatic = AC.filter((c) => isChromatic(c.hex, 0.05) && deltaE(c.hex, background) > 0.05);
  let primary = chromatic[0]?.hex;
  const monochrome = !primary;
  if (monochrome) { primary = foreground; derived.push('primary (monochrome: using foreground)'); }
  const pL = hexToOklch(primary);
  let accentC = chromatic.slice(1).find((c) => hueDistance(hexToOklch(c.hex).h, pL.h) >= 25)?.hex;
  if (!accentC) { accentC = primary; derived.push('accent (= primary)'); }

  // Semantic colors harmonized with the primary's lightness/chroma
  const sem = (h) => oklchToHex({ l: Math.min(0.72, Math.max(0.52, pL.l)), c: Math.max(0.12, Math.min(0.2, pL.c || 0.15)), h });

  const observedOn = mergeColors(onPrimary.filter((o) => deltaE(o.bg, primary) < 0.05), 0.03)[0]?.hex;
  if (!observedOn) derived.push('primary-foreground');
  derived.push('muted', 'accent-foreground', 'surface-foreground', 'ring', 'success', 'warning', 'danger');
  const roles = {
    background, foreground, surface, 'surface-foreground': foreground, muted, 'muted-foreground': mutedFg, border: borderC,
    primary, 'primary-foreground': observedOn || readableOn(primary), accent: accentC, 'accent-foreground': readableOn(accentC),
    ring: primary, success: sem(150), warning: sem(75), danger: sem(27),
  };

  const palette = mergeColors([
    ...BG.slice(0, 6).map((c) => ({ hex: c.hex, weight: c.weight })),
    ...TX.slice(0, 4).map((c) => ({ hex: c.hex, weight: c.weight * 0.5 })),
    ...AC.slice(0, 6).map((c) => ({ hex: c.hex, weight: c.weight * 0.4 })),
  ], 0.03).slice(0, 12);
  const pTotal = palette.reduce((a, c) => a + c.weight, 0) || 1;

  const chromaVals = chromatic.slice(0, 5).map((c) => [hexToOklch(c.hex).c, c.weight]);
  const meanChroma = chromaVals.length ? chromaVals.reduce((a, [c, w]) => a + c * w, 0) / chromaVals.reduce((a, [, w]) => a + w, 0) : 0;
  const hues = chromatic.slice(0, 4).map((c) => hexToOklch(c.hex).h);
  const hueGroups = [];
  hues.forEach((h) => { if (!hueGroups.some((g) => hueDistance(g, h) < 30)) hueGroups.push(h); });
  let harmony = 'monochrome';
  if (hueGroups.length === 1) harmony = 'single-hue';
  else if (hueGroups.length === 2) { const d = hueDistance(hueGroups[0], hueGroups[1]); harmony = d < 75 ? 'analogous' : d > 140 ? 'complementary' : 'split'; }
  else if (hueGroups.length >= 3) harmony = 'multi-hue';

  const warmHue = (h) => h < 100 || h > 330;
  return {
    mode: dark ? 'dark' : 'light',
    roles,
    derived,
    palette: palette.map((c) => ({ hex: c.hex, share: r3(c.weight / pTotal), oklch: fmtOklch(c.hex), role: roleOf(c.hex, roles) })),
    ramps: { primary: ramp(primary).ramp, ...(accentC !== primary ? { accent: ramp(accentC).ramp } : {}), neutral: neutralRamp(background) },
    // brand gradient first: prefer linear gradients made of opaque colors (usable for text/buttons)
    gradients: entries(gradients).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([g]) => g)
      .sort((a, b) => gradientRank(a) - gradientRank(b)),
    cssVars: Object.fromEntries(entries(cssVars).slice(0, 40)),
    traits: {
      saturation: monochrome ? 'monochrome' : meanChroma < 0.09 ? 'muted' : meanChroma < 0.16 ? 'balanced' : 'vivid',
      contrast: fgC >= 15 ? 'high' : fgC >= 8 ? 'medium' : 'soft',
      contrastRatio: r2(fgC),
      temperature: monochrome ? (bgL.c > 0.01 ? (warmHue(bgL.h) ? 'warm-neutral' : 'cool-neutral') : 'neutral') : warmHue(pL.h) ? 'warm' : 'cool',
      harmony,
      primaryHue: describeHue(pL.h, pL.c),
      accentHue: describeHue(hexToOklch(accentC).h, hexToOklch(accentC).c),
    },
  };
}

function gradientRank(g) {
  return (g.startsWith('linear') ? 0 : 1) + (/rgba\([^)]*,\s*0(\.\d+)?\)|transparent/.test(g) ? 2 : 0);
}

function fmtOklch(hex) {
  const { l, c, h } = hexToOklch(hex);
  return `oklch(${r3(l)} ${r3(c)} ${Math.round(h)})`;
}
function roleOf(hex, roles) {
  const hit = entries(roles).find(([, v]) => deltaE(v, hex) < 0.02);
  return hit ? hit[0] : null;
}

// ---------------------------------------------------------------- typography
const SIZE_NAMES_UP = ['lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'];
const SIZE_NAMES_DOWN = ['sm', 'xs', '2xs'];

function buildTypography(web) {
  if (!web.length) return defaultTypography();
  const famW = {}, famMeta = {}, headFam = {}, bodyFam = {}, sizeW = [], weightsByFam = {};
  const styles = [];
  const googleLinks = web.flatMap((s) => s.data.fontLinks || []);
  for (const s of web) {
    const sw = s.weight ?? 1;
    const ts = Object.values(s.data.agg.typeStyles);
    const totalChars = ts.reduce((a, t) => a + t.chars, 0) || 1;
    const totalCount = ts.reduce((a, t) => a + t.count, 0) || 1;
    for (const t of ts) {
      const w = (t.chars / totalChars) * sw;
      famW[t.family] = (famW[t.family] || 0) + w;
      famMeta[t.family] ||= { generic: t.generic, stack: t.stack };
      (weightsByFam[t.family] ||= new Set()).add(t.weight);
      if (t.size >= 13 && t.size <= 20) bodyFam[t.family] = (bodyFam[t.family] || 0) + w;
      if (t.size >= 26) headFam[t.family] = (headFam[t.family] || 0) + (t.count / totalCount) * sw * t.size;
      sizeW.push([t.size, (t.count / totalCount) * sw + w * 0.5]);
      styles.push({ ...t, w });
    }
    for (const h of s.data.agg.headings) {
      if (['h1', 'h2', 'h3'].includes(h.tag)) headFam[h.family] = (headFam[h.family] || 0) + sw * h.size * 0.2;
      sizeW.push([Math.round(h.size * 2) / 2, 0.02 * sw]);
      famMeta[h.family] ||= { generic: '', stack: h.stack };
      (weightsByFam[h.family] ||= new Set()).add(h.weight);
    }
  }
  const pick = (map) => entries(map).sort((a, b) => b[1] - a[1])[0]?.[0];
  const bodyName = pick(bodyFam) || pick(famW);
  const displayName = pick(headFam) || bodyName;
  const monoName = entries(famW).filter(([f]) => /mono|code|courier|consolas|menlo/i.test(f) || famMeta[f]?.generic?.includes('monospace')).sort((a, b) => b[1] - a[1])[0]?.[0];
  // a third "ui" family used for labels/buttons/nav (e.g. sans labels on a serif editorial site)
  const uiW = {};
  web.forEach((s) => {
    s.data.agg.buttons.forEach((b) => { uiW[b.family] = (uiW[b.family] || 0) + 1; });
    Object.values(s.data.agg.typeStyles).filter((t) => t.transform === 'uppercase' || t.size <= 14).forEach((t) => { uiW[t.family] = (uiW[t.family] || 0) + t.count; });
  });
  const uiName = pick(Object.fromEntries(entries(uiW).filter(([f]) => f && f !== bodyName && f !== displayName && f !== monoName)));
  const mk = (name) => name && { ...fontInfo(name, { ...famMeta[name], googleLinks }), weights: [...(weightsByFam[name] || [])].sort((a, b) => a - b) };

  const bodyStyles = styles.filter((t) => t.family === bodyName && t.size >= 13 && t.size <= 20);
  const base = weightedMode(bodyStyles.map((t) => [t.size, t.w])) || 16;

  // type scale: merge near-identical sizes, keep the meaningful ones
  const clustered = clusterNumbers(sizeW.filter(([v]) => v >= 10), 0.045);
  const tot = clustered.reduce((a, c) => a + c.weight, 0) || 1;
  const sizes = clustered.filter((c) => c.weight / tot >= 0.008 || c.value >= 28).map((c) => c.value).sort((a, b) => a - b);
  if (!sizes.some((v) => Math.abs(v - base) < 0.6)) sizes.push(base);
  const uniq = [...new Set(sizes.map((v) => Math.round(v)))].sort((a, b) => a - b);
  const below = uniq.filter((v) => v < base).slice(-3).reverse();
  const above = uniq.filter((v) => v > base).slice(0, SIZE_NAMES_UP.length);
  const scale = { base: Math.round(base) };
  below.forEach((v, i) => { scale[SIZE_NAMES_DOWN[i]] = v; });
  above.forEach((v, i) => { scale[SIZE_NAMES_UP[i]] = v; });
  const ordered = Object.fromEntries(entries(scale).sort((a, b) => a[1] - b[1]));
  const maxSize = above.length ? above[above.length - 1] : base * 2;
  const ratio = above.length ? (maxSize / base) ** (1 / above.length) : 1.25;
  const named = [[1.067, 'minor second'], [1.125, 'major second'], [1.2, 'minor third'], [1.25, 'major third'], [1.333, 'perfect fourth'], [1.414, 'augmented fourth'], [1.5, 'perfect fifth'], [1.618, 'golden ratio']];
  const ratioName = named.reduce((best, n) => (Math.abs(n[0] - ratio) < Math.abs(best[0] - ratio) ? n : best))[1];

  const heads = web.flatMap((s) => s.data.agg.headings.map((h) => ({ ...h, sw: s.weight ?? 1 })));
  const hStat = (list, fallbackSize) => list.length ? {
    size: Math.round(weightedMedian(list.map((h) => [h.size, h.sw]))),
    weight: weightedMode(list.map((h) => [h.weight, h.sw])),
    lineHeight: weightedMedian(list.map((h) => [h.lineHeight, h.sw])),
    letterSpacing: weightedMedian(list.map((h) => [h.letterSpacing, h.sw])),
    transform: weightedMode(list.map((h) => [h.transform, h.sw])),
    style: weightedMode(list.map((h) => [h.style, h.sw])),
    align: ({ start: 'left', end: 'right', '-webkit-center': 'center' })[weightedMode(list.map((h) => [h.align, h.sw]))] || weightedMode(list.map((h) => [h.align, h.sw])),
  } : { size: fallbackSize, weight: 700, lineHeight: 1.15, letterSpacing: -0.01, transform: 'none', style: 'normal', align: 'left' };
  const h1 = hStat(heads.filter((h) => h.tag === 'h1'), Math.round(maxSize));
  const h2 = hStat(heads.filter((h) => h.tag === 'h2'), Math.round(maxSize * 0.7));
  const h3 = hStat(heads.filter((h) => h.tag === 'h3'), Math.round(base * 1.25));

  const bodyLH = weightedMedian(bodyStyles.filter((t) => t.lineHeight !== 'normal').map((t) => [t.lineHeight, t.w])) || 1.5;
  const bodyWeight = weightedMode(bodyStyles.map((t) => [t.weight, t.w])) || 400;
  const eyebrow = styles.filter((t) => t.transform === 'uppercase' && t.size <= 15 && t.letterSpacing >= 0.02).sort((a, b) => b.count - a.count)[0];
  const mobile = web.map((s) => s.data.mobile).filter(Boolean)[0];

  return {
    confidence: 'high',
    families: { display: mk(displayName), body: mk(bodyName), ...(uiName ? { ui: mk(uiName) } : {}), ...(monoName ? { mono: mk(monoName) } : {}) },
    scale: ordered,
    ratio: r3(ratio),
    ratioName,
    base: Math.round(base),
    headings: { h1, h2, h3 },
    body: { size: Math.round(base), weight: bodyWeight, lineHeight: r2(bodyLH) },
    eyebrow: eyebrow ? { size: eyebrow.size, weight: eyebrow.weight, letterSpacing: eyebrow.letterSpacing, transform: 'uppercase', family: eyebrow.family } : null,
    mobile: mobile ? { h1: mobile.h1Size, body: mobile.bodySize } : null,
  };
}

function defaultTypography() {
  const inter = { ...fontInfo('Inter'), weights: [400, 500, 600, 700] };
  return {
    confidence: 'low',
    note: 'No website source: fonts and scale are placeholders. Identify typefaces visually from the reference images and set them in overrides.json.',
    families: { display: inter, body: inter },
    scale: { xs: 12, sm: 14, base: 16, lg: 20, xl: 25, '2xl': 31, '3xl': 39, '4xl': 49, '5xl': 61 },
    ratio: 1.25, ratioName: 'major third', base: 16,
    headings: {
      h1: { size: 61, weight: 700, lineHeight: 1.05, letterSpacing: -0.025, transform: 'none', style: 'normal', align: 'left' },
      h2: { size: 39, weight: 700, lineHeight: 1.1, letterSpacing: -0.02, transform: 'none', style: 'normal', align: 'left' },
      h3: { size: 25, weight: 600, lineHeight: 1.25, letterSpacing: -0.01, transform: 'none', style: 'normal', align: 'left' },
    },
    body: { size: 16, weight: 400, lineHeight: 1.6 },
    eyebrow: null,
    mobile: null,
  };
}

// ---------------------------------------------------------------- spacing & layout
function buildSpacing(web, visual) {
  const hist = {};
  let sectionPads = [], containers = [], gutters = [];
  for (const s of web) {
    const sw = s.weight ?? 1;
    const { spacing, sections, containers: cs } = s.data.agg;
    const add = (map, k) => entries(normalize(wOf(map))).forEach(([v, w]) => { hist[v] = (hist[v] || 0) + w * sw * k; });
    add(spacing.padding, 1); add(spacing.margin, 0.7); add(spacing.gap, 1.5);
    sections.forEach((x) => { const p = Math.max(x.padTop, x.padBottom); if (p >= 24) sectionPads.push([p, sw]); });
    cs.forEach((c) => containers.push([Math.round(c.w / 10) * 10, sw]));
    if (s.data.mobile?.gutter) gutters.push([s.data.mobile.gutter, sw]);
  }
  const pairs = entries(hist).map(([v, w]) => [Number(v), w]).filter(([v]) => v >= 2 && v <= 256);
  const total = pairs.reduce((a, [, w]) => a + w, 0) || 1;
  const share = (fn) => pairs.filter(([v]) => v >= 8 && fn(v)).reduce((a, [, w]) => a + w, 0) / (pairs.filter(([v]) => v >= 8).reduce((a, [, w]) => a + w, 0) || 1);
  const div8 = share((v) => v % 8 === 0), div4 = share((v) => v % 4 === 0);
  const unit = !web.length ? 8 : div8 >= 0.55 ? 8 : div4 >= 0.55 ? 4 : 4;
  let scale = clusterNumbers(pairs, 0, 1).filter((c) => c.weight / total >= 0.012).map((c) => c.value)
    .map((v) => (v > 3 && Math.abs(v - Math.round(v / (unit / 2)) * (unit / 2)) <= 1 ? Math.round(v / (unit / 2)) * (unit / 2) : v));
  scale = [...new Set(scale)].sort((a, b) => a - b).slice(0, 14);
  if (scale.length < 6) scale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

  const sectionY = sectionPads.length ? Math.round(weightedMedian(sectionPads)) : (visual.length ? 96 : 80);
  const bigContainers = containers.filter(([w]) => w >= 880 && w <= 1600);
  const container = bigContainers.length ? clusterNumbers(bigContainers, 0.02).sort((a, b) => b.weight - a.weight)[0].value : 1200;
  const negSpace = visual.length ? visual.reduce((a, s) => a + visualStats(s).negativeSpace, 0) / visual.length : null;
  const densityScore = (sectionY >= 110 ? 2 : sectionY >= 80 ? 1 : sectionY <= 48 ? -1 : 0) + (negSpace != null ? (negSpace > 0.55 ? 1 : negSpace < 0.3 ? -1 : 0) : 0);
  return {
    unit,
    gridConformance: r2(unit === 8 ? div8 : div4),
    scale,
    sectionY,
    container,
    gutter: gutters.length ? Math.round(weightedMedian(gutters)) : 24,
    density: densityScore >= 2 ? 'airy' : densityScore <= -1 ? 'dense' : 'balanced',
  };
}

function buildLayout(web) {
  if (!web.length) return { confidence: 'low' };
  const cols = {}, navs = [];
  let flex = 0, grid = 0, pages = 0, sections = 0, heroAlign = [];
  for (const s of web) {
    const { agg } = s.data;
    entries(agg.gridCols).forEach(([k, v]) => { cols[k] = (cols[k] || 0) + v.w; });
    flex += agg.counts.flex; grid += agg.counts.grid;
    pages += s.data.scrollHeight / s.data.viewport.h;
    sections += agg.sections.length;
    const h1 = agg.headings.find((h) => h.tag === 'h1');
    if (h1) heroAlign.push([h1.align === 'center' ? 'centered' : 'left', s.weight ?? 1]);
    if (agg.nav) navs.push(agg.nav);
  }
  const nav = navs[0];
  return {
    confidence: 'high',
    heroAlignment: weightedMode(heroAlign) || 'left',
    preferredGridColumns: Number(weightedMode(entries(cols).filter(([k]) => Number(k) > 1).map(([k, v]) => [k, v]))) || 3,
    layoutEngine: grid > flex / 4 ? 'grid-heavy' : 'flex-heavy',
    pageLengthViewports: r2(pages / web.length),
    sectionsPerPage: Math.round(sections / web.length),
    nav: nav ? {
      height: nav.h, position: nav.position, background: nav.bg, backgroundAlpha: nav.bgAlpha, blur: nav.backdrop,
      border: nav.border, hasCta: nav.hasCta, links: nav.linkCount,
      style: nav.backdrop ? 'glass' : nav.bgAlpha < 0.1 ? 'transparent' : 'solid',
    } : null,
    mobile: web.map((s) => s.data.mobile).filter(Boolean)[0] || null,
  };
}

// ---------------------------------------------------------------- shape, elevation, motion, effects
function buildShape(web) {
  if (!web.length) return { confidence: 'low', radius: { sm: 6, md: 10, lg: 16, xl: 24, full: 9999 }, style: 'rounded', buttonShape: 'rounded' };
  const samples = [], btn = [], card = [], input = [], media = [];
  for (const s of web) {
    const sw = s.weight ?? 1;
    s.data.agg.radius.forEach((x) => { if (x.r < x.h / 2 - 1 && x.r < 200) samples.push([x.r, sw]); if (x.kind === 'media') media.push([x.r, sw]); });
    s.data.agg.buttons.forEach((b) => btn.push([b.radius >= b.h / 2 - 1 ? 'pill' : b.radius, sw]));
    s.data.agg.cards.forEach((c) => card.push([c.radius, sw]));
    s.data.agg.inputs.forEach((i) => input.push([i.radius, sw]));
  }
  const nonZero = samples.filter(([r]) => r >= 1);
  const tiers = clusterNumbers(nonZero, 0.15, 1.5).sort((a, b) => b.weight - a.weight).slice(0, 5).map((c) => Math.round(c.value)).sort((a, b) => a - b);
  const names = ['sm', 'md', 'lg', 'xl', '2xl'];
  const radius = {};
  tiers.forEach((v, i) => { radius[names[i]] = v; });
  if (!tiers.length) Object.assign(radius, { sm: 0, md: 0, lg: 0 });
  radius.full = 9999;
  const zeroShare = samples.length ? samples.filter(([r]) => r < 1).reduce((a, [, w]) => a + w, 0) / samples.reduce((a, [, w]) => a + w, 0) : 0;
  const btnShape = weightedMode(btn);
  const cardR = weightedMedian(card.filter(([r]) => typeof r === 'number')) ?? weightedMedian(nonZero) ?? 0;
  const style = btnShape === 'pill' && cardR >= 16 ? 'pill-soft' : cardR <= 2 && zeroShare > 0.6 ? 'sharp' : cardR <= 8 ? 'soft' : cardR <= 18 ? 'rounded' : 'very-rounded';
  return {
    confidence: 'high',
    radius,
    zeroRadiusShare: r2(zeroShare),
    style,
    buttonShape: btnShape === 'pill' ? 'pill' : btnShape == null ? 'unknown' : `${btnShape}px`,
    card: card.length ? Math.round(cardR) : null,
    input: input.length ? Math.round(weightedMedian(input)) : null,
    media: media.length ? Math.round(weightedMedian(media)) : null,
  };
}

function shadowBlur(sh) {
  const lens = (sh.replace(/rgba?\([^)]+\)/g, '').match(/-?[\d.]+px/g) || []).map(parseFloat);
  return { y: lens[1] || 0, blur: lens[2] || 0 };
}

function buildElevation(web) {
  if (!web.length) return { confidence: 'low', style: 'subtle', shadows: { sm: '0 1px 2px rgba(0,0,0,.06)', md: '0 4px 16px rgba(0,0,0,.08)', lg: '0 16px 48px rgba(0,0,0,.12)' } };
  const all = {};
  let cardsBorder = 0, cardsShadow = 0;
  for (const s of web) {
    entries(s.data.agg.shadows).forEach(([k, v]) => { all[k] = (all[k] || 0) + v.w * (s.weight ?? 1); });
    s.data.agg.cards.forEach((c) => { if (c.border) cardsBorder++; if (c.shadow) cardsShadow++; });
  }
  const top = entries(all).filter(([k]) => !/inset/.test(k) || entries(all).length < 3).sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([k]) => ({ value: k, ...shadowBlur(k) })).sort((a, b) => a.blur - b.blur);
  const shadows = {};
  const names = top.length === 1 ? ['md'] : top.length === 2 ? ['sm', 'lg'] : ['sm', 'md', 'lg'];
  top.forEach((t, i) => { shadows[names[i]] = t.value; });
  const maxBlur = Math.max(0, ...top.map((t) => t.blur));
  return {
    confidence: 'high',
    style: !top.length ? 'flat' : maxBlur <= 6 ? 'subtle' : maxBlur <= 30 ? 'soft' : 'dramatic',
    shadows,
    separation: cardsBorder > cardsShadow ? 'borders' : cardsShadow > 0 ? 'shadows' : 'color-blocks',
  };
}

function buildMotion(web) {
  if (!web.length) return { confidence: 'low', style: 'subtle', duration: 200, easing: 'cubic-bezier(0.2, 0, 0, 1)' };
  const d = [], e = [];
  let transitions = 0, animations = 0, elements = 0;
  for (const s of web) {
    entries(s.data.agg.durations).forEach(([k, v]) => d.push([Number(k), v.w]));
    entries(s.data.agg.easings).forEach(([k, v]) => e.push([k, v.w]));
    transitions += s.data.agg.counts.transitions; animations += s.data.agg.counts.animations; elements += s.data.agg.counts.elements;
  }
  const duration = weightedMode(d) || 200;
  let easing = weightedMode(e) || 'ease';
  if (easing === 'ease') easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
  return {
    confidence: 'high',
    style: animations > 12 || duration >= 450 ? 'expressive' : transitions / Math.max(1, elements) > 0.02 ? 'subtle' : 'minimal',
    duration, durations: [...new Set(d.sort((a, b) => b[1] - a[1]).slice(0, 4).map(([v]) => v))].sort((a, b) => a - b),
    easing, animatedElements: animations,
  };
}

function buildEffects(web, visual) {
  let glass = 0, textGradient = 0, gradients = 0, images = 0, videos = 0, svgs = 0;
  const imgs = [];
  for (const s of web) {
    const c = s.data.agg.counts;
    glass += c.glass; textGradient += c.textGradient; images += c.images; videos += c.videos; svgs += c.svgs;
    gradients += Object.keys(s.data.agg.gradients).length;
    imgs.push(...s.data.agg.images);
  }
  const vis = visual.map(visualStats);
  const avg = (k) => (vis.length ? r3(vis.reduce((a, v) => a + v[k], 0) / vis.length) : null);
  return {
    glassmorphism: glass > 0,
    gradients: gradients > 2,
    textGradient: textGradient > 0,
    imagery: {
      imagesPerPage: web.length ? Math.round(images / web.length) : null,
      videos: videos > 0,
      iconsSvg: web.length ? Math.round(svgs / web.length) : null,
      roundedImages: imgs.length ? r2(imgs.filter((i) => i.radius > 2).length / imgs.length) : null,
      commonAspect: imgs.length ? weightedMode(imgs.map((i) => [i.aspect > 1.6 ? 'wide' : i.aspect > 1.1 ? 'landscape' : i.aspect > 0.9 ? 'square' : 'portrait', i.w * i.h])) : null,
    },
    visual: vis.length ? {
      busyness: avg('busyness'), negativeSpace: avg('negativeSpace'), chromaticShare: avg('chromaticShare'), lightnessStd: avg('lightnessStd'),
    } : null,
  };
}

// ---------------------------------------------------------------- components
function nearestRole(hex, roles) {
  if (!hex) return null;
  let best = null, bd = Infinity;
  for (const [k, v] of entries(roles)) { const d = deltaE(v, hex); if (d < bd) { bd = d; best = k; } }
  return bd < 0.06 ? best : hex;
}

function modal(list, keyFn) {
  const groups = {};
  list.forEach((x) => { const k = keyFn(x); (groups[k] ||= []).push(x); });
  const best = entries(groups).sort((a, b) => b[1].length - a[1].length)[0];
  return best ? best[1][0] : null;
}

function buildComponents(web, color) {
  if (!web.length) return { confidence: 'low' };
  const R = color.roles;
  const bgPage = R.background;
  const buttons = web.flatMap((s) => s.data.agg.buttons);
  const filled = buttons.filter((b) => b.bg && deltaE(b.bg, bgPage) > 0.05);
  const ghost = buttons.filter((b) => !b.bg || deltaE(b.bg, bgPage) <= 0.05);
  const btn = (b) => b && ({
    background: nearestRole(b.bg, R), color: nearestRole(b.color, R), radius: b.radius >= b.h / 2 - 1 ? 9999 : b.radius, height: b.h,
    paddingX: b.padX, paddingY: b.padY, fontSize: b.fontSize, fontWeight: b.fontWeight, transform: b.transform, letterSpacing: b.letterSpacing,
    border: b.border, shadow: b.shadow, transition: b.transition, example: b.text,
  });
  const card = modal(web.flatMap((s) => s.data.agg.cards), (c) => [c.bg, c.radius, !!c.border, !!c.shadow].join('|'));
  const input = modal(web.flatMap((s) => s.data.agg.inputs), (c) => [c.bg, c.radius, c.border].join('|'));
  const linkList = web.flatMap((s) => s.data.agg.links.filter((l) => !l.inNav));
  return {
    confidence: 'high',
    buttonPrimary: btn(modal(filled, (b) => [b.bg, b.radius, b.padX, b.fontWeight].join('|'))),
    buttonSecondary: btn(modal(ghost, (b) => [b.border, b.radius, b.padX].join('|'))),
    card: card && { background: nearestRole(card.bg, R), radius: card.radius, border: card.border, shadow: card.shadow, paddingX: card.padX, paddingY: card.padY },
    input: input && { background: nearestRole(input.bg, R), radius: input.radius, border: input.border, height: input.h, paddingX: input.padX, fontSize: input.fontSize },
    link: linkList.length ? {
      color: nearestRole(weightedMode(linkList.map((l) => [l.color, 1])), R),
      underline: linkList.filter((l) => /underline/.test(l.decoration)).length > linkList.length / 2,
    } : null,
  };
}

// ---------------------------------------------------------------- personality
function buildPersonality(d) {
  const k = [];
  const { color, typography: t, spacing, shape, elevation, effects, motion } = d;
  k.push(color.mode === 'dark' ? 'dark-mode' : 'light');
  ({ vivid: ['vibrant', 'energetic'], muted: ['muted', 'calm'], monochrome: ['monochrome', 'restrained'], balanced: ['balanced color'] })[color.traits.saturation].forEach((x) => k.push(x));
  if (color.traits.contrast === 'high') k.push('high-contrast');
  if (color.traits.temperature.startsWith('warm')) k.push('warm');
  const typeKnown = t.confidence !== 'low';
  const disp = typeKnown ? t.families.display?.category : null;
  if (disp === 'serif') k.push('editorial', 'elegant');
  if (disp === 'display') k.push('expressive display type');
  if (t.families.mono && t.families.mono.name === t.families.body?.name) k.push('technical', 'code-inspired');
  if (typeKnown) {
    if ((t.headings.h1.weight || 0) >= 700) k.push('bold headlines');
    if ((t.headings.h1.weight || 0) <= 400 && t.headings.h1.size >= 40) k.push('light, refined headlines');
    if ((t.headings.h1.letterSpacing || 0) <= -0.02) k.push('tight display tracking');
    if (t.eyebrow) k.push('uppercase eyebrow labels');
    if (t.ratio >= 1.4) k.push('dramatic type scale');
  }
  ({ airy: ['spacious', 'premium'], dense: ['information-dense', 'utilitarian'], balanced: [] })[spacing.density].forEach((x) => k.push(x));
  if (shape.confidence !== 'low') ({ sharp: ['sharp corners', 'architectural'], soft: ['softly rounded'], rounded: ['rounded', 'friendly'], 'very-rounded': ['very rounded', 'playful'], 'pill-soft': ['pill buttons', 'friendly'] })[shape.style]?.forEach((x) => k.push(x));
  if (elevation.confidence !== 'low' && elevation.style === 'flat') k.push('flat');
  if (elevation.separation === 'borders') k.push('outlined surfaces');
  if (effects.glassmorphism) k.push('glassmorphism');
  if (effects.gradients) k.push('gradient accents');
  if (effects.textGradient) k.push('gradient text');
  if (motion.style === 'expressive') k.push('animated');
  return { keywords: [...new Set(k)] };
}

// ---------------------------------------------------------------- main
export function synthesize(name, sources) {
  const web = sources.filter((s) => s.type === 'web');
  const visual = sources.filter((s) => s.type !== 'web');
  const color = buildColor(sources);
  const typography = buildTypography(web);
  const spacing = buildSpacing(web, visual);
  const shape = buildShape(web);
  const elevation = buildElevation(web);
  const layout = buildLayout(web);
  const motion = buildMotion(web);
  const effects = buildEffects(web, visual);
  const components = buildComponents(web, color);
  const personality = buildPersonality({ color, typography, spacing, shape, elevation, effects, motion });
  return {
    $schema: 'design-dna/v1',
    name,
    generatedAt: new Date().toISOString(),
    sources: sources.map((s) => ({ id: s.id, type: s.type, input: s.input, weight: s.weight ?? 1, title: s.data.title || null })),
    personality,
    color, typography, spacing, shape, elevation, layout, motion, effects, components,
  };
}
