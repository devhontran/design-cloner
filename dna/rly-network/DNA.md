# Design DNA — rly-network

**Personality:** web3 protocol · charcoal + acid lime · hairline overlapping circles · flanking stat columns · inline paragraph-in-headline · outlined lime pill tags · tiny caps buttons · cursor dot

### Color — dark mode, vivid, high contrast (18.73:1), cool, single-hue
Primary hue: lime · accent hue: lime

| role | value | |
|---|---|---|
| `background` | `#121212` | observed |
| `foreground` | `#ffffff` | observed |
| `surface` | `#1a1a1a` | observed |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#272727` | derived |
| `muted-foreground` | `#909090` | observed |
| `border` | `#272727` | observed |
| `primary` | `#ffffff` | observed |
| `primary-foreground` | `#121212` | derived |
| `accent` | `#ceff45` | derived |
| `accent-foreground` | `#121212` | derived |
| `ring` | `#ceff45` | derived |
| `success` | `#00c55b` | derived |
| `warning` | `#db9400` | derived |
| `danger` | `#ff7266` | derived |

Observed palette (share of visual weight): `#121212` 34% · `#ceff45` 18% · `#909090` 15% · `#ffffff` 9% · `#272727` 8% · `#040404` 6% · `#c0ed42` 4% · `#abaaab` 3% · `#1a1a1a` 3%

### Typography
- Display: HK Guise → use **Urbanist** (free alternative) · sans · custom
- Body: HK Guise → use **Urbanist** (free alternative) · sans · custom
- Scale (base 15px, ratio ≈ 1.353 "perfect fourth"): `xs` 11px · `sm` 12px · `base` 15px · `lg` 24px · `xl` 30px · `2xl` 36px · `3xl` 48px · `4xl` 68px
- H1: 68px / 400 / line-height 1.05 / tracking -0.03em, aligned left
- H2: 56px / 400 / 1.1 / -0.03em · H3: 24px / 500
- Body: 9px / 500 / line-height 1.3
- Eyebrow label: 10.5px / 600 / uppercase / tracking 0.06em
- Mobile: H1 —, body 14.56px

### Spacing & layout
- 4px grid (21% of values conform) · scale: 3, 6, 10, 12, 16, 18, 22, 24, 30, 40, 42, 48, 54, 56
- Section padding ≈ 180px · container 1200px · mobile gutter 77px · density **airy**
- Hero left, flex-heavy, preferred 2-column grids, ~18 sections, page ≈ 1 viewports tall
- Nav: transparent, fixed, 84px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `full` full · `lg` 0px — buttons square, cards 50px, inputs 0px, media 0px
- Elevation **flat**, surfaces separated by **borders**

### Motion & effects
- Motion **subtle**: 300ms `cubic-bezier(0.85, 0, 0.15, 1)`
- Effects: glassmorphism (backdrop blur)
- Imagery: ~68 images/page, mostly landscape, 0% rounded, 10 inline SVG icons, uses video


### Components
- Primary button: bg `foreground`, text `background`, radius 0px, height 36px, padding 12/18px, 10.5px/600, uppercase
- Secondary button: bg `background`, text `primary`, radius 0px, height 36px, padding 12/18px, 10.5px/600, uppercase
- Card: bg `background`, radius 50px, border 1px solid #ffffff, no shadow, padding 56/66px
- Input: bg `primary`, radius 0px, height 35px, no border
- Links: `muted-foreground`, no underline
