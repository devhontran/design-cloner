# Design DNA — the-line-studio

**Personality:** london animation studio · signal red + off-white · chunky block wordmark · tilted card stacks · slash-separated nav · giant tight sans titles · overscan / crop marks · anime-style illustration

### Color — light mode, vivid, medium contrast (14.64:1), warm, single-hue
Primary hue: red · accent hue: red

| role | value | |
|---|---|---|
| `background` | `#f8f8f8` | observed |
| `foreground` | `#0b0b0b` | observed |
| `surface` | `#dddee2` | observed |
| `surface-foreground` | `#0b0b0b` | derived |
| `muted` | `#dddee2` | derived |
| `muted-foreground` | `#5f5f61` | derived |
| `border` | `#0b0b0b` | observed |
| `primary` | `#ff391e` | observed |
| `primary-foreground` | `#0b0b0b` | derived |
| `accent` | `#dd0000` | derived |
| `accent-foreground` | `#f8f8f8` | derived |
| `ring` | `#ff391e` | derived |
| `success` | `#008d40` | derived |
| `warning` | `#9e6900` | derived |
| `danger` | `#d12e2c` | derived |

Observed palette (share of visual weight): `#dddee2` 33% · `#0b0b0b` 21% · `#f8f8f8` 19% · `#dd0000` 15% · `#ff391e` 10% · `#ff0000` 3% · `#e36f71` 0% · `#e59b9e` 0%

### Typography
- Display: Denim → use **Inter Tight** (free alternative) · sans · custom
- Body: Denim → use **Inter Tight** (free alternative) · sans · custom
- Mono: THE LINE block wordmark → use **Archivo Black** (free alternative) · sans · custom
- Scale (base 14px, ratio ≈ 1.292 "perfect fourth"): `sm` 10px · `base` 14px · `lg` 14px · `xl` 17px · `2xl` 19px · `3xl` 24px · `4xl` 27px · `5xl` 34px · `6xl` 54px · `7xl` 80px · `8xl` 107px · `9xl` 175px
- H1: 175px / 500 / line-height 0.8 / tracking -0.04em, aligned left
- H2: 96px / 500 / 0.9 / -0.04em · H3: 33px / 500
- Body: 14px / 440 / line-height 1.1
- Mobile: H1 72px, body 24px

### Spacing & layout
- 4px grid (14% of values conform) · scale: 2, 4, 8, 12, 14, 16, 22, 26, 30, 94, 178
- Section padding ≈ 250px · container 1200px · mobile gutter 170px · density **airy**
- Hero left, flex-heavy, preferred 9-column grids, ~63 sections, page ≈ 10.68 viewports tall
- Nav: transparent, fixed, 18px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons 0px, cards —, inputs 0px, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 600ms `cubic-bezier(0.19, 1, 0.22, 1)`
- Effects: none
- Imagery: ~20 images/page, mostly portrait, 0% rounded, 27 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `surface`, radius 0px, height 44px, padding 0/0px, 13.3333px/400
- Card: —
- Input: bg `null`, radius 0px, height 61px, no border
- Links: `foreground`, no underline
