# Design DNA — bennett-clive

**Personality:** production company · pure black & white · giant tight inter caps · right-aligned name stacks · logo-word mashups · hover-reveal video · edge-to-edge wordmark footer · fashion & beauty clients

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
| `border` | `#000000` | observed |
| `primary` | `#000000` | derived |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#000000` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#af3d36` | derived |

Observed palette (share of visual weight): `#ffffff` 69% · `#000000` 31%

### Typography
- Display: Inter · sans · google
- Body: Inter · sans · google
- UI / labels: Arial → use **Inter** (free alternative) · sans · system
- Scale (base 15px, ratio ≈ 1.468 "perfect fifth"): `base` 15px · `lg` 16px · `xl` 22px · `2xl` 30px · `3xl` 45px · `4xl` 75px · `5xl` 150px
- H1: 150px / 700 / line-height 0.77 / tracking -0.07em / uppercase, aligned left
- H2: 64px / 700 / 0.95 / -0.04em · H3: 19px / 700
- Body: 15px / 400 / line-height 1
- Mobile: H1 60px, body 20px

### Spacing & layout
- 4px grid (13% of values conform) · scale: 8, 12, 16, 20, 58, 76, 88, 114, 158, 226
- Section padding ≈ 300px · container 1220px · mobile gutter 103px · density **airy**
- Hero left, flex-heavy, preferred 4-column grids, ~34 sections, page ≈ 8.11 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons 0px, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 800ms `cubic-bezier(0.32, 0.94, 0.6, 1)`, 6 animated elements
- Effects: none
- Imagery: ~26 images/page, mostly —, 0% rounded, 5 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `background`, radius 0px, height 22px, padding 0/0px, 21.75px/700, uppercase
- Card: —
- Input: —
- Links: `background`, no underline
