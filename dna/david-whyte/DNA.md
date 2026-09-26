# Design DNA — david-whyte

**Personality:** poet's companion · misty paper grey · ink-wash reveals · light serif statements · watercolour landscapes · poetry lines over black ink · quiet membership · contemplative scroll

### Color — light mode, vivid, high contrast (17.54:1), cool, multi-hue
Primary hue: violet · accent hue: yellow

| role | value | |
|---|---|---|
| `background` | `#e8e7e2` | observed |
| `foreground` | `#000000` | observed |
| `surface` | `#ffffff` | observed |
| `surface-foreground` | `#000000` | derived |
| `muted` | `#efeae2` | derived |
| `muted-foreground` | `#605e5a` | derived |
| `border` | `#d2cec7` | derived |
| `primary` | `#000000` | observed |
| `primary-foreground` | `#ffffff` | derived |
| `accent` | `#958e09` | observed |
| `accent-foreground` | `#ffffff` | derived |
| `ring` | `#000000` | derived |
| `success` | `#007f38` | derived |
| `warning` | `#8d5e00` | derived |
| `danger` | `#c2181d` | derived |

Observed palette (share of visual weight): `#efeae2` 52% · `#000000` 25% · `#720eec` 14% · `#958e09` 7% · `#d8914c` 1% · `#ffffff` 1% · `#c5c5c0` 0%

Gradients:
- `linear-gradient(90deg, rgb(233, 230, 230), rgba(233, 233, 231, 0) 65%), linear-gradient(0deg, rgb(220, 220, 220), rgb(222, 222, 221) 50%, rgb(247, 247, 246) 70%, rgb(226, 226, 225))`

### Typography
- Display: Canela Text → use **Newsreader** (free alternative) · serif · custom
- Body: Roobert → use **Inter** (free alternative) · sans · custom
- UI / labels: Times New Roman → use **Tinos** (free alternative) · serif · system
- Scale (base 18px, ratio ≈ 1.367 "perfect fourth"): `2xs` 14px · `xs` 15px · `sm` 16px · `base` 18px · `lg` 20px · `xl` 22px · `2xl` 32px · `3xl` 52px · `4xl` 86px
- H1: 86px / 300 / line-height 1.05 / tracking -0.01em, aligned left
- H2: 52px / 300 / 1.05 / 0em · H3: 24px / 300
- Body: 11px / 400 / line-height 1.4
- Mobile: H1 —, body 14px

### Spacing & layout
- 4px grid (45% of values conform) · scale: 6, 8, 10, 12, 16, 18, 20, 22, 26, 30, 32, 34, 64, 72
- Section padding ≈ 64px · container 1380px · mobile gutter 45px · density **balanced**
- Hero left, grid-heavy, preferred 24-column grids, ~14 sections, page ≈ 6.52 viewports tall
- Nav: transparent, fixed, 101px tall, has CTA button

### Shape & elevation
- Radius style **sharp**: `sm` 2px · `md` 2px · `full` full · `lg` 4px — buttons 2px, cards —, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 800ms `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Effects: none



### Components
- Primary button: bg `surface`, text `foreground`, radius 4px, height 54px, padding 16/29px, 16px/400
- Secondary button: bg `transparent`, text `foreground`, radius 0px, height 21px, padding 0/0px, 12px/400
- Card: —
- Input: —
- Links: `foreground`, no underline
