# Design DNA — ponpon-mania

**Personality:** interactive comic · cartoon characters · periwinkle + tangerine + bubblegum · thick black outlines · lowercase chunky type · blob-shaped frames · album-cover cards · grain + radial gradients

### Color — dark mode, vivid, high contrast (15.64:1), cool, multi-hue
Primary hue: violet · accent hue: yellow

| role | value | |
|---|---|---|
| `background` | `#7d7dfd` | observed |
| `foreground` | `#171717` | observed |
| `surface` | `#171717` | observed |
| `surface-foreground` | `#feece3` | derived |
| `muted` | `#3b3b3b` | derived |
| `muted-foreground` | `#a29791` | derived |
| `border` | `#171717` | observed |
| `primary` | `#171717` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#fdaf22` | observed |
| `accent-foreground` | `#171717` | derived |
| `ring` | `#f191ba` | derived |
| `success` | `#00ad4f` | derived |
| `warning` | `#c08100` | derived |
| `danger` | `#e74f1f` | derived |

Observed palette (share of visual weight): `#171717` 55% · `#ffffff` 18% · `#7d7dfd` 7% · `#feece3` 6% · `#fdaf22` 5% · `#f191ba` 3% · `#e74f1f` 3% · `#e1c4a6` 2% · `#4cb247` 2% · `#3b3b3b` 1% · `#070707` 0%

### Typography
- Display: Libre Franklin · sans · google
- Body: Libre Franklin · sans · google
- Scale (base 13px, ratio ≈ 1.641 "golden ratio"): `sm` 10px · `base` 13px · `lg` 15px · `xl` 35px
- H1: 35px / 900 / line-height 0.8 / tracking -0.02em / lowercase, aligned left
- H2: 25px / 800 / 1 / -0.01em · H3: 16px / 700
- Body: 13px / 400 / line-height 1.5
- Mobile: H1 7.8125px, body 11px

### Spacing & layout
- 4px grid (7% of values conform) · scale: 2, 6, 12, 14, 20, 26
- Section padding ≈ 80px · container 1200px · mobile gutter 81px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~4 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **pill**: `sm` full · `md` full · `lg` 24px · `full` full — buttons pill, cards —, inputs —, media 0px
- Elevation **soft**, surfaces separated by **color-blocks**
  - `md`: `rgba(0,0,0,0.1) 0px -2px 10px 0px`

### Motion & effects
- Motion **subtle**: 100ms `cubic-bezier(0.25, 0.1, 0.25, 1)`, 1 animated elements
- Effects: none



### Components
- Primary button: bg `surface`, text `primary-foreground`, radius pill, height 36px, padding 0/14px, 18px/700, lowercase
- Secondary button: bg `background`, text `foreground`, radius pill, height 62px, padding 10/25px, 35px/600
- Card: —
- Input: —
- Links: —
