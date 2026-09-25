// Website extractor: screenshots + computed-style DNA of a live page (or local .html file).
import fs from 'node:fs/promises';
import path from 'node:path';
import { newContext, gotoSettled, dismissOverlays, autoScroll, decodePixels } from '../lib/browser.js';
import { collectStyles, collectMobile } from './collect-styles.js';
import { analyzePixels } from './image.js';

export async function extractWeb(browser, url, outDir, { mobile = true, full = true, maxFullHeight = 9000 } = {}) {
  await fs.mkdir(outDir, { recursive: true });
  const ctx = await newContext(browser);
  const page = await ctx.newPage();
  try {
    const resp = await gotoSettled(page, url);
    if (resp && resp.status() >= 400) console.warn(`  ! HTTP ${resp.status()} for ${url}`);
    await dismissOverlays(page);
    await autoScroll(page);
    await page.waitForTimeout(500);

    const desktop = await page.screenshot({ path: path.join(outDir, 'desktop.png') });
    if (full) {
      const h = await page.evaluate(() => document.documentElement.scrollHeight);
      await page.screenshot({ path: path.join(outDir, 'full.png'), fullPage: true, clip: { x: 0, y: 0, width: 1440, height: Math.min(h, maxFullHeight) } });
    }
    const data = await page.evaluate(collectStyles, { maxElements: 5000 });

    // Pixel palette of the first viewport captures what computed styles miss (photos, gradients, canvas).
    const probe = await ctx.newPage();
    const px = await decodePixels(probe, desktop, 'image/png');
    data.screenshot = analyzePixels(px);
    await probe.close();

    if (mobile) {
      const mctx = await newContext(browser, { mobile: true });
      const mpage = await mctx.newPage();
      try {
        await gotoSettled(mpage, url);
        await dismissOverlays(mpage);
        await autoScroll(mpage, { maxHeight: 6000 });
        await mpage.screenshot({ path: path.join(outDir, 'mobile.png') });
        data.mobile = await mpage.evaluate(collectMobile);
      } catch (e) {
        console.warn(`  ! mobile pass failed: ${e.message.split('\n')[0]}`);
      } finally {
        await mctx.close();
      }
    }
    await fs.writeFile(path.join(outDir, 'raw.json'), JSON.stringify(data, null, 1));
    return data;
  } finally {
    await ctx.close();
  }
}
