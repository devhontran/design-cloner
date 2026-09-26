# Design DNA — hellomonday-style

**Personality:** playful digital agency · white page + line-drawn characters · light slab-serif word cycling · portrait project posters · one bespoke world per project · sound-on interactive experiences · enter / start gates · tiny sans captions

### Color — dark mode, balanced, high contrast (21:1), warm, multi-hue
Primary hue: pink · accent hue: yellow

| role | value | |
|---|---|---|
| `background` | `#ffffff` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#000000` | observed |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#f2f2f2` | derived |
| `muted-foreground` | `#8a8a8a` | observed |
| `border` | `#e6e6e6` | observed |
| `primary` | `#000000` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#6a3cff` | observed |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#4eaf68` | derived |
| `warning` | `#c98915` | derived |
| `danger` | `#e07368` | derived |

Observed palette (share of visual weight): `#000000` 31% · `#ffffff` 27% · `#db7093` 7% · `#fff5c3` 6% · `#683aff` 5% · `#3171de` 5% · `#d6bdb6` 5% · `#e7e5df` 4% · `#ffe090` 3% · `#edbc68` 3% · `#5ab400` 2% · `#d65e3d` 2%

Gradients:
- `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(50, 254, 255, 0.5), rgba(0, 0, 0, 0))`
- `radial-gradient(circle, rgba(255, 0, 0, 0.4) 0.8px, rgba(0, 0, 0, 0) 1px), radial-gradient(circle, rgba(0, 255, 255, 0.4) 0.8px, rgba(0, 0, 0, 0) 1px)`
- `radial-gradient(rgba(50, 254, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%)`
- `radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(10, 0, 0, 0) 100%), linear-gradient(rgba(10, 0, 0, 0.1) 0%, rgba(10, 0, 0, 0.3) 70%, rgb(10, 0, 0) 100%)`

### Typography
- Display: Clarendon BT Light → use **Rokkitt** (free alternative) · sans · custom
- Body: NB International Pro → use **Inter** (free alternative) · sans · custom
- UI / labels: Orbitron · mono · google
- Mono: Tabular → use **JetBrains Mono** (free alternative) · mono · custom
- Scale (base 13px, ratio ≈ 1.107 "major second"): `xs` 10px · `sm` 12px · `base` 13px · `lg` 14px · `xl` 16px · `2xl` 18px · `3xl` 20px · `4xl` 23px · `5xl` 25px · `6xl` 28px · `7xl` 31px · `8xl` 32px · `9xl` 36px
- H1: 64px / 300 / line-height 1 / tracking -0.01em, aligned center
- H2: 40px / 300 / 1.05 / -0.01em · H3: 18px / 400
- Body: 11px / 400 / line-height 1.35
- Eyebrow label: 12px / 500 / uppercase / tracking 0.3em
- Mobile: H1 40px, body 12px

### Spacing & layout
- 4px grid (48% of values conform) · scale: 3, 6, 8, 10, 12, 14, 16, 20, 24, 30, 32, 40, 48, 50
- Section padding ≈ 71px · container 1300px · mobile gutter 19px · density **balanced**
- Hero centered, flex-heavy, preferred 3-column grids, ~8 sections, page ≈ 2.53 viewports tall
- Nav: transparent, static, 96px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons pill, cards 0px, inputs 0px, media 0px
- Elevation **subtle**, surfaces separated by **borders**
  - `sm`: `rgba(255,255,255,0.54) 10px 0px 0px 0px, rgba(255,255,255,0.54) -10px 0px 0px 0px`
  - `md`: `rgba(0,0,0,0.4) 0px 0px 2px 0px`
  - `lg`: `rgba(0,0,0,0.2) 0px 0px 5px 0px`

### Motion & effects
- Motion **expressive**: 700ms `cubic-bezier(0.65, 0, 0.35, 1)`, 18 animated elements
- Effects: glassmorphism (backdrop blur), gradients
- Imagery: ~5 images/page, mostly landscape, 0% rounded, 6 inline SVG icons, uses video


### Components
- Primary button: bg `#32feff`, text `background`, radius 0px, height 52px, padding 16/32px, 14px/600, uppercase, border 1px solid #32feff
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 28px, padding 0/0px, 16px/500
- Card: bg `background`, radius 0px, border 1px solid #ffffff, no shadow, padding 0/0px
- Input: bg `background`, radius 0px, height 52px, 1px solid #ffffff
- Links: `background`, no underline
