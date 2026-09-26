# Design DNA — watson

**Personality:** la entertainment studio · white editorial · mixed serif + grotesk sentence · inline image-in-text · footnote superscripts · parentheses labels · condensed wordmark · centered statement

### Color — light mode, muted, high contrast (21:1), warm, single-hue
Primary hue: orange · accent hue: orange

| role | value | |
|---|---|---|
| `background` | `#ffffff` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#f2f2f2` | observed |
| `surface-foreground` | `#000000` | derived |
| `muted` | `#f2f2f2` | derived |
| `muted-foreground` | `#666666` | derived |
| `border` | `#000000` | derived |
| `primary` | `#000000` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#70412a` | derived |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#287c42` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#a34942` | derived |

Observed palette (share of visual weight): `#ffffff` 51% · `#000000` 26% · `#70412a` 21% · `#f2f2f2` 1%

### Typography
- Display: Condensed grotesk (wordmark) → use **Archivo Narrow** (free alternative) · sans · custom
- Body: Grotesk (thin/regular) → use **Inter** (free alternative) · sans · custom
- Mono: Editorial serif → use **Newsreader** (free alternative) · serif · custom
- Scale (base 20px, ratio ≈ 2.544 "golden ratio"): `base` 20px · `lg` 20px · `xl` 89px · `2xl` 321px
- H1: 320px / 700 / line-height 0.91 / tracking -0.018em / uppercase, aligned left
- H2: 56px / 400 / 1.05 / -0.02em · H3: 24px / 700
- Body: 12px / 400 / line-height 1.25
- Mobile: H1 124.273px, body 14.8067px

### Spacing & layout
- 4px grid (67% of values conform) · scale: 8, 20, 24, 28, 36, 88
- Section padding ≈ 29px · container 910px · mobile gutter 4px · density **dense**
- Hero left, flex-heavy, preferred 3-column grids, ~9 sections, page ≈ 1 viewports tall
- Nav: transparent, fixed, 24px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons unknown, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **minimal**: 200ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: none
- Imagery: ~2 images/page, mostly landscape, 0% rounded, 0 inline SVG icons


### Components
- Primary button: —
- Secondary button: —
- Card: —
- Input: —
- Links: `foreground`, no underline
