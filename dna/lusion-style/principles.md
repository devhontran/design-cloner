Sources: every Awwwards Site of the Day / Site of the Month by **Lusion** (Bristol real-time 3D studio) that is still reachable. They are blended into one house style:
- **lusion.co** (studio site, SOTM May 2019 / current v3) and **labs.lusion.co** (Lusion Labs, SOTD Jun 2023), weight ×3. These define the chrome, typography and layout.
- Experiments at weight ×1: **EverSwap** (SOTD Jun 2026), **Little Red Riding Hood's Quest** (Jul 2023), **Infinite Passerella** (May 2022), **Ion X1** (May 2022), **Gemini** (Dec 2021), **My Little Storybook** (Nov 2021), **Turn of the Screw** for Opera North (Feb 2020), and **Oryzo** (SOTM Apr 2026). These define the 3D art direction.
- **Zero Tech** (Apr 2023) and **Vivid+Co** (Dec 2021) at weight ×0.5. Both sites have since been redesigned or restyled, so they only add the dark-agency variant.
- Not included: **Spaace** (Jun 2024), which was unreachable (TLS error).

## Essence
- **The 3D scene is the page.** Every Lusion project centres on one real-time WebGL object or world, rendered with film-grade lighting: a chrome/plastic sculpture, a speaker, a car, a painted mountain, a cork coaster, a storybook diorama. The UI is a quiet, precise frame around it.
- The audience is brands wanting immersive storytelling. The one idea is **"beyond visions, within reach"**: technical craft shown through play, with interfaces that step back so the render can breathe.

## Composition & layout
- **Studio pattern (lusion.co / labs):** a light lavender-grey page `#f0f1fa`. A 3-line statement sits top-centre in a light grotesk (~24–32px, "We create 3D visual storytelling and interactive web experiences…"). A **large rounded media stage** (radius ~18–24px) is inset with ~40px margins, holding the live 3D render (tumbling blue/white/black plastic shapes). A row of small **"+" crosshair markers** runs along the stage's bottom edge with "SCROLL TO EXPLORE" centred.
- **Chrome:** the "LUSION" wordmark (wide-tracked caps) top-left. At top-right, **dark pill buttons**: a round "—" toggle, a black pill "LET'S TALK •", and a light pill "MENU ••". Labs uses a black tag "LUSION:LABS" plus a GRID/LIST segmented pill toggle.
- **Experiment pattern:** full-bleed canvas, a small **"LUSION:LABS" mono tag** (black or tinted rectangle) top-left, a tiny caps "ABOUT" / "PREORDER" outline pill top-right, one centred product line or title, and minimal controls (colour swatches, quality toggles "Low / Medium / High", "START THE STORY", "ENTER").
- **Preloaders** are part of the design: a centred logo mark and a **percentage counter** ("99% → 100%") on a solid field, then a camera move into the scene.
- **Labs index:** big caps title stack "PLAY GROUND / R&D COLLECTION / EXPERIMENTS" (~48px) at left, a small paragraph at right, "↘ SCROLL DOWN", then rounded dark cards per experiment with mono meta ("EXP 001 / 2023") and a round dot button.

## Typography voice
- **Aeonik** (substitute Figtree) at 400–500 for all statements and headlines. It is light and friendly, sentence case in statements, and CAPS for index titles. Tracking is tight on big sizes (−0.02 to −0.03em) and generous on the wordmark.
- **IBM Plex Mono** (and a custom "Lusion Mono") at 9–11px uppercase for tags, meta, "SCROLL TO EXPLORE" and experiment numbers.
- Experiments may bring **one bespoke display face** that fits their story: the storybook serif logo, EverSwap's high-contrast serif rendered as 3D letters, Turn of the Screw's condensed caps, Ion's ultra-thin "ION/X1". Treat it as the scene's title card, not UI text.

## Color usage
- **Studio:** lavender-grey `#f0f1fa`, white, and near-black `#0a0a0a`, plus a single saturated **electric blue** `#1a2ffb` that appears in 3D materials and hover states.
- **Experiments:** each owns a cinematic palette from its render: EverSwap forest green `#27362b` → sky blue, Gemini lilac-violet, Ion pure black, Passerella graphite + white light, Storybook powder blue, Riding Hood slate + gold, Oryzo espresso + cork.
- UI colours stay neutral (black, white, translucent) on top of any scene.

## Imagery & iconography
- Real-time 3D with physically based materials, depth of field, bloom and film grain. Also painterly 3D terrains, chrome/iridescent objects, soft plastic toys, and particles and light shafts.
- Minimal icons: "+" crosshairs, ↘/↗ arrows, dots "••", thin outline circles as scene guides, and diamond pagination (EverSwap).

## Signature details
1. **One hero 3D object or world per page**, rendered live and reacting to cursor and scroll.
2. **Rounded inset media stage** (≈20px radius) on a pale lavender page, with "+" crosshair markers along its edge.
3. **Black pill "LET'S TALK •" + light pill "MENU ••"** chrome, top-right.
4. **"LUSION:LABS" mono tag** and tiny mono caps meta everywhere.
5. **Percentage preloader** with a logo mark, then a cinematic camera fly-in. Titles are often rendered as 3D letters inside the scene.

## Interaction & motion
- Strong ease-out (`cubic-bezier(0.52, 0.01, 0, 1)`, 0.8–1.2s) for UI. The 3D is spring-damped to cursor, drag and scroll. Objects tumble, repel and re-settle on interaction.
- Scroll drives the camera through the scene (fly-throughs, dolly-ins). Text blurs or fades in near the object.
- Sound and quality toggles are common. Always provide a reduced-motion/static fallback frame.

## Anti-patterns
- No flat stock photography or illustration heroes. The hero must be a real-time/3D render.
- No heavy bold UI type and no colourful UI chrome. The scene carries the colour.
- No sharp rectangular hero frames on the studio pattern. Use the rounded stage.
- Don't crowd the viewport. One object, one line of copy and a couple of pills.
