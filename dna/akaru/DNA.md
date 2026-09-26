# Design DNA — akaru

**Personality:** lyon web agency · ultra-condensed wordmark · pastel colour slabs · horizontal scroll gallery · light grotesk headlines · pill buttons with dot · awards ledger · black footer giant logo

### Color — dark mode, vivid, high contrast (19.3:1), cool, split
Primary hue: violet · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#f1efeb` | observed |
| `foreground` | `#0e0e0e` | observed |
| `surface` | `#0e0e0e` | derived |
| `surface-foreground` | `#ffffff` | derived |
| `muted` | `#bfccd8` | derived |
| `muted-foreground` | `#6b6b6b` | derived |
| `border` | `#0e0e0e` | observed |
| `primary` | `#0e0e0e` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#e49366` | observed |
| `accent-foreground` | `#0e0e0e` | derived |
| `ring` | `#e49366` | derived |
| `success` | `#008c3f` | derived |
| `warning` | `#9d6900` | derived |
| `danger` | `#d02c2b` | derived |

Observed palette (share of visual weight): `#0e0e0e` 43% · `#7345ff` 19% · `#ffffff` 16% · `#f1efeb` 9% · `#bfccd8` 7% · `#e49366` 2% · `#b692a1` 2% · `#3163cb` 1% · `#798e7b` 1%

### Typography
- Display: Alliance Neue → use **Inter** (free alternative) · sans · custom
- Body: Alliance Neue → use **Inter** (free alternative) · sans · custom
- UI / labels: Alliance Platt → use **Newsreader** (free alternative) · serif · custom
- Mono: Akaru wordmark (ultra-condensed) → use **Big Shoulders Display** (free alternative) · sans · custom
- Scale (base 18px, ratio ≈ 1.322 "perfect fourth"): `2xs` 10px · `xs` 12px · `sm` 16px · `base` 18px · `lg` 20px · `xl` 32px · `2xl` 54px · `3xl` 64px · `4xl` 72px · `5xl` 96px
- H1: 96px / 400 / line-height 1 / tracking -0.03em, aligned left
- H2: 64px / 400 / 1 / -0.03em · H3: 32px / 500
- Body: 18px / 400 / line-height 1.5
- Mobile: H1 33.28px, body 16.64px

### Spacing & layout
- 4px grid (18% of values conform) · scale: 2, 6, 8, 10, 14, 18, 20, 22, 30, 40, 130, 160
- Section padding ≈ 90px · container 1120px · mobile gutter 24px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~61 sections, page ≈ 27.84 viewports tall
- Nav: transparent, fixed, 90px tall

### Shape & elevation
- Radius style **rounded**: `sm` 4px · `full` full · `md` 14px · `lg` 24px — buttons pill, cards —, inputs —, media 0px
- Elevation **subtle**, surfaces separated by **color-blocks**
  - `md`: `rgba(14,14,14,1) 0px 0px 0px 0.999994px inset`

### Motion & effects
- Motion **subtle**: 300ms `cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- Effects: none
- Imagery: ~20 images/page, mostly square, 0% rounded, 85 inline SVG icons


### Components
- Primary button: bg `surface`, text `surface-foreground`, radius pill, height 32px, padding 0/16px, 9px/500, uppercase
- Secondary button: —
- Card: —
- Input: —
- Links: `background`, no underline
