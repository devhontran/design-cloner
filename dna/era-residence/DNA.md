# Design DNA — era-residence

**Personality:** mediterranean luxury · condensed didone caps · cream + aubergine · arches & circles · full-bleed photography · hairline verticals · tiny extended labels · resort real-estate

### Color — light mode, muted, medium contrast (14.06:1), warm, split
Primary hue: pink · accent hue: blue

| role | value | |
|---|---|---|
| `background` | `#f3f3ec` | observed |
| `foreground` | `#17233b` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#17233b` | derived |
| `muted` | `#e4e4dd` | derived |
| `muted-foreground` | `#5d6574` | derived |
| `border` | `#17233b` | observed |
| `primary` | `#340c24` | observed |
| `primary-foreground` | `#f3f3ec` | derived |
| `accent` | `#b5cedb` | observed |
| `accent-foreground` | `#17233b` | derived |
| `ring` | `#17233b` | derived |
| `success` | `#287c42` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#a34942` | derived |

Observed palette (share of visual weight): `#f3f3ec` 37% · `#340c24` 23% · `#17233b` 18% · `#f8bbcb` 8% · `#ffffff` 7% · `#b5cedb` 5% · `#174283` 1% · `#22509a` 1% · `#3260aa` 1% · `#4476bb` 1% · `#a5bdcb` 0%

Gradients:
- `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))`
- `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`
- `linear-gradient(rgb(243, 243, 236), rgba(243, 243, 236, 0))`

### Typography
- Display: Ambroise Francois Std → use **Bodoni Moda** (free alternative) · sans · custom
- Body: Maison Neue Extended → use **Archivo** (free alternative) · sans · custom
- Scale (base 16px, ratio ≈ 1.347 "perfect fourth"): `xs` 10px · `sm` 12px · `base` 16px · `lg` 23px · `xl` 25px · `2xl` 36px · `3xl` 57px · `4xl` 87px · `5xl` 108px · `6xl` 123px · `7xl` 173px
- H1: 173px / 700 / line-height 1.15 / tracking -0.01em, aligned left
- H2: 173px / 700 / 0.87 / -0.024em · H3: 36px / 400
- Body: 16px / 400 / line-height 1.5
- Eyebrow label: 10px / 700 / uppercase / tracking 0.048em
- Mobile: H1 90px, body 10.3125px

### Spacing & layout
- 4px grid (1% of values conform) · scale: 2, 4, 8, 14, 22, 30, 44, 62, 138
- Section padding ≈ 43px · container 1350px · mobile gutter 71px · density **dense**
- Hero left, grid-heavy, preferred 10-column grids, ~80 sections, page ≈ 24.08 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `full` full · `lg` 0px — buttons unknown, cards 4px, inputs —, media 0px
- Elevation **dramatic**, surfaces separated by **shadows**
  - `md`: `rgba(0, 0, 0, 0) 0px 224px 63px 0px, rgba(0,0,0,0.01) 0px 143px 57px 0px, rgba(0,0,0,0.04) 0px 81px 48px 0px, rgba(0,0,0,0.07) 0px 36px 36px 0px, rgba(0,0,0,0.08) 0px 9px 20px 0px`

### Motion & effects
- Motion **subtle**: 400ms `cubic-bezier(0.25, 1, 0.5, 1)`, 3 animated elements
- Effects: gradients
- Imagery: ~27 images/page, mostly portrait, 0% rounded, 33 inline SVG icons, uses video


### Components
- Primary button: —
- Secondary button: —
- Card: bg `background`, radius 3.6px, no border, shadow, padding 22/22px
- Input: —
- Links: —
