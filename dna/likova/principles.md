Source: https://likova.space/ (LIKOVA, a Class A business center; landing page). A single website reference, so there is no blend.

## Essence
- It reads like an architect's night-time presentation board: ink-navy paper, white caps lettering, and lit glass facades. The one idea is **architecture as the interface**: every UI shape is an orthogonal block, sometimes with a rectangular bite taken out of a corner, like a building massing plan.
- The audience is corporate tenants and investors. It is quiet and expensive, never salesy. Visual hierarchy comes from scale and scroll choreography, never from color or decoration.

## Composition & layout
- Full-bleed sections, each 100vh or pinned for several viewports (scroll-scrubbed). There are 14 sections, and every one is a single statement: one image, one number, or one sentence per viewport.
- Hero: a white field on top with a fixed nav. A white **tab** holds the giant wordmark, spans exactly the left half (≈730px of 1440) and is 100px tall. It sits on a full-bleed photo whose top edge steps up to the right of the tab, so the tab and the photo interlock like two blocks.
- 12-column grid, 20px outer gutter (`--spacing-layout`), 20px column gap. Content often starts at column 7 (the right half), e.g. hero tagline at x≈967px and the intro paragraph block in the right half, which leaves the left half empty.
- Stat rows use 3 equal columns separated by 10px gaps, each topped by a 1px rule. The label sits top-left in 11px caps, and the numeral is flush right, 85–143px.
- Photos come in pairs of 2 equal landscape tiles (≈4:3) with a 10px gap, or they run full-bleed. They are never in 3+ card grids with captions.
- Team/partner cards: 3 dark-navy squares-ish panels (≈453×473) on white. There is an 11px caps label top-left, a centered partner logo, and a small `+` circle bottom-right.
- Density is extremely low. ≥60% of any viewport is empty navy or white, and text blocks are ≤5 lines.

## Typography voice
- One family only: TT Norms Pro (geometric grotesk; free substitute Manrope). Weights are 400/450 only, and there is no bold anywhere.
- **Everything is UPPERCASE**: nav, labels, paragraphs, headlines. Sentence case appears only in numerals.
- Four sizes do all the work: 11px labels (tracking +0.04em), 14px caps body/paragraph (line-height 1.29, max ≈ 45ch), 26–50px caps statement text (tracking −0.01em), and 85–143px display/numerals (line-height 1.0–1.05, tracking −0.04em).
- The wordmark "LIKOVA" is set extra-wide (letter-spacing ≈ +0.35em) at 85–143px, weight 400. It is the only widely tracked large text.
- Statement paragraphs (≈32px caps) start with a hanging first line: line 1 is indented to the column-7 start, and the following lines return to the left gutter.
- Numbers are heroes: "6-7-8", "53 300", "2026" at 85–143px white, with a thin space as the thousands separator and no units inside the numeral. The unit lives in the 11px label ("TOTAL AREA OF, SQUARE METERS").

## Color usage
- About 55% ink navy `#070b20`, 30% white/`#e3e6eb` light sections, 15% photography. There is no brand hue. The UI is strictly navy/white/greys.
- Sections alternate by theme: `ui-dark` (navy bg, white text) and `ui-light` (white or `#e3e6eb` bg, navy text). The sequence is roughly light, dark ×4, light, dark, light-alt, dark ×3, light, dark, light.
- Secondary text is `#bdbec4` on dark or 60% navy on light. Hairlines are `#393c4d` on dark and navy at 20% on light.
- The only gradients: a metal gradient `#c7cbd4 → #5a5f65` on small decorative details, and a near-invisible navy vertical fade (`#070b20 → #191c2f`) in long dark sections.
- All warmth comes from photography (golden facade lighting at blue hour). UI elements never pick up those warm tones.

## Imagery & iconography
- Imagery is photoreal architectural renders: blue-hour exteriors with warm-lit vertical fins, low-angle facade close-ups, lobby interiors, and a glassy fluted-cube 3D object (WebGL) on navy.
- Media are rectangles at 0 radius with no border and no shadow. They are often cropped by the notch clip-path, so an image corner is bitten out where a text tab sits.
- Icons are 1px outline and minimal: a two-line hamburger (40×2px lines, 6px apart), an outline heart with a counter, a chevron-down inside a 20px filled navy circle, and a `+` inside a 20px grey circle.
- Section indices are small numerals ("1", "2" … "9") in a 16px circle beside the 11px caps eyebrow.

## Signature details
1. **Bitten-corner rectangles**: buttons, the hero tab, the cookie box and image frames are rectangles with a smaller rectangle clipped from one corner (`clip-path` polygon with --left/--top/--right/--bottom insets, ≈10px on buttons and 100px on panels). On hover the notch closes to a full rectangle over 0.5s.
2. **Interlocking tab + image**: a solid white or navy tab (half the width, 50–100px tall) protrudes into a full-bleed photo's corner, carrying the wordmark or an 11px caps caption plus a round icon at its right end.
3. **All-caps everything** at weight 400: 11px tracked labels against 85–143px light numerals. Nothing sits in between except the ~32px statement paragraph.
4. **Stat rows with progress hairlines**: 3 columns of 1px rules whose fill animates left-to-right on scroll, with a caps label under the rule and a huge right-aligned numeral.
5. **Pinned cinematic scroll**: sections pin while the image scales or pans and text fades in lines. A single easing, `cubic-bezier(.7,0,.3,1)`, is used everywhere.

## Interaction & motion
- Easing is always `cubic-bezier(0.7, 0, 0.3, 1)` (strong in-out). 0.5s for hover/colour/clip-path, 1s for opacity/transform reveals, 2s for large image moves. Staggered delays are 0.1–1s.
- Hover: the button notch closes, text colour dims to 60%, and outline borders go from 30% to 100% opacity. There is no scale, lift or glow.
- Scroll: smooth scroll (lerp) and parallax on photos. Text is revealed line by line with an upward mask. Numbers stay static, and the hairlines fill.
- A preloader of about 3s shows a white notched panel with the wordmark over the 3D cube, counting to "100%" in the bottom-right corner.

## Anti-patterns
- No border-radius anywhere except 50% on tiny icon circles. No pills, no rounded cards.
- No shadows, glows, blur/glass or coloured gradients. Elevation is only a navy/white block change.
- No brand accent colour (no blue buttons, gold highlights or green CTAs). Buttons are white-on-navy or navy-on-white.
- No bold weights and no sentence-case headlines. No italic.
- No busy card grids, testimonial carousels, emoji, stock people photos or icon-heavy feature lists.
- No centered body text. Paragraphs are left-aligned in the right half. Centering is reserved for the wordmark/logo inside a panel.
- Do not fill the viewport. If a section has more than one headline, one image pair and one paragraph, split it into another section.
