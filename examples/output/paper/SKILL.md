---
name: dna-paper
description: Design DNA "paper" (light, balanced color, high-contrast, warm, editorial, elegant, light, refined headlines, tight display tracking). Use when building, restyling or reviewing any web UI — pages, landing pages, dashboards, components — that should look and feel like "paper", or when the user mentions paper style. Provides tokens (CSS vars, Tailwind v3/v4), component recipes, composition principles and a conformance checker.
---

# Design DNA — paper

**Personality:** light · balanced color · high-contrast · warm · editorial · elegant · light, refined headlines · tight display tracking · uppercase eyebrow labels · dramatic type scale · spacious · premium · sharp corners · architectural · flat

Learned from:
- web: <toolkit>/examples/sites/paper — "Paper & Co — Slow journal"
- image: <toolkit>/examples/images/poster.png

## Workflow (follow every time)
1. **Load the DNA.** Read this file fully, then look at the reference images in `references/` with the Read tool (`references/moodboard.png`, `references/specimen.png`, `references/ref-paper.png`, `references/ref-poster.png`, `references/ref-paper-full.png`, `references/ref-paper-mobile.png`). `specimen.png` shows the tokens rendered.
2. **Install tokens** in the target project (pick one, copy from this folder):
   - Plain CSS / any framework: `tokens.css` + `components.css` (classes: `.container .section .btn .btn-primary .btn-secondary .card .input .nav .eyebrow .lead .muted`)
   - Tailwind v4: `tailwind-v4.css` (`@theme` → `bg-primary`, `text-muted-foreground`, `font-display`, `rounded-lg`, `shadow-md`…)
   - Tailwind v3: `tailwind.preset.js` in `presets: []`
   - Figma / Style Dictionary: `tokens.json` (DTCG)
   Variable names follow shadcn/Tailwind conventions (`--color-background`, `--color-primary`, `--color-muted-foreground`, `--radius-md`…), so swapping DNA = swapping the token file.
3. **Design with the principles** below before writing markup: decide section rhythm, hierarchy and where the single accent goes.
4. **Build only with tokens.** Every color, font size, radius, shadow and spacing value must come from the DNA.
5. **Verify visually and numerically:**
   - Screenshot: `node <toolkit>/bin/dna.js shot <url-or-html-file> <out-dir>` then Read the PNGs next to `references/`.
   - Conformance: `node <toolkit>/bin/dna.js check <toolkit>/.claude/skills/dna-paper/dna.json <url-or-html-file>` → aim for **score ≥ 85** and zero contrast failures. Fix the listed offenders and re-run.

## Principles (qualitative DNA)
### Essence
A printed literary magazine translated to the web: warm uncoated-paper background, near-black ink, one rust-red accent. Calm, slow and confident — typography does all the work, decoration is almost absent.

### Composition & layout
- Left-aligned hero with a max ~860px headline measure; body copy capped at ~620px. Nothing is centered except single-object art.
- The page is divided by full-width 1px ink rules (`border` = foreground color) — between header, hero, the article row and the footer. Rules replace cards, shadows and background changes.
- Article listings sit in equal columns separated by vertical 1px rules, like newspaper columns; no gaps, no card boxes.
- Generous vertical rhythm: ~96px section padding, 48–64px inside column cells.
- Image placeholders are flat, sharp-cornered blocks in a darker paper tone (#d9cdb8 / #c9b597), portrait 4:5.

### Typography voice
- Headlines: large serif, **regular weight (400)**, tight line-height (1.0–1.15), slight negative tracking. Size contrast is dramatic (88px H1 vs 18px body).
- Emphasis inside a headline is an *italic* word in the rust accent — the signature move.
- Body is serif too, 18px / 1.7, warm grey-brown secondary text for intros.
- All UI text (nav, buttons, meta, kickers) switches to a small sans-serif, uppercase, tracked +0.1–0.14em, 12–13px.

### Color usage
- ~85% paper background, ~12% ink, ≤3% rust accent. Rust appears only in: kicker labels, the italic headline word, text links.
- Primary buttons are ink-filled (#1f1b16) with paper-colored text; the secondary button is an ink outline. Buttons are never rust.

### Imagery & iconography
- Flat illustration/poster style: simple geometric shapes (a single circle) on muted beige fields. No photos with heavy filters, no gradients, no icons.

### Signature details
1. Hairline ink rules dividing every section and column.
2. Italic rust-colored word inside a regular-weight serif headline.
3. Uppercase, widely tracked sans labels ("ISSUE NO. 14 — AUTUMN", "ESSAY · 12 MIN").
4. Square corners everywhere — buttons, images, inputs.
5. Cream paper background, never pure white.

### Interaction & motion
- Understated: links and buttons change color/underline only, no lifts, scale or shadows. No scroll animations.

### Anti-patterns
- No rounded corners, drop shadows, gradients or glassmorphism.
- No bold (700) serif headlines, no all-caps headlines.
- No pure white (#fff) sections or pure black text.
- No colored buttons or more than one accent color.

## Rules
**Do**
- Primary CTA buttons are filled with `foreground` (#1f1b16), not the brand hue; `primary` (#b4432b, red) is reserved for links, labels and one highlight per view.
- Page background is `#f6f1e7`, text `#1f1b16` (not pure black); secondary text `#5b5247`.
- Headlines: Lora, weight 400, line-height 1, tracking -0.02em. Body: Lora 18px/1.7.
- Buttons, nav, labels and meta text use Inter (`--font-ui`), not the body face.
- Introduce sections with an uppercase eyebrow label (13px, weight 500, tracking 0.1em) above the heading.
- Only use font sizes from the scale: 12, 13, 18, 22, 28, 40, 88px.
- Snap all spacing to the 8px grid (12, 16, 24, 28, 32, 48, 64, 96). Sections breathe with ~96px vertical padding on desktop (~58px on mobile).
- Content width max 1080px, left-aligned hero.
- Generous negative space: fewer elements per view, big type contrast, let sections breathe.
- Corners are square (0–2px) on cards, inputs and media.
- Motion: 200ms `cubic-bezier(0.25, 0.1, 0.25, 1)` on hover/focus; keep animation to a minimum.

**Don't**
- No rounded cards or pill buttons.
- No drop shadows — separate surfaces with borders or background color steps.
- No hex, px font sizes, radii or shadows outside the tokens.
- No generic "AI template" look: no random purple gradients, emoji bullets or centered-everything unless the DNA says so.
- Never ship text below WCAG AA contrast (4.5:1 body, 3:1 large).

## Tokens at a glance
### Color — light mode, balanced, high contrast (15.21:1), warm, single-hue
Primary hue: red · accent hue: red

| role | value | |
|---|---|---|
| `background` | `#f6f1e7` | observed |
| `foreground` | `#1f1b16` | observed |
| `surface` | `#efe6d6` | observed |
| `surface-foreground` | `#1f1b16` | derived |
| `muted` | `#e7e2d8` | derived |
| `muted-foreground` | `#5b5247` | observed |
| `border` | `#1f1b16` | observed |
| `primary` | `#b4432b` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#b4432b` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#b4432b` | derived |
| `success` | `#00843b` | derived |
| `warning` | `#936200` | derived |
| `danger` | `#b54139` | derived |

Observed palette (share of visual weight): `#f6f1e7` 29% · `#b4432b` 28% · `#efe6d6` 16% · `#1f1b16` 10% · `#c9b597` 8% · `#d9cdb8` 4% · `#5b5247` 2% · `#7a6f62` 2% · `#b6937f` 1% · `#e2d8c8` 0% · `#c16651` 0%

### Typography
- Display: Georgia → use **Lora** (free alternative) · serif · system
- Body: Georgia → use **Lora** (free alternative) · serif · system
- UI / labels: Helvetica Neue → use **Inter** (free alternative) · sans · system
- Scale (base 18px, ratio ≈ 1.487 "perfect fifth"): `xs` 12px · `sm` 13px · `base` 18px · `lg` 22px · `xl` 28px · `2xl` 40px · `3xl` 88px
- H1: 88px / 400 / line-height 1 / tracking -0.02em, aligned left
- H2: 40px / 400 / 1.15 / 0em · H3: 28px / 400
- Body: 18px / 400 / line-height 1.7
- Eyebrow label: 13px / 500 / uppercase / tracking 0.1em
- Mobile: H1 88px, body 22px

### Spacing & layout
- 8px grid (91% of values conform) · scale: 12, 16, 24, 28, 32, 48, 64, 96
- Section padding ≈ 96px · container 1080px · mobile gutter 32px · density **airy**
- Hero left, grid-heavy, preferred 2-column grids, ~2 sections, page ≈ 2.08 viewports tall
- Nav: transparent, static, 73px tall, bottom border

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons 0px, cards —, inputs —, media —
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **minimal**: 200ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: none

- Reference images: negative space 61%, busyness 0.007, chromatic pixels 5%

### Components
- Primary button: bg `foreground`, text `background`, radius 0px, height 45px, padding 16/28px, 13px/600, uppercase
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 47px, padding 16/28px, 13px/600, uppercase, border 1px solid #1f1b16
- Card: —
- Input: —
- Links: `primary`, underlined


## Files in this skill
- `dna.json` — full machine-readable DNA (source of truth)
- `tokens.css`, `components.css`, `tailwind-v4.css`, `tailwind.preset.js`, `tokens.json`
- `specimen.html` — living style guide built from the tokens (open it, or screenshot it)
- `references/` — screenshots/images the DNA was learned from
