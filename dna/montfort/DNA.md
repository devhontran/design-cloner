# Design DNA — montfort

**Personality:** corporate sublime · cloud-to-earth journey · misty steel blue · light geometric caps · wide-tracked wordmark · diamond + circle markers · cinematic atmosphere · commodity trading

### Color — light mode, muted, high contrast (18.1:1), cool, single-hue
Primary hue: blue · accent hue: blue

| role | value | |
|---|---|---|
| `background` | `#e5ecf1` | observed |
| `foreground` | `#2d628c` | derived |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#161616` | derived |
| `muted` | `#d5dee6` | derived |
| `muted-foreground` | `#81a0bb` | derived |
| `border` | `#81a0bb` | observed |
| `primary` | `#2d628c` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#0f1d2a` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#2d628c` | derived |
| `success` | `#287c42` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#a34942` | derived |

Observed palette (share of visual weight): `#ffffff` 74% · `#2d628c` 19% · `#81a0bb` 7% · `#e5ecf1` 0%

### Typography
- Display: Century Gothic → use **Josefin Sans** (free alternative) · sans · custom
- Body: Century Gothic → use **Josefin Sans** (free alternative) · sans · custom
- UI / labels: Josefin Sans · sans · google
- Scale (base 16px, ratio ≈ 1.311 "perfect fourth"): `sm` 12px · `base` 16px · `lg` 20px · `xl` 24px · `2xl` 40px · `3xl` 50px · `4xl` 62px
- H1: 50px / 300 / line-height 1.4 / tracking 0.045em / uppercase, aligned left
- H2: 40px / 300 / 1.4 / 0.045em · H3: 24px / 400
- Body: 16px / 400 / line-height 1.6
- Eyebrow label: 12px / 400 / uppercase / tracking 0.04em
- Mobile: H1 —, body 20px

### Spacing & layout
- 8px grid (55% of values conform) · scale: 3, 12, 16, 20, 28, 32, 36, 40, 48, 52, 74, 80, 160, 240
- Section padding ≈ 240px · container 1380px · mobile gutter 32px · density **airy**
- Hero left, flex-heavy, preferred 24-column grids, ~24 sections, page ≈ 19.56 viewports tall
- Nav: transparent, fixed, 82px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `full` full · `lg` 0px — buttons 0px, cards —, inputs —, media 0px
- Elevation **soft**, surfaces separated by **color-blocks**
  - `md`: `rgba(255,255,255,1) 0px 0px 12px 0px`

### Motion & effects
- Motion **expressive**: 1200ms `cubic-bezier(0.65, 0, 0.35, 1)`, 5 animated elements
- Effects: none
- Imagery: ~17 images/page, mostly wide, 0% rounded, 31 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `#000000`, radius 0px, height 82px, padding 0/0px, 13.3333px/400
- Card: —
- Input: —
- Links: `primary`, no underline
