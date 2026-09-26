# Design DNA — pxpush

**Personality:** y2k retro-tech · crt scanlines · chrome 3D objects · ultramarine blue · condensed grotesk + mono · giant marquee headlines · hairline lists · sharp corners · editorial agency

### Color — dark mode, balanced, medium contrast (8.97:1), cool, analogous
Primary hue: blue · accent hue: teal-cyan

| role | value | |
|---|---|---|
| `background` | `#1a1a1a` | observed |
| `foreground` | `#d9d9d9` | observed |
| `surface` | `#111111` | observed |
| `surface-foreground` | `#bababa` | derived |
| `muted` | `#2a2a2a` | derived |
| `muted-foreground` | `#8a8a8a` | derived |
| `border` | `#8c8c8c` | observed |
| `primary` | `#03049c` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#3cff7b` | observed |
| `accent-foreground` | `#0a0a0a` | derived |
| `ring` | `#d9d9d9` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#c2181d` | derived |

Observed palette (share of visual weight): `#03049c` 27% · `#1a1a1a` 27% · `#bababa` 15% · `#111111` 10% · `#d9d9d9` 5% · `#003c6a` 4% · `#71737d` 3% · `#0eaebc` 3% · `#09587a` 3% · `#1f6886` 2% · `#ffffff` 1% · `#607f96` 1%

Gradients:
- `linear-gradient(90deg, rgb(0, 60, 106) 100%, rgb(14, 174, 188) 0px)`

### Typography
- Display: SemiSqueezed → use **Roboto Condensed** (free alternative) · sans · custom
- Body: PP Neue Montreal Mono → use **Geist Mono** (free alternative) · mono · custom
- Mono: PP Neue Montreal Mono → use **Geist Mono** (free alternative) · mono · custom
- Scale (base 17px, ratio ≈ 1.472 "perfect fifth"): `sm` 12px · `base` 17px · `lg` 25px · `xl` 32px · `2xl` 41px · `3xl` 64px · `4xl` 87px · `5xl` 173px
- H1: 173px / 400 / line-height 0.96 / tracking -0.008em, aligned left
- H2: 121px / 400 / 0.96 / -0.01em · H3: 32px / 400
- Body: 17px / 400 / line-height 1.5
- Eyebrow label: 11px / 400 / uppercase / tracking 0.02em
- Mobile: H1 78px, body 10px

### Spacing & layout
- 4px grid (17% of values conform) · scale: 4, 8, 10, 12, 14, 22, 30, 36, 44, 58, 116
- Section padding ≈ 144px · container 1350px · mobile gutter 12px · density **airy**
- Hero left, flex-heavy, preferred 2-column grids, ~62 sections, page ≈ 12.71 viewports tall
- Nav: transparent, fixed, 81px tall, has CTA button

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `full` full · `md` 0px · `lg` 0px — buttons square, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 800ms `cubic-bezier(0.16, 1, 0.3, 1)`
- Effects: none
- Imagery: ~41 images/page, mostly wide, 2% rounded, 6 inline SVG icons, uses video


### Components
- Primary button: bg `foreground`, text `surface`, radius 0px, height 54px, padding 0/14px, 14px/400
- Secondary button: —
- Card: —
- Input: —
- Links: —
