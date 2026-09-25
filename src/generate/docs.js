// Markdown generators: DNA summary, principles template, the per-DNA Skill and the designer Agent.

export const PRINCIPLES_TODO = '<!-- TODO: principles not written yet -->';

export function principlesTemplate(dna) {
  return `${PRINCIPLES_TODO}
<!--
Qualitative DNA for "${dna.name}". Fill this in by LOOKING at moodboard.png and sources/*/desktop.png, full.png, mobile.png.
Rules: be specific and observable (numbers, placements, ratios), not generic adjectives. Every bullet should be
something a designer could verify in a screenshot. Delete the TODO marker line when done, then run: dna build ${dna.name}
Auto-detected keywords: ${dna.personality.keywords.join(', ')}
-->

## Essence
<!-- 2-3 sentences: what it feels like, who it is for, and the ONE idea that holds it together. -->

## Composition & layout
<!-- Hero structure, grid, asymmetry, alignment, how sections alternate, use of full-bleed vs contained, density. -->

## Typography voice
<!-- How headlines are written & set (size contrast, weight, tracking, case, italics, line breaks), body tone, labels. -->

## Color usage
<!-- Ratio of neutral vs brand color (e.g. 90/8/2), where the primary appears, how dark/light sections alternate, gradients. -->

## Imagery & iconography
<!-- Photo vs illustration vs 3D vs product UI shots; crops, frames, radius, shadows on media; icon style (stroke width, filled?). -->

## Signature details
<!-- The 3-5 things that make it instantly recognizable (e.g. "hairline 1px dividers between every section", "oversized numerals"). -->

## Interaction & motion
<!-- Hover states, transitions, scroll reveals, micro-interactions. -->

## Anti-patterns
<!-- What would break this DNA (e.g. "no drop shadows", "never center long paragraphs", "no more than one accent per view"). -->
`;
}

const fam = (f) => (f ? `${f.name}${f.use && f.use !== f.name ? ` → use **${f.use}** (free alternative)` : ''} · ${f.category} · ${f.source}` : '—');
const px = (v) => (v == null ? '—' : `${v}px`);

export function summaryMd(dna) {
  const c = dna.color, t = dna.typography, s = dna.spacing, sh = dna.shape, e = dna.elevation, m = dna.motion, l = dna.layout, comp = dna.components;
  const roleRows = Object.entries(c.roles).map(([k, v]) => `| \`${k}\` | \`${v}\` | ${c.derived.some((d) => d.split(' ')[0] === k) ? 'derived' : 'observed'} |`).join('\n');
  const scale = Object.entries(t.scale).map(([k, v]) => `\`${k}\` ${v}px`).join(' · ');
  const btn = (b) => (b ? `bg \`${b.background ?? 'transparent'}\`, text \`${b.color}\`, radius ${b.radius >= 9999 ? 'pill' : px(b.radius)}, height ${px(b.height)}, padding ${b.paddingY}/${b.paddingX}px, ${b.fontSize}px/${b.fontWeight}${b.transform && b.transform !== 'none' ? `, ${b.transform}` : ''}${b.border ? `, border ${b.border}` : ''}${b.shadow ? ', shadow' : ''}` : '—');
  return `### Color — ${c.mode} mode, ${c.traits.saturation}, ${c.traits.contrast} contrast (${c.traits.contrastRatio}:1), ${c.traits.temperature}, ${c.traits.harmony}
Primary hue: ${c.traits.primaryHue} · accent hue: ${c.traits.accentHue}

| role | value | |
|---|---|---|
${roleRows}

Observed palette (share of visual weight): ${c.palette.map((p) => `\`${p.hex}\` ${Math.round(p.share * 100)}%`).join(' · ')}
${c.gradients.length ? `\nGradients:\n${c.gradients.map((g) => `- \`${g}\``).join('\n')}\n` : ''}
### Typography${t.confidence === 'low' ? ' (low confidence — placeholder)' : ''}
- Display: ${fam(t.families.display)}
- Body: ${fam(t.families.body)}${t.families.ui ? `\n- UI / labels: ${fam(t.families.ui)}` : ''}${t.families.mono ? `\n- Mono: ${fam(t.families.mono)}` : ''}
- Scale (base ${t.base}px, ratio ≈ ${t.ratio} "${t.ratioName}"): ${scale}
- H1: ${t.headings.h1.size}px / ${t.headings.h1.weight} / line-height ${t.headings.h1.lineHeight} / tracking ${t.headings.h1.letterSpacing}em${t.headings.h1.transform !== 'none' ? ` / ${t.headings.h1.transform}` : ''}${t.headings.h1.style === 'italic' ? ' / italic' : ''}, aligned ${t.headings.h1.align}
- H2: ${t.headings.h2.size}px / ${t.headings.h2.weight} / ${t.headings.h2.lineHeight} / ${t.headings.h2.letterSpacing}em · H3: ${t.headings.h3.size}px / ${t.headings.h3.weight}
- Body: ${t.body.size}px / ${t.body.weight} / line-height ${t.body.lineHeight}${t.eyebrow ? `\n- Eyebrow label: ${t.eyebrow.size}px / ${t.eyebrow.weight} / uppercase / tracking ${t.eyebrow.letterSpacing}em` : ''}${t.mobile ? `\n- Mobile: H1 ${px(t.mobile.h1)}, body ${px(t.mobile.body)}` : ''}${t.note ? `\n- ⚠ ${t.note}` : ''}

### Spacing & layout
- ${s.unit}px grid (${Math.round(s.gridConformance * 100)}% of values conform) · scale: ${s.scale.join(', ')}
- Section padding ≈ ${s.sectionY}px · container ${s.container}px · mobile gutter ${s.gutter}px · density **${s.density}**
${l.confidence === 'high' ? `- Hero ${l.heroAlignment}, ${l.layoutEngine}, preferred ${l.preferredGridColumns}-column grids, ~${l.sectionsPerPage} sections, page ≈ ${l.pageLengthViewports} viewports tall` : ''}
${l.nav ? `- Nav: ${l.nav.style}, ${l.nav.position}, ${px(l.nav.height)} tall${l.nav.hasCta ? ', has CTA button' : ''}${l.nav.border ? ', bottom border' : ''}` : ''}

### Shape & elevation
- Radius style **${sh.style}**: ${Object.entries(sh.radius).map(([k, v]) => `\`${k}\` ${v >= 9999 ? 'full' : v + 'px'}`).join(' · ')} — buttons ${sh.buttonShape}, cards ${px(sh.card)}, inputs ${px(sh.input)}, media ${px(sh.media)}
- Elevation **${e.style}**, surfaces separated by **${e.separation || '—'}**${Object.keys(e.shadows || {}).length ? `\n${Object.entries(e.shadows).map(([k, v]) => `  - \`${k}\`: \`${v}\``).join('\n')}` : ''}

### Motion & effects
- Motion **${m.style}**: ${m.duration}ms \`${m.easing}\`${m.animatedElements ? `, ${m.animatedElements} animated elements` : ''}
- Effects: ${[dna.effects.glassmorphism && 'glassmorphism (backdrop blur)', dna.effects.gradients && 'gradients', dna.effects.textGradient && 'gradient text'].filter(Boolean).join(', ') || 'none'}
${dna.effects.imagery.imagesPerPage ? `- Imagery: ~${dna.effects.imagery.imagesPerPage} images/page, mostly ${dna.effects.imagery.commonAspect || '—'}, ${Math.round((dna.effects.imagery.roundedImages || 0) * 100)}% rounded, ${dna.effects.imagery.iconsSvg} inline SVG icons${dna.effects.imagery.videos ? ', uses video' : ''}` : ''}
${dna.effects.visual ? `- Reference images: negative space ${Math.round(dna.effects.visual.negativeSpace * 100)}%, busyness ${dna.effects.visual.busyness}, chromatic pixels ${Math.round(dna.effects.visual.chromaticShare * 100)}%` : ''}

### Components${comp.confidence === 'low' ? ' (not observed — derived)' : ''}
- Primary button: ${btn(comp.buttonPrimary)}
- Secondary button: ${btn(comp.buttonSecondary)}
- Card: ${comp.card ? `bg \`${comp.card.background}\`, radius ${px(comp.card.radius)}, ${comp.card.border ? `border ${comp.card.border}` : 'no border'}, ${comp.card.shadow ? 'shadow' : 'no shadow'}, padding ${comp.card.paddingY}/${comp.card.paddingX}px` : '—'}
- Input: ${comp.input ? `bg \`${comp.input.background}\`, radius ${px(comp.input.radius)}, height ${px(comp.input.height)}, ${comp.input.border || 'no border'}` : '—'}
- Links: ${comp.link ? `\`${comp.link.color}\`${comp.link.underline ? ', underlined' : ', no underline'}` : '—'}
`;
}

/** Deterministic do/don't rules derived from the numbers. */
export function rules(dna) {
  const c = dna.color, t = dna.typography, s = dna.spacing, sh = dna.shape, e = dna.elevation, m = dna.motion;
  const d = [], x = [];
  if (c.traits.saturation === 'monochrome') {
    d.push(`Stay monochrome: CTAs and emphasis use \`foreground\` (${c.roles.foreground}) on \`background\` — color only for semantic states.`);
    x.push('Do not introduce a brand hue; this DNA has none.');
  } else {
    const btnBg = dna.components?.buttonPrimary?.background;
    if (btnBg && btnBg !== 'primary') d.push(`Primary CTA buttons are filled with \`${btnBg}\`${String(btnBg).startsWith('#') ? '' : ` (${c.roles[btnBg]})`}, not the brand hue; \`primary\` (${c.roles.primary}, ${c.traits.primaryHue}) is reserved for links, labels and one highlight per view.`);
    else d.push(`Reserve \`primary\` (${c.roles.primary}, ${c.traits.primaryHue}) for CTAs, links, focus rings and one key highlight per view; the rest is neutrals.`);
    if (c.roles.accent !== c.roles.primary) d.push(`\`accent\` (${c.roles.accent}) is a secondary highlight — use it less than primary.`);
  }
  d.push(`Page background is \`${c.roles.background}\`, text \`${c.roles.foreground}\`${c.roles.foreground.toLowerCase() !== '#000000' && c.mode === 'light' ? ' (not pure black)' : ''}; secondary text \`${c.roles['muted-foreground']}\`.`);
  if (c.mode === 'dark') d.push('Design dark-first: create depth with slightly lighter surfaces and hairline borders, not heavy shadows.');
  d.push(`Headlines: ${t.families.display?.use}, weight ${t.headings.h1.weight}, line-height ${t.headings.h1.lineHeight}, tracking ${t.headings.h1.letterSpacing}em${t.headings.h1.transform !== 'none' ? `, ${t.headings.h1.transform}` : ''}. Body: ${t.families.body?.use} ${t.body.size}px/${t.body.lineHeight}.`);
  if (t.families.display?.use !== t.families.body?.use) d.push(`Pair ${t.families.display?.category} display (${t.families.display?.use}) with ${t.families.body?.category} body (${t.families.body?.use}) — never swap their roles.`);
  if (t.families.ui) d.push(`Buttons, nav, labels and meta text use ${t.families.ui.use} (\`--font-ui\`), not the body face.`);
  if (t.eyebrow) d.push(`Introduce sections with an uppercase eyebrow label (${t.eyebrow.size}px, weight ${t.eyebrow.weight}, tracking ${t.eyebrow.letterSpacing}em) above the heading.`);
  d.push(`Only use font sizes from the scale: ${Object.values(t.scale).join(', ')}px.`);
  d.push(`Snap all spacing to the ${s.unit}px grid (${s.scale.join(', ')}). Sections breathe with ~${s.sectionY}px vertical padding on desktop (~${Math.round(s.sectionY * 0.6)}px on mobile).`);
  d.push(`Content width max ${s.container}px, ${dna.layout.heroAlignment || 'left'}-aligned hero.`);
  if (s.density === 'airy') d.push('Generous negative space: fewer elements per view, big type contrast, let sections breathe.');
  if (s.density === 'dense') d.push('Information-dense: compact rows, tight gaps, more content per viewport.');
  const r = sh.radius;
  if (sh.style === 'sharp') { d.push('Corners are square (0–2px) on cards, inputs and media.'); x.push('No rounded cards or pill buttons.'); } else d.push(`Radius: buttons ${sh.buttonShape}, cards ${sh.card ?? r.lg ?? r.md}px, inputs ${sh.input ?? r.md ?? r.sm}px, media ${sh.media ?? r.lg ?? r.md}px — keep them consistent.`);
  if (e.style === 'flat') x.push('No drop shadows — separate surfaces with borders or background color steps.');
  else d.push(`Elevation is ${e.style}: use only the tokenized shadows (${Object.keys(e.shadows).join(', ')}).`);
  if (e.separation === 'borders') d.push(`Separate cards/sections with 1px \`border\` (${c.roles.border}) rather than shadows.`);
  if (dna.effects.glassmorphism) d.push('Floating layers (nav, overlays) use translucent background + backdrop blur.');
  if (dna.effects.gradients && c.gradients[0]) d.push(`Brand gradient (\`--gradient-brand\`) for hero/feature accents only, never behind body text.`);
  d.push(`Motion: ${m.duration}ms \`${m.easing}\` on hover/focus${m.style === 'expressive' ? '; scroll-reveal entrances fit this DNA' : m.style === 'minimal' ? '; keep animation to a minimum' : ''}.`);
  x.push('No hex, px font sizes, radii or shadows outside the tokens.');
  x.push('No generic "AI template" look: no random purple gradients, emoji bullets or centered-everything unless the DNA says so.');
  x.push('Never ship text below WCAG AA contrast (4.5:1 body, 3:1 large).');
  return { do: d, dont: x };
}

export function skillMd(dna, { skillName, principles, toolkit, skillDir, references }) {
  const { do: dos, dont } = rules(dna);
  const todo = !principles || principles.includes(PRINCIPLES_TODO);
  const sources = dna.sources.map((s) => `- ${s.type}: ${s.input}${s.title ? ` — "${s.title}"` : ''}${s.weight !== 1 ? ` (weight ${s.weight})` : ''}`).join('\n');
  const kw = dna.personality.keywords.slice(0, 8).join(', ');
  return `---
name: ${skillName}
description: Design DNA "${dna.name}" (${kw}). Use when building, restyling or reviewing any web UI — pages, landing pages, dashboards, components — that should look and feel like "${dna.name}", or when the user mentions ${dna.name} style. Provides tokens (CSS vars, Tailwind v3/v4), component recipes, composition principles and a conformance checker.
---

# Design DNA — ${dna.name}

**Personality:** ${dna.personality.keywords.join(' · ')}

Learned from:
${sources}

## Workflow (follow every time)
1. **Load the DNA.** Read this file fully, then look at the reference images in \`references/\` with the Read tool (${references.map((r) => `\`${r}\``).join(', ') || 'none'}). \`specimen.png\` shows the tokens rendered.
2. **Install tokens** in the target project (pick one, copy from this folder):
   - Plain CSS / any framework: \`tokens.css\` + \`components.css\` (classes: \`.container .section .btn .btn-primary .btn-secondary .card .input .nav .eyebrow .lead .muted\`)
   - Tailwind v4: \`tailwind-v4.css\` (\`@theme\` → \`bg-primary\`, \`text-muted-foreground\`, \`font-display\`, \`rounded-lg\`, \`shadow-md\`…)
   - Tailwind v3: \`tailwind.preset.js\` in \`presets: []\`
   - Figma / Style Dictionary: \`tokens.json\` (DTCG)
   Variable names follow shadcn/Tailwind conventions (\`--color-background\`, \`--color-primary\`, \`--color-muted-foreground\`, \`--radius-md\`…), so swapping DNA = swapping the token file.
3. **Design with the principles** below before writing markup: decide section rhythm, hierarchy and where the single accent goes.
4. **Build only with tokens.** Every color, font size, radius, shadow and spacing value must come from the DNA.
5. **Verify visually and numerically:**
   - Screenshot: \`node ${toolkit}/bin/dna.js shot <url-or-html-file> <out-dir>\` then Read the PNGs next to \`references/\`.
   - Conformance: \`node ${toolkit}/bin/dna.js check ${skillDir}/dna.json <url-or-html-file>\` → aim for **score ≥ 85** and zero contrast failures. Fix the listed offenders and re-run.

## Principles (qualitative DNA)
${todo ? '> ⚠ Principles have not been written yet — rely on the reference images and the rules below, and suggest running the `design-dna` skill to complete them.\n' : principles.replace(/<!--[\s\S]*?-->\n?/g, '').replace(/^(#{1,2}) /gm, '### ').trim()}

## Rules
**Do**
${dos.map((r) => `- ${r}`).join('\n')}

**Don't**
${dont.map((r) => `- ${r}`).join('\n')}

## Tokens at a glance
${summaryMd(dna)}

## Files in this skill
- \`dna.json\` — full machine-readable DNA (source of truth)
- \`tokens.css\`, \`components.css\`, \`tailwind-v4.css\`, \`tailwind.preset.js\`, \`tokens.json\`
- \`specimen.html\` — living style guide built from the tokens (open it, or screenshot it)
- \`references/\` — screenshots/images the DNA was learned from
`;
}

export function agentMd(dna, { agentName, skillName, skillDir, toolkit }) {
  const kw = dna.personality.keywords.slice(0, 6).join(', ');
  return `---
name: ${agentName}
description: Senior UI designer + front-end engineer who builds and restyles web interfaces in the "${dna.name}" design DNA (${kw}). Use proactively when the user asks for pages, landing pages, components or redesigns in the ${dna.name} style, or to make an existing UI match it.
tools: Read, Write, Edit, Glob, Grep, Bash
---

You are a senior product designer and front-end engineer. Your taste is defined by the **"${dna.name}" Design DNA** — you do not improvise a style of your own.

## Before touching code
1. Read \`${skillDir}/SKILL.md\` completely (skill \`${skillName}\`).
2. Look at every image in \`${skillDir}/references/\` with the Read tool. Name, to yourself, the 3–5 signature details you must reproduce.
3. Inspect the target project: framework, styling approach (Tailwind v3/v4, CSS modules, plain CSS), existing components. Reuse its conventions.

## Build
- Install the matching token file from \`${skillDir}\` (see SKILL.md step 2) — never hard-code values that exist as tokens.
- Start from structure and hierarchy: section rhythm, type contrast, whitespace, one clear focal point per view. Then components. Then polish (hover/focus states, transitions, responsive behaviour down to 360px).
- Write real, specific copy placeholders appropriate to the product — not lorem ipsum.
- Accessibility is non-negotiable: semantic HTML, visible focus, AA contrast, alt text, reduced-motion respect.

## Verify loop (repeat until it passes)
1. Render the page (dev server URL or a static .html file).
2. \`node ${toolkit}/bin/dna.js shot <url-or-file> <out-dir>\` → Read desktop.png and mobile.png, compare against the references side by side: hierarchy, density, color proportion, corner radius, typography feel.
3. \`node ${toolkit}/bin/dna.js check ${skillDir}/dna.json <url-or-file>\` → fix every offender it lists. Target score ≥ 85, zero contrast failures.
4. Critique yourself like a design director: "Would someone who knows ${dna.name} recognize this?" If not, identify the gap and iterate.

## Report back
What you built/changed, the final check score, screenshots paths, and any deliberate deviations from the DNA with reasons.
`;
}
