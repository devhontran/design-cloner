// Gallery extractor: Pinterest pins/boards, Dribbble/Behance shots and other showcase pages.
// We don't want the host site's own UI - we want the design images it showcases.
import fs from 'node:fs/promises';
import path from 'node:path';
import { newContext, gotoSettled, dismissOverlays, autoScroll, decodePixels, mimeFromName } from '../lib/browser.js';
import { analyzePixels, downloadImage } from './image.js';
import { mergeColors } from '../lib/cluster.js';

export const GALLERY_HOSTS = /(^|\.)(pinterest\.[a-z.]+|pin\.it|dribbble\.com|behance\.net|mobbin\.com|land-book\.com|lapa\.ninja|onepagelove\.com|siteinspire\.com|httpster\.net|minimal\.gallery|saaslandingpage\.com|landingfolio\.com|uplabs\.com|muz\.li|cosmos\.so|are\.na|savee\.it)$/i;

function upgradeUrl(u) {
  // Pinterest serves thumbnails like /236x/ /474x/; /736x/ is the largest reliably public size.
  if (/i\.pinimg\.com/.test(u)) return u.replace(/\/(\d+x|\d+x\d+(_RS)?)\//, '/736x/');
  // Dribbble CDN: strip resize params
  if (/cdn\.dribbble\.com/.test(u)) return u.split('?')[0];
  return u;
}

export async function extractGallery(browser, url, outDir, { limit = 12 } = {}) {
  await fs.mkdir(path.join(outDir, 'images'), { recursive: true });
  const ctx = await newContext(browser, { height: 1200 });
  const page = await ctx.newPage();
  try {
    await gotoSettled(page, url);
    await dismissOverlays(page);
    await autoScroll(page, { maxHeight: 6000, step: 900 });
    await page.screenshot({ path: path.join(outDir, 'page.png') });

    const candidates = await page.evaluate(() => {
      const pick = (img) => {
        if (img.srcset) {
          const best = img.srcset.split(',').map((s) => s.trim().split(/\s+/)).map(([u, d]) => [u, parseFloat(d) || 1]).sort((a, b) => b[1] - a[1])[0];
          if (best) return new URL(best[0], location.href).href;
        }
        return img.currentSrc || img.src;
      };
      const out = [];
      const og = document.querySelector('meta[property="og:image"],meta[name="og:image"]');
      if (og?.content) out.push({ url: og.content, score: 1e9 });
      for (const img of document.images) {
        const r = img.getBoundingClientRect();
        const w = Math.max(r.width, img.naturalWidth / 2), h = Math.max(r.height, img.naturalHeight / 2);
        if (w < 180 || h < 140) continue; // skip avatars/icons/logos
        const src = pick(img);
        if (!src || src.startsWith('data:') || /avatar|profile|logo|icon|sprite/i.test(src)) continue;
        const cs = getComputedStyle(img);
        if (cs.borderRadius === '50%') continue;
        out.push({ url: src, score: r.width * r.height + img.naturalWidth * img.naturalHeight / 4 });
      }
      return out;
    });

    const seen = new Set();
    const urls = candidates.sort((a, b) => b.score - a.score).map((c) => upgradeUrl(c.url))
      .filter((u) => { const k = u.split('?')[0]; if (seen.has(k)) return false; seen.add(k); return true; })
      .slice(0, limit);

    const images = [];
    for (const [i, u] of urls.entries()) {
      try {
        const file = await downloadImage(ctx, u, path.join(outDir, 'images', String(i + 1).padStart(2, '0')));
        const px = await decodePixels(page, await fs.readFile(file), mimeFromName(file));
        if (px.width < 200 || px.height < 150) { await fs.rm(file); continue; }
        images.push({ file: path.relative(outDir, file), url: u, ...analyzePixels(px) });
      } catch (e) {
        console.warn(`  ! skip ${u}: ${e.message.split('\n')[0]}`);
      }
    }
    if (!images.length) throw new Error(`No usable images found on ${url} (login wall or blocked?). Save the images locally and pass the files instead.`);

    const n = images.length;
    const avg = (k) => Math.round((images.reduce((s, im) => s + im[k], 0) / n) * 1000) / 1000;
    const combined = {
      palette: mergeColors(images.flatMap((im) => im.palette.map((p) => ({ hex: p.hex, weight: p.share / n }))), 0.035)
        .slice(0, 12).map((c) => ({ hex: c.hex, share: Math.round(c.weight * 1000) / 1000 })),
      meanLightness: avg('meanLightness'), lightnessStd: avg('lightnessStd'), meanChroma: avg('meanChroma'),
      chromaticShare: avg('chromaticShare'), negativeSpace: avg('negativeSpace'), busyness: avg('busyness'),
      dark: images.filter((im) => im.dark).length > n / 2,
    };
    const result = { url, title: await page.title(), images, combined };
    await fs.writeFile(path.join(outDir, 'analysis.json'), JSON.stringify(result, null, 1));
    return result;
  } finally {
    await ctx.close();
  }
}
