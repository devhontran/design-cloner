// Runs INSIDE the page (passed to page.evaluate). Must be fully self-contained:
// no imports, no references to outer scope.
// Walks visible elements and aggregates computed styles into compact histograms.

export function collectStyles({ maxElements = 5000 } = {}) {
  const vw = window.innerWidth;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const cache = new Map();

  // Normalize ANY css color (oklch, lab, color-mix, named...) to rgba via canvas.
  function toRgba(str) {
    if (!str || str === 'transparent' || str === 'none') return null;
    if (cache.has(str)) return cache.get(str);
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillStyle = str;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    const v = d[3] === 0 ? null : { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
    cache.set(str, v);
    return v;
  }
  const hex = ({ r, g, b }) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const blend = (top, under) => ({
    r: top.r * top.a + under.r * (1 - top.a),
    g: top.g * top.a + under.g * (1 - top.a),
    b: top.b * top.a + under.b * (1 - top.a),
    a: 1,
  });
  const lum = ({ r, g, b }) => {
    const f = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

  const rootBg = toRgba(getComputedStyle(document.documentElement).backgroundColor)
    || toRgba(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 };
  const canvasBg = rootBg.a < 1 ? blend(rootBg, { r: 255, g: 255, b: 255, a: 1 }) : rootBg;
  const bgCache = new WeakMap();
  function effectiveBg(el) {
    if (!el || el.nodeType !== 1 || el === document.documentElement) return canvasBg;
    if (bgCache.has(el)) return bgCache.get(el);
    const own = toRgba(getComputedStyle(el).backgroundColor);
    const parent = effectiveBg(el.parentElement);
    const res = own ? (own.a >= 0.999 ? own : blend(own, parent)) : parent;
    bgCache.set(el, res);
    return res;
  }

  // true when a background image/gradient sits behind the element (contrast can't be computed from colors)
  function imageBehind(el) {
    for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
      const c = getComputedStyle(e);
      if (c.backgroundImage && c.backgroundImage !== 'none') return true;
      const b = toRgba(c.backgroundColor);
      if (b && b.a >= 0.999) return false;
    }
    return false;
  }

  function sel(el) {
    if (!el || el.nodeType !== 1) return '';
    let s = el.tagName.toLowerCase();
    if (el.id) return s + '#' + el.id;
    const cls = typeof el.className === 'string' ? el.className.trim().split(/\s+/).filter((c) => c && c.length < 40).slice(0, 2) : [];
    if (cls.length) s += '.' + cls.join('.');
    const p = el.parentElement;
    if (p && p !== document.body) {
      const ps = p.tagName.toLowerCase() + (p.id ? '#' + p.id : '');
      return ps + ' > ' + s;
    }
    return s;
  }

  const px = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const firstFamily = (stack) => (stack || '').split(',')[0].trim().replace(/^["']|["']$/g, '');
  const genericOf = (stack) => {
    const parts = (stack || '').split(',').map((s) => s.trim().replace(/^["']|["']$/g, '').toLowerCase());
    return parts.find((p) => ['serif', 'sans-serif', 'monospace', 'cursive', 'system-ui', 'ui-monospace', 'ui-serif', 'ui-sans-serif'].includes(p)) || '';
  };
  const inc = (map, key, w = 1, ex) => {
    if (key === undefined || key === null || key === '') return;
    const e = map[key] || (map[key] = { w: 0 });
    e.w += w;
    if (ex && !e.ex) e.ex = ex;
  };

  const agg = {
    bg: {}, text: {}, border: {}, families: {}, typeStyles: {}, spacing: { padding: {}, margin: {}, gap: {} },
    radius: [], shadows: {}, gradients: {}, durations: {}, easings: {}, gridCols: {},
    counts: { elements: 0, flex: 0, grid: 0, glass: 0, textGradient: 0, animations: 0, transitions: 0, images: 0, svgs: 0, videos: 0, sticky: 0 },
    headings: [], buttons: [], inputs: [], cards: [], links: [], sections: [], containers: [], images: [], lowContrast: [],
    nav: null,
  };

  const all = document.body.querySelectorAll('*');
  const docW = Math.max(document.documentElement.clientWidth, vw);
  // the page canvas (html/body background) is the largest surface of all
  inc(agg.bg, hex(canvasBg), docW * Math.min(document.documentElement.scrollHeight, 20000), 'body');
  let n = 0;
  for (const el of all) {
    if (n >= maxElements) break;
    const tag = el.tagName.toLowerCase();
    if (['script', 'style', 'noscript', 'template', 'meta', 'link', 'br', 'path', 'g', 'defs', 'use', 'symbol', 'clippath', 'lineargradient', 'stop', 'mask'].includes(tag)) continue;
    if (el.closest('svg') && tag !== 'svg') continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.05) continue;
    n++;
    agg.counts.elements++;
    const w = Math.min(r.width, docW), h = r.height, area = w * Math.min(h, 4000);
    const ex = sel(el);
    const parentBg = effectiveBg(el.parentElement);
    const ownBgRaw = toRgba(cs.backgroundColor);
    const bgEff = effectiveBg(el);

    // --- backgrounds
    if (ownBgRaw && ownBgRaw.a > 0.04) inc(agg.bg, hex(ownBgRaw.a >= 0.999 ? ownBgRaw : blend(ownBgRaw, parentBg)), area, ex);
    if (cs.backgroundImage && cs.backgroundImage.includes('gradient')) inc(agg.gradients, cs.backgroundImage.slice(0, 300), area, ex);
    if (cs.backdropFilter && cs.backdropFilter !== 'none') agg.counts.glass++;
    if ((cs.webkitBackgroundClip === 'text' || cs.backgroundClip === 'text') && cs.backgroundImage.includes('gradient')) agg.counts.textGradient++;

    // --- text (only direct text nodes, so each character counts once)
    let chars = 0;
    for (const node of el.childNodes) if (node.nodeType === 3) chars += node.textContent.trim().length;
    if (chars > 0) {
      const c = toRgba(cs.color);
      if (c) {
        const eff = c.a >= 0.999 ? c : blend(c, bgEff);
        inc(agg.text, hex(eff), chars, ex);
        const cr = contrast(eff, bgEff);
        const large = px(cs.fontSize) >= 24 || (px(cs.fontSize) >= 18.66 && Number(cs.fontWeight) >= 700);
        if (cr < (large ? 3 : 4.5) && agg.lowContrast.length < 40 && !imageBehind(el)) agg.lowContrast.push({ sel: ex, fg: hex(eff), bg: hex(bgEff), ratio: Math.round(cr * 100) / 100 });
      }
      const fam = firstFamily(cs.fontFamily);
      inc(agg.families, fam, chars);
      const size = Math.round(px(cs.fontSize) * 2) / 2;
      const lh = cs.lineHeight === 'normal' ? 'normal' : Math.round((px(cs.lineHeight) / px(cs.fontSize)) * 100) / 100;
      const ls = cs.letterSpacing === 'normal' ? 0 : Math.round((px(cs.letterSpacing) / px(cs.fontSize)) * 1000) / 1000;
      const key = [fam, size, cs.fontWeight, lh, ls, cs.textTransform].join('|');
      const t = agg.typeStyles[key] || (agg.typeStyles[key] = {
        family: fam, stack: cs.fontFamily, generic: genericOf(cs.fontFamily), size, weight: Number(cs.fontWeight) || 400,
        lineHeight: lh, letterSpacing: ls, transform: cs.textTransform, style: cs.fontStyle, chars: 0, count: 0, tags: {}, ex,
      });
      t.chars += chars; t.count++;
      t.tags[tag] = (t.tags[tag] || 0) + 1;
    }

    // --- borders
    for (const side of ['Top', 'Right', 'Bottom', 'Left']) {
      const bw = px(cs['border' + side + 'Width']);
      if (bw > 0 && cs['border' + side + 'Style'] !== 'none') {
        const bc = toRgba(cs['border' + side + 'Color']);
        if (bc) inc(agg.border, hex(bc.a >= 0.999 ? bc : blend(bc, bgEff)), (side === 'Top' || side === 'Bottom' ? w : h) * bw, ex);
      }
    }
    const hasBorder = ['Top', 'Right', 'Bottom', 'Left'].some((s) => px(cs['border' + s + 'Width']) > 0 && cs['border' + s + 'Style'] !== 'none');
    const hasBorderAll = ['Top', 'Right', 'Bottom', 'Left'].every((s) => px(cs['border' + s + 'Width']) > 0 && cs['border' + s + 'Style'] !== 'none');
    const hasShadow = cs.boxShadow && cs.boxShadow !== 'none';
    const ownVisibleBg = (ownBgRaw && ownBgRaw.a > 0.04 && hex(blend(ownBgRaw, parentBg)) !== hex(parentBg)) || cs.backgroundImage.includes('gradient');

    // --- radius
    const rad = px(cs.borderTopLeftRadius);
    const isMedia = ['img', 'video', 'picture', 'canvas', 'iframe'].includes(tag);
    if ((ownVisibleBg || hasBorderAll || hasShadow || isMedia) && agg.radius.length < 1500) {
      agg.radius.push({ r: Math.round(rad * 10) / 10, w: Math.round(w), h: Math.round(h), kind: isMedia ? 'media' : 'box' });
    }

    // --- shadows
    if (hasShadow) inc(agg.shadows, cs.boxShadow.replace(/rgba?\([^)]+\)/g, (m) => { const c = toRgba(m); return c ? `rgba(${c.r},${c.g},${c.b},${Math.round(c.a * 100) / 100})` : m; }), 1, ex);

    // --- spacing
    for (const s of ['Top', 'Right', 'Bottom', 'Left']) {
      const p = Math.round(px(cs['padding' + s]));
      if (p > 0) inc(agg.spacing.padding, p, 1);
      const m = Math.round(px(cs['margin' + s]));
      const centered = (s === 'Left' || s === 'Right') && Math.abs(px(cs.marginLeft) - px(cs.marginRight)) < 1;
      if (m > 0 && m < 400 && !centered) inc(agg.spacing.margin, m, 1);
    }
    const display = cs.display;
    if (display.includes('flex')) agg.counts.flex++;
    if (display.includes('grid')) {
      agg.counts.grid++;
      const cols = cs.gridTemplateColumns.split(' ').filter((x) => x && x !== 'none').length;
      if (cols > 0) inc(agg.gridCols, cols, 1);
    }
    if (display.includes('flex') || display.includes('grid')) {
      const rg = Math.round(px(cs.rowGap)), cg = Math.round(px(cs.columnGap));
      if (rg > 0) inc(agg.spacing.gap, rg, 1);
      if (cg > 0 && cg !== rg) inc(agg.spacing.gap, cg, 1);
    }

    // --- motion
    const durs = cs.transitionDuration.split(',').map((d) => (d.includes('ms') ? px(d) : px(d) * 1000)).filter((d) => d > 0);
    if (durs.length && cs.transitionProperty !== 'none') {
      agg.counts.transitions++;
      durs.forEach((d) => inc(agg.durations, Math.round(d), 1));
      inc(agg.easings, (cs.transitionTimingFunction.match(/^\s*(cubic-bezier\([^)]*\)|steps\([^)]*\)|[a-z-]+)/) || [])[1], 1);
    }
    if (cs.animationName && cs.animationName !== 'none') agg.counts.animations++;
    if (cs.position === 'sticky' || cs.position === 'fixed') agg.counts.sticky++;

    // --- media
    if (tag === 'img' || tag === 'video' || tag === 'picture') {
      if (tag === 'video') agg.counts.videos++; else agg.counts.images++;
      if (w > 120 && agg.images.length < 60) agg.images.push({ w: Math.round(w), h: Math.round(h), radius: rad, fit: cs.objectFit, aspect: Math.round((w / h) * 100) / 100 });
    }
    if (tag === 'svg') agg.counts.svgs++;

    // --- headings
    if (/^h[1-6]$/.test(tag) && agg.headings.length < 40 && el.textContent.trim()) {
      agg.headings.push({
        tag, family: firstFamily(cs.fontFamily), stack: cs.fontFamily, size: px(cs.fontSize), weight: Number(cs.fontWeight) || 400,
        lineHeight: cs.lineHeight === 'normal' ? 1.2 : Math.round((px(cs.lineHeight) / px(cs.fontSize)) * 100) / 100,
        letterSpacing: cs.letterSpacing === 'normal' ? 0 : Math.round((px(cs.letterSpacing) / px(cs.fontSize)) * 1000) / 1000,
        transform: cs.textTransform, style: cs.fontStyle, align: cs.textAlign, color: hex(toRgba(cs.color) || { r: 0, g: 0, b: 0 }),
        y: Math.round(r.top + window.scrollY), text: el.textContent.trim().slice(0, 80),
      });
    }

    const styleSnap = () => {
      const fg = toRgba(cs.color);
      return {
        sel: ex, w: Math.round(w), h: Math.round(h),
        bg: ownBgRaw && ownBgRaw.a > 0.04 ? hex(blend(ownBgRaw, parentBg)) : null,
        bgAlpha: ownBgRaw ? Math.round(ownBgRaw.a * 100) / 100 : 0,
        color: fg ? hex(fg.a >= 0.999 ? fg : blend(fg, bgEff)) : null,
        radius: rad, border: hasBorder ? `${cs.borderTopWidth} ${cs.borderTopStyle} ${hex(toRgba(cs.borderTopColor) || { r: 0, g: 0, b: 0 })}` : null,
        shadow: hasShadow ? cs.boxShadow : null,
        padY: Math.round(px(cs.paddingTop)), padX: Math.round(px(cs.paddingLeft)),
        fontSize: px(cs.fontSize), fontWeight: Number(cs.fontWeight) || 400, family: firstFamily(cs.fontFamily),
        transform: cs.textTransform, letterSpacing: cs.letterSpacing === 'normal' ? 0 : Math.round((px(cs.letterSpacing) / px(cs.fontSize)) * 1000) / 1000,
        text: (el.textContent || el.value || el.placeholder || '').trim().slice(0, 40),
        backdrop: cs.backdropFilter !== 'none' ? cs.backdropFilter : null,
        transition: cs.transitionDuration !== '0s' ? `${cs.transitionDuration} ${cs.transitionTimingFunction}` : null,
      };
    };

    // --- components
    const role = el.getAttribute('role');
    const isBtnTag = tag === 'button' || (tag === 'input' && ['submit', 'button'].includes(el.type)) || role === 'button';
    const btnLike = tag === 'a' && (ownVisibleBg || hasBorderAll) && px(cs.paddingLeft) >= 8 && h >= 24 && h <= 80 && w < 420;
    if ((isBtnTag || btnLike) && h >= 20 && h <= 90 && w < 520 && agg.buttons.length < 60) agg.buttons.push(styleSnap());
    if ((tag === 'input' && !['submit', 'button', 'checkbox', 'radio', 'hidden', 'range', 'color', 'file'].includes(el.type)) || tag === 'textarea' || tag === 'select') {
      if (agg.inputs.length < 20) agg.inputs.push(styleSnap());
    }
    if (tag === 'a' && chars > 0 && !btnLike && agg.links.length < 80) {
      agg.links.push({ color: styleSnap().color, decoration: cs.textDecorationLine, weight: Number(cs.fontWeight) || 400, inNav: !!el.closest('nav,header') });
    }
    const isCardShape = ['div', 'article', 'li', 'a', 'section', 'aside', 'figure'].includes(tag) && w >= 140 && w <= Math.min(820, vw * 0.7) && h >= 90;
    if (isCardShape && (ownVisibleBg || hasBorderAll || hasShadow) && el.textContent.trim().length > 10 && agg.cards.length < 40) agg.cards.push(styleSnap());

    // --- layout: full-width sections & centered containers
    if (w >= vw * 0.9 && h >= 200 && ['section', 'div', 'header', 'footer', 'main', 'article', 'aside'].includes(tag) && agg.sections.length < 80) {
      agg.sections.push({ padTop: Math.round(px(cs.paddingTop)), padBottom: Math.round(px(cs.paddingBottom)), h: Math.round(h), bg: hex(bgEff), tag });
    }
    if (w >= 480 && w < vw * 0.97 && h > 60 && Math.abs(r.left + r.width / 2 - vw / 2) < 4 && agg.containers.length < 120) {
      agg.containers.push({ w: Math.round(w), maxW: cs.maxWidth, padX: Math.round(px(cs.paddingLeft)) });
    }

    // --- nav/header
    if (!agg.nav && (tag === 'header' || tag === 'nav' || role === 'banner') && r.top < 150 && w > vw * 0.5) {
      agg.nav = {
        ...styleSnap(), position: cs.position,
        linkCount: el.querySelectorAll('a').length,
        hasCta: [...el.querySelectorAll('a,button')].some((b) => { const c = toRgba(getComputedStyle(b).backgroundColor); return c && c.a > 0.5; }),
      };
    }
  }

  // --- css custom properties declared on :root/html
  const vars = {};
  try {
    const rs = getComputedStyle(document.documentElement);
    for (let i = 0; i < rs.length && Object.keys(vars).length < 400; i++) {
      const name = rs[i];
      if (name.startsWith('--')) vars[name] = rs.getPropertyValue(name).trim().slice(0, 200);
    }
  } catch (e) { /* ignore */ }
  if (!Object.keys(vars).length) {
    for (const sheet of document.styleSheets) {
      let rules;
      try { rules = sheet.cssRules; } catch (e) { continue; }
      for (const rule of rules || []) {
        if (rule.selectorText && /(^|,)\s*(:root|html)\s*(,|$)/.test(rule.selectorText)) {
          for (const name of rule.style) if (name.startsWith('--')) vars[name] = rule.style.getPropertyValue(name).trim().slice(0, 200);
        }
      }
    }
  }
  const colorVars = {};
  for (const [k, v] of Object.entries(vars)) {
    if (!v || v.length > 60 || /^-?[\d.]+(px|rem|em|%|s|ms)?$/.test(v) || v.includes('var(')) continue;
    const c = toRgba(v);
    // canvas keeps previous color on invalid input; only trust things that look like colors
    if (c && /^(#|rgb|hsl|oklch|oklab|lab|lch|color\(|[a-z]+$)/i.test(v)) colorVars[k] = hex(c.a >= 0.999 ? c : blend(c, canvasBg));
  }

  // --- fonts
  const loadedFonts = [];
  try { document.fonts.forEach((f) => { if (f.status === 'loaded') loadedFonts.push({ family: f.family.replace(/^["']|["']$/g, ''), weight: f.weight, style: f.style }); }); } catch (e) { /* ignore */ }
  const fontLinks = [...document.querySelectorAll('link[href]')].map((l) => l.href).filter((h) => /fonts\.(googleapis|bunny)|typekit|fontshare|fonts\.com/.test(h));
  const meta = (n) => document.querySelector(`meta[name="${n}"],meta[property="${n}"]`)?.content || null;

  return {
    url: location.href,
    title: document.title,
    description: meta('description') || meta('og:description'),
    themeColor: meta('theme-color'),
    ogImage: meta('og:image'),
    lang: document.documentElement.lang,
    viewport: { w: vw, h: window.innerHeight },
    scrollHeight: document.documentElement.scrollHeight,
    canvasBg: hex(canvasBg),
    rootFontSize: px(getComputedStyle(document.documentElement).fontSize),
    agg, vars, colorVars, loadedFonts, fontLinks,
  };
}

/** Lighter pass used on the mobile viewport. */
export function collectMobile() {
  const px = (v) => parseFloat(v) || 0;
  const body = [...document.querySelectorAll('p')].find((p) => p.textContent.trim().length > 40);
  const h1 = document.querySelector('h1');
  const main = document.querySelector('main') || document.body;
  let gutter = null;
  for (const el of main.querySelectorAll('p,h1,h2')) {
    const r = el.getBoundingClientRect();
    // Skip off-canvas text (marquees, sliders) — a gutter is never negative or past mid-screen.
    if (r.width > 100 && r.left >= 0 && r.left < innerWidth / 2) { gutter = Math.round(r.left); break; }
  }
  const burger = [...document.querySelectorAll('button,[role=button]')].some((b) => /menu|nav|burger|toggle/i.test((b.getAttribute('aria-label') || '') + b.className));
  return {
    bodySize: body ? px(getComputedStyle(body).fontSize) : null,
    h1Size: h1 ? px(getComputedStyle(h1).fontSize) : null,
    gutter,
    hamburger: burger,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
  };
}
