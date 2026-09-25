// Image extractor: palette + visual statistics of screenshots, shots, pins and photos.
import fs from 'node:fs/promises';
import path from 'node:path';
import { kmeans, pixelsToPoints, mergeColors } from '../lib/cluster.js';
import { rgbToOklab, hexToOklch } from '../lib/color.js';
import { decodePixels, mimeFromName } from '../lib/browser.js';

/** Analyze downsampled RGBA pixels -> palette & mood statistics. */
export function analyzePixels({ data, w, h, width, height }) {
  const points = pixelsToPoints(data);
  const clusters = mergeColors(kmeans(points, 10).map((c) => ({ hex: c.hex, weight: c.share })), 0.03)
    .map(({ hex, weight }) => ({ hex, share: Math.round(weight * 1000) / 1000 }));

  let sumL = 0, sumL2 = 0, sumC = 0, chromaticPx = 0, edge = 0, count = 0;
  const L = new Float32Array(w * h);
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const lab = rgbToOklab({ r: data[i], g: data[i + 1], b: data[i + 2] });
    const c = Math.hypot(lab.a, lab.b);
    L[p] = lab.L;
    sumL += lab.L; sumL2 += lab.L * lab.L; sumC += c; count++;
    if (c > 0.06) chromaticPx++;
  }
  for (let y = 0; y < h; y++) for (let x = 1; x < w; x++) edge += Math.abs(L[y * w + x] - L[y * w + x - 1]);
  const meanL = sumL / count;
  const dominant = clusters[0];
  return {
    size: { width, height },
    palette: clusters.slice(0, 10),
    meanLightness: round(meanL),
    lightnessStd: round(Math.sqrt(Math.max(0, sumL2 / count - meanL * meanL))),
    meanChroma: round(sumC / count),
    chromaticShare: round(chromaticPx / count),
    // share of the canvas covered by the dominant flat color ~ "whitespace / negative space"
    negativeSpace: dominant ? round(dominant.share) : 0,
    // average neighbouring-pixel lightness change ~ visual busyness/texture
    busyness: round(edge / Math.max(1, (w - 1) * h)),
    dark: dominant ? hexToOklch(dominant.hex).l < 0.45 : meanL < 0.45,
  };
}

const round = (v) => Math.round(v * 1000) / 1000;

/** Analyze an image file on disk. `page` is any open Playwright page (used for decoding). */
export async function extractImageFile(page, file, outDir) {
  await fs.mkdir(outDir, { recursive: true });
  const buf = await fs.readFile(file);
  const ext = path.extname(file).toLowerCase() || '.png';
  const dest = path.join(outDir, 'image' + ext);
  if (path.resolve(file) !== path.resolve(dest)) await fs.writeFile(dest, buf);
  const px = await decodePixels(page, buf, mimeFromName(file));
  const analysis = { file: path.basename(dest), ...analyzePixels(px) };
  await fs.writeFile(path.join(outDir, 'analysis.json'), JSON.stringify(analysis, null, 1));
  return analysis;
}

/**
 * Download a remote image by navigating a browser tab to it: goes through Chromium's network stack,
 * so proxy settings, bypass lists, cookies and referer-less CDN rules behave like a real visit.
 */
export async function downloadImage(context, url, outFileBase) {
  const page = await context.newPage();
  try {
    const res = await page.goto(url, { timeout: 30000 });
    if (!res || !res.ok()) throw new Error(`HTTP ${res ? res.status() : 'no response'} for ${url}`);
    const type = (res.headers()['content-type'] || '').split(';')[0];
    if (type && !type.startsWith('image/')) throw new Error(`not an image (${type}): ${url}`);
    const ext = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp', 'image/gif': '.gif', 'image/avif': '.avif' }[type]
      || path.extname(new URL(url).pathname) || '.jpg';
    const file = outFileBase + ext;
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, await res.body());
    return file;
  } finally {
    await page.close();
  }
}
