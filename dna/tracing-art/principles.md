Source: https://www.getty.edu/tracingart/ (Getty "Tracing Art", a scrollytelling explainer for the Getty Provenance Index; Awwwards Site of the Month, Jul 2025). A single website reference, so there is no blend.

## Essence
- It reads like a quiet museum wall that comes alive. Hundreds of artworks float as a loose cloud on white, then one painting (Willem Kalf's *Still Life with a Chinese Porcelain Jar*) is followed through 350 years of owners, dealers, exhibitions and war.
- The audience is the curious public and researchers. The one idea is **"the social life of art"**: provenance told as the biography of a single object, with the collection always hovering in the background.

## Composition & layout
- **Hero:** a centred 3-line serif statement (~28px) with a tiny kicker above ("Millions of Resources, Spanning Five Centuries") and a small grey pill "↓ Scroll down". It is surrounded by a **scattered cloud of artwork cut-outs** (vases, portraits, textiles) and pale grey placeholder rectangles that drift in depth.
- **Story mode:** the focus painting stays pinned at centre (~190×225px at first) with a tiny 2-line credit caption under it. One or two sentences of narrative (~16px serif, centred, max ~40ch) sit below. A **horizontal timeline scrubber** at the bottom shows the current year ("— 1669", "1700", "1936", "1940").
- The painting then **zooms to full-bleed**, and captions move to the left over the dark painting in white serif. Afterwards it shrinks back into the cloud.
- Chapter titles are set as mixed italic and roman serif: "*the* World / *of the* GPI" (italic lowercase function words, roman nouns, staggered lines).
- Occasional full-screen tints (pale cyan) mark a new chapter.
- Chrome is minimal: the "Getty" wordmark top-left (serif), a black rounded square menu button top-right, a vertical scroll-progress capsule at the right edge, and a "Click on an artwork to learn more." hint pill bottom-right.

## Typography voice
- A classic book serif (Bradford; substitute Newsreader) for everything narrative. It is weight 400, sentence case, with titles of works in *italic*. Headlines are 28–72px and centred, and body captions are 16px.
- A neutral grotesk (Graphik; substitute Inter) for tiny UI: credits, timeline years, hints (9–11px).
- Underlined serif links for key terms ("Getty Provenance Index", "research").

## Color usage
- About 70% white gallery wall, 25% artwork colour (the full palette of art history), 5% UI greys `#f1f1f1` and black.
- The UI itself is black and white. Colour only comes from the artworks, plus a rare pale tint (cyan `#f0fbfb`) for chapter backgrounds.
- In full-bleed moments the painting's own darks become the background and text turns white.

## Imagery & iconography
- Museum object photography: paintings (with or without frames), cut-out vases, sculptures and textiles on transparent backgrounds, shown at small scale with no shadows or borders.
- Pale grey rectangles stand in for loading or unlit artworks and add depth to the cloud.
- Icons are minimal: ↓ arrow, menu glyph, and the progress dots.

## Signature details
1. **Floating artwork cloud** on white, with depth parallax and grey placeholder cards.
2. **One pinned focus object** whose journey is told in dated steps.
3. **Timeline scrubber** with the year label that updates as you scroll.
4. **Painting-to-full-bleed zoom** with white serif captions over the artwork.
5. **Italic + roman mixed serif titles** ("*the* World *of the* GPI") and centred serif narration.

## Interaction & motion
- Slow and smooth (`ease-in-out`, ~0.8s). The cloud drifts and parallaxes with scroll, and the focus painting scales between thumbnail and full-bleed.
- Captions cross-fade per step, and the year counter ticks along the timeline.
- Artworks are clickable (hint pill) to reveal details. Hover gently lifts or brightens.

## Anti-patterns
- No UI colour. Let the art provide all colour.
- No bold sans headlines, cards with shadows or dense grids.
- No decorative frames or borders around images. Objects float on white.
- Don't crowd the narration. One or two sentences per step, always centred or left over art.
