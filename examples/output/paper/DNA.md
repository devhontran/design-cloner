# Design DNA — paper

**Personality:** light · balanced color · high-contrast · warm · editorial · elegant · light, refined headlines · tight display tracking · uppercase eyebrow labels · dramatic type scale · spacious · premium · sharp corners · architectural · flat

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
