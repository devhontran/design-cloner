# Design DNA — fromanother-love

**Personality:** saigon artist-led studio · blurred glow blob shader · colour-shifting chapters · staggered caps headline · focus-blur text · italic serif micro-labels · 3D tilted poster carousel · cream + deep navy

### Color — dark mode, vivid, high contrast (17.8:1), cool, split
Primary hue: blue · accent hue: teal-cyan

| role | value | |
|---|---|---|
| `background` | `#051236` | observed |
| `foreground` | `#fffde2` | observed |
| `surface` | `#fffde2` | derived |
| `surface-foreground` | `#1e1e1e` | derived |
| `muted` | `#0f1f44` | derived |
| `muted-foreground` | `#9b9f9e` | observed |
| `border` | `#fffde2` | observed |
| `primary` | `#1740a9` | observed |
| `primary-foreground` | `#fffde2` | derived |
| `accent` | `#88c2b2` | observed |
| `accent-foreground` | `#051236` | derived |
| `ring` | `#fffde2` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#b82f2b` | derived |

Observed palette (share of visual weight): `#051236` 67% · `#fffde2` 17% · `#9b9f9e` 7% · `#1740a9` 6% · `#50596a` 2% · `#374158` 1% · `#0e1752` 0% · `#102966` 0% · `#88c2b2` 0% · `#1b4271` 0% · `#e6e8eb` 0% · `#000000` 0%

### Typography
- Display: TWK (Everett/Lausanne-style grotesk) → use **Inter Tight** (free alternative) · sans · custom
- Body: TWK grotesk → use **Inter Tight** (free alternative) · sans · custom
- UI / labels: herbikFont → use **Inter** (free alternative) · sans · custom
- Mono: Herbik (italic serif labels) → use **Instrument Serif** (free alternative) · serif · custom
- Scale (base 14px, ratio ≈ 1.448 "augmented fourth"): `xs` 11px · `sm` 12px · `base` 14px · `lg` 14px · `xl` 17px · `2xl` 24px · `3xl` 66px · `4xl` 83px · `5xl` 90px · `6xl` 180px
- H1: 83px / 600 / line-height 0.9 / tracking -0.03em / uppercase, aligned left
- H2: 66px / 500 / 1 / -0.03em · H3: 17px / 700
- Body: 14px / 400 / line-height 1.4
- Mobile: H1 41.6px, body 14.56px

### Spacing & layout
- 4px grid (48% of values conform) · scale: 4, 6, 8, 12, 16, 18, 22, 24, 36, 94, 134
- Section padding ≈ 155px · container 970px · mobile gutter 16px · density **airy**
- Hero left, grid-heavy, preferred 14-column grids, ~57 sections, page ≈ 21.05 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons pill, cards —, inputs —, media 0px
- Elevation **soft**, surfaces separated by **color-blocks**
  - `md`: `rgba(0,0,0,0.15) 0px 4px 24px 0px`

### Motion & effects
- Motion **expressive**: 1200ms `cubic-bezier(0.165, 0.84, 0.44, 1)`, 8 animated elements
- Effects: glassmorphism (backdrop blur)
- Imagery: ~29 images/page, mostly landscape, 0% rounded, 0 inline SVG icons, uses video


### Components
- Primary button: bg `#000000`, text `primary-foreground`, radius pill, height 26px, padding 6/16px, 12px/500
- Secondary button: bg `transparent`, text `#000000`, radius pill, height 26px, padding 6/16px, 12px/400, border 1px solid #000000
- Card: —
- Input: —
- Links: —
