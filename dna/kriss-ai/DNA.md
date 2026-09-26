# Design DNA — kriss-ai

**Personality:** ai chatbot for dentists · isometric 3D clinic dollhouse · pastel pink + lilac + mint · frosted glass info cards · corner-bracket frames · camera-tour navigation · typewriter hero · soft clay renders

### Color — light mode, muted, high contrast (21:1), cool, complementary
Primary hue: green · accent hue: purple-magenta

| role | value | |
|---|---|---|
| `background` | `#e9dfe1` | observed |
| `foreground` | `#0f0f0f` | observed |
| `surface` | `#f4efef` | derived |
| `surface-foreground` | `#000000` | derived |
| `muted` | `#ded2d5` | derived |
| `muted-foreground` | `#5a5557` | observed |
| `border` | `#ffffff` | observed |
| `primary` | `#0f0f0f` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#cbaed9` | observed |
| `accent-foreground` | `#0f0f0f` | derived |
| `ring` | `#0f0f0f` | derived |
| `success` | `#287c42` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#a34942` | derived |

Observed palette (share of visual weight): `#ffffff` 71% · `#000000` 11% · `#0f0f0f` 7% · `#1a3d1c` 3% · `#afd9ae` 3% · `#74be91` 3% · `#cbaed9` 1% · `#6c0000` 1% · `#181a5a` 1%

Gradients:
- `radial-gradient(57.58% 71.02% at 45% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(73.61% 153.78% at 43.64% -58.9%, rgba(242, 242, 242, 0.33) 0%, rgba(242, 242, 242, 0) 100%), linear-gradient(rgba(242, 242, 242, 0.05) 0%, rgba(242, 242, 242, 0.02) 100%)`

### Typography
- Display: Krissai (geometric sans) → use **Manrope** (free alternative) · sans · custom
- Body: Krissai → use **Manrope** (free alternative) · sans · custom
- Scale (base 14px, ratio ≈ 2.07 "golden ratio"): `sm` 12px · `base` 14px · `lg` 24px · `xl` 60px
- H1: 48px / 700 / line-height 1.1 / tracking -0.02em, aligned left
- H2: 30px / 500 / 1.1 / -0.01em · H3: 18px / 700
- Body: 11px / 400 / line-height 1.4
- Mobile: H1 —, body —

### Spacing & layout
- 4px grid (26% of values conform) · scale: 2, 6, 8, 10, 16, 20, 30, 50
- Section padding ≈ 80px · container 1200px · mobile gutter 24px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~3 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **soft**: `sm` 2px · `md` 4px · `lg` 8px · `full` full — buttons 0px, cards —, inputs —, media 0px
- Elevation **dramatic**, surfaces separated by **color-blocks**
  - `md`: `rgba(64,179,166,0.08) 10px 10px 40px 0px, rgba(66,181,165,0.12) 5px 14px 80px 0px`

### Motion & effects
- Motion **subtle**: 300ms `cubic-bezier(0.25, 0.1, 0.25, 1)`, 1 animated elements
- Effects: glassmorphism (backdrop blur)



### Components
- Primary button: bg `muted-foreground`, text `background`, radius 0px, height 47px, padding 0/30px, 14px/400
- Secondary button: —
- Card: —
- Input: —
- Links: `muted-foreground`, no underline
