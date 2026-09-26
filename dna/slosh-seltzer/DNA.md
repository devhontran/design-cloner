# Design DNA — slosh-seltzer

**Personality:** party seltzer brand · bubblegum pink + cherry red + kelly green · ultra-condensed caps · inline-striped letterforms · 3D can hero · sticker confetti · rotating badge text · playful webgl

### Color — light mode, vivid, medium contrast (12.4:1), warm, multi-hue
Primary hue: red · accent hue: green

| role | value | |
|---|---|---|
| `background` | `#00a165` | observed |
| `foreground` | `#ffc1ff` | derived |
| `surface` | `#ffc1ff` | derived |
| `surface-foreground` | `#ff0837` | derived |
| `muted` | `#ffabe7` | derived |
| `muted-foreground` | `#ff79b1` | derived |
| `border` | `#ffc1ff` | derived |
| `primary` | `#ff0837` | observed |
| `primary-foreground` | `#ffc1ff` | derived |
| `accent` | `#ffc1ff` | observed |
| `accent-foreground` | `#00a165` | derived |
| `ring` | `#ff0837` | derived |
| `success` | `#00a64c` | derived |
| `warning` | `#b87c00` | derived |
| `danger` | `#ea4841` | derived |

Observed palette (share of visual weight): `#ffc1ff` 38% · `#ff0837` 31% · `#ffffff` 13% · `#000000` 13% · `#00a165` 5% · `#ffabe7` 0% · `#ff79b1` 0% · `#ff386b` 0%

### Typography
- Display: Steelfish → use **Big Shoulders Display** (free alternative) · sans · custom
- Body: FK Grotesk → use **Space Mono** (free alternative) · sans · custom
- UI / labels: FKGrotesk-Medium → use **Inter** (free alternative) · sans · custom
- Scale (base 16px, ratio ≈ 1.897 "golden ratio"): `xs` 11px · `sm` 12px · `base` 16px · `lg` 24px · `xl` 38px · `2xl` 40px · `3xl` 207px
- H1: 207px / 800 / line-height 0.85 / tracking -0.01em / uppercase, aligned left
- H2: 100px / 800 / 0.9 / 0em · H3: 20px / 700
- Body: 10px / 400 / line-height 1.4
- Mobile: H1 32px, body 12px

### Spacing & layout
- 4px grid (39% of values conform) · scale: 20, 22, 28, 34, 50, 54, 82, 92, 100
- Section padding ≈ 80px · container 1200px · mobile gutter 59px · density **balanced**
- Hero left, flex-heavy, preferred 3-column grids, ~11 sections, page ≈ 1 viewports tall


### Shape & elevation
- Radius style **sharp**: `sm` 0px · `md` 0px · `lg` 0px · `full` full — buttons pill, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 600ms `cubic-bezier(0.215, 0.61, 0.355, 1)`, 5 animated elements
- Effects: none
- Imagery: ~1 images/page, mostly square, 0% rounded, 2 inline SVG icons


### Components
- Primary button: bg `primary`, text `primary-foreground`, radius pill, height 38px, padding 0/40px, 13px/800, uppercase
- Secondary button: —
- Card: —
- Input: —
- Links: `primary`, no underline
