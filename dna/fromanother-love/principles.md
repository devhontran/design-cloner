Source: https://fromanother.love/ (fromanother, an artist-led creative studio in Ho Chi Minh City; designed by Huy Phan; Awwwards Site of the Day, May 14, 2026 + Developer Award). A single website reference, so there is no blend.

## Essence
- A slow-breathing light installation. One soft, **blurred luminous blob** (a butterfly/flower-like shader shape) glows behind the text and changes colour with every chapter: teal on navy, white on cobalt, pink on red, and a pale glow on cream.
- The audience is luxury and culture brands (Louis Vuitton, Dior, L'Oréal, OnePlus). The one idea is **"we craft work that defines the now and shapes what is next"**: artistry through light, blur and focus rather than hard graphics.

## Composition & layout
- **Chrome:** "☰ Menu" top-left, the lowercase wordmark "from**another**" (mixed weights: "from" regular, "another" light) centred top, "Let's chat →" top-right, a thin vertical scroll line with a dot centred at the bottom, and a vertical chapter index at the left edge (tiny numbers 1–7 with an italic serif label for the current chapter: "About", "Featured work", "Our team", "They trust us", "Awards", "Press").
- **Hero:** a staggered 4-line caps headline (~83px, weight 600, lines indented differently): "WE ARE AN / ARTIST — LED / CREATIVE / STUDIO". The last word **cycles** (STUDIO → COLLECTIVE → AGENCY) with a blur-out/blur-in. It sits over the glow blob on deep navy `#051236`, with italic "Since 2020" at left and "VN | CN | FR" at right.
- **About:** a cobalt `#1740a9` field with a centred 3-line statement ("We craft work that defines the now and shapes what is next.") and a tiny paragraph.
- **Services:** a red field with a stacked list of services (~40px) scrolling past a fixed point. The items in focus are sharp, and others are blurred and faded.
- **Featured work:** cream `#fffde2` with a project title (~40px) at left **coming into focus from blur**, role credits at right, and a vertical thumbnail strip of all projects at the far right. "VIEW ALL PROJECTS" is underlined at the bottom.
- **Team:** photos in a loose staggered grid with giant counters ("02", "04") in cream outline/solid.
- **Clients:** brand names (~40px) arranged on a **curved arc** that rotates like a wheel, with blur on the far items.
- **Awards:** a **3D carousel of tilted posters** (film festival posters, the Awwwards SOTD certificate) curving across the screen.
- **Footer:** "Let's / create / *impact* / together" (mixed roman + italic serif word) plus office cities (Vietnam, China, France).

## Typography voice
- A tight neo-grotesk (TWK family; substitute Inter Tight) at 500–600 for headlines. Caps for the hero, sentence case elsewhere, with tracking −0.03em.
- An **italic serif** (Herbik; substitute Instrument Serif Italic) for tiny labels ("Since 2020", chapter names) and one emphasised word in statements ("*impact*").
- Body is 12–14px regular, centred under statements.

## Color usage
- Each chapter owns one field colour: deep navy `#051236`, cobalt `#1740a9`, red, cream `#fffde2`. Text is cream on dark and near-black on cream.
- The **glow blob** takes an analogous lighter hue of each field (teal `#88c2b2` on navy, white-blue on cobalt, pink on red, pale yellow on cream).

## Imagery & iconography
- A shader blob with heavy gaussian softness. Project stills in thumbnails and tilted posters. Team photos. Brand logos as text.
- Icons: ☰, →, and a thin vertical line indicator.

## Signature details
1. **Blurred glowing blob shader** behind content, recoloured per chapter.
2. **Focus-blur typography**: words and list items sharpen when in focus and blur when leaving.
3. **Cycling last word** in the staggered caps hero (STUDIO / COLLECTIVE / AGENCY).
4. **Italic serif micro-labels** and a vertical chapter index.
5. **Curved rotating client wheel** and a **3D tilted poster carousel** for awards.

## Interaction & motion
- Slow and luxurious: `cubic-bezier(0.165, 0.84, 0.44, 1)` at ~1.2s. Chapter colours cross-fade with scroll (Lenis smooth). The blob morphs continuously.
- Text transitions use blur (filter 12px → 0) plus opacity, never slide-only. Carousels rotate in 3D perspective.

## Anti-patterns
- No hard-edged graphics, borders or card UI. Everything floats and softens.
- No multi-colour on one screen. One field colour plus its glow at a time.
- No bold black headings on white. Cream fields use near-black type with blur transitions.
- Don't use sans-only micro-labels. The italic serif is part of the voice.
