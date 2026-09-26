# Design DNA — serious-business

**Personality:** b2b branding agency · bubblegum pink base · lilac + sunflower + black service slabs · heavy caps wordmark with smiley · white pill buttons + arrow circle · serif sub-captions · stacked sticky service cards · cheeky seriousness

### Color — light mode, vivid, medium contrast (10.86:1), warm, multi-hue
Primary hue: pink · accent hue: violet

| role | value | |
|---|---|---|
| `background` | `#fbc1d4` | observed |
| `foreground` | `#1e1e1e` | observed |
| `surface` | `#1e1e1e` | observed |
| `surface-foreground` | `#fbc1d4` | derived |
| `muted` | `#ffffff` | derived |
| `muted-foreground` | `#765f67` | derived |
| `border` | `#1e1e1e` | observed |
| `primary` | `#ff7ec4` | observed |
| `primary-foreground` | `#1e1e1e` | observed |
| `accent` | `#c3abff` | observed |
| `accent-foreground` | `#1e1e1e` | derived |
| `ring` | `#ff7ec4` | derived |
| `success` | `#3ac266` | derived |
| `warning` | `#db9400` | derived |
| `danger` | `#ff7267` | derived |

Observed palette (share of visual weight): `#fbc1d4` 57% · `#1e1e1e` 27% · `#ff7ec4` 6% · `#ffffff` 5% · `#c3abff` 3% · `#fed35b` 2% · `#df9cb3` 0%

Gradients:
- `linear-gradient(rgba(0, 0, 0, 0) calc(100% - 1px), rgb(30, 30, 30) 1px)`

### Typography
- Display: PP Mori → use **Manrope** (free alternative) · sans · custom
- Body: PP Mori → use **Manrope** (free alternative) · sans · custom
- UI / labels: Nib Pro → use **Inter** (free alternative) · sans · custom
- Mono: Nib Pro (serif) → use **Newsreader** (free alternative) · serif · custom
- Scale (base 14px, ratio ≈ 1.292 "perfect fourth"): `xs` 11px · `sm` 12px · `base` 14px · `lg` 14px · `xl` 15px · `2xl` 18px · `3xl` 21px · `4xl` 24px · `5xl` 36px · `6xl` 72px · `7xl` 105px
- H1: 120px / 800 / line-height 0.9 / tracking -0.02em / uppercase, aligned center
- H2: 64px / 400 / 1 / -0.02em · H3: 24px / 600
- Body: 14px / 400 / line-height 1.2
- Eyebrow label: 10.5px / 600 / uppercase / tracking 0.04em
- Mobile: H1 24.96px, body 16.64px

### Spacing & layout
- 4px grid (47% of values conform) · scale: 3, 6, 10, 12, 16, 18, 24, 30, 48, 50, 54, 60, 68, 92
- Section padding ≈ 60px · container 1390px · mobile gutter 21px · density **balanced**
- Hero centered, flex-heavy, preferred 3-column grids, ~31 sections, page ≈ 10.35 viewports tall


### Shape & elevation
- Radius style **soft**: `sm` 6px · `md` 12px · `full` full · `lg` 12px — buttons pill, cards 6px, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 500ms `cubic-bezier(0.5, 1, 0.89, 1)`
- Effects: none
- Imagery: ~14 images/page, mostly landscape, 53% rounded, 31 inline SVG icons, uses video


### Components
- Primary button: bg `primary`, text `foreground`, radius pill, height 43px, padding 12/24px, 13.5px/600
- Secondary button: bg `transparent`, text `foreground`, radius pill, height 43px, padding 12/24px, 13.5px/600, border 1px solid #1e1e1e
- Card: bg `#ffffff`, radius 12px, no border, no shadow, padding 0/0px
- Input: —
- Links: `foreground`, no underline
