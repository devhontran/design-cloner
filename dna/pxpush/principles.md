Source: https://pxpush.com/ (PX PUSH, an on-demand design department / subscription design agency). A single website reference, so there is no blend.

## Essence
- It looks like a late-90s tech brochure played on a CRT monitor. Chrome 3D objects (logo, floppy disks) float over clouds and flat ultramarine, and the whole screen sits behind scanlines, a soft glow and a curved-glass vignette.
- The audience is startups and brands buying design by subscription. The tone is confident and a little ironic. The one idea is **retro hardware as the frame for a very modern, disciplined agency grid**: nostalgia in the texture, rigor in the layout.

## Composition & layout
- Split grid: a narrow left rail (~25% width) holds only a `●` bullet and a tiny mono index like `N°001 / INTRO`. Content lives in the right ~50–75%. The left half of most sections is empty or holds a single 3D object.
- 22px outer gutter at 1440 (≈1.5vw). Nav rules and list rules run the full content width.
- Hero: a sky/cloud background (vertical gradient `#003c6a → #0eaebc` into white clouds), a chrome 3D logo in the dead centre, and a **giant marquee headline** (≈173px, 1 line, scrolling horizontally, clipped at both edges) set between two full-width hairlines just under the nav. A 12px mono ASCII-framed intro block sits bottom-right: `V.02 ------ WELCOME TO PX PUSH ------ //`.
- Sections alternate as full-bleed colour fields: sky hero, cool grey `#6f7079` intro, `#1a1a1a` work, `#03049c` ultramarine benefits, `#0a0a0a` pricing, `#03049c` brand sprint and footer.
- Benefits are a **sticky accordion list**: each row has a 1px top rule, a mono index at left, a 32–41px condensed title in the middle column and a 4:3 photo at right. Rows stack and pin as you scroll.
- Work: a horizontal row of 3–4 landscape project tiles (≈16:10, 0 radius, 10px gap) bleeding off the right edge, with a 12px mono uppercase caption paragraph below.
- Pricing: a 3D floppy disk fills the left half, and the plan fills the right half. The plan has a name + price row split by a vertical hairline, a mono description, a list of 1px-ruled mono lines, and a full-width light-grey button bar.
- Footer: the wordmark set huge (≈full width) with a **liquid/melted distortion**, on ultramarine, above a 2-column list of ruled mono links with `↗`.

## Typography voice
- Two families only: a **semi-condensed grotesk** (SemiSqueezed; free substitute Roboto Condensed) for headlines and lead paragraphs, and a **monospace** (PP Neue Montreal Mono; substitute Geist Mono) for everything small.
- Display is 121–173px, weight 400, line-height 0.96, tracking about −0.01em, in sentence or title case. It is never bold and never all-caps (except the "PX PUSH" marquee).
- Lead paragraphs are 25–32px condensed, line-height ≈1.1, left-aligned, max ≈ 30ch. The first line is **hung behind a `→` arrow** placed at the column start, and the text starts with an indent.
- Mono text is 12–14px with no tracking. It is lowercase or sentence case in lists and descriptions, and UPPERCASE for micro-labels (`SCROLL DOWN TO ACCESS DEPARTMENT`, captions).
- Prices mix both families: the plan name "Standard.PKG" (dot-suffix naming) is 32px condensed. The old price is struck through right before the new price: `~~$4,000~~$3,500/mo`.
- Separators are typographic: `●` bullets between marquee phrases, `N°00X` indices, `→` and `↗` arrows, and ASCII dashes `------` as rules inside mono text.

## Color usage
- About 35% ultramarine `#03049c`, 35% near-black (`#1a1a1a` / `#0a0a0a`), 15% sky/cloud imagery, 10% cool grey, 5% light grey `#d9d9d9` (text, buttons).
- Text is **never pure white**: it is `#d9d9d9` light grey on every background, which with the scanlines gives a phosphor look.
- One signal colour: a phosphor-green `#3cff7b` dot with a soft glow next to "Get started" (a recording/online light). It is used nowhere else.
- The ultramarine is a flat field, never a gradient and never a button colour. The only gradient is the sky in the hero.

## Imagery & iconography
- **Chrome/metal 3D objects** rendered in real time: the px logo (a lens-like chrome ring) spinning in the hero and shrunk to a 50px spinning badge centred in the nav, and floppy disks (grey, then translucent) in pricing.
- Photography is retro-futurist editorial: people holding beige CRT computers, corded phones floating in the sky, paper flying in offices, and flat cyan/blue studio backdrops with warm 70s film grading.
- Project tiles are app screens and brand mock-ups on saturated backgrounds. All media have 0 radius, no border and no shadow.
- Icons are only typographic glyphs: `→`, `↗`, `●`. There are no icon sets or outlined pictograms.

## Signature details
1. **CRT screen overlay** on the entire viewport: fixed scanlines (`linear-gradient(transparent 50%, rgba(0,0,0,.3) 51%)`, 0.4vh period, ~25% opacity), a slow rolling scan bar, a light backdrop blur "gloom" (~15%), and a curved-glass vignette image (dark rounded corners). Everything reads as if on a tube monitor.
2. **Giant marquee headlines between two hairlines**: 121–173px condensed text scrolling horizontally and clipped at the viewport edges, with `●` separators ("On–Demand Design Department ● PX PUSH ● Packages ●").
3. **Chrome 3D objects**: a spinning chrome logo badge in the nav centre, and big 3D props (logo, floppy disk) occupying the empty left half of sections.
4. **Mono index rail**: a `●` bullet plus `N°00X / SECTION` in 11px mono at the left edge of every section and list row, with the content starting at the middle column.
5. **Ruled mono lists and grey button bars**: 1px rules between 14px mono lines, `↗` flush right, and CTA as a full-width `#d9d9d9` bar with dark mono text (`Get started with Standard ↗`), no radius.

## Interaction & motion
- The GSAP-driven feel is `expo.out` (≈ `cubic-bezier(0.16, 1, 0.3, 1)`), 0.5–1.2s. Split-line text reveals come up from a mask with a 0.05s stagger. Headlines "scramble" (random character shuffle) as they appear.
- Marquees move continuously and speed up with scroll velocity. The nav chrome badge rotates constantly.
- Hover: link opacity 1 → 0.7 (0.25s), arrow `↗` nudges, and the list row rule brightens. No scale, no shadow.
- Scanlines animate (`steps(60)` 1s loop plus an 8s rolling bar). Respect `prefers-reduced-motion` by freezing marquee, scan bar and 3D spin.

## Anti-patterns
- No rounded cards, pill buttons or soft UI. Radius is 0 everywhere except the tiny "POPULAR" pill tag.
- No pure white text or backgrounds (except inside photos). No drop shadows or glassmorphism cards (the blur exists only as the CRT overlay).
- No colourful gradient buttons. Ultramarine is never a small accent, only a whole section field. Green is only the status dot.
- No bold headlines, no all-caps condensed body, no icon libraries, emoji or illustration styles like flat vectors or 3D blobs.
- No centred paragraphs. Text lives in the right columns with the left rail empty.
- Don't drop the overlay. Without scanlines and vignette the page loses its identity and reads as a generic dark agency site.
