# Design DNA — sondaven

**Personality:** carpathian heritage · sand + umber duotone · flared roman caps · wide technical labels · vertical-bar dissolves · tilted photo cards · split giant headlines · investment resort

### Color — dark mode, muted, soft contrast (4.98:1), warm, single-hue
Primary hue: yellow · accent hue: yellow

| role | value | |
|---|---|---|
| `background` | `#2c2824` | observed |
| `foreground` | `#a89474` | observed |
| `surface` | `#a89474` | derived |
| `surface-foreground` | `#2c2824` | derived |
| `muted` | `#39342f` | derived |
| `muted-foreground` | `#8a7a60` | derived |
| `border` | `#a89474` | observed |
| `primary` | `#a89474` | observed |
| `primary-foreground` | `#2c2824` | derived |
| `accent` | `#f4efe6` | derived |
| `accent-foreground` | `#2c2824` | derived |
| `ring` | `#a89474` | derived |
| `success` | `#5bac6f` | derived |
| `warning` | `#c28b36` | derived |
| `danger` | `#d7786e` | derived |

Observed palette (share of visual weight): `#a89474` 62% · `#2c2824` 36% · `#ffffff` 1% · `#978568` 1% · `#6a5e4c` 0% · `#000000` 0%

Gradients:
- `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`

### Typography
- Display: KTF Metro Roman → use **Marcellus** (free alternative) · sans · custom
- Body: KTF Metro Blueline → use **Michroma** (free alternative) · sans · custom
- Scale (base 16px, ratio ≈ 1.316 "perfect fourth"): `xs` 10px · `sm` 12px · `base` 16px · `lg` 20px · `xl` 24px · `2xl` 32px · `3xl` 40px · `4xl` 56px · `5xl` 72px · `6xl` 96px · `7xl` 144px
- H1: 96px / 400 / line-height 0.95 / tracking -0.01em / uppercase, aligned left
- H2: 72px / 400 / 1 / 0em · H3: 32px / 400
- Body: 10px / 400 / line-height 1.6
- Eyebrow label: 10px / 400 / uppercase / tracking 0.08em
- Mobile: H1 12.1875px, body 10.1562px

### Spacing & layout
- 8px grid (80% of values conform) · scale: 2, 4, 8, 12, 16, 24, 32, 48, 60
- Section padding ≈ 900px · container 930px · mobile gutter 12px · density **airy**
- Hero left, flex-heavy, preferred 12-column grids, ~80 sections, page ≈ 36.89 viewports tall
- Nav: transparent, fixed, 76px tall

### Shape & elevation
- Radius style **sharp**: `sm` 0px · `full` full · `md` 0px · `lg` 0px — buttons pill, cards 0px, inputs —, media 0px
- Elevation **flat**, surfaces separated by **color-blocks**

### Motion & effects
- Motion **expressive**: 600ms `cubic-bezier(0.25, 1, 0.5, 1)`
- Effects: none
- Imagery: ~46 images/page, mostly portrait, 0% rounded, 100 inline SVG icons, uses video


### Components
- Primary button: bg `surface-foreground`, text `primary`, radius pill, height 26px, padding 0/18px, 9px/400, uppercase
- Secondary button: —
- Card: bg `foreground`, radius 0px, no border, no shadow, padding 0/0px
- Input: —
- Links: —
