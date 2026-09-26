# Design DNA — floema

**Personality:** sustainable street furniture · warm paper + citron · floating product cutouts · full-bleed category chapters · white pill nav · line-drawing footer · calm catalogue · portuguese manufacturer

### Color — light mode, balanced, medium contrast (14.16:1), cool, analogous
Primary hue: yellow · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#f2efea` | observed |
| `foreground` | `#241f21` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#241f21` | derived |
| `muted` | `#e7e3dc` | derived |
| `muted-foreground` | `#8b8786` | observed |
| `border` | `#241f21` | observed |
| `primary` | `#e9e778` | observed |
| `primary-foreground` | `#241f21` | derived |
| `accent` | `#042d2b` | observed |
| `accent-foreground` | `#e9e778` | derived |
| `ring` | `#241f21` | derived |
| `success` | `#60bc77` | derived |
| `warning` | `#d59732` | derived |
| `danger` | `#ed8176` | derived |

Observed palette (share of visual weight): `#f2efea` 46% · `#e9e778` 31% · `#241f21` 15% · `#988f8b` 3% · `#ffffff` 2% · `#042d2b` 2% · `#eea583` 0% · `#f76c46` 0% · `#c6af88` 0% · `#bacfa3` 0% · `#fcb131` 0%

### Typography
- Display: Zimula → use **Figtree** (free alternative) · sans · custom
- Body: Zimula → use **Figtree** (free alternative) · sans · custom
- UI / labels: sans-serif → use **Inter** (free alternative) · sans · system
- Scale (base 14px, ratio ≈ 1.192 "minor third"): `sm` 12px · `base` 14px · `lg` 15px · `xl` 16px · `2xl` 18px · `3xl` 19px · `4xl` 23px · `5xl` 44px · `6xl` 51px · `7xl` 57px
- H1: 57px / 400 / line-height 1.05 / tracking -0.04em, aligned center
- H2: 51px / 400 / 1.05 / -0.04em · H3: 57px / 400
- Body: 14px / 400 / line-height 1.4
- Mobile: H1 32px, body 15px

### Spacing & layout
- 4px grid (37% of values conform) · scale: 2, 4, 6, 10, 14, 16, 20, 24, 26, 32, 46
- Section padding ≈ 84px · container 1200px · mobile gutter 54px · density **balanced**
- Hero centered, flex-heavy, preferred 3-column grids, ~49 sections, page ≈ 15.93 viewports tall
- Nav: transparent, fixed, 86px tall

### Shape & elevation
- Radius style **soft**: `sm` 4px · `full` full · `md` 8px · `lg` 12px — buttons pill, cards 0px, inputs 0px, media 0px
- Elevation **soft**, surfaces separated by **color-blocks**
  - `md`: `rgba(0,0,0,0.15) 0px 4px 16px 0px`

### Motion & effects
- Motion **expressive**: 500ms `cubic-bezier(0.19, 1, 0.22, 1)`, 2 animated elements
- Effects: none
- Imagery: ~30 images/page, mostly landscape, 0% rounded, 32 inline SVG icons


### Components
- Primary button: bg `surface`, text `foreground`, radius pill, height 32px, padding 0/16px, 11px/500, uppercase
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 43px, padding 13/16px, 16px/400
- Card: bg `muted`, radius 0px, no border, no shadow, padding 0/0px
- Input: bg `null`, radius 0px, height 22px, no border
- Links: `foreground`, underlined
