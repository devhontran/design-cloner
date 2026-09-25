// Color math: sRGB <-> OKLab/OKLCH, WCAG contrast, perceptual distance, ramps.
// All public functions accept/return {r,g,b} with 0..255 channels unless noted.

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export function hexToRgb(hex) {
  let h = String(hex).trim().replace(/^#/, '');
  if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex({ r, g, b }) {
  const to = (v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

const toLinear = (c) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const fromLinear = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055) * 255;

export function rgbToOklab({ r, g, b }) {
  const lr = toLinear(r), lg = toLinear(g), lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  };
}

function oklabToLinear({ L, a, b }) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return {
    r: 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    g: -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    b: -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  };
}

export function oklabToRgb(lab) {
  const { r, g, b } = oklabToLinear(lab);
  return { r: fromLinear(clamp(r, 0, 1)), g: fromLinear(clamp(g, 0, 1)), b: fromLinear(clamp(b, 0, 1)) };
}

export function rgbToOklch(rgb) {
  const { L, a, b } = rgbToOklab(rgb);
  const c = Math.hypot(a, b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return { l: L, c, h: c < 1e-4 ? 0 : h };
}

const inGamut = ({ r, g, b }) => [r, g, b].every((v) => v >= -1e-4 && v <= 1 + 1e-4);

/** OKLCH -> sRGB, reducing chroma until the color fits the sRGB gamut. */
export function oklchToRgb({ l, c, h }) {
  const rad = (h * Math.PI) / 180;
  let lo = 0, hi = c;
  const lab = (cc) => ({ L: clamp(l, 0, 1), a: cc * Math.cos(rad), b: cc * Math.sin(rad) });
  if (inGamut(oklabToLinear(lab(c)))) return oklabToRgb(lab(c));
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklabToLinear(lab(mid)))) lo = mid; else hi = mid;
  }
  return oklabToRgb(lab(lo));
}

export const hexToOklch = (hex) => rgbToOklch(hexToRgb(hex));
export const oklchToHex = (lch) => rgbToHex(oklchToRgb(lch));

/** Perceptual distance (Euclidean in OKLab). ~0.02 = barely distinguishable, ~0.1 = clearly different. */
export function deltaE(a, b) {
  const x = typeof a === 'string' ? rgbToOklab(hexToRgb(a)) : rgbToOklab(a);
  const y = typeof b === 'string' ? rgbToOklab(hexToRgb(b)) : rgbToOklab(b);
  return Math.hypot(x.L - y.L, x.a - y.a, x.b - y.b);
}

export function luminance(c) {
  const { r, g, b } = typeof c === 'string' ? hexToRgb(c) : c;
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

export function contrast(a, b) {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export function mix(a, b, t) {
  const x = typeof a === 'string' ? hexToRgb(a) : a;
  const y = typeof b === 'string' ? hexToRgb(b) : b;
  return rgbToHex({ r: x.r + (y.r - x.r) * t, g: x.g + (y.g - x.g) * t, b: x.b + (y.b - x.b) * t });
}

export const chroma = (hex) => hexToOklch(hex).c;
export const lightness = (hex) => hexToOklch(hex).l;
export const isChromatic = (hex, min = 0.045) => chroma(hex) >= min;

export function hueDistance(h1, h2) {
  const d = Math.abs(h1 - h2) % 360;
  return d > 180 ? 360 - d : d;
}

/** Pick whichever of black/white-ish reads best on top of `bg`. */
export function readableOn(bg, light = '#ffffff', dark = '#0a0a0a') {
  return contrast(bg, light) >= contrast(bg, dark) ? light : dark;
}

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const STEP_L = [0.975, 0.945, 0.89, 0.815, 0.715, 0.625, 0.545, 0.465, 0.39, 0.32, 0.25];
const STEP_C = [0.12, 0.25, 0.5, 0.75, 0.92, 1, 1, 0.92, 0.8, 0.68, 0.55];

/**
 * Tailwind-style 50..950 ramp in OKLCH that keeps the hue and places the exact
 * source color on the step whose lightness is closest to it.
 */
export function ramp(hex, { maxChroma } = {}) {
  const base = hexToOklch(hex);
  let anchor = 0;
  STEP_L.forEach((l, i) => { if (Math.abs(l - base.l) < Math.abs(STEP_L[anchor] - base.l)) anchor = i; });
  const shift = base.l - STEP_L[anchor];
  const c = maxChroma ?? base.c;
  const out = {};
  STEPS.forEach((step, i) => {
    if (i === anchor) { out[step] = hex.toLowerCase(); return; }
    // fade the lightness offset toward the extremes so 50/950 stay usable
    const fade = 1 - Math.min(1, Math.abs(i - anchor) / 5);
    const l = clamp(STEP_L[i] + shift * fade, 0.12, 0.99);
    out[step] = oklchToHex({ l, c: c * STEP_C[i] / STEP_C[anchor], h: base.h });
  });
  return { ramp: out, anchor: STEPS[anchor] };
}

/** Neutral ramp lightly tinted with a hue (chroma ~0.01) so greys harmonize with the brand. */
export function neutralRamp(tintHex, tint = 0.012) {
  const h = tintHex ? hexToOklch(tintHex).h : 0;
  const c = tintHex && hexToOklch(tintHex).c > 0.005 ? tint : 0;
  const out = {};
  const L = [0.985, 0.965, 0.92, 0.87, 0.71, 0.555, 0.445, 0.37, 0.27, 0.205, 0.145];
  STEPS.forEach((s, i) => { out[s] = oklchToHex({ l: L[i], c, h }); });
  return out;
}

/** Parse "rgb(1, 2, 3)" / "rgba(1,2,3,.5)" / "#abc" into {r,g,b,a}. */
export function parseCssColor(str) {
  if (!str) return null;
  const s = str.trim().toLowerCase();
  if (s.startsWith('#')) return { ...hexToRgb(s), a: 1 };
  const m = s.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
}

export function describeHue(h, c) {
  if (c < 0.03) return 'neutral';
  // OKLCH hue angles (red ~29, yellow ~110, green ~142, cyan ~195, blue ~264, magenta ~328)
  const names = [[10, 'pink'], [40, 'red'], [75, 'orange'], [115, 'yellow'], [135, 'lime'], [170, 'green'],
    [210, 'teal-cyan'], [245, 'sky-blue'], [275, 'blue'], [305, 'violet'], [345, 'purple-magenta'], [360, 'pink']];
  return names.find(([max]) => h <= max)[1];
}
