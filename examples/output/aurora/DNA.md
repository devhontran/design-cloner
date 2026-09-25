# Design DNA — aurora

**Personality:** dark-mode · vibrant · energetic · high-contrast · bold headlines · tight display tracking · uppercase eyebrow labels · dramatic type scale · spacious · premium · pill buttons · friendly · outlined surfaces · glassmorphism · gradient accents · gradient text

### Color — dark mode, vivid, high contrast (16.84:1), cool, analogous
Primary hue: violet · accent hue: sky-blue

| role | value | |
|---|---|---|
| `background` | `#0b0b12` | observed |
| `foreground` | `#ededf5` | observed |
| `surface` | `#14141f` | observed |
| `surface-foreground` | `#ededf5` | derived |
| `muted` | `#1f1f27` | derived |
| `muted-foreground` | `#9a9ab0` | observed |
| `border` | `#26263a` | observed |
| `primary` | `#7c5cff` | observed |
| `primary-foreground` | `#ffffff` | observed |
| `accent` | `#22d3ee` | observed |
| `accent-foreground` | `#0a0a0a` | derived |
| `ring` | `#7c5cff` | derived |
| `success` | `#009a46` | derived |
| `warning` | `#ab7300` | derived |
| `danger` | `#de3c37` | derived |

Observed palette (share of visual weight): `#0b0b12` 51% · `#9a9ab0` 18% · `#7c5cff` 15% · `#22d3ee` 8% · `#14141f` 4% · `#ededf5` 4% · `#231d46` 0%

Gradients:
- `linear-gradient(135deg, rgb(124, 92, 255), rgb(34, 211, 238))`
- `linear-gradient(90deg, rgb(124, 92, 255), rgb(34, 211, 238))`
- `radial-gradient(60% 50% at 50% 0%, rgba(124, 92, 255, 0.35), rgba(0, 0, 0, 0) 70%)`

### Typography
- Display: Inter · sans · google
- Body: Inter · sans · google
- Scale (base 16px, ratio ≈ 1.651 "golden ratio"): `xs` 12px · `sm` 14px · `base` 16px · `lg` 20px · `xl` 48px · `2xl` 72px
- H1: 72px / 700 / line-height 1.05 / tracking -0.035em, aligned center
- H2: 48px / 700 / 1.1 / -0.03em · H3: 20px / 600
- Body: 16px / 400 / line-height 1.6
- Eyebrow label: 12px / 600 / uppercase / tracking 0.12em
- Mobile: H1 72px, body 20px

### Spacing & layout
- 8px grid (92% of values conform) · scale: 8, 12, 16, 20, 24, 32, 40, 48, 64, 112
- Section padding ≈ 112px · container 1200px · mobile gutter 24px · density **airy**
- Hero centered, flex-heavy, preferred 3-column grids, ~2 sections, page ≈ 2.02 viewports tall
- Nav: glass, sticky, 65px tall, has CTA button, bottom border

### Shape & elevation
- Radius style **pill-soft**: `sm` 12px · `md` 16px · `lg` 24px · `full` full — buttons pill, cards 16px, inputs 12px, media —
- Elevation **soft**, surfaces separated by **borders**
  - `md`: `rgba(123,92,255,0.35) 0px 8px 24px 0px`

### Motion & effects
- Motion **subtle**: 200ms `cubic-bezier(0.2, 0, 0, 1)`
- Effects: glassmorphism (backdrop blur), gradients, gradient text



### Components
- Primary button: bg `primary`, text `primary-foreground`, radius pill, height 44px, padding 12/20px, 14px/600, shadow
- Secondary button: bg `transparent`, text `foreground`, radius pill, height 44px, padding 12/20px, 14px/600, border 1px solid #26263a
- Card: bg `surface`, radius 16px, border 1px solid #26263a, no shadow, padding 32/32px
- Input: bg `surface`, radius 12px, height 44px, 1px solid #26263a
- Links: —
