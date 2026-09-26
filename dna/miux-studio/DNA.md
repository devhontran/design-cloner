# Design DNA — miux-studio

**Personality:** boutique ux studio · warm linen + taupe · signature script logo · hairline column grid · giant thin numerals · circular dial project carousel · lifestyle photography · calm premium

### Color — light mode, balanced, medium contrast (11.41:1), warm, single-hue
Primary hue: orange · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#f7f3ed` | observed |
| `foreground` | `#333335` | observed |
| `surface` | `#d5c8b0` | derived |
| `surface-foreground` | `#333335` | derived |
| `muted` | `#e6e2dc` | derived |
| `muted-foreground` | `#7b7976` | observed |
| `border` | `#e6e2dc` | observed |
| `primary` | `#333335` | observed |
| `primary-foreground` | `#f7f3ed` | derived |
| `accent` | `#986c32` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#986c32` | derived |
| `success` | `#38894e` | derived |
| `warning` | `#9e6a00` | derived |
| `danger` | `#b2574e` | derived |

Observed palette (share of visual weight): `#f7f3ed` 47% · `#986c32` 21% · `#7b7976` 15% · `#333335` 8% · `#d5c8b0` 5% · `#b9bdab` 3% · `#6a6458` 1% · `#5d432a` 1% · `#c6c2be` 0% · `#9e8f7b` 0%

### Typography
- Display: Studio grotesk (light) → use **Inter Tight** (free alternative) · sans · custom
- Body: Studio grotesk → use **Inter Tight** (free alternative) · sans · custom
- Scale (base 15px, ratio ≈ 1.653 "golden ratio"): `xs` 11px · `sm` 14px · `base` 15px · `lg` 20px · `xl` 36px · `2xl` 48px · `3xl` 72px · `4xl` 111px · `5xl` 306px
- H1: 40px / 400 / line-height 1.05 / tracking -0.02em, aligned left
- H2: 111px / 300 / 1 / -0.03em · H3: 26px / 400
- Body: 11px / 400 / line-height 1.5
- Mobile: H1 72.5581px, body 12.6977px

### Spacing & layout
- 4px grid (32% of values conform) · scale: 4, 6, 10, 12, 16, 18, 20, 24, 30, 38, 46, 96, 120, 140
- Section padding ≈ 120px · container 1380px · mobile gutter 15px · density **airy**
- Hero left, flex-heavy, preferred 12-column grids, ~49 sections, page ≈ 15.52 viewports tall
- Nav: transparent, fixed, 68px tall, bottom border

### Shape & elevation
- Radius style **soft**: `sm` 4px · `full` full · `md` 9px · `lg` 12px — buttons unknown, cards —, inputs 0px, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 550ms `cubic-bezier(0.215, 0.61, 0.355, 1)`
- Effects: none
- Imagery: ~26 images/page, mostly landscape, 15% rounded, 26 inline SVG icons


### Components
- Primary button: —
- Secondary button: —
- Card: —
- Input: bg `null`, radius 0px, height 24px, no border
- Links: `foreground`, no underline
