# PRIMITIVE — Brand & UI/UX Style Guide
### Finished · v1.0

This supersedes the earlier draft. The one structural change: **Primitive is a peer, not the parent.** The shared layer is the *philosophy* — and the pyramid belongs to the philosophy, not to Primitive. All three brands inherit the mark, the type spine and the spatial rhythm, then diverge in accent and motion. That reconciliation runs through everything below.

---

## 0 · THE SHARED LAYER (the roof)

Three brands, one method, moving in three directions.

**Primitive** studies how complex systems work. *(down — into structure)*
**WHATBIT** fixes the part that matters. *(in — onto the leverage point)*
**Elsewhere** builds new systems in the physical world. *(out — into the world)*

> Primitive studies it. WHATBIT uses it. Elsewhere builds with it.

**What all three inherit — non-negotiable, this is what makes them feel like family:**

1. **The pyramid.** It literally means *simple primitives forming complex structure* — the shared idea itself. It is the group's mark before it is any brand's logo. Each brand does one directional thing to it (see §15).
2. **The type spine.** Space Grotesk (display) + Inter (body). Same fonts, always.
3. **The spatial rhythm.** The 4px base unit and spacing scale. This is the invisible glue — shared *rhythm of space* does most of the coherence work for free.
4. **The accent behaviour.** One accent per brand, always used the same way: it marks the live/active/selected thing, and it stays under ~10% of any composition. The *hue* diverges per brand; the *discipline* never does.
5. **The motion DNA.** Every hero motion, whatever the brand, is a variation of *contract · trace · expand* — the method itself, played at three tempos.

That's the syntony. Same atom, same rhythm, same discipline — three verbs, three hues, three tempos. A visitor can't say why the three sites feel related. They just will.

---

## 1 · PRIMITIVE, SPECIFICALLY

**What Primitive is.** The intelligence and research layer. Systems thinking, AI, RFT, infrastructure, evaluation. Not "the AI company" — the *understanding-systems* company, for which AI happens to be the most powerful implementation tool.

**Legal wrapper (invisible to customers):** Primitive Labs AI Pty Ltd.

**The brand idea.** Reduce a complicated system to its underlying structure, understand how the parts interact, rebuild it more intelligently. It should feel: *fundamental, not simplistic · technical, not sterile · intelligent, not performatively futuristic · experimental, but credible · precise, but human.*

**Positioning line (research-forward site):**
> AI can reason about almost anything. Someone still has to decide what it's reasoning about.

**Method line (transitions, motion, internal):**
> Contract the noise. Trace the system. Expand what works.

**The mark, explained:**
> A prism doesn't add colour. It reveals what was already in the light.

---

## 2 · PERSONALITY & VOICE

Primitive sounds like a systems architect explaining something clearly — a researcher who understands commercial reality and doesn't need buzzwords to prove competence.

**Traits:** precise · curious · calm · technical · independent · human.

**Sentence style:** short statements, clear verbs, concrete nouns, specific claims. Longer prose is fine for a genuinely complex idea, as long as the structure stays obvious. **Vary the rhythm** — the one-line cascade is a device, not a default; when every section is a cascade, it stops meaning anything.

**Preferred vocabulary:** system, structure, field, relationship, trace, signal, context, memory, primitive, coordinate, state, boundary, model, agent, network, emergence, recurrence, architecture, observe, map, contract, expand.

**Banned unless they carry a specific meaning:** revolutionary, game-changing, cutting-edge, disruptive, next-generation, AI-powered, seamless, synergy, transformative, unlock, future-proof.

**Voice rule of last resort:** never tell the reader Primitive is deep — say something deep enough that they notice. And one epistemic-humility line per page, not six.

---

## 3 · LOGO & THE PYRAMID

### 3.1 Construction

The mark is a **wireframe pyramid** — line-drawn, not solid. It should read as *composed of relationships and planes*, not a monolithic object.

- Draw on a square artboard. The pyramid is a 4-edge base perspective form with a single apex; the near-vertical back edge is visible, giving it depth (two triangular faces implied, base drawn as a shallow parallelogram).
- **Stroke:** even weight, rounded caps and joins. At mark size, stroke ≈ 4–6% of mark width.
- **Optical balance over mathematical centre** — the apex sits slightly above true centre so the base doesn't feel bottom-heavy.
- The internal near-edge (apex to front base vertex) is the one subtle internal division allowed. It reinforces "connected primitive states." No further internal geometry.

### 3.2 The two treatments

**Default — Carbon monochrome.** The wireframe in `--primitive-carbon` on light, or `--primitive-paper` on dark. This is the working logo: nav, favicons, documents, small sizes, most placements.

**Signature — Spectral edge.** The prism version — edges carry a faint spectral refraction (the rainbow on your actual mark). This is *light through a prism made literal*, and it is the group's most beautiful asset. **Reserve it** for hero moments, the loading state, brand covers, the pyramid-in-motion. Never for small UI, never as a default. The rule from the neutral system still holds: the logo is usually monochrome; the spectral edge is the exception that earns attention precisely because it's rare.

### 3.3 Variants

A. Primary lockup — mark + `PRIMITIVE`
B. Horizontal lockup — mark left, `PRIMITIVE` right
C. Logomark — pyramid only
D. Wordmark — `PRIMITIVE` only
E. Product lockup — `PRIMITIVE` / `PRODUCT` (e.g. `PRIMITIVE` / `CORE`)

### 3.4 Clear space & minimum size

- **Clear space:** 1× the width of the internal near-edge on all sides. More where possible — Primitive never appears cramped.
- **Minimum:** logomark 24px wide; primary lockup 120px wide. Below that, simplify geometry (drop the base parallelogram to a single line if needed).

### 3.5 Colour rules

Light background → carbon mark. Dark background → warm-white mark. Spectral edge → feature use only. Don't routinely apply gradients to the working logo. Never stretch, rotate arbitrarily, add glow, or use the pyramid as meaningless decoration.

---

## 4 · COLOUR

Primitive is predominantly neutral. Colour creates hierarchy, not spectacle.

**Neutrals**
`--primitive-paper #F7F7F4` — primary background (warm enough to avoid clinical white)
`--primitive-white #FFFFFF` — cards, high-contrast surfaces, documents
`--primitive-mist #ECEDEA` — secondary surface
`--primitive-silver #D7D9D6` — borders, dividers, inactive controls
`--primitive-graphite #484B49` — secondary text
`--primitive-carbon #171918` — headings, nav, dark sections, primary controls, logo
`--primitive-black #090A09` — sparingly, for maximum contrast

**Accent — Primitive Ember** *(Primitive's hue in the shared accent system)*
`--primitive-ember #C8663D` — the brand's one accent: active states, selected nav, diagram emphasis, key numbers, brand moments. Generally **under 10%** of any composition.
`--primitive-ember-light #E8B19A` — soft highlights, background states, data-viz
`--primitive-ember-dark #8F4328` — where darker contrast is needed

**Functional (muted, never SaaS-bright)**
Success `#39745A` · Warning `#A96F2B` · Critical `#A3463F` · Information `#416783`

**Ratio (typical interface):** ~70% paper/white · ~20% carbon/type/structure · ~8% mist/silver/graphite · ~2% ember. *Neutral environment. Strong structure. Controlled emphasis.*

---

## 5 · TYPOGRAPHY

**Display — Space Grotesk.** Hero and section headings, large numerals, product names, diagram labels. Weight 500, tight line-height on large sizes (~0.95).

**Body / UI — Inter.** Body copy, buttons, forms, docs, tables, long-form reading. Weight 400, line-height ~1.55.

**Scale (desktop)**

| Role | Font | Size | Weight | LH |
|---|---|---|---|---|
| Display XL | Space Grotesk | 80–96 | 500 | 0.95 |
| Display | Space Grotesk | 64–72 | 500 | 1.0 |
| H1 | Space Grotesk | 48–56 | 500 | 1.05 |
| H2 | Space Grotesk | 36–42 | 500 | 1.1 |
| H3 | Space Grotesk | 26–30 | 500 | 1.15 |
| H4 | Space Grotesk | 20–22 | 500 | 1.2 |
| Body Large | Inter | 18–20 | 400 | 1.55 |
| Body | Inter | 16 | 400 | 1.55 |
| Small | Inter | 14 | 400 | 1.5 |
| Micro | Inter | 11–12 | 500 | 1.4 · uppercase · +tracking |

**Case.** Headings are sentence case. Uppercase is reserved for labels, eyebrows, metadata and small nav — including the epistemic-status labels (§11).

---

## 6 · LAYOUT & SPACE

Hierarchy comes from position and scale *before* boxes and borders. Cards are a UI tool, not the default layout — don't put every idea in a card.

- **Max content width:** 1200–1320px. **Reading column:** 620–760px.
- **Grid:** 12-col desktop · 8-col tablet · 4-col mobile.
- **Base unit 4px.** Increments: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Prefer generous vertical space.
- **Corners:** small UI 6px · cards 10–12px · large containers 16px. Avoid aggressive 24–40px rounding. Pills only where the thing genuinely behaves like a pill/tag.
- **Borders:** `1px solid var(--primitive-silver)`. Many sections need no container at all — let whitespace do the separating.
- **Shadows:** extremely sparing, soft/wide/low-opacity. Primitive is architectural, not floating.

---

## 7 · COMPONENTS

**Buttons.** Primary: carbon fill, paper text ("Start a project"). Secondary: transparent, carbon border, carbon text. Ember fill only where a CTA genuinely needs extra emphasis — rarely. Labels describe the outcome: *Explore the system · View the architecture · Map your workflow · Open the Lab · Talk to Primitive.* Never *Learn more · Click here · Submit.*

**Navigation.** Quiet. Mark · Work · Research · Evidence · Essays · About · **[Enter the Lab]**. No dumping-ground SaaS categories.

---

## 8 · DIAGRAMS & DATA-VIS

Diagrams are central to Primitive's identity — and must not look like generic consulting diagrams.

**Vocabulary:** nodes · fields · planes · vectors · relationships · paths · layers · coordinates · boundaries · state transitions. Hierarchy should distinguish objects / relationships / context / state / uncertainty / outputs.

**Nodes:** small, simple, high-contrast, lightly outlined. Selected → ember. **Connections:** fine, neutral, low-contrast; emphasise relationships selectively. **No rainbow network maps** (the spectral edge belongs to the mark, not the data).

**Charts:** start monochrome; introduce ember for the single most important series or observation. *historical → graphite · forecast → silver · selected → ember.* Colour indicates meaning, not variety.

---

## 9 · MOTION

Motion reveals relationships — connection, transition, recurrence, expansion, contraction, emergence, state change. It communicates something, or it doesn't run. No ambient motion for its own sake.

- Micro-interaction: 120–220ms · Interface transition: 250–450ms · Narrative visualisation: 600–1200ms.
- **The pyramid in motion (Primitive's tempo):** planes separating, vertices connecting, internal structure appearing, slight spatial rotation, multiple primitives converging into one — always resolving cleanly back to the recognisable mark. Primitive's motion is the *contracting* variation: descend and converge toward the apex.
- Respect `prefers-reduced-motion`.

---

## 10 · IMAGERY

Observational, not promotional. Real environments, technical infrastructure, machines, workplaces, natural systems, architectural geometry, scientific imagery, humans interacting with technology. Natural light, wide compositions, negative space, neutral grading.

**Never:** glowing AI brains, robots, neon circuits, corporate handshakes, people pointing at transparent screens, generic server rooms, cyberpunk. Abstract visuals may explore fields, recurrence, spatial graphs, coordinates, emergent geometry, higher-dimensional forms — as *scientific visualisation*, not decorative sci-fi.

---

## 11 · THE EPISTEMIC-STATUS SYSTEM *(Primitive's signature — no other AI brand has this)*

Every research artifact carries a status label. Treat it as a first-class visual component, not a tag afterthought. This is the single most distinctive thing in the identity — build it deliberately.

**Form.** Micro-type (Inter 11–12px, uppercase, +tracking), a 1px hairline container or a leading rule, and a status dot. Quiet by default — the label is a fact, not a badge.

**Status → colour (uses the muted functional palette, never bright):**

| Status | Dot | Meaning at a glance |
|---|---|---|
| BELIEF | silver | philosophical position |
| OPEN QUESTION | silver | we don't know yet |
| HYPOTHESIS | information `#416783` | specific enough to test |
| FORMALISED | information | precise enough to attack |
| EXPERIMENTAL | ember | being tested, provisional |
| REPLICATED | success `#39745A` | survived repeat testing |
| INDEPENDENTLY REPLICATED | success (filled) | reproduced by outsiders |
| FALSIFIED | critical `#A3463F` | didn't survive — stays anyway |
| SUPERSEDED | graphite | replaced; old version reachable |

**Banners** (page-top, full-width, hairline rule, no fill except a 1px accent edge in the status colour): *Belief · Open question · Experimental · Superseded · Falsified.* Copy for each lives in the site copy doc, §16.

**Rule:** the label's discipline is the brand's integrity made visible. Never soften it, never hide a FALSIFIED, never upgrade EXPERIMENTAL to REPLICATED without the runs. The credibility of the whole site rests here.

---

## 12 · DARK MODE

An inversion of the same identity, not a second brand.
Background `#171918` · elevated `#222523` · primary text `#F7F7F4` · secondary text `#B8BBB7` · border `#343835` · accent ember (unchanged).

---

## 13 · ACCESSIBILITY

WCAG AA minimum. Body text meets contrast. Meaning never depends on colour alone (status labels always carry text, not just a dot). Visible focus indicators. Touch targets ~44×44px. Respect reduced-motion. Accessibility is system quality, not a styling layer.

---

## 14 · DESIGN PRINCIPLES

**Contraction.** Before adding anything: can it be removed? can two concepts become one? can hierarchy carry this without another container? can the interaction reveal it only when needed?

**Traceability.** A user should understand why something exists and where it came from — outputs, decisions, data, workflow states, research, navigation. A product characteristic and a visual principle at once.

**Emergence.** Complexity reveals progressively. A first-time visitor sees a clear, simple structure; a technical visitor can dig into deeper layers. Don't hide complexity — reveal it at the right resolution.

---

## 15 · DIVERGENCE HOOKS *(how the family works — seed the syntony now)*

All three inherit §0's five shared things. They diverge here:

| | Primitive | WHATBIT | Elsewhere |
|---|---|---|---|
| Pyramid verb | **contracts** — planes drill to apex | **points** — caret isolates one piece | **grows** — seed subdivides into mesh/organic form |
| Motion | descend, converge | snap, pinpoint | unfold, outward-up |
| Accent hue | Ember `#C8663D` | sharper/brighter (TBD) | living/mineral tone (TBD) |
| Voice | research-serious, dry | direct, punchy, editorial | scientific-naturalist |
| Palette feel | carbon · paper · ember | more graphic, high-contrast | organic textures, derived material palette (chalk/soil/water/chlorophyll — not "green sustainability") |

Same bar, three musicians. When you build WHATBIT and Elsewhere's UI docs, they start from this table, not from scratch.

---

## 16 · DO / DON'T

**Do** — large negative space · diagrams as genuine communication · hierarchy before decoration · make technical content beautiful through structure · use the pyramid consistently · let the Lab experiment · keep commercial surfaces restrained · label epistemic status religiously.

**Don't** — generic AI imagery · neon/cyberpunk · card overload · gradients as a substitute for hierarchy · a new aesthetic per product · overselling · artificially vague technical concepts · rounding everything · the pyramid as decoration · a fabricated benchmark number, ever.

---

## 17 · DESIGN TOKENS

```css
:root {
  /* neutrals */
  --primitive-paper: #F7F7F4;
  --primitive-white: #FFFFFF;
  --primitive-mist: #ECEDEA;
  --primitive-silver: #D7D9D6;
  --primitive-graphite: #484B49;
  --primitive-carbon: #171918;
  --primitive-black: #090A09;

  /* accent */
  --primitive-ember: #C8663D;
  --primitive-ember-light: #E8B19A;
  --primitive-ember-dark: #8F4328;

  /* functional (muted) */
  --status-success: #39745A;
  --status-warning: #A96F2B;
  --status-critical: #A3463F;
  --status-info: #416783;

  /* type */
  --font-display: "Space Grotesk", sans-serif;
  --font-interface: "Inter", sans-serif;

  /* radius */
  --radius-small: 6px;
  --radius-medium: 10px;
  --radius-large: 16px;

  /* space (4px base) */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-6: 24px; --space-8: 32px;  --space-12: 48px; --space-16: 64px;
  --space-24: 96px; --space-32: 128px;
}
```

---

## 18 · THE INTERNAL BRAND TEST

Before approving any design, ask:

1. Could this belong to any AI startup? If yes — not distinctive enough.
2. Is anything here purely because it looks technological? If yes — remove it.
3. Can the structure be understood without decoration? If no — fix the hierarchy.
4. Does the visual *communicate* relationships or merely decorate them? Prefer communication.
5. Does it feel intelligent without trying to prove it? **That's the target.**

---

## THE SIGNATURE COMPOSITION

The most recognisable Primitive layout should eventually be: a large Space Grotesk statement · substantial empty space · one fine structural diagram · carbon type · warm-white environment · a single ember focal point · the small pyramid mark. Nothing else competing for attention.

> The brand doesn't need to look futuristic. It needs to look like it understands the future well enough not to imitate it.

**PRIMITIVE** · Contract the noise. Trace the system. Expand what works.
