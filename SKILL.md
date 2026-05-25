---
name: gupy-eco-design
description: Use this skill to generate well-branded interfaces and assets for Gupy (the Brazilian HR-tech suite — Recrutamento, Admissão, Performance, Engajamento, EduCorp) using the Eco Design System, for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `fonts/`, `preview/`, `ui_kits/eco-web/`).

Key facts about Gupy / Eco:

- **Product surface:** Brazilian HR-tech (pt-BR primary); products are R&S, Admissão, Performance, Engajamento, EduCorp.
- **Built on MUI v5.16** with custom brand and semantic tokens layered on top.
- **Brand colors:** `cobalt #003CFD` (primary), `papaya #CC4F28` (secondary), `lilac #7D35F8` (highlight / AI), `orange #FF5C1D` (extended).
- **Neutral signature:** `bluish-gray` (cool gray with hint of blue). `bluish-gray.950 #151723` for body text, `bluish-gray.50 #F3F4F7` for canvas.
- **Type:** Inter for product UI, Roboto for buttons/legacy MUI surfaces, Roboto Mono for code.
- **Buttons are always pill-shaped** (`border-radius: 100px`). This is Eco's most distinctive visual signature.
- **No gradients**, no shrink/scale press states, no emoji, no colored shadows. Functional, businesslike motion (MUI standard easing, ~150 ms hovers).
- **Iconography:** Material Symbols Rounded (linked from Google Fonts CDN as a substitute for `@mui/icons-material/*Rounded`).
- **Voice:** "você"-form, direct, sentence-case, action-first labels ("Criar vaga", "Convidar usuário").

If creating visual artifacts (slides, mocks, throwaway prototypes, etc):
- Always `@import` or copy `colors_and_type.css` and reference the `--eco-*` tokens — never hard-code hex values.
- Reuse the React components in `ui_kits/eco-web/` for pixel-faithful surfaces.
- Pull logos from `assets/` — wordmark `gupy-logo-{navy,cobalt,white}.png`, monogram `gupy-mark-{navy,cobalt,white}.png`. Navy is the corporate "Azul Gupy"; cobalt is the brand-primary "Azul Impulso". Do not redraw them.
- Use pt-BR copy in product surfaces unless the user explicitly asks for English.
- Output self-contained HTML files for the user to view.

If working on production code, copy assets, read the rules in `README.md`, and become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some focused questions (product, audience, single screen vs flow, en/pt-BR), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
