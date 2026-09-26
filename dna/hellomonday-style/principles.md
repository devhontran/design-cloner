Sources: Awwwards Site of the Day / Month winners by **Hello Monday / DEPT®** (Aarhus / New York digital agency) that are still reachable, blended into one house style:
- **hellomonday.com** (studio site) at weight ×3. It defines the chrome, typography and grid.
- Projects at weight ×1: **Google – The Web Can Do What!?** (SOTD Dec 2023), **Give A Hand** (May 2023), **Cloud Castles** (Dec 2022), **Star Atlas** (Site of the Year 2021), **Fingerspelling.xyz** (May 2021), **How To Talk To White Kids About Racism** (Jan 2021), **SDU Future Education** (Sep 2020), **Alan Menken** (SOTM May 2020).
- Not included: **B&O – See yourself in sound** (server error 500), **Virgin Hyperloop** (no connection) and **Bartlett Summer Show 2020** (404).

## Essence
- **A light, witty agency frame around one fully bespoke world per project.** The studio site is pure white with two hand-drawn line characters waving above a single light slab-serif word that cycles ("We make digital (and magical)… Experiences / Products / Branding"). Each project then builds its own universe: a Google card deck, an ASL hand-learning game, a sci-fi MMO, a picture book, a composer's museum.
- The audience is brands wanting emotional, technically inventive work. The one idea is **"digital (and magical)"**: warmth and humour first, technology in service of a feeling.

## Composition & layout
- **Studio home:** a white page with the "HELLO / MONDAY / / DEPT." stacked-caps logo top-left, "📅 2 days until Monday" (a live countdown) top-right, and a **black curved tab** on the right edge holding the menu "≡". A centred line illustration of two people sits above a tiny caption "We make digital (and magical)…" and a **large light slab-serif word** (~64px) that cycles on scroll.
- **Work grid:** 3 columns of **tall portrait posters** (≈3:4, 0 radius, ~40px gutters), each a bespoke key visual (Gemini API trophy, B&O flower sculpture, AI shield). Below each is the project title in the slab serif (~14px, 2 lines) and tiny underlined tags (Experiences · Branding · Platform). Poster tops **warp and bulge** on hover or scroll.
- **Project experiences** open with a **gate screen**: a centred title or logo and one button ("Enter", "Start", "Let's go", "Start the story"), plus a headphones icon with "Use headphones / Please turn on your sound for the best experience", and a loading bar or percentage.
- After the gate, each project is a single interactive stage: a card deck with "Next card / Show me!" (Google), a webcam hand-tracking game (Fingerspelling), a 3D book on a dark table (HTTTWKAR), and a 3D pedestal gallery (Alan Menken).

## Typography voice
- **Clarendon BT Light** (a light slab serif; substitute Rokkitt 300 or Zilla Slab Light) for the big cycling word and project titles. It is sentence case, friendly and bookish.
- **NB International Pro Light/Regular** (substitute Inter 300–400) for tiny UI captions (~10–11px) and tags.
- Each project brings its **own display voice**, chosen for its story: Google Sans (Google), rounded grotesk Labil (Fingerspelling), Canela serif (HTTTWKAR), wide caps Brown/Casta (Future Education, Give A Hand), Orbitron + tabular mono (Star Atlas), and Clearface serif with a signature (Alan Menken).

## Color usage
- **Studio:** white `#ffffff` and black `#000000` only (logo, line drawings, curved menu tab). Colour arrives exclusively through project posters.
- **Projects** each own a bold palette: Google blue `#3574e0` + yellow, Fingerspelling ultraviolet `#6a3cff` + butter yellow, Give A Hand black + white wide caps, SDU dusty pink `#d6bdb4`, Star Atlas teal-black + cyan, HTTTWKAR black wood + white chalk, Alan Menken black + white script.

## Imagery & iconography
- Hand-drawn black line characters (studio), and bespoke 3D key visuals per project (trophies, sculptures, books, cards, hands), as posters and interactive scenes.
- Icons: headphones (sound prompt), ≡ menu inside the curved tab, a calendar emoji-style icon for the countdown, underlined text links.

## Signature details
1. **Cycling light slab-serif word** under line-drawn characters on white ("Experiences → Products → Branding").
2. **Black curved edge tab** holding the menu.
3. **Portrait poster grid** whose tops warp as you scroll, with slab-serif titles and underlined tags.
4. **Gate screens** with a single "Enter / Start" CTA plus a **headphones "turn on your sound"** prompt.
5. **"2 days until Monday"** live countdown and other small jokes in the UI.

## Interaction & motion
- In-out easing (`cubic-bezier(0.65, 0, 0.35, 1)`, ~0.7s). The cycling word cross-fades with a slight blur, characters idle-animate, and poster tops deform like jelly.
- Experiences are game-like: webcam, drag, card flips, and sound design. Always provide a no-sound path and a reduced-motion fallback.

## Anti-patterns
- No colourful agency chrome. The frame stays white/black and the projects bring the colour.
- No heavy bold sans headlines on the studio frame. Use the light slab serif.
- No generic stock hero. Each project needs a bespoke world or key visual.
- Don't skip the gate/intro moment for experiences. It sets expectation (sound, webcam, 3D).
