# Design DNA — by-kin

**Personality:** manchester interiors & branding studio · warm off-white + coral · monospace-style wordmark · switchable layouts · underlined nav links · tiny mono caps labels · line-drawn team illustration · stacked project-name index

### Color — light mode, vivid, high contrast (16.75:1), warm, single-hue
Primary hue: red · accent hue: red

| role | value | |
|---|---|---|
| `background` | `#f4f2ed` | observed |
| `foreground` | `#111214` | observed |
| `surface` | `#111214` | derived |
| `surface-foreground` | `#f4f2ed` | derived |
| `muted` | `#e8e5de` | derived |
| `muted-foreground` | `#6c6c6b` | derived |
| `border` | `#111214` | observed |
| `primary` | `#fe6e4e` | observed |
| `primary-foreground` | `#111214` | derived |
| `accent` | `#fe6e4e` | derived |
| `accent-foreground` | `#111214` | derived |
| `ring` | `#fe6e4e` | derived |
| `success` | `#29c05f` | derived |
| `warning` | `#d79100` | derived |
| `danger` | `#ff6b60` | derived |

Observed palette (share of visual weight): `#f4f2ed` 53% · `#111214` 26% · `#fe6e4e` 20% · `#8a583d` 1%

### Typography
- Display: Apercu Pro → use **DM Sans** (free alternative) · sans · custom
- Body: Apercu Pro → use **DM Sans** (free alternative) · sans · custom
- Mono: Apercu Mono Pro → use **DM Mono** (free alternative) · mono · custom
- Scale (base 16px, ratio ≈ 1.688 "golden ratio"): `base` 16px · `lg` 27px
- H1: 72px / 500 / line-height 1 / tracking -0.02em, aligned left
- H2: 27px / 500 / 1.05 / 0em · H3: 20px / 700
- Body: 9px / 400 / line-height 1.4
- Mobile: H1 46px, body 16px

### Spacing & layout
- 4px grid (0% of values conform) · scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section padding ≈ 80px · container 1200px · mobile gutter 93px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~10 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons 0px, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 1200ms `cubic-bezier(0.76, 0, 0.24, 1)`
- Effects: none
- Imagery: ~11 images/page, mostly landscape, 0% rounded, 4 inline SVG icons


### Components
- Primary button: —
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 32px, padding 0/0px, 12px/400
- Card: —
- Input: —
- Links: —
