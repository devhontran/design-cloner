# Design DNA — tracing-art

**Personality:** museum scrollytelling · white gallery wall · floating artwork cloud · one object's journey · serif narrative captions · timeline scrubber · full-bleed painting zoom · getty research

### Color — light mode, monochrome, high contrast (21:1), neutral, monochrome
Primary hue: neutral · accent hue: neutral

| role | value | |
|---|---|---|
| `background` | `#ffffff` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#f1f1f1` | observed |
| `surface-foreground` | `#000000` | derived |
| `muted` | `#f1f1f1` | derived |
| `muted-foreground` | `#666666` | derived |
| `border` | `#e0e0e0` | derived |
| `primary` | `#000000` | derived |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#1d1a16` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#af3d36` | derived |

Observed palette (share of visual weight): `#ffffff` 66% · `#000000` 33% · `#f1f1f1` 1%

### Typography
- Display: Bradford → use **Newsreader** (free alternative) · sans · custom
- Body: Bradford → use **Newsreader** (free alternative) · sans · custom
- UI / labels: Graphik → use **Inter** (free alternative) · sans · custom
- Mono: Graphik → use **Inter** (free alternative) · sans · custom
- Scale (base 16px, ratio ≈ 2.121 "golden ratio"): `sm` 13px · `base` 16px · `lg` 54px · `xl` 72px
- H1: 72px / 400 / line-height 1 / tracking -0.03em, aligned left
- H2: 54px / 400 / 1.2 / -0.02em · H3: 20px / 700
- Body: 16px / 400 / line-height 1.5
- Mobile: H1 41.6px, body 16.64px

### Spacing & layout
- 4px grid (9% of values conform) · scale: 6, 10, 14, 18, 28, 36, 46
- Section padding ≈ 80px · container 1200px · mobile gutter 129px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~12 sections, page ≈ 90.5 viewports tall
- Nav: transparent, absolute, 900px tall

### Shape & elevation
- Radius style **soft**: `sm` 4px · `md` 6px · `lg` 11px · `full` full — buttons 0px, cards 11px, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 800ms `ease-in-out`
- Effects: glassmorphism (backdrop blur)
- Imagery: ~3 images/page, mostly landscape, 0% rounded, 8 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 36px, padding 0/0px, 13.5px/400
- Card: bg `surface`, radius 10.8px, no border, no shadow, padding 0/0px
- Input: —
- Links: —
