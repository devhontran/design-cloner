# Design DNA — likova

**Personality:** architectural · night-navy · all-caps · notched rectangles · sharp corners · hairline rules · oversized light numerals · cinematic scroll · flat · premium real-estate

### Color — dark mode, muted, high contrast (19.48:1), cool, single-hue
Primary hue: blue · accent hue: blue

| role | value | |
|---|---|---|
| `background` | `#070b20` | observed |
| `foreground` | `#ffffff` | observed |
| `surface` | `#232739` | derived |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#11162d` | derived |
| `muted-foreground` | `#bdbec4` | observed |
| `border` | `#393c4d` | observed |
| `primary` | `#ffffff` | observed |
| `primary-foreground` | `#070b20` | derived |
| `accent` | `#c7cbd4` | derived |
| `accent-foreground` | `#070b20` | derived |
| `ring` | `#ffffff` | derived |
| `success` | `#287c42` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#ce1d20` | derived |

Observed palette (share of visual weight): `#070b20` 36% · `#ffffff` 20% · `#9c9da6` 12% · `#394767` 11% · `#4c5c7d` 10% · `#525563` 6% · `#e3e6eb` 5% · `#393c4d` 0% · `#000000` 0%

Gradients:
- `linear-gradient(rgb(7, 11, 32), rgb(13, 16, 36) 32.92%, rgb(18, 21, 40) 72.26%, rgb(25, 28, 47)), none`
- `radial-gradient(50% 50%, rgba(227, 230, 235, 0) 50.44%, rgb(227, 230, 235) 100%)`

### Typography
- Display: TT Norms Pro → use **Manrope** (free alternative) · sans · custom
- Body: TT Norms Pro → use **Manrope** (free alternative) · sans · custom
- Scale (base 14px, ratio ≈ 1.788 "golden ratio"): `sm` 11px · `base` 14px · `lg` 20px · `xl` 50px · `2xl` 85px · `3xl` 143px
- H1: 143px / 400 / line-height 1.05 / tracking -0.04em / uppercase, aligned left
- H2: 85px / 400 / 1 / -0.01em · H3: 20px / 400
- Body: 14px / 450 / line-height 1.29
- Eyebrow label: 11px / 450 / uppercase / tracking 0.04em
- Mobile: H1 86px, body 11px

### Spacing & layout
- 4px grid (38% of values conform) · scale: 3, 6, 10, 20, 30, 40, 46, 60, 120, 240
- Section padding ≈ 240px · container 1200px · mobile gutter 20px · density **airy**
- Hero left, flex-heavy, preferred 3-column grids, ~14 sections, page ≈ 60 viewports tall
- Nav: transparent, fixed, 50px tall, has CTA button

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons 0px, cards 0px, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 500ms `cubic-bezier(0.7, 0, 0.3, 1)`, 1 animated elements
- Effects: none
- Imagery: ~26 images/page, mostly landscape, 0% rounded, 28 inline SVG icons, uses video


### Components
- Primary button: bg `primary`, text `primary-foreground`, radius 0px, height 40px, padding 0/30px, 11px/450, uppercase
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 40px, padding 0/18px, 11px/450, uppercase
- Card: bg `background`, radius 0px, no border, no shadow, padding 20/20px
- Input: —
- Links: `background`, no underline
