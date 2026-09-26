Source: https://activetheory.net/ (Active Theory V6, the site of the creative technology studio Active Theory; Awwwards Site of the Month, Feb 2024). A single website reference, so there is no blend. The page is a real-time WebGL world. Note: in headless capture it shows "Your browser is not supported" unless a hardware-like GPU is reported.

## Essence
- It is a studio showreel you can fly through. An iridescent chrome logo ring floats in a dark teal night full of particles, then the camera dives underwater (caustic light on the surface) into "The Lab", a hexagon-tiled screen of projects.
- The audience is brands and agencies looking for WebGL craft. The one idea is **"story, art and technology as one"**: the site is itself the demo, with HUD-like UI floating over worlds.

## Composition & layout
- Full-viewport canvas. There is no page layout in the traditional sense; the scroll moves a camera through scenes.
- **HUD UI:** a floating **capsule nav** top-right (dark glass, 1px glowing outline, "WORK ⌒ CONTACT" with a curved line between), and under it a small outlined box with `<<` · scene name ("HOTHAM – TO", "M WORLD 1") · `>>` to jump between worlds.
- **Hero statement:** giant **outlined pixel/architect caps** "CREATIVE / DIGITAL / EXPERIENCES" (~96px, 3 lines, white with glow) left, overlapping the 3D chrome logo, with a 5–6 line caps paragraph right ("FOUNDED IN 2012 / WE BLEND STORY, ART & TECHNOLOGY…").
- Section labels use slashes and arrows: "// THE LAB ->" in the same pixel caps, with a short caps description beside it.
- Content "screens" are 3D planes (hexagon mosaics, video walls) placed in the scene rather than DOM cards.

## Typography voice
- One techno display family (NB Architekt; substitutes: Silkscreen for display, Space Mono for text). It is **all caps**, bold, with **double-line / outlined strokes** at large sizes, and wide tracking (+0.04–0.08em) at small sizes.
- Text **glows** (white bloom) and sometimes glitches or scrambles in.
- Paragraphs are short caps lines with a generous line height (~2.0), like terminal output.

## Color usage
- About 70% deep night (`#05080c` → teal-black `#0f1a20`), 15% white glowing type and UI, 15% iridescent light (chrome reflections in pink/violet `#d65aa8`, cyan `#7fd8e0`, gold particles).
- Colour comes from lighting and materials, not flat fills. UI stays white or outline.

## Imagery & iconography
- Real-time 3D: iridescent/chrome logo ring and mark, particle fields (blue and gold dust), volumetric light shafts, water caustics, hexagonal tile mosaics showing project footage.
- UI icons are text glyphs (`<<`, `>>`, `->`, `//`) and a crosshair `+` in a thin circle.

## Signature details
1. **Iridescent chrome 3D logo** floating in particle space.
2. **Outlined, glowing pixel-architect caps** for headlines, overlapping the 3D.
3. **Capsule HUD nav** with a scene switcher `<< SCENE NAME >>`.
4. **Underwater caustics transition** into project worlds.
5. **Hexagon mosaic screens** as project showcases inside the 3D scene.

## Interaction & motion
- Scroll or drag drives a continuous camera. Scenes blend with depth-of-field and bloom, and text glitches or scrambles in.
- The capsule nav reacts with a light sweep on hover. The scene switcher jumps between worlds with a warp transition.
- Everything is smoothed (damped camera). Provide a reduced-motion fallback with a static hero and project list.

## Anti-patterns
- No flat light-mode layouts, cards or grids of thumbnails in the DOM.
- No regular sans or serif body text. Keep the techno caps voice.
- No solid bright UI fills. Use outlines, glow and glass only.
- Don't make the 3D decorative background only. It is the content.
