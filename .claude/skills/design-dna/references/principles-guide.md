# Writing principles.md — the qualitative DNA

The numbers tell a model *which* values to use. Principles tell it *how to compose* them. Bad principles produce
generic "AI template" UIs even with perfect tokens. Write like a design director briefing a senior designer who
has never seen the references.

## Rules
1. **Observable, not emotional.** ✗ "modern, clean, premium" → ✓ "hero headline 72px, 2 lines max, centered; one pill CTA + one ghost CTA; 128px above, 112px below".
2. **Proportions.** State ratios: neutral vs brand color (e.g. 90/8/2), text vs whitespace, image vs text per section.
3. **Placement.** Where does the accent appear? Where do images sit? What alternates between sections?
4. **Signature details = recognisability.** 3–5 details that someone who knows the source would spot instantly (hairline dividers, oversized numerals, italic accent word, noisy gradient blobs, monospace labels, 1px inner borders on dark cards…).
5. **Anti-patterns = guardrails.** List what would break the style, especially tempting defaults (shadows, rounded cards, purple gradients, emoji, centered body text, stock photos).
6. **Blends.** When several references are merged, say what each contributes ("layout & type from site A, palette & mood from the Pinterest board").
7. **Short.** 25–45 bullets total. No section longer than ~8 bullets.

## Questions to answer while looking at the screenshots
- **Essence:** If this were a physical object, what would it be? Who is it for? What single idea holds it together?
- **Layout:** Hero structure? Symmetric or asymmetric? Grid columns? Full-bleed vs contained? How do sections start (eyebrow, number, rule)? How dense is each viewport?
- **Typography:** Size contrast between H1 and body? Weight of headlines? Case? Italics? Tracking? How many lines do headlines run? Are labels a different family?
- **Color:** Which color dominates? Where is the brand color used — buttons, text, backgrounds, illustrations? Do dark and light sections alternate? Gradients — where and how soft?
- **Imagery:** Photos, 3D renders, flat illustration, product UI screenshots, abstract shapes? Crop, frame, radius, shadow, overlap with text?
- **Icons:** Outline or filled, stroke width, size, containers?
- **Components:** Button shapes & hierarchy, card treatment (border / shadow / tint), inputs, nav behaviour (sticky, blur, transparent over hero).
- **Motion:** What moves on hover? Scroll reveals? Speed and easing feel (snappy vs floaty)?

## Example (excerpt)
```md
## Signature details
1. Every section opens with a 12px uppercase mono label in the accent color, tracked +0.12em.
2. Cards are #14141f on #0b0b12 with a 1px #26263a border and 16px radius — never shadows.
3. A single soft violet radial glow behind the hero headline; no other gradients except the CTA band.
4. Headline key phrase uses a violet→cyan gradient fill.

## Anti-patterns
- No white or light sections anywhere.
- No drop shadows on cards; elevation comes from borders and slightly lighter surfaces.
- No more than two CTAs per view; secondary CTA is always a ghost pill.
```
