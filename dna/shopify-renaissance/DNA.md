# Design DNA — shopify-renaissance

**Personality:** renaissance remix · old masters + modern commerce · torn-paper transitions · roman-numeral chapter rail · giant bold sans titles · swash serif initials · glassy AI prompt cards · shopify editions

### Color — dark mode, vivid, high contrast (21:1), cool, single-hue
Primary hue: violet · accent hue: violet

| role | value | |
|---|---|---|
| `background` | `#dcdcd0` | observed |
| `foreground` | `#0c0c08` | observed |
| `surface` | `#f7f7ee` | derived |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#cfcfc2` | derived |
| `muted-foreground` | `#5c5c4e` | observed |
| `border` | `#b8b8ae` | observed |
| `primary` | `#0c0c08` | observed |
| `primary-foreground` | `#f7f7ee` | derived |
| `accent` | `#8051ff` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#8051ff` | derived |
| `success` | `#009644` | derived |
| `warning` | `#a77000` | derived |
| `danger` | `#da3733` | derived |

Observed palette (share of visual weight): `#000000` 34% · `#f7f7ee` 23% · `#8051ff` 22% · `#909083` 12% · `#dcdcd0` 5% · `#5c5c4e` 5% · `#292919` 0% · `#0c0c08` 0% · `#b8b8ae` 0%

### Typography
- Display: NeueMontreal → use **Inter** (free alternative) · sans · custom
- Body: Editorial serif → use **Newsreader** (free alternative) · serif · custom
- UI / labels: ui-sans-serif → use **Inter** (free alternative) · sans · system
- Mono: NeueMontreal → use **Inter** (free alternative) · sans · custom
- Scale (base 14px, ratio ≈ 1.456 "augmented fourth"): `sm` 11px · `base` 14px · `lg` 18px · `xl` 20px · `2xl` 28px · `3xl` 32px · `4xl` 44px · `5xl` 62px · `6xl` 194px
- H1: 194px / 700 / line-height 0.9 / tracking -0.03em, aligned left
- H2: 44px / 400 / 1.05 / -0.02em · H3: 28px / 700
- Body: 14px / 700 / line-height 1.1
- Mobile: H1 14px, body 17px

### Spacing & layout
- 4px grid (17% of values conform) · scale: 3, 6, 8, 10, 12, 14, 16, 20, 30, 40, 64
- Section padding ≈ 80px · container 1200px · mobile gutter 45px · density **balanced**
- Hero left, grid-heavy, preferred 5-column grids, ~31 sections, page ≈ 60.19 viewports tall
- Nav: transparent, relative, 50px tall, has CTA button

### Shape & elevation
- Radius style **rounded**: `sm` 2px · `md` 6px · `lg` 12px · `xl` 8px · `2xl` 12px · `full` full — buttons 0px, cards 12px, inputs 0px, media 0px
- Elevation **subtle**, surfaces separated by **shadows**
  - `md`: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0,0,0,0.13) 3px 6px 12px 0px`

### Motion & effects
- Motion **expressive**: 150ms `cubic-bezier(0.4, 0, 0.2, 1)`, 18 animated elements
- Effects: glassmorphism (backdrop blur)
- Imagery: ~69 images/page, mostly landscape, 0% rounded, 96 inline SVG icons, uses video


### Components
- Primary button: bg `#292919`, text `foreground`, radius 8px, height 24px, padding 8/16px, 11px/500
- Secondary button: bg `transparent`, text `#292919`, radius 0px, height 26px, padding 0/0px, 14px/400
- Card: bg `null`, radius 12px, no border, shadow, padding 0/0px
- Input: bg `null`, radius 0px, height 46px, no border
- Links: `foreground`, no underline
