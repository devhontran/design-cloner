# Design DNA — zentry

**Personality:** gaming / ai metaverse · black + lavender · electric violet + acid yellow · screaming condensed caps · mono body copy · glowing particle mesh 3D · clip-path video reveals · split giant headline

### Color — light mode, vivid, high contrast (15.97:1), cool, complementary
Primary hue: violet · accent hue: lime

| role | value | |
|---|---|---|
| `background` | `#dfdff2` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#000000` | derived |
| `surface-foreground` | `#dfdff2` | derived |
| `muted` | `#b2b2c2` | derived |
| `muted-foreground` | `#676666` | observed |
| `border` | `#000000` | observed |
| `primary` | `#5542ff` | observed |
| `primary-foreground` | `#dfdff2` | derived |
| `accent` | `#edff66` | observed |
| `accent-foreground` | `#000000` | derived |
| `ring` | `#5542ff` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#c11a1e` | derived |

Observed palette (share of visual weight): `#dfdff2` 57% · `#676666` 11% · `#000000` 10% · `#3427ac` 8% · `#edff66` 7% · `#b28ef2` 3% · `#5542ff` 2% · `#ffffff` 1% · `#bcaaf9` 1% · `#6f6ae6` 1% · `#b2b2c2` 0%

Gradients:
- `linear-gradient(rgb(85, 66, 255) 0%, rgb(178, 142, 242) 100%)`
- `linear-gradient(rgba(52, 39, 172, 0.5) 0px, rgba(52, 39, 172, 0))`
- `linear-gradient(90deg, rgba(52, 39, 172, 0.5) 0px, rgba(52, 39, 172, 0))`

### Typography
- Display: Zentry Screamer → use **Anton** (free alternative) · sans · custom
- Body: Roboto Mono · mono · google
- Mono: Roboto Mono · mono · google
- Scale (base 16px, ratio ≈ 1.274 "major third"): `2xs` 13px · `xs` 14px · `sm` 15px · `base` 16px · `lg` 20px · `xl` 27px · `2xl` 51px · `3xl` 58px · `4xl` 90px · `5xl` 96px · `6xl` 108px · `7xl` 126px · `8xl` 162px · `9xl` 180px
- H1: 160px / 900 / line-height 0.82 / tracking -0.01em / uppercase, aligned left
- H2: 108px / 900 / 0.82 / -0.01em · H3: 20px / 700
- Body: 14px / 400 / line-height 1.4
- Eyebrow label: 9px / 500 / uppercase / tracking 0.02em
- Mobile: H1 14.56px, body 10.4px

### Spacing & layout
- 4px grid (23% of values conform) · scale: 6, 8, 14, 18, 22, 24, 30, 34, 36, 46, 58, 136
- Section padding ≈ 135px · container 1350px · mobile gutter 80px · density **airy**
- Hero left, flex-heavy, preferred 2-column grids, ~51 sections, page ≈ 15.75 viewports tall
- Nav: transparent, absolute, 63px tall

### Shape & elevation
- Radius style **rounded**: `sm` 7px · `full` full · `md` 12px · `lg` 24px — buttons pill, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 500ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: gradients
- Imagery: ~6 images/page, mostly landscape, 7% rounded, 40 inline SVG icons, uses video


### Components
- Primary button: bg `accent`, text `accent-foreground`, radius pill, height 32px, padding 0/16px, 10px/500, uppercase
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 48px, padding 0/24px, 10.8px/700, uppercase
- Card: —
- Input: —
- Links: —
