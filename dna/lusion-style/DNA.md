# Design DNA — lusion-style

**Personality:** real-time webgl studio · 3D object as hero · rounded media stage · dark pill buttons · LUSION:LABS mono tags · cinematic preloader % · light grotesk statements · experiments & storytelling

### Color — light mode, balanced, high contrast (21:1), cool, multi-hue
Primary hue: blue · accent hue: yellow

| role | value | |
|---|---|---|
| `background` | `#f0f1fa` | observed |
| `foreground` | `#0a0a0a` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#0a0a0a` | derived |
| `muted` | `#e4e6f2` | derived |
| `muted-foreground` | `#7f7f7f` | observed |
| `border` | `#d6d8e6` | observed |
| `primary` | `#0a0a0a` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#1a2ffb` | observed |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#1a2ffb` | derived |
| `success` | `#147e3b` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#a9433c` | derived |

Observed palette (share of visual weight): `#ffffff` 38% · `#000000` 26% · `#efefef` 10% · `#27363c` 5% · `#100904` 5% · `#090719` 5% · `#bfa781` 4% · `#030959` 3% · `#02119d` 2% · `#62866d` 2% · `#88ccd6` 1% · `#8ca5c4` 1%

Gradients:
- `linear-gradient(rgb(212, 224, 244) 0px, rgb(236, 241, 250) 100%)`
- `linear-gradient(45deg, rgb(242, 246, 248) 0px, rgb(173, 165, 165) 100%)`
- `linear-gradient(to right bottom, rgb(0, 0, 0), rgb(0, 0, 0))`
- `radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.9) 100%)`

### Typography
- Display: Aeonik → use **Figtree** (free alternative) · sans · custom
- Body: Aeonik → use **Figtree** (free alternative) · sans · custom
- UI / labels: halyard-display-variable → use **Hanken Grotesk** (free alternative) · display · custom
- Mono: IBM Plex Mono · mono · google
- Scale (base 13px, ratio ≈ 1.094 "minor second"): `2xs` 10px · `xs` 11px · `sm` 12px · `base` 13px · `lg` 14px · `xl` 15px · `2xl` 16px · `3xl` 18px · `4xl` 19px · `5xl` 20px · `6xl` 22px · `7xl` 28px · `8xl` 30px · `9xl` 32px
- H1: 96px / 400 / line-height 0.95 / tracking -0.03em, aligned left
- H2: 48px / 400 / 1.05 / -0.02em · H3: 24px / 400
- Body: 14px / 400 / line-height 1.35
- Eyebrow label: 14px / 500 / uppercase / tracking 0.05em
- Mobile: H1 30px, body —

### Spacing & layout
- 4px grid (43% of values conform) · scale: 3, 6, 10, 12, 14, 16, 18, 20, 24, 30, 38, 40, 50, 60
- Section padding ≈ 50px · container 1300px · mobile gutter 22px · density **balanced**
- Hero left, flex-heavy, preferred 12-column grids, ~13 sections, page ≈ 7.05 viewports tall
- Nav: transparent, fixed, 146px tall, has CTA button

### Shape & elevation
- Radius style **rounded**: `sm` 4px · `md` 8px · `lg` 18px · `xl` 24px · `2xl` 18px · `full` full — buttons pill, cards 0px, inputs 8px, media 0px
- Elevation **soft**, surfaces separated by **borders**
  - `sm`: `rgba(1,244,203,1) 0px 0px 0px 0px`
  - `md`: `rgba(0,0,0,0.04) 0px 6px 10px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px`
  - `lg`: `rgba(255,140,0,0.6) 0px 0px 10px 3px`

### Motion & effects
- Motion **expressive**: 900ms `cubic-bezier(0.52, 0.01, 0, 1)`, 33 animated elements
- Effects: glassmorphism (backdrop blur), gradients, gradient text
- Imagery: ~7 images/page, mostly landscape, 0% rounded, 10 inline SVG icons


### Components
- Primary button: bg `#2b2e3a`, text `background`, radius pill, height 45px, padding 0/23px, 14px/500, uppercase
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 45px, padding 0/0px, 14px/400
- Card: bg `#1d1d1d`, radius 0px, no border, no shadow, padding 105/18px
- Input: bg `null`, radius 0px, height 63px, no border
- Links: `foreground`, no underline
