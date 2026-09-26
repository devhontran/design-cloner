Source: https://www.floema.com/en (Floema, a Portuguese maker of sustainable signage, urban furniture and equipment; Awwwards Site of the Month, May 2026). A single website reference, so there is no blend.

## Essence
- It reads like a calm, well-made product catalogue for public space. Warm off-white paper, a citron-yellow signature colour, and small product cut-outs that float in 3D space like objects in a showroom.
- The audience is municipalities, parks, golf clubs and architects. The one idea is **"spaces for people, made for life"**: products shown in place (plazas, trails, clubhouses) plus a light, friendly, eco-conscious tone.

## Composition & layout
- **Hero:** one centred 2-line sentence (~50px) in a field of ~25 small product photos (bench, bin, signpost, bollard) scattered at different depths in WebGL. They drift with the cursor and fly past on scroll.
- **Category chapters:** each category (Urban, Nature, RePlastic, Golf, Details) gets a full-bleed, full-height location photo with a dark scrim. It has a small `01`–`05` index and "Made to Last" at left over a 1px rule across the page, a coloured category chip ("🏙 Urban"), a 3-line headline (~40px, white), a white pill CTA "SEE URBAN PRODUCTS" with a round icon, and a white **catalogue card** bottom-right (title, "Download Now ↓", coloured cover thumbnail).
- **Product showcase:** 2 large panels on paper background, each with a product cut-out centred, a name top-left, a category chip, colour swatch dots, and a dark pill "EXPLORE →".
- **Collection index:** large inline list "RePlastic (73)", "Golf (62)" at ~40px with a small product photo and an icon beside each item.
- **Process:** 3 columns ("We design · We build · We implement"), each with a citron block above and 2 short text columns.
- **Footer:** full citron `#e9e778` field with a giant black **arrow** mark (the logo's "F" corner) at left, the ® symbol, 1px line drawings of products (bench, bin, sign post) sitting on hairlines, and address blocks in small text.

## Typography voice
- One humanist-geometric sans (Zimula; substitute Figtree) at 400–500. Headlines are sentence case, tight tracking (−0.04em), line-height 1.05, 40–57px. Statements run up to 5 lines on the left half.
- Nav, chips and buttons are 11px UPPERCASE medium. Body is 14px regular, line-height 1.4.
- Counts sit in parentheses after names: "Golf (62)". Indices are plain `01`, `02`.

## Color usage
- About 45% paper `#f2efea`, 30% photography (earthy greens, terracotta, stone), 15% citron `#e9e778`, 10% ink `#241f21`.
- Citron is the brand signature: the footer field, process blocks, the "allow all" button and the logo chip. Deep teal `#042d2b` appears as a dark band behind citron blocks.
- Category chips use soft tints: terracotta `#f76c46` (Urban), sage `#bacfa3` (Nature), sky `#85a1c5` (RePlastic), green (Golf), sand `#c6af88` (Details).

## Imagery & iconography
- Real installation photography (plazas in Lisbon, boardwalks, golf clubhouses, park signage) at full bleed with a 30–40% dark scrim, plus clean product cut-outs on paper or colour.
- Line drawings (1px, ink) of products for the footer and diagrams.
- Icons are small pictograms per category (building, tree, recycle, golf flag, magnifier), outlined and sitting inside chips or next to list items.

## Signature details
1. **Floating product constellation hero**: dozens of small product photos drifting in 3D around one centred sentence.
2. **White pill navigation**: separate white pills for PRODUCTS / ABOUT / SUSTAINABILITY / JOURNAL, floating top-right over every section.
3. **Chapter pattern**: index + "Made to Last" + 1px rule, category chip, headline, pill CTA, and a floating catalogue download card.
4. **Citron footer** with a giant ink arrow and line-drawn products standing on hairlines.
5. **Category colour chips** with pictograms: the only colours besides citron.

## Interaction & motion
- Expo-out easing (`cubic-bezier(0.19, 1, 0.22, 1)`), 0.5–1.2s. Chapters stack (each photo slides over the previous one). The hero constellation flies toward the camera on scroll and follows the cursor.
- Pills invert on hover. Catalogue cards lift slightly. List items reveal their thumbnail.
- A small round "co" toggle bottom-left (accessibility/eco mode) stays fixed.

## Anti-patterns
- No pure white page backgrounds. Use paper `#f2efea`, with white only for pills and cards.
- No dark-mode UI. Darkness comes only from photo scrims.
- No heavy bold headlines or all-caps display. Caps are only for 11px UI.
- No sharp rectangular buttons. Buttons and nav items are pills.
- Keep saturated colour out of large areas, except citron.
