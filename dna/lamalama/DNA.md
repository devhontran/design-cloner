# Design DNA — lamalama

**Personality:** amsterdam agency · graphite + cream · halftone dot texture · heavy caps headlines · bracketed mono labels · floating widget stack · pixel logo · live clock footer

### Color — dark mode, vivid, high contrast (15.62:1), warm, single-hue
Primary hue: red · accent hue: red

| role | value | |
|---|---|---|
| `background` | `#1a1c1c` | observed |
| `foreground` | `#f9f4eb` | observed |
| `surface` | `#232525` | observed |
| `surface-foreground` | `#f9f4eb` | derived |
| `muted` | `#303231` | derived |
| `muted-foreground` | `#a09e98` | derived |
| `border` | `#474745` | observed |
| `primary` | `#f9f4eb` | observed |
| `primary-foreground` | `#1a1c1c` | derived |
| `accent` | `#ff0000` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#f9f4eb` | derived |
| `success` | `#00a44b` | derived |
| `warning` | `#b67b00` | derived |
| `danger` | `#e94640` | derived |

Observed palette (share of visual weight): `#f9f4eb` 27% · `#1a1c1c` 26% · `#303231` 22% · `#ff0000` 21% · `#000000` 4% · `#ffffff` 0%

### Typography
- Display: SuisseBPIntl → use **Inter** (free alternative) · sans · custom
- Body: SuisseBPIntl → use **Inter** (free alternative) · sans · custom
- UI / labels: Sometype → use **Inter** (free alternative) · sans · custom
- Mono: Sometype Mono · mono · google
- Scale (base 16px, ratio ≈ 1.308 "perfect fourth"): `xs` 10px · `sm` 14px · `base` 16px · `lg` 20px · `xl` 32px · `2xl` 40px · `3xl` 48px · `4xl` 72px · `5xl` 80px
- H1: 72px / 700 / line-height 0.8 / tracking -0.02em / uppercase, aligned left
- H2: 56px / 700 / 1.15 / -0.01em · H3: 20px / 700
- Body: 16px / 400 / line-height 1.4
- Mobile: H1 40px, body 16px

### Spacing & layout
- 8px grid (72% of values conform) · scale: 2, 4, 8, 10, 12, 16, 20, 24, 32, 40, 56, 102, 232
- Section padding ≈ 56px · container 1360px · mobile gutter 16px · density **balanced**
- Hero left, flex-heavy, preferred 12-column grids, ~39 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 2px · `md` 2px · `full` full · `lg` 2px — buttons 0px, cards 0px, inputs 0px, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **minimal**: 200ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: glassmorphism (backdrop blur)
- Imagery: ~4 images/page, mostly wide, 0% rounded, 55 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 50px, padding 0/0px, 16px/400
- Card: bg `surface`, radius 0px, no border, no shadow, padding 0/0px
- Input: bg `null`, radius 0px, height 22px, no border
- Links: —
