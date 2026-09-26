Source: https://www.gq.com/sponsored/story/the-extraordinary-lab (GQ × Audemars Piguet "The Extraordinary Lab", a sponsored immersive story narrated by GQ watch editor Cam Wolf and J Balvin; Awwwards Site of the Month, Mar 2026). A single website reference, so there is no blend. The page is almost entirely a WebGL scene, so this DNA describes **art direction for immersive storytelling** more than a UI kit.

## Essence
- You enter a pitch-black workshop drawn in glowing white lines: blueprints, a pocket watch, a workbench, handwritten letters on curved walls. As the story advances, the sketches **solidify into lit physical objects** and a warm dusk horizon opens up.
- The audience is watch lovers and GQ readers. The one idea is **"from sketch to masterpiece"**: horology craft told as a journey from line drawing to reality, led by sound (voice-over).

## Composition & layout
- A full-viewport WebGL canvas with no page scroll layout. Scrolling or dragging moves the camera along a path through the scene.
- **Entry gate:** co-brand lockup centred top ("GQ × AP", ~20px, white), a one-line caps credit ("FOLLOW A STORY TOLD BY CAM WOLF, GQ WATCH EDITOR AND J BALVIN", 9px), a 1px outline button "CLICK ANYWHERE TO ENABLE SOUND", and a headphone icon below. Everything is centred.
- The scene is a wide-angle, slightly top-down perspective of a room whose walls curve around the camera. Objects sit at different depths along the path.
- UI chrome disappears after the gate. Text appears inside the 3D world (handwriting on walls, captions near objects) rather than as overlays.

## Typography voice
- UI type is a neutral American grotesk (GT America; substitute Inter Tight), **caps, 9–11px, weight 500–700, tracking +0.02em**. It is used sparingly for credits, button labels and captions.
- Storytelling text is **handwritten script** (letters, notes and annotations rendered as white strokes on the walls). The script is imagery, not a web font.
- There are no big UI headlines. Scale comes from the 3D scene.

## Color usage
- About 90% true black `#000000`, and white `#ffffff` for all line work and UI text.
- Late in the story a **dusk gradient** horizon appears (blue-grey → peach `#d99a6c` → dark floor). It is the only colour moment and signals arrival.
- Lit objects are rendered in neutral whites and greys with bloom.

## Imagery & iconography
- 3D line art: thin white glowing strokes with bloom and slight chromatic sparkle at vertices, forming architectural wireframes, blueprints, watch parts and furniture.
- Transitions go from wireframe to solid lit geometry (a white glowing table, watch dial texture) and then to an environment with a horizon.
- Icons are minimal outline (headphones) and the brand logos.

## Signature details
1. **Glowing white wireframes in a black void** as the primary visual language.
2. **Blueprint → reality transformation** driven by the camera path.
3. **Handwritten script on curved walls** as the narrative text layer.
4. **Sound gate**: an outline button "click anywhere to enable sound" plus a headphone icon before entry.
5. **Dusk horizon reveal** as the only warm colour, used at the climax.

## Interaction & motion
- Scroll and drag map to a smooth, slow camera dolly with heavy easing. The camera never cuts.
- Lines draw on progressively (stroke reveal), bloom intensifies near focus objects, and depth of field softens the background.
- Audio narration is synced to camera position. Keep UI transitions to simple fades (0.5–1s).

## Anti-patterns
- No conventional page sections, cards or grids. The page is one continuous space.
- No colour in the UI and no coloured buttons. Use a white outline or white text only.
- No heavy overlays. Keep text sparse and inside the world where possible.
- Don't reveal colour early. The warm horizon is a payoff, not a theme.
