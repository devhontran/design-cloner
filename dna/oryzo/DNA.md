# Design DNA — oryzo

**Personality:** product parody · warm espresso dark · cork orange · single 3D hero object · scroll-rotated product · blur-in headlines · tiny footnote asterisks · lusion craft

### Color — dark mode, balanced, high contrast (17.26:1), warm, single-hue
Primary hue: orange · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#100904` | observed |
| `foreground` | `#ffedd7` | observed |
| `surface` | `#1b140d` | derived |
| `surface-foreground` | `#ffedd7` | derived |
| `muted` | `#241a12` | derived |
| `muted-foreground` | `#9f9283` | derived |
| `border` | `#40362e` | observed |
| `primary` | `#ffedd7` | observed |
| `primary-foreground` | `#100904` | derived |
| `accent` | `#dc5000` | observed |
| `accent-foreground` | `#ffedd7` | derived |
| `ring` | `#dc5000` | derived |
| `success` | `#009f48` | derived |
| `warning` | `#b17700` | derived |
| `danger` | `#df4841` | derived |

Observed palette (share of visual weight): `#100904` 53% · `#ffedd7` 25% · `#dc5000` 10% · `#9b734f` 4% · `#855c3d` 3% · `#be8858` 3% · `#67452c` 1% · `#caaf90` 1% · `#382416` 0%

Gradients:
- `repeating-linear-gradient(90deg, rgb(255, 237, 215) 0px, rgb(255, 237, 215) 2px, rgba(255, 237, 215, 0) 0px, rgba(255, 237, 215, 0) 4px)`

### Typography
- Display: Halyard Display → use **Hanken Grotesk** (free alternative) · display · custom
- Body: Halyard Display → use **Hanken Grotesk** (free alternative) · display · custom
- UI / labels: Arial → use **Inter** (free alternative) · sans · system
- Scale (base 14px, ratio ≈ 1.248 "major third"): `sm` 12px · `base` 14px · `lg` 14px · `xl` 18px · `2xl` 24px · `3xl` 29px · `4xl` 41px · `5xl` 51px
- H1: 160px / 700 / line-height 0.9 / tracking -0.02em / uppercase, aligned left
- H2: 72px / 600 / 0.95 / -0.02em · H3: 29px / 600
- Body: 14px / 500 / line-height 1.2
- Mobile: H1 99.84px, body —

### Spacing & layout
- 4px grid (37% of values conform) · scale: 2, 4, 6, 8, 10, 12, 14, 18, 24, 32, 42, 46, 68, 204
- Section padding ≈ 24px · container 1200px · mobile gutter 15px · density **dense**
- Hero left, flex-heavy, preferred 16-column grids, ~8 sections, page ≈ 62.99 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 12px · `full` full — buttons pill, cards 0px, inputs 0px, media 0px
- Elevation **soft**, surfaces separated by **borders**
  - `sm`: `rgba(255,160,0,1) 0px 0px 3px 2px inset, rgba(224,112,16,1) 0px 0px 8px 4px inset`
  - `lg`: `rgba(255,140,0,0.6) 0px 0px 10px 3px`

### Motion & effects
- Motion **minimal**: 300ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: none
- Imagery: ~1 images/page, mostly wide, 0% rounded, 6 inline SVG icons


### Components
- Primary button: bg `muted`, text `foreground`, radius pill, height 46px, padding 14/24px, 12px/500, uppercase, border 2px solid #000000
- Secondary button: bg `transparent`, text `foreground`, radius pill, height 26px, padding 8/0px, 7.5px/500, uppercase, border 1px dashed #ffedd7
- Card: bg `null`, radius 0px, border 1px dashed #ffebd7, no shadow, padding 18/18px
- Input: bg `null`, radius 0px, height 54px, no border
- Links: `primary`, no underline
