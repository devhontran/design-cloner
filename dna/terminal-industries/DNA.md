# Design DNA — terminal-industries

**Personality:** logistics ai · white + deep teal · acid lime signal · cinematic dusk truck · wireframe point clouds · notched section edges · mono micro-labels · enterprise-premium

### Color — light mode, vivid, high contrast (16.35:1), cool, analogous
Primary hue: lime · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#ffffff` | observed |
| `foreground` | `#052424` | observed |
| `surface` | `#f0f0f0` | observed |
| `surface-foreground` | `#052424` | derived |
| `muted` | `#f0f0f0` | derived |
| `muted-foreground` | `#4c6161` | observed |
| `border` | `#cdd1d1` | observed |
| `primary` | `#abff02` | observed |
| `primary-foreground` | `#052424` | observed |
| `accent` | `#052424` | observed |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#abff02` | derived |
| `success` | `#00c55b` | derived |
| `warning` | `#db9400` | derived |
| `danger` | `#ff7266` | derived |

Observed palette (share of visual weight): `#ffffff` 56% · `#abff02` 21% · `#052424` 11% · `#1f1f1f` 4% · `#dddddd` 2% · `#000000` 2% · `#e2ba8a` 2% · `#77b201` 1% · `#f0f0f0` 1% · `#694a31` 0% · `#95724d` 0% · `#ddff9a` 0%

Gradients:
- `linear-gradient(0deg, rgba(255, 255, 255, 0), rgb(229, 229, 229))`
- `radial-gradient(circle, rgba(171, 255, 2, 0.4), rgba(0, 0, 0, 0) 128px)`
- `radial-gradient(circle, rgb(171, 255, 2), rgba(0, 0, 0, 0) 240px)`
- `radial-gradient(rgba(171, 255, 2, 0.15) 0px, rgba(0, 0, 0, 0) 65%)`

### Typography
- Display: SuisseIntl → use **Inter** (free alternative) · sans · custom
- Body: SuisseIntl → use **Inter** (free alternative) · sans · custom
- UI / labels: Poppins · sans · google
- Mono: Geist Mono · mono · google
- Scale (base 18px, ratio ≈ 1.244 "major third"): `2xs` 14px · `xs` 15px · `sm` 16px · `base` 18px · `lg` 20px · `xl` 23px · `2xl` 35px · `3xl` 38px · `4xl` 46px · `5xl` 70px · `6xl` 83px
- H1: 70px / 400 / line-height 0.95 / tracking -0.051em, aligned center
- H2: 70px / 400 / 1 / -0.018em · H3: 23px / 400
- Body: 18px / 400 / line-height 1.4
- Eyebrow label: 13px / 600 / uppercase / tracking 0.18em
- Mobile: H1 29.9988px, body 18px

### Spacing & layout
- 4px grid (59% of values conform) · scale: 4, 8, 10, 12, 14, 16, 18, 20, 24, 32, 38, 40, 48, 60
- Section padding ≈ 135px · container 1300px · mobile gutter 121px · density **airy**
- Hero centered, flex-heavy, preferred 12-column grids, ~69 sections, page ≈ 17.64 viewports tall
- Nav: transparent, fixed, 78px tall, has CTA button

### Shape & elevation
- Radius style **very-rounded**: `sm` 8px · `md` 12px · `lg` 20px · `xl` 24px · `full` full — buttons 0px, cards 20px, inputs 0px, media 0px
- Elevation **subtle**, surfaces separated by **shadows**
  - `sm`: `rgba(255,255,255,0.06) 0px 1px 0px 0px inset, rgba(0,0,0,0.25) 0px 40px 80px 0px`
  - `lg`: `rgba(0, 0, 0, 0) 0px 0px 0px 0px`

### Motion & effects
- Motion **subtle**: 400ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: glassmorphism (backdrop blur), gradients
- Imagery: ~51 images/page, mostly landscape, 0% rounded, 35 inline SVG icons, uses video


### Components
- Primary button: bg `primary`, text `primary-foreground`, radius 4px, height 28px, padding 0/12px, 9px/500, uppercase
- Secondary button: bg `transparent`, text `border`, radius 8px, height 58px, padding 12/18px, 13px/600, uppercase, border 1px solid #c2c2c2
- Card: bg `surface`, radius 24px, no border, no shadow, padding 40/40px
- Input: bg `null`, radius 0px, height 18px, no border
- Links: `background`, no underline
