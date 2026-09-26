# Design DNA — mat-voyce

**Personality:** type designer & animator · cyan + acid lime · giant italic condensed caps · kinetic morphing wordmark · sticker 3D lettering · chevron pill CTA · cursor-follow toy · playful motion type

### Color — light mode, balanced, high contrast (16.48:1), cool, split
Primary hue: sky-blue · accent hue: lime

| role | value | |
|---|---|---|
| `background` | `#fffdf8` | observed |
| `foreground` | `#1f1f1f` | observed |
| `surface` | `#00d3ff` | observed |
| `surface-foreground` | `#1f1f1f` | derived |
| `muted` | `#bcf3ff` | derived |
| `muted-foreground` | `#797979` | derived |
| `border` | `#1f1f1f` | observed |
| `primary` | `#00d3ff` | observed |
| `primary-foreground` | `#1f1f1f` | derived |
| `accent` | `#dfff6b` | observed |
| `accent-foreground` | `#1f1f1f` | derived |
| `ring` | `#00d3ff` | derived |
| `success` | `#56be72` | derived |
| `warning` | `#d9951a` | derived |
| `danger` | `#f27d72` | derived |

Observed palette (share of visual weight): `#ffffff` 41% · `#1f1f1f` 20% · `#00d3ff` 18% · `#bcf3ff` 11% · `#008fad` 4% · `#adaca8` 4% · `#dfff6b` 3% · `#87e9fa` 0%

### Typography
- Display: F37 Judge (condensed italic) → use **Anton** (free alternative) · sans · custom
- Body: F37 Judge Extended → use **Archivo** (free alternative) · sans · custom
- Scale (base 14px, ratio ≈ 1.63 "golden ratio"): `base` 14px · `lg` 14px · `xl` 21px · `2xl` 36px · `3xl` 48px · `4xl` 135px · `5xl` 150px · `6xl` 413px
- H1: 400px / 800 / line-height 0.85 / tracking -0.02em / uppercase, aligned left
- H2: 90px / 800 / 0.9 / -0.02em · H3: 17px / 700
- Body: 11px / 500 / line-height 1.2
- Mobile: H1 —, body 14px

### Spacing & layout
- 4px grid (39% of values conform) · scale: 2, 4, 6, 10, 12, 14, 18, 24, 28, 42, 46, 100, 166
- Section padding ≈ 24px · container 920px · mobile gutter 22px · density **dense**
- Hero left, flex-heavy, preferred 12-column grids, ~29 sections, page ≈ 8.05 viewports tall
- Nav: transparent, fixed, 56px tall

### Shape & elevation
- Radius style **soft**: `sm` 5px · `md` 50px · `full` full — buttons 0px, cards —, inputs —, media 0px
- Elevation **subtle**, surfaces separated by **color-blocks**
  - `md`: `rgba(31,31,31,1) 0px 0px 0px 0px`

### Motion & effects
- Motion **expressive**: 800ms `cubic-bezier(0.165, 0.84, 0.44, 1)`
- Effects: none
- Imagery: ~52 images/page, mostly wide, 0% rounded, 0 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 36px, padding 0/0px, 36px/700, uppercase
- Card: —
- Input: —
- Links: —
