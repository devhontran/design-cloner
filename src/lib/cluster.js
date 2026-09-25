// Color clustering helpers (k-means in OKLab + greedy perceptual merging).
import { rgbToOklab, oklabToRgb, rgbToHex, deltaE } from './color.js';

function prng(seed = 42) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/**
 * Weighted k-means over OKLab points. `points` = [{L,a,b,w}].
 * Deterministic (seeded k-means++ init). Returns [{hex, share}] sorted by share.
 */
export function kmeans(points, k = 8, iters = 14) {
  if (!points.length) return [];
  const rand = prng(7);
  const total = points.reduce((s, p) => s + p.w, 0);
  const d2 = (p, c) => (p.L - c.L) ** 2 + (p.a - c.a) ** 2 + (p.b - c.b) ** 2;
  const centers = [points[Math.floor(rand() * points.length)]].map((p) => ({ ...p }));
  while (centers.length < k) {
    const dist = points.map((p) => p.w * Math.min(...centers.map((c) => d2(p, c))));
    const sum = dist.reduce((a, b) => a + b, 0);
    if (sum === 0) break;
    let r = rand() * sum, i = 0;
    while (r > dist[i] && i < dist.length - 1) r -= dist[i++];
    centers.push({ ...points[i] });
  }
  const assign = new Array(points.length).fill(0);
  for (let it = 0; it < iters; it++) {
    points.forEach((p, i) => {
      let best = 0, bd = Infinity;
      centers.forEach((c, j) => { const d = d2(p, c); if (d < bd) { bd = d; best = j; } });
      assign[i] = best;
    });
    const acc = centers.map(() => ({ L: 0, a: 0, b: 0, w: 0 }));
    points.forEach((p, i) => { const a = acc[assign[i]]; a.L += p.L * p.w; a.a += p.a * p.w; a.b += p.b * p.w; a.w += p.w; });
    acc.forEach((a, j) => { if (a.w) centers[j] = { L: a.L / a.w, a: a.a / a.w, b: a.b / a.w, w: a.w }; else centers[j].w = 0; });
  }
  return centers
    .filter((c) => c.w > 0)
    .map((c) => ({ hex: rgbToHex(oklabToRgb(c)), share: c.w / total }))
    .sort((a, b) => b.share - a.share);
}

/** Convert raw RGBA pixel data into weighted OKLab points (quantized to cut work). */
export function pixelsToPoints(data, { alphaMin = 128 } = {}) {
  const buckets = new Map();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < alphaMin) continue;
    // 5 bits per channel quantization
    const key = ((data[i] >> 3) << 10) | ((data[i + 1] >> 3) << 5) | (data[i + 2] >> 3);
    const b = buckets.get(key);
    if (b) { b.w++; b.r += data[i]; b.g += data[i + 1]; b.bl += data[i + 2]; } else buckets.set(key, { w: 1, r: data[i], g: data[i + 1], bl: data[i + 2] });
  }
  return [...buckets.values()].map((b) => ({ ...rgbToOklab({ r: b.r / b.w, g: b.g / b.w, b: b.bl / b.w }), w: b.w }));
}

/**
 * Greedy perceptual merge: heaviest colors become cluster representatives,
 * lighter colors within `threshold` (OKLab distance) fold into them.
 * entries = [{hex, weight, ...}] -> [{hex, weight, members}]
 */
export function mergeColors(entries, threshold = 0.035) {
  const sorted = [...entries].filter((e) => e && e.hex && e.weight > 0).sort((a, b) => b.weight - a.weight);
  const out = [];
  for (const e of sorted) {
    const hit = out.find((c) => deltaE(c.hex, e.hex) < threshold);
    if (hit) { hit.weight += e.weight; hit.members++; } else out.push({ ...e, members: 1 });
  }
  return out.sort((a, b) => b.weight - a.weight);
}

/** Normalize a {key: weight} map so weights sum to `scale`. */
export function normalize(map, scale = 1) {
  const total = Object.values(map).reduce((a, b) => a + b, 0) || 1;
  return Object.fromEntries(Object.entries(map).map(([k, v]) => [k, (v / total) * scale]));
}

/** Weighted histogram helpers */
export function weightedMode(pairs) {
  let best = null, bw = -Infinity;
  for (const [v, w] of pairs) if (w > bw) { bw = w; best = v; }
  return best;
}

export function weightedMedian(pairs) {
  const s = [...pairs].filter(([, w]) => w > 0).sort((a, b) => a[0] - b[0]);
  const total = s.reduce((a, [, w]) => a + w, 0);
  let acc = 0;
  for (const [v, w] of s) { acc += w; if (acc >= total / 2) return v; }
  return s.length ? s[s.length - 1][0] : null;
}

/** Merge numeric values that are within `tol` (relative) of each other, keeping the heaviest as representative. */
export function clusterNumbers(pairs, tol = 0.06, abs = 0) {
  const sorted = [...pairs].filter(([, w]) => w > 0).sort((a, b) => b[1] - a[1]);
  const out = [];
  for (const [v, w] of sorted) {
    const hit = out.find((c) => Math.abs(c.value - v) <= Math.max(abs, c.value * tol));
    if (hit) hit.weight += w; else out.push({ value: v, weight: w });
  }
  return out;
}
