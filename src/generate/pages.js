// HTML pages rendered from a DNA: specimen (style guide + sample landing) and moodboard (all references).
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function specimenHtml(dna) {
  const c = dna.color, t = dna.typography;
  const swatches = Object.entries(c.roles).map(([k, v]) => `
      <div class="sw"><div class="chip" style="background:${v}"></div><b>${k}</b><code>${v}</code></div>`).join('');
  const ramps = Object.entries(c.ramps).map(([name, steps]) => `
      <div class="ramp"><span class="rn">${name}</span>${Object.entries(steps).map(([s, v]) => `<div title="${name}-${s} ${v}" style="background:${v}"><small style="color:${Number(s) >= 500 ? '#fff' : '#000'}">${s}</small></div>`).join('')}</div>`).join('');
  const scale = Object.entries(t.scale).reverse().map(([k, v]) => `
      <div class="ts"><code>text-${k} · ${v}px</code><span style="font-size:${v}px;font-family:var(--font-${v >= 28 ? 'display' : 'body'});line-height:1.15;${v >= 28 ? `font-weight:var(--font-weight-heading);letter-spacing:var(--tracking-heading)` : ''}">Design DNA ${esc(dna.name)}</span></div>`).join('');
  const spaces = dna.spacing.scale.map((v, i) => `<div class="sp"><code>space-${i + 1} · ${v}px</code><div style="width:${v}px"></div></div>`).join('');
  const radii = Object.entries(dna.shape.radius).map(([k, v]) => `<div class="rd" style="border-radius:${Math.min(v, 9999)}px"><code>${k}<br>${v >= 9999 ? 'full' : v + 'px'}</code></div>`).join('');
  const shadows = Object.entries(dna.elevation.shadows || {}).map(([k, v]) => `<div class="shd card" style="box-shadow:${v}"><code>shadow-${k}</code></div>`).join('') || '<p class="muted">Flat design — no shadows.</p>';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(dna.name)} — Design DNA specimen</title>
<link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="components.css">
<style>
  .grid3 { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:var(--space-5, 24px); }
  .label { font:600 12px/1 var(--font-mono, ui-monospace, monospace); text-transform:uppercase; letter-spacing:.08em; color:var(--color-muted-foreground); margin:0 0 20px; }
  .spec { padding-block: 56px; border-top:1px solid var(--color-border); }
  .sws { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:16px; }
  .sw { display:flex; flex-direction:column; gap:4px; font-size:13px; }
  .sw .chip { height:64px; border-radius:var(--radius-md, 8px); border:1px solid var(--color-border); }
  .sw code, .ts code, .sp code, .rd code { font:12px var(--font-mono, ui-monospace, monospace); color:var(--color-muted-foreground); }
  .ramp { display:grid; grid-template-columns:90px repeat(11,1fr); gap:4px; margin-bottom:6px; align-items:center; }
  .ramp div { height:40px; border-radius:6px; display:flex; align-items:end; padding:4px; } .ramp small { font-size:10px; opacity:.8 }
  .rn { font:12px var(--font-mono, monospace); }
  .ts { display:grid; grid-template-columns:160px 1fr; align-items:baseline; gap:16px; padding:10px 0; border-bottom:1px dashed var(--color-border); overflow:hidden; white-space:nowrap; }
  .sp { display:grid; grid-template-columns:160px 1fr; align-items:center; gap:16px; margin:6px 0; } .sp div { height:14px; background:var(--color-primary); border-radius:3px; }
  .rds { display:flex; gap:16px; flex-wrap:wrap; } .rd { width:96px; height:96px; background:var(--color-muted); border:1px solid var(--color-border); display:grid; place-items:center; text-align:center; }
  .shd { min-height:100px; display:grid; place-items:center; }
  .hero { padding-block: calc(var(--section-y) * .9); ${dna.layout.heroAlignment === 'centered' ? 'text-align:center;' : ''} }
  .hero .actions { display:flex; gap:12px; margin-top:32px; ${dna.layout.heroAlignment === 'centered' ? 'justify-content:center;' : ''} flex-wrap:wrap; }
  .hero .lead { max-width:640px; margin-top:20px; ${dna.layout.heroAlignment === 'centered' ? 'margin-inline:auto;' : ''} }
  ${dna.effects.glassmorphism ? '.hero { background: radial-gradient(60% 60% at 70% 0%, color-mix(in oklab, var(--color-primary) 35%, transparent), transparent), radial-gradient(40% 50% at 10% 20%, color-mix(in oklab, var(--color-accent) 30%, transparent), transparent); }' : ''}
  .kw { display:flex; gap:8px; flex-wrap:wrap; margin-top:28px; } .kw span { font-size:12px; padding:4px 10px; border:1px solid var(--color-border); border-radius:var(--radius-sm, 4px); color:var(--color-muted-foreground); }
  .form { display:grid; gap:12px; max-width:420px; }
</style></head>
<body>
  <header class="nav"><div class="container nav-inner">
    <strong style="font-family:var(--font-display);font-size:20px">${esc(dna.name)}</strong>
    <nav style="display:flex;gap:28px;font-size:var(--text-sm, 14px)"><a style="color:var(--color-foreground)">Product</a><a style="color:var(--color-foreground)">Pricing</a><a style="color:var(--color-foreground)">Docs</a></nav>
    <a class="btn btn-primary">Get started</a>
  </div></header>

  <section class="hero"><div class="container">
    <p class="eyebrow">Design DNA specimen</p>
    <h1 style="margin-top:16px">Build interfaces that feel <span class="${dna.effects.textGradient ? 'text-gradient' : ''}" style="${dna.effects.textGradient ? '' : 'color:var(--color-primary)'}">unmistakably yours</span>.</h1>
    <p class="lead">This page is rendered only from the extracted tokens and component recipes. Compare it side by side with the reference screenshots.</p>
    <div class="actions"><a class="btn btn-primary">Start free trial</a><a class="btn btn-secondary">View showcase</a></div>
    <div class="kw" style="${dna.layout.heroAlignment === 'centered' ? 'justify-content:center' : ''}">${dna.personality.keywords.map((k) => `<span>${esc(k)}</span>`).join('')}</div>
  </div></section>

  <section class="section" style="background:var(--color-muted)"><div class="container">
    <h2>Components</h2>
    <div class="grid3" style="margin-top:40px">
      ${['Fast by default', 'Composable', 'Accessible'].map((h, i) => `<article class="card"><p class="eyebrow">0${i + 1}</p><h3 style="margin:12px 0 8px">${h}</h3><p class="muted">Cards, spacing, radius and elevation come straight from the DNA recipes.</p><p style="margin-top:16px"><a>Learn more →</a></p></article>`).join('')}
    </div>
    <div class="grid3" style="margin-top:40px;align-items:start">
      <form class="form" onsubmit="return false"><input class="input" placeholder="you@company.com"><input class="input" placeholder="Company"><button class="btn btn-primary">Subscribe</button></form>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary">Primary</a><a class="btn btn-secondary">Secondary</a></div>
    </div>
  </div></section>

  <div class="container">
    <section class="spec"><p class="label">Color roles</p><div class="sws">${swatches}</div></section>
    <section class="spec"><p class="label">Ramps</p>${ramps}</section>
    <section class="spec"><p class="label">Type scale · ${esc(t.families.display?.use)} / ${esc(t.families.body?.use)} · ratio ${t.ratio} (${t.ratioName})</p>${scale}</section>
    <section class="spec"><p class="label">Spacing · ${dna.spacing.unit}px grid · ${dna.spacing.density}</p>${spaces}</section>
    <section class="spec"><p class="label">Radius · ${dna.shape.style}</p><div class="rds">${radii}</div></section>
    <section class="spec"><p class="label">Elevation · ${dna.elevation.style}</p><div class="grid3">${shadows}</div></section>
  </div>
</body></html>`;
}

export function moodboardHtml(dna, items) {
  // items: [{src (relative path), label, palette: [{hex, share}]}]
  const cards = items.map((it) => `
    <figure>
      <img src="${esc(it.src)}" alt="">
      <figcaption><span>${esc(it.label)}</span><div class="pal">${(it.palette || []).slice(0, 8).map((p) => `<i style="background:${p.hex};flex:${Math.max(0.3, p.share * 10)}"></i>`).join('')}</div></figcaption>
    </figure>`).join('');
  const roles = Object.entries(dna.color.roles).slice(0, 12).map(([k, v]) => `<div><i style="background:${v}"></i><b>${k}</b><code>${v}</code></div>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(dna.name)} moodboard</title>
<style>
  body { margin:0; padding:40px; background:#111; color:#eee; font:14px/1.4 ui-sans-serif, system-ui, sans-serif; }
  h1 { font-size:28px; margin:0 0 6px } .kw { color:#aaa; margin:0 0 24px }
  .roles { display:grid; grid-template-columns:repeat(6,1fr); gap:10px; margin-bottom:28px; }
  .roles div { display:grid; grid-template-columns:28px 1fr; column-gap:8px; align-items:center; font-size:12px }
  .roles i { grid-row:span 2; width:28px; height:28px; border-radius:6px; border:1px solid #333 } .roles code { color:#999 }
  .grid { columns: 3; column-gap: 18px; }
  figure { break-inside:avoid; margin:0 0 18px; background:#1b1b1b; border-radius:10px; overflow:hidden; border:1px solid #2a2a2a }
  img { display:block; width:100%; max-height:900px; object-fit:cover; object-position:top }
  figcaption { padding:10px 12px; display:flex; flex-direction:column; gap:8px; color:#bbb; font-size:12px }
  .pal { display:flex; height:14px; border-radius:4px; overflow:hidden } .pal i { display:block }
</style></head><body>
<h1>${esc(dna.name)} — moodboard</h1><p class="kw">${esc(dna.personality.keywords.join(' · '))}</p>
<div class="roles">${roles}</div>
<div class="grid">${cards}</div></body></html>`;
}
