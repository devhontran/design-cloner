# Design DNA — iventions

**Personality:** barcelona events agency · periwinkle + lime · giant wordmark behind angled shapes · serif + grotesk pairing · pastel section fields · photo-in-numeral stats · city list typography · hospitality spotlight

### Color — light mode, balanced, medium contrast (14.57:1), cool, multi-hue
Primary hue: lime · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#f3efeb` | observed |
| `foreground` | `#1e1e1e` | observed |
| `surface` | `#1e1e1e` | observed |
| `surface-foreground` | `#f3efeb` | derived |
| `muted` | `#eae3dc` | derived |
| `muted-foreground` | `#737270` | derived |
| `border` | `#1e1e1e` | derived |
| `primary` | `#e0ff98` | observed |
| `primary-foreground` | `#1e1e1e` | observed |
| `accent` | `#8072ff` | observed |
| `accent-foreground` | `#e0ff98` | derived |
| `ring` | `#8072ff` | derived |
| `success` | `#60bc77` | derived |
| `warning` | `#d59734` | derived |
| `danger` | `#ec8277` | derived |

Observed palette (share of visual weight): `#f3efeb` 29% · `#1e1e1e` 28% · `#9c93e8` 10% · `#e0ff98` 10% · `#ffffff` 5% · `#ffddc4` 4% · `#bfb8ff` 4% · `#8072ff` 4% · `#eae3dc` 1% · `#000000` 1% · `#101417` 1% · `#5345d7` 0%

Gradients:
- `radial-gradient(circle, rgba(0, 0, 0, 0) 3%, rgb(30, 30, 30) 10%)`

### Typography
- Display: Söhne → use **Inter** (free alternative) · sans · custom
- Body: Söhne → use **Inter** (free alternative) · sans · custom
- Mono: ABC Arizona Mix (serif) → use **Newsreader** (free alternative) · serif · custom
- Scale (base 18px, ratio ≈ 1.607 "golden ratio"): `xs` 11px · `sm` 14px · `base` 18px · `lg` 27px · `xl` 36px · `2xl` 60px · `3xl` 120px
- H1: 200px / 700 / line-height 0.85 / tracking -0.04em / uppercase, aligned left
- H2: 64px / 500 / 1 / -0.03em · H3: 27px / 500
- Body: 18px / 300 / line-height 1.4
- Eyebrow label: 9px / 500 / uppercase / tracking 0.02em
- Mobile: H1 49.8916px, body 52px

### Spacing & layout
- 8px grid (58% of values conform) · scale: 2, 4, 8, 12, 14, 18, 24, 26, 60, 152, 224
- Section padding ≈ 60px · container 1390px · mobile gutter 17px · density **balanced**
- Hero left, grid-heavy, preferred 12-column grids, ~62 sections, page ≈ 16.55 viewports tall
- Nav: transparent, fixed, 900px tall, has CTA button

### Shape & elevation
- Radius style **soft**: `sm` 4px · `md` 6px · `lg` 12px · `full` full — buttons 0px, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 600ms `cubic-bezier(0.165, 0.84, 0.44, 1)`
- Effects: none
- Imagery: ~17 images/page, mostly landscape, 0% rounded, 1 inline SVG icons


### Components
- Primary button: bg `surface`, text `foreground`, radius 0px, height 45px, padding 0/24px, 12px/400
- Secondary button: bg `transparent`, text `foreground`, radius 6px, height 60px, padding 0/0px, 12px/400
- Card: —
- Input: —
- Links: —
