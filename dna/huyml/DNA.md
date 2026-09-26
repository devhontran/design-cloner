# Design DNA — huyml

**Personality:** independent designer portfolio · light grey editorial · curved 3D image carousel · chrome glass numerals · tiny meta grid · vertical wordmark + caricature · colour swatch chips · awwwards craft

### Color — light mode, balanced, high contrast (15.03:1), warm, split
Primary hue: red · accent hue: lime

| role | value | |
|---|---|---|
| `background` | `#ececec` | observed |
| `foreground` | `#181818` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#181818` | derived |
| `muted` | `#d4d4d4` | derived |
| `muted-foreground` | `#8b8b8b` | observed |
| `border` | `#181818` | observed |
| `primary` | `#181818` | observed |
| `primary-foreground` | `#ececec` | derived |
| `accent` | `#ceff45` | observed |
| `accent-foreground` | `#181818` | derived |
| `ring` | `#181818` | derived |
| `success` | `#46975b` | derived |
| `warning` | `#ad771b` | derived |
| `danger` | `#c1645b` | derived |

Observed palette (share of visual weight): `#ececec` 50% · `#ffffff` 21% · `#b9686e` 13% · `#823534` 7% · `#1e1e1e` 5% · `#171717` 2% · `#d4d4d4` 1% · `#818181` 1% · `#8b8b8b` 0% · `#ff5a36` 0% · `#ceff45` 0% · `#c3abff` 0%

Gradients:
- `linear-gradient(rgba(236, 236, 236, 0.77) 0%, rgba(236, 236, 236, 0) 100%)`
- `linear-gradient(rgba(237, 237, 237, 0) 0.726703%, rgba(237, 237, 237, 0.77) 100%)`

### Typography
- Display: BT Grotesk → use **Archivo** (free alternative) · sans · custom
- Body: BT Grotesk → use **Archivo** (free alternative) · sans · custom
- UI / labels: BT Grotesk Medium → use **Inter** (free alternative) · sans · custom
- Mono: BT Glyphius / F37 Bolton (display numerals) → use **Instrument Serif** (free alternative) · display · custom
- Scale (base 16px, ratio ≈ 2.241 "golden ratio"): `sm` 10px · `base` 16px · `lg` 19px · `xl` 23px · `2xl` 180px
- H1: 180px / 400 / line-height 0.85 / tracking -0.03em, aligned left
- H2: 22px / 500 / 0.9 / -0.01em · H3: 20px / 400
- Body: 11px / 400 / line-height 1.2
- Mobile: H1 —, body 12px

### Spacing & layout
- 4px grid (52% of values conform) · scale: 4, 6, 8, 10, 18, 20, 24, 30, 32, 88
- Section padding ≈ 80px · container 1200px · mobile gutter 33px · density **balanced**
- Hero left, flex-heavy, preferred 16-column grids, ~11 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `full` full · `md` 0px · `lg` 8px — buttons unknown, cards 0px, inputs —, media 8px
- Elevation **subtle**, surfaces separated by **shadows**
  - `md`: `rgba(0,0,0,0.23) -2px 4px 4px 0px`

### Motion & effects
- Motion **subtle**: 320ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: glassmorphism (backdrop blur)
- Imagery: ~23 images/page, mostly —, 0% rounded, 2 inline SVG icons


### Components
- Primary button: —
- Secondary button: —
- Card: bg `foreground`, radius 0px, no border, shadow, padding 32/32px
- Input: —
- Links: `background`, no underline
