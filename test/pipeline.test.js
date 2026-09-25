// End-to-end: extract a local example site with Chromium, synthesize, build skill + agent into a temp dir.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { Library, TOOLKIT } from '../src/library.js';
import { launchBrowser } from '../src/lib/browser.js';
import { extractWeb } from '../src/extract/web.js';
import { checkConformance } from '../src/check.js';

let chromiumOk = true;
try { await (await launchBrowser()).close(); } catch { chromiumOk = false; }

test('learn + build the "paper" example', { skip: !chromiumOk && 'Chromium not installed', timeout: 180000 }, async () => {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'dna-'));
  const lib = new Library(path.join(tmp, 'dna'));
  await lib.add('paper', [path.join(TOOLKIT, 'examples/sites/paper')], { mobile: false });
  const dna = await lib.synth('paper');
  assert.equal(dna.color.mode, 'light');
  assert.equal(dna.color.roles.background, '#f6f1e7');
  assert.equal(dna.color.roles.foreground, '#1f1b16');
  assert.equal(dna.color.roles.primary, '#b4432b');
  assert.equal(dna.typography.families.display.category, 'serif');
  assert.equal(dna.typography.headings.h1.size, 88);
  assert.equal(dna.shape.style, 'sharp');
  assert.equal(dna.spacing.unit, 8);

  const res = await lib.build('paper', { claudeDir: path.join(tmp, '.claude'), screenshot: false });
  const skill = await fs.readFile(path.join(res.skillDir, 'SKILL.md'), 'utf8');
  assert.match(skill, /^---\nname: dna-paper\n/);
  assert.match(await fs.readFile(res.agentFile, 'utf8'), /name: paper-designer/);
  assert.match(await fs.readFile(path.join(res.skillDir, 'tokens.css'), 'utf8'), /--color-primary: #b4432b;/);

  // the source page must conform to its own DNA; a different style must not
  const browser = await launchBrowser();
  try {
    const self = await extractWeb(browser, `file://${path.join(TOOLKIT, 'examples/sites/paper/index.html')}`, path.join(tmp, 'c1'), { mobile: false, full: false });
    const other = await extractWeb(browser, `file://${path.join(TOOLKIT, 'examples/sites/aurora/index.html')}`, path.join(tmp, 'c2'), { mobile: false, full: false });
    const a = checkConformance(res.dna, self).score, b = checkConformance(res.dna, other).score;
    assert.ok(a >= 90, `self score ${a}`);
    assert.ok(b < 70, `other score ${b}`);
  } finally {
    await browser.close();
  }
  await fs.rm(tmp, { recursive: true, force: true });
});
