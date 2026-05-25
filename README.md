# Gupy Eco · Web UI kit (R&S)

High-fidelity recreation of the **Gupy Recrutamento & Seleção** product surface, built on Eco DS tokens.

## Files
- `index.html` — entry, screen switcher (Login / Vagas / Usuários)
- `components.jsx` — `<Icon> <Button> <TextField> <Checkbox> <Switch> <Avatar> <Chip> <Card> <AppBar> <Sidebar> <Tabs> <Alert>`
- `LoginScreen.jsx` — Centered card login mirroring `/Screens/Log-in` from Figma
- `JobDirectory.jsx` — Vagas list (active screen by default)
- `JobDetail.jsx` — Pipeline + candidates table
- `UserManagement.jsx` — Mirrors `/Screens/User-management`
- `styles.css` — component CSS (compiled from `--eco-*` tokens)
- `screens.css` — screen-specific CSS

## Notes
- All Button variants are pill-shaped (Eco's signature; `border-radius: 100px`).
- All copy is **pt-BR** (the production language). Voice: direct, "você"-form, sentence-case.
- Material Symbols Rounded loaded from Google Fonts CDN (matches Eco's MUI Icons set).
- This kit is a **visual recreation**, not real production code; behaviour is mocked.
