---
name: design-dna
description: Learn a visual style from references and turn it into a reusable Design DNA skill + designer agent. Use when the user gives websites, screenshots, Dribbble/Behance/showcase links or Pinterest pins/boards and wants to "learn/clone/extract/steal the design", "make UI look like this", build a design system or style guide from inspiration, or blend several inspirations into one style. Also use to update, re-weight or inspect an existing DNA (dna list / dna show).
---

# Design DNA — learn a style, compile it into a skill + agent

The toolkit lives at the root of this repository (`bin/dna.js`, Node ≥ 18 + Playwright Chromium).
A DNA has two halves and you are responsible for both:

| half | who produces it | where |
|---|---|---|
| **Quantitative** — colors & roles, type scale, fonts, spacing grid, radii, shadows, motion, components, layout metrics | `dna` CLI (computed styles + pixel clustering) | `dna/<name>/dna.auto.json` |
| **Qualitative** — essence, composition, typography voice, color proportions, imagery, signature details, anti-patterns | **you**, by looking at the screenshots | `dna/<name>/principles.md` |

Corrections to the numbers go in `dna/<name>/overrides.json` (deep-merged over the auto DNA).

## Workflow

### 1. Collect inputs
Ask only if nothing usable was given. Accepted sources (mix freely — multiple sources = a blended DNA):
- website URLs → full computed-style extraction + desktop/full/mobile screenshots (most accurate)
- Pinterest pins/boards, Dribbble/Behance shots, showcase galleries → the showcased images are downloaded and analysed
- local images / folders of images, local `.html` files or folders with `index.html`
- force a type with `web:`, `img:`, `gallery:` prefixes

Pick a short kebab-case name (e.g. `linear-dark`, `brand-2026`).
If a network fetch is blocked (login wall, 403), ask the user to save the images locally and pass the files.

### 2. Extract + synthesize + build
```bash
node bin/dna.js learn <name> <source...> [--weight 2] [--limit 12]
```
Run `npm install` first if `node_modules` is missing; if Chromium is missing run `npx playwright install chromium`.
Add more sources later with `dna add <name> ...`; change blend weights in `dna/<name>/sources.json` then `dna synth <name> && dna build <name>`.

### 3. Look — this is the step that makes the DNA good
Read these images with the Read tool, in this order:
1. `dna/<name>/moodboard.png` (all references + extracted palette)
2. every `dna/<name>/sources/*/desktop.png`, then `full.png` and `mobile.png` for websites; `sources/*/images/*` for galleries
3. `dna/<name>/DNA.md` (the numbers) and `dna/<name>/specimen.png` (the numbers rendered)

### 4. Correct the numbers (`overrides.json`)
Compare the specimen with the references. Typical fixes:
- image-only DNAs have **placeholder typography** (`confidence: low`) → identify the typefaces visually (serif/sans/mono, geometric/grotesk/humanist, weight, width) and set the closest Google Fonts
- wrong color role (e.g. a big photo color picked as `primary`), missing accent, wrong mode
- radius / shadow style that the images clearly contradict
```json
{
  "color": { "roles": { "primary": "#ff5b1f", "accent": "#1f6bff" } },
  "typography": { "families": { "display": { "name": "Instrument Serif" }, "body": { "name": "Inter" } } },
  "shape": { "radius": { "sm": 4, "md": 8, "lg": 16 } },
  "personality": { "keywords": ["editorial", "warm", "confident"] }
}
```
Only override what you can justify from the references. Ramps, foregrounds and font metadata are recomputed automatically.

### 5. Write the qualitative DNA (`principles.md`)
Replace the template (and delete the `TODO` marker line). Follow `references/principles-guide.md`. Be concrete and checkable — numbers, placements, proportions — never generic adjectives like "modern and clean". The "Signature details" and "Anti-patterns" sections matter most: they are what makes output recognisable instead of generic.

### 6. Rebuild and verify
```bash
node bin/dna.js build <name>
```
Read `dna/<name>/specimen.png` again next to the references. If it does not feel like the same family, iterate on overrides/principles. Optionally prove it: build a small sample page with the new agent and run `node bin/dna.js check <name> <page>`.

### 7. Hand off
Tell the user (in their language):
- personality keywords and the 3–5 signature details
- the generated skill `.claude/skills/dna-<name>/` and agent `.claude/agents/<name>-designer.md`
- how to use it: "ask for a page in the <name> style", or use the `<name>-designer` agent; for use in every project run `node bin/dna.js build <name> --claude-dir ~/.claude`
- anything uncertain (e.g. commercial fonts replaced with free alternatives)

## Other commands
- `dna list`, `dna show <name>` — inspect the library
- `dna shot <url|file> [dir]` — screenshot + raw styles of any page
- `dna check <name|dna.json> <url|file>` — conformance score (colors, fonts, type scale, radius, spacing grid, shadows) + WCAG contrast failures + mobile overflow

## Blending
Multiple sources are merged by weight: color roles, type scale, spacing and components come from weighted votes. A common recipe: one website for structure/typography (`--weight 2`) + several Pinterest/Dribbble images for mood and palette. After blending, principles.md must state which reference contributes what.
