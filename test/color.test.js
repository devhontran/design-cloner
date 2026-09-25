import test from 'node:test';
import assert from 'node:assert/strict';
import { hexToRgb, rgbToHex, rgbToOklch, oklchToHex, contrast, deltaE, ramp, readableOn } from '../src/lib/color.js';
import { kmeans, mergeColors, clusterNumbers } from '../src/lib/cluster.js';
import { fontInfo, googleFontsUrl } from '../src/lib/fonts.js';

test('hex <-> rgb round trip', () => {
  assert.deepEqual(hexToRgb('#7c5cff'), { r: 124, g: 92, b: 255 });
  assert.equal(rgbToHex({ r: 124, g: 92, b: 255 }), '#7c5cff');
  assert.equal(rgbToHex(hexToRgb('#abc')), '#aabbcc');
});

test('oklch round trip stays within 1 unit per channel', () => {
  for (const hex of ['#7c5cff', '#22d3ee', '#b4432b', '#f6f1e7', '#0b0b12']) {
    const back = hexToRgb(oklchToHex(rgbToOklch(hexToRgb(hex))));
    const orig = hexToRgb(hex);
    for (const k of ['r', 'g', 'b']) assert.ok(Math.abs(back[k] - orig[k]) <= 1, `${hex} ${k}`);
  }
});

test('WCAG contrast', () => {
  assert.equal(Math.round(contrast('#000000', '#ffffff')), 21);
  assert.equal(contrast('#777777', '#777777'), 1);
  assert.equal(readableOn('#0b0b12'), '#ffffff');
  assert.equal(readableOn('#f6f1e7'), '#0a0a0a');
});

test('ramp keeps the source color on its closest step', () => {
  const { ramp: r, anchor } = ramp('#7c5cff');
  assert.equal(r[anchor], '#7c5cff');
  assert.equal(Object.keys(r).length, 11);
  const L = Object.values(r).map((h) => rgbToOklch(hexToRgb(h)).l);
  for (let i = 1; i < L.length; i++) assert.ok(L[i] < L[i - 1], 'lightness decreases monotonically');
});

test('mergeColors folds near-identical colors', () => {
  const out = mergeColors([{ hex: '#ffffff', weight: 5 }, { hex: '#fefefe', weight: 1 }, { hex: '#000000', weight: 2 }]);
  assert.equal(out.length, 2);
  assert.equal(out[0].weight, 6);
  assert.ok(deltaE('#ffffff', '#fefefe') < 0.01);
});

test('kmeans finds the dominant colors', () => {
  const pts = [];
  const push = (hex, n) => { const { l, c, h } = rgbToOklch(hexToRgb(hex)); for (let i = 0; i < n; i++) pts.push({ L: l, a: c * Math.cos(h * Math.PI / 180), b: c * Math.sin(h * Math.PI / 180), w: 1 }); };
  push('#ffffff', 70); push('#ff0000', 20); push('#0000ff', 10);
  const res = kmeans(pts, 3);
  assert.ok(deltaE(res[0].hex, '#ffffff') < 0.02);
  assert.ok(Math.abs(res[0].share - 0.7) < 0.01);
});

test('clusterNumbers merges close values', () => {
  const out = clusterNumbers([[16, 10], [16.5, 2], [24, 5]], 0.05);
  assert.equal(out.length, 2);
  assert.equal(out[0].weight, 12);
});

test('font knowledge', () => {
  assert.equal(fontInfo('Inter').source, 'google');
  assert.equal(fontInfo('Söhne').use, 'Inter');
  assert.equal(fontInfo('Georgia', { generic: 'serif' }).category, 'serif');
  assert.equal(fontInfo('JetBrains Mono').category, 'mono');
  assert.match(googleFontsUrl([fontInfo('Instrument Serif'), fontInfo('Inter')]), /family=Instrument\+Serif.*family=Inter/);
});
