# Design DNA — mindmarket

**Personality:** playful research agency · lime + cream + yellow · bold character illustrations · white text cards over art · squiggle underlines · tight inter headlines · big rounded colour blocks · bouncy motion

### Color — light mode, balanced, medium contrast (13.71:1), cool, complementary
Primary hue: yellow · accent hue: lime

| role | value | |
|---|---|---|
| `background` | `#f5f1e4` | observed |
| `foreground` | `#2c2e2a` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#2c2e2a` | derived |
| `muted` | `#e0dbce` | derived |
| `muted-foreground` | `#6b6d68` | derived |
| `border` | `#e0dbce` | derived |
| `primary` | `#8ed462` | observed |
| `primary-foreground` | `#2c2e2a` | derived |
| `accent` | `#f5e211` | observed |
| `accent-foreground` | `#2c2e2a` | derived |
| `ring` | `#2ba0ff` | derived |
| `success` | `#35874c` | derived |
| `warning` | `#9b6800` | derived |
| `danger` | `#ff705d` | derived |

Observed palette (share of visual weight): `#ffffff` 24% · `#2c2e2a` 23% · `#f5f1e4` 19% · `#8ed462` 13% · `#7c7720` 13% · `#e0dbce` 3% · `#f5e211` 2% · `#ff705d` 1% · `#000000` 1% · `#2ba0ff` 1% · `#5d7e49` 0%

### Typography
- Display: Inter · sans · google
- Body: Inter · sans · google
- Scale (base 20px, ratio ≈ 1.476 "perfect fifth"): `2xs` 15px · `xs` 17px · `sm` 18px · `base` 20px · `lg` 30px · `xl` 41px · `2xl` 53px · `3xl` 81px · `4xl` 140px
- H1: 140px / 500 / line-height 0.95 / tracking -0.06em, aligned center
- H2: 30px / 500 / 1.15 / -0.06em · H3: 30px / 500
- Body: 20px / 500 / line-height 1.25
- Mobile: H1 66.9114px, body 27.017px

### Spacing & layout
- 4px grid (12% of values conform) · scale: 6, 10, 12, 18, 22, 26, 44, 60, 86, 170, 256
- Section padding ≈ 170px · container 1220px · mobile gutter 20px · density **airy**
- Hero centered, flex-heavy, preferred 16-column grids, ~35 sections, page ≈ 15.26 viewports tall
- Nav: transparent, fixed, 68px tall, has CTA button

### Shape & elevation
- Radius style **very-rounded**: `sm` 10px · `md` 24px · `full` full · `lg` 48px · `xl` 64px — buttons rounded, cards 64px, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **subtle**: 400ms `cubic-bezier(0.17, 0.67, 0.3, 1.33)`, 1 animated elements
- Effects: none
- Imagery: ~50 images/page, mostly landscape, 0% rounded, 23 inline SVG icons


### Components
- Primary button: bg `surface`, text `foreground`, radius 10px, height 44px, padding 0/12px, 14px/500
- Secondary button: bg `transparent`, text `#000000`, radius 10px, height 68px, padding 11/11px, 18.0625px/500, border 1px solid #000000
- Card: bg `surface`, radius 63.75px, no border, no shadow, padding 21/21px
- Input: —
- Links: `primary`, no underline
