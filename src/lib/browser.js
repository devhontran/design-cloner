// Playwright/Chromium helpers shared by all extractors.
import { chromium } from 'playwright';

export async function launchBrowser() {
  const opts = { headless: true, args: [] };
  // Honor HTTPS_PROXY/NO_PROXY via Chromium's own flags (Playwright's proxy option forces loopback through the proxy).
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  if (proxy) {
    opts.args.push(`--proxy-server=${proxy}`);
    const bypass = process.env.NO_PROXY || process.env.no_proxy;
    opts.args.push(`--proxy-bypass-list=${['<local>', '127.0.0.1', 'localhost', ...(bypass ? bypass.split(',') : [])].join(';')}`);
  }
  try {
    return await chromium.launch(opts);
  } catch (err) {
    if (/Executable doesn't exist|browserType.launch/.test(String(err.message))) {
      throw new Error(`Chromium is not installed for Playwright. Run:\n  npx playwright install chromium\n\n${err.message}`);
    }
    throw err;
  }
}

export async function newContext(browser, { width = 1440, height = 900, mobile = false } = {}) {
  return browser.newContext({
    viewport: mobile ? { width: 390, height: 844 } : { width, height },
    deviceScaleFactor: 1,
    isMobile: mobile,
    hasTouch: mobile,
    userAgent: mobile
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36',
    locale: 'en-US',
    colorScheme: 'light',
  });
}

/** Navigate and wait until the page is reasonably settled. */
export async function gotoSettled(page, url, { timeout = 45000 } = {}) {
  const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout });
  await page.waitForLoadState('load', { timeout: 20000 }).catch(() => {});
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  return resp;
}

/** Try to close cookie banners / newsletter modals that would pollute screenshots. */
export async function dismissOverlays(page) {
  const labels = ['Accept all', 'Accept All', 'Accept', 'I agree', 'Agree', 'Got it', 'OK', 'Allow all', 'Chấp nhận', 'Đồng ý', 'Close', 'No thanks'];
  for (const label of labels) {
    const btn = page.getByRole('button', { name: label, exact: true }).first();
    if (await btn.isVisible({ timeout: 200 }).catch(() => false)) {
      await btn.click({ timeout: 1000 }).catch(() => {});
      await page.waitForTimeout(300);
    }
  }
  await page.keyboard.press('Escape').catch(() => {});
}

/** Scroll the page in steps to trigger lazy-loading and reveal-on-scroll animations. */
export async function autoScroll(page, { maxHeight = 20000, step = 700, delay = 120 } = {}) {
  await page.evaluate(async ({ maxHeight, step, delay }) => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let y = 0;
    while (y < Math.min(document.documentElement.scrollHeight, maxHeight)) {
      y += step;
      window.scrollTo(0, y);
      await sleep(delay);
    }
    window.scrollTo(0, 0);
    await sleep(400);
  }, { maxHeight, step, delay }).catch(() => {});
}

/**
 * Decode an image buffer inside Chromium and return downsampled RGBA pixels.
 * Uses the browser's decoders, so png/jpg/webp/avif/gif all work without native deps.
 */
export async function decodePixels(page, buffer, mime = 'image/png', budget = 40000) {
  const dataUrl = `data:${mime};base64,${buffer.toString('base64')}`;
  return page.evaluate(async ({ dataUrl, budget }) => {
    const img = new Image();
    img.src = dataUrl;
    await img.decode();
    const W = img.naturalWidth, H = img.naturalHeight;
    const s = Math.min(1, Math.sqrt(budget / (W * H)));
    const w = Math.max(1, Math.round(W * s)), h = Math.max(1, Math.round(H * s));
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);
    return { width: W, height: H, w, h, data: Array.from(ctx.getImageData(0, 0, w, h).data) };
  }, { dataUrl, budget });
}

export function mimeFromName(name) {
  const ext = String(name).toLowerCase().split('?')[0].split('.').pop();
  return { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif', svg: 'image/svg+xml' }[ext] || 'image/png';
}
