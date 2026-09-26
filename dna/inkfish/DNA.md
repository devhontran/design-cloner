# Design DNA — inkfish

**Personality:** nyc creative agency · black & white · tiny mono index lists · giant condensed-ish caps · bracket-numbered work list · film thumbnail grid · pixel-bar logo · live clock footer

### Color — light mode, monochrome, high contrast (21:1), neutral, monochrome
Primary hue: neutral · accent hue: neutral

| role | value | |
|---|---|---|
| `background` | `#ffffff` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#000000` | derived |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#f2f2f2` | derived |
| `muted-foreground` | `#666666` | derived |
| `border` | `#000000` | derived |
| `primary` | `#000000` | derived |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#000000` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#af3d36` | derived |

Observed palette (share of visual weight): `#ffffff` 76% · `#000000` 19% · `#141414` 6%

### Typography
- Display: NT Dapper → use **Archivo** (free alternative) · sans · custom
- Body: Martian Mono · mono · google
- Mono: Martian Mono · mono · google
- Scale (base 16px, ratio ≈ 3.162 "golden ratio"): `sm` 12px · `base` 16px · `lg` 40px · `xl` 160px
- H1: 160px / 400 / line-height 0.85 / tracking -0.04em / uppercase, aligned left
- H2: 36px / 400 / 1 / -0.02em · H3: 12px / 400
- Body: 9px / 400 / line-height 1.3
- Mobile: H1 3.9px, body 24.96px

### Spacing & layout
- 4px grid (98% of values conform) · scale: 2, 8, 12, 20, 24, 40
- Section padding ≈ 100px · container 1080px · mobile gutter 24px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~13 sections, page ≈ 6.56 viewports tall
- Nav: transparent, fixed, 49px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons unknown, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **minimal**: 300ms `cubic-bezier(0.25, 1, 0.5, 1)`, 1 animated elements
- Effects: none
- Imagery: ~24 images/page, mostly landscape, 0% rounded, 8 inline SVG icons, uses video


### Components
- Primary button: bg `primary`, text `primary-foreground`, radius pill, height 20px, padding 0/12px, 9px/700, uppercase
- Secondary button: —
- Card: —
- Input: —
- Links: `background`, no underline
