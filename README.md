# Gupy Eco Design System

A faithful recreation of **Gupy's "📚 Eco Design System"** as a portable design system folder for design and prototyping work. Built on top of Material-UI v5 (MUI 5.16.0), Eco is the foundation Gupy uses across its HR-tech suite.

> "Tokens primitivos são consumidos por Brand e Semantic Tokens. Não são disponibilizados para uso direto nas interfaces." — Eco Design System docs

## About Gupy

[Gupy](https://www.gupy.io) is a Brazilian HR-tech company (founded in São Paulo, 2015) that builds a unified people-management platform covering the full talent lifecycle. The Eco DS spans several products inside the suite, identified in the Figma library as:

- **R&S** – Recrutamento & Seleção (ATS / recruiting)
- **ADM** – Admissão (onboarding & admission)
- **Performance** – performance reviews, OKRs, feedback
- **Engajamento** – engagement surveys, climate
- **EduCorp** – corporate learning / LMS

Eco is consumed by all five and exposes shared **brand tokens** (Cobalt, Papaya, Lilac, Orange) and **semantic tokens** (background, text, border, state, status) on top of MUI primitives.

## Sources

- **Figma file:** `📚 Eco Design System.fig` (mounted, 84 pages, 408 top-level frames). Library author: COE | Design Ops.
- Pages of note: `/Overview`, `/Design-Tokens`, `/Typography`, `/Spacing`, `/Button`, `/Screens`, `/Forms`, `/Headings`, `/Navs`.
- Live Figma URL: _not provided_ — only the offline `.fig` was given.
- Codebase: _not provided_ — please attach the eco-components repo (if it exists) so we can sharpen component fidelity.

## Index

```
README.md                 — this file
SKILL.md                  — agent-skill entry point
colors_and_type.css       — all tokens (color + type), ready to drop into HTML
fonts/                    — Inter, Roboto, Roboto Mono (Google Fonts substitutes; see Fonts section)
assets/                   — Logos (gupy-logo-{navy,cobalt,white}.png + gupy-mark-{navy,cobalt,white}.png)
preview/                  — Cards rendered in the Design System tab
ui_kits/
  eco-web/                — Web app UI kit (R&S product flow: login → job directory → user mgmt)
slides/                   — (omitted — no slide template was provided)
```

## Content fundamentals

Eco is a **Brazilian-Portuguese product surface**. Most internal documentation, names, and copy are written in **pt-BR**. Public-facing recruiter/candidate screens are bilingual (pt-BR primary, en-US present).

**Voice & tone**
- **Direct, practical, professional.** Sentences are short. No exclamation points in product UI; reserved for marketing only.
- **Treat the reader as "você" (you, formal/neutral),** never "tu". Examples from the library: *"Pesquise pelo nome ou e-mail"*, *"Convidar usuário"*, *"Salvar alterações"*.
- **Sentence case for everything** except section labels and chips, which use Title Case. Buttons in the system render in Title Case for primary actions; legacy components still show `ALL CAPS` (MUI default) — this is being phased out.
- **No emoji in product UI.** The internal Figma library uses 📚🚨 in *page titles* to signal "library" and "deprecated" but they never appear in shipped product surfaces.
- **Action-first labels.** "Criar vaga" / "Create job", not "Nova vaga". "Convidar usuário", not "Adicionar".
- **Status copy is neutral.** Empty states say what to do next, not "Oops!".

**Common vocabulary (pt-BR ↔ en-US)**
| pt-BR | en-US |
| --- | --- |
| Vaga | Job opening |
| Candidato | Candidate |
| Talento | Talent |
| Etapa | Stage |
| Pessoas | People |
| Admissão | Admission / onboarding |
| Desempenho | Performance |

## Visual foundations

### Colors

Eco uses a **three-tier token system** — Primitives → Brand → Semantic.

**Brand**
- **Primary** — `cobalt` (`#003CFD`, the headline blue). Used for primary actions, links, focus rings.
- **Secondary** — `papaya` (`#CC4F28`, warm orange-red). Used sparingly for emphasis CTAs and selected states.
- **Highlight** — `lilac` (`#7D35F8`). Reserved for special/AI/feature differentiation.
- **Extended-2** — `orange` (`#FF5C1D` / `#D34317`). Adjacent to papaya; used for chart series and accents.

**Neutrals** — Eco's signature is **`bluish-gray`**, a cool gray with a hint of blue. `bluish-gray.950 = #151723` is the body text default; `bluish-gray.50 = #F3F4F7` is the app background. Pure black/white are reserved for logos and full-bleed surfaces.

**Status / semantic**
- Success — `green` (#288636 text, #66AE13 main)
- Error — `red` (#BA121E)
- Warning — `yellow` (#E4851C)
- Info — `lightBlue` (#0D79BC)

**Chart palette extends with** turquoise, magenta, lime, indigo — each with light/dark variants.

### Typography

- **Primary:** **Inter** (Regular 400, Medium 500, SemiBold 600, Bold 700). Most product UI.
- **Secondary / fallback:** **Roboto** (Regular, Medium, Bold). Inherited from MUI defaults; still appears on buttons (`fontFamily: Roboto` in the source) and some legacy surfaces.
- **Mono:** **Roboto Mono** (Medium, Bold) — used in code samples, tokens documentation headings (e.g. "Features" hero on the Getting Started page is set in 64px Roboto Mono Medium).

**Type scale (from `Gupy DS Typography`):**

| Token | Size / line-height | Use |
| --- | --- | --- |
| Display Large | 64 / 64 px | Marketing hero |
| Display Medium | 56 / 56 px | Page hero |
| Display Small | 48 / 48 px | Section hero |
| Heading Large | 40 / 48 px | Page title |
| Heading Medium | 32 / 36 px | Section title |
| Heading Small | 24 / 32 px | Card title |
| Title Large | 20 / 32 px | Subsection |
| Title Medium | 18 / 28 px | Component title |
| Title Small | 16 / 24 px | Form group |
| Body Bold L/M/S | 16 / 14 / 12 px | Emphasized body |
| Body L/M/S | 16 / 14 / 12 px | Default body |
| Label L/M/S | 14 / 12 / 10 px | Captions, chips |

### Spacing

Eco follows a **base-4 / inset-based** spacing system (named after the historical "Quark/Nano/Micro" tokens still present in the Figma):
- `quark 2`, `nano 4`, `micro 8`, `xxxs 8`, `xxs 12`, `xs 16`, `sm 20`, `md 24`, `lg 32`, `xl 40`, `xxl 48`, `xxxl 64`, `huge 80`, `giant 120`.
- Inset variants (`inset-xxxs … inset-md`) mirror the same numbers and indicate symmetric padding inside containers.

### Corner radii

- **2 px** — frames, sections (subtle, internal docs surfaces).
- **4 px** — text fields, cards, small chips.
- **8 px** — dialogs, popovers, paper surfaces.
- **16 px** — typography spec frames, large hero cards.
- **100 px** — fully rounded ("pill") buttons. **All MUI Button components in Eco are pill-shaped.** This is the most distinctive Eco visual signature.

### Borders

- Default border: `1px solid rgba(21,23,35,0.12)` (12% bluish-black).
- Focus / outlined-button border: **2px solid #003CFD** (cobalt-700).
- Outlined disabled: `1px solid rgba(21,23,35,0.23)`.
- Divider: `1px solid rgba(0,0,0,0.12)` horizontal, same for vertical.

### Elevation / shadows

Eco uses **MUI's 25-level elevation scale** unchanged. The most-used recipes:

```css
/* Elevation 1 — cards, app bars */
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.12),
            0px 2px 2px 0px rgba(0,0,0,0.14),
            0px 3px 1px -2px rgba(0,0,0,0.2);

/* Elevation 6 — floating action buttons */
box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
            0px 6px 10px 0px rgba(0,0,0,0.14),
            0px 1px 18px 0px rgba(0,0,0,0.12);
```

No colored / brand-tinted shadows. Shadows are always neutral black with low alpha.

### States

- **Hover** — overlay of `currentColor` at **4% alpha** on top of the base color (`rgba(21,23,35,0.04)` for neutral surfaces, `rgba(0,60,253,0.04)` for primary).
- **Selected** — `8% alpha` overlay.
- **Focus visible** — `12% alpha` overlay + a `2px` cobalt outline ring offset 2px.
- **Active / pressed** — `12% alpha` overlay; pill buttons darken to `cobalt-800 (#063BC1)`. No shrink/scale transforms in the system.
- **Disabled** — text and icons fade to `rgba(21,23,35,0.38)`; backgrounds to `rgba(21,23,35,0.12)`.

### Backgrounds

- App canvas: `#F3F4F7` (bluish-gray.50).
- Cards / paper: `#FFFFFF` with elevation 1.
- Hero / documentation headers: dark `#011223` (indigo.950) or `#252E41` (bluish-gray near-black). White type on dark.
- **No gradients in product UI.** Marketing surfaces occasionally use a single subtle radial wash but the design system itself is gradient-free.
- **No images-as-background in product UI.** Imagery is used only as content (avatars, company logos, hero illustrations).

### Animation

- Standard MUI easing (`cubic-bezier(0.4, 0, 0.2, 1)` — "ease-in-out").
- **Hover**: 150 ms color/opacity fade.
- **Press**: 50 ms (no scale).
- **Drawer / Dialog**: 225 ms ease.
- **Skeletons**: 1.6s pulse (animation=true in 1471 instances in the file).
- No bounces, no springs, no parallax. Animation is functional, never decorative.

### Transparency & blur

Eco uses **alpha overlays** liberally (12% / 16% / 30% / 56% on `#151723`) for borders, dividers, state layers, and backdrops. **Real backdrop-filter blur is reserved for backdrops behind modals** — `rgba(0,18,47,0.56)` solid scrim, no blur in the canonical spec, but Backdrop variants exist that add `backdrop-filter: blur(4px)`.

### Layout rules

- **Grid:** 12-column, 24px gutter, 1152 px max content width inside a 1440 px desktop frame (24px column gutters, 144px outer margin).
- **Breakpoints (MUI):** xs 0, sm 600, md 900, lg 1200, xl 1536.
- **App bar height:** 64 px desktop, 56 px mobile.
- **Drawer:** 280 px standard width.

### Cards

- White background, no border by default.
- 4px corner radius, elevation 1.
- `padding: 16px` (cards) or `padding: 24px` (large content cards).
- Card header uses Heading Small (24/32) and a Body Small subtitle in `bluish-gray.700 (#5C637F)`.

## Iconography

Eco's icon system is **Material Icons (Rounded)**, used at 24px (default), 20px (small), and 16px (dense). The Figma exposes ~1,970 small SVG-icon instances and ~1,683 medium ones — they are imported from MUI as a 1:1 mapping. We did not export icon SVGs into this folder; instead we recommend loading them at runtime:

- **Preferred (matches Eco exactly):** `@mui/icons-material` (Rounded variant) — `import StarRounded from '@mui/icons-material/StarRounded'`.
- **CDN substitute for static prototypes:** Google's [Material Symbols Rounded](https://fonts.google.com/icons?icon.style=Rounded) variable font. We link this from the CDN inside `colors_and_type.css`. Stroke weight 400, fill 0, optical size 24. **This is a substitution** — the live product uses individual SVGs from `@mui/icons-material`, but visually they are interchangeable.

**Emoji:** not used in product UI. Internal-only signal in Figma page titles.
**Unicode glyphs as icons:** not used.
**Custom illustrations:** very limited — a few product-marketing illustrations live on the Overview page but are not part of the component library proper.

## Fonts

**Inter (variable)** is self-hosted from brand-supplied files in `fonts/`:
- `fonts/Inter-VariableFont_opsz_wght.ttf` — upright (weight 100 → 900, optical size axis)
- `fonts/Inter-Italic-VariableFont_opsz_wght.ttf` — italic

These are wired up via `@font-face` at the top of `colors_and_type.css`. **No substitution.**

**Roboto** and **Roboto Mono** are loaded from Google Fonts CDN (open-source, identical to what Eco/MUI uses). If you need true offline builds, drop the `.ttf`s in `fonts/` and swap the `@import` for `@font-face` blocks.

## Caveats

- **No live codebase was attached.** Component fidelity is based purely on the Figma pseudocode + screenshots. Pixel exactness will improve if someone attaches the Gupy `eco-components` repo (or whatever the published npm package is) so we can read the real CSS.
- **No real Gupy product screenshots** were provided. The `ui_kits/eco-web` flow reconstructs the three screen templates that *exist inside the design library itself* (Log-in, Job directory, User management). It is not a 1:1 of the production app; it's a 1:1 of the Figma reference screens.
- **Slide templates omitted** — no deck was provided in the source.
- **Material Icons Rounded** are linked from CDN rather than bundled. See Iconography.
- **Date pickers, charts, transfer lists, tree views** — exist in Figma but are not yet recreated in `ui_kits/eco-web`. Coverage is concentrated on form, button, surface, and table primitives.
