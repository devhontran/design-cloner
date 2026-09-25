// Conformance checker: how closely does a rendered page follow a Design DNA?
import { deltaE } from './lib/color.js';

const pct = (v) => Math.round(v * 100);

export function checkConformance(dna, raw) {
  const agg = raw.agg;
  const allowedColors = [...Object.values(dna.color.roles), ...Object.values(dna.color.ramps).flatMap((r) => Object.values(r)), ...dna.color.palette.map((p) => p.hex)];
  const nearest = (hex) => Math.min(...allowedColors.map((c) => deltaE(c, hex)));
  const colorCheck = (map, label) => {
    const items = Object.entries(map).map(([hex, v]) => ({ hex, w: v.w, ex: v.ex, d: nearest(hex) }));
    const total = items.reduce((a, i) => a + i.w, 0) || 1;
    const off = items.filter((i) => i.d > 0.045);
    return { label, score: 1 - off.reduce((a, i) => a + i.w, 0) / total, offenders: off.sort((a, b) => b.w - a.w).slice(0, 6).map((i) => `${i.hex} (Δ${i.d.toFixed(3)}) e.g. \`${i.ex}\``) };
  };

  const families = new Set(Object.values(dna.typography.families).filter(Boolean).flatMap((f) => [f.name, f.use].filter(Boolean).map((n) => n.toLowerCase())));
  const ts = Object.values(agg.typeStyles);
  const totalChars = ts.reduce((a, t) => a + t.chars, 0) || 1;
  const famOff = ts.filter((t) => !families.has(t.family.toLowerCase()) && !/icon|awesome|material symbols/i.test(t.family));
  const scale = Object.values(dna.typography.scale);
  const sizeOff = ts.filter((t) => !scale.some((s) => Math.abs(s - t.size) <= 1) && !(t.size > Math.max(...scale) * 0.6 && /h1|h2/.test(Object.keys(t.tags).join())));

  const radiusAllowed = Object.values(dna.shape.radius);
  const rad = agg.radius.filter((r) => r.r > 0 && r.r < r.h / 2 - 1);
  const radOff = rad.filter((r) => !radiusAllowed.some((a) => Math.abs(a - r.r) <= 2));

  const sp = dna.spacing.scale;
  const spacingPairs = ['padding', 'margin', 'gap'].flatMap((k) => Object.entries(agg.spacing[k]).map(([v, o]) => [Number(v), o.w]));
  const spTotal = spacingPairs.filter(([v]) => v > 2).reduce((a, [, w]) => a + w, 0) || 1;
  const spOff = spacingPairs.filter(([v]) => v > 2 && !sp.some((s) => Math.abs(s - v) <= 1) && v % dna.spacing.unit !== 0);

  const shadowsAllowed = Object.values(dna.elevation.shadows || {});
  const shadowUses = Object.entries(agg.shadows);
  const shadowOff = shadowUses.filter(([k]) => !shadowsAllowed.includes(k));

  const bgDelta = Math.min(deltaE(raw.canvasBg, dna.color.roles.background), deltaE(raw.canvasBg, dna.color.roles.surface));
  const cats = [
    { label: 'Page background & mode', weight: 2, score: bgDelta < 0.03 ? 1 : Math.max(0, 1 - (bgDelta - 0.03) * 4), offenders: bgDelta < 0.03 ? [] : [`page is ${raw.canvasBg}, DNA background is ${dna.color.roles.background} (${dna.color.mode})`] },
    { ...colorCheck(agg.bg, 'Background colors'), weight: 2 },
    { ...colorCheck(agg.text, 'Text colors'), weight: 2 },
    { ...colorCheck(agg.border, 'Border colors'), weight: 0.5 },
    { label: 'Font families', weight: 2, score: 1 - famOff.reduce((a, t) => a + t.chars, 0) / totalChars, offenders: [...new Set(famOff.map((t) => `"${t.family}" e.g. \`${t.ex}\``))].slice(0, 5) },
    { label: 'Font sizes on scale', weight: 1.5, score: 1 - sizeOff.reduce((a, t) => a + t.count, 0) / (ts.reduce((a, t) => a + t.count, 0) || 1), offenders: sizeOff.sort((a, b) => b.count - a.count).slice(0, 6).map((t) => `${t.size}px ×${t.count} e.g. \`${t.ex}\``) },
    { label: 'Radius on scale', weight: 1, score: rad.length ? 1 - radOff.length / rad.length : 1, offenders: [...new Set(radOff.map((r) => `${r.r}px`))].slice(0, 6) },
    { label: 'Spacing on grid', weight: 1, score: 1 - spOff.reduce((a, [, w]) => a + w, 0) / spTotal, offenders: spOff.sort((a, b) => b[1] - a[1]).slice(0, 8).map(([v, w]) => `${v}px ×${w}`) },
    { label: 'Shadows from tokens', weight: 0.5, score: shadowUses.length ? 1 - shadowOff.length / shadowUses.length : 1, offenders: shadowOff.slice(0, 3).map(([k]) => k.slice(0, 80)) },
  ];
  const wsum = cats.reduce((a, c) => a + c.weight, 0);
  const score = Math.round((cats.reduce((a, c) => a + c.score * c.weight, 0) / wsum) * 100);
  return { score, categories: cats.map((c) => ({ ...c, score: pct(c.score) })), contrast: agg.lowContrast, mobile: raw.mobile };
}

export function reportMd(target, dnaName, res) {
  const lines = [`# DNA conformance: ${target}`, '', `DNA: **${dnaName}** · Overall score: **${res.score}/100** ${res.score >= 85 ? '✅' : res.score >= 70 ? '⚠️' : '❌'}`, '', '| check | score | top offenders |', '|---|---|---|'];
  for (const c of res.categories) lines.push(`| ${c.label} | ${c.score} | ${c.offenders.join('<br>') || '—'} |`);
  lines.push('', `## Contrast (WCAG AA) — ${res.contrast.length} failing text element(s)`);
  res.contrast.slice(0, 12).forEach((c) => lines.push(`- \`${c.sel}\` ${c.fg} on ${c.bg} = ${c.ratio}:1`));
  if (res.mobile) {
    lines.push('', '## Mobile (390px)');
    lines.push(`- horizontal overflow: ${res.mobile.horizontalOverflow ? '❌ yes' : 'no'} · body ${res.mobile.bodySize}px · h1 ${res.mobile.h1Size}px · gutter ${res.mobile.gutter}px`);
  }
  lines.push('', 'Fix offenders by replacing raw values with the DNA tokens, then re-run the check.');
  return lines.join('\n');
}
