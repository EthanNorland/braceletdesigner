# Handoff Notes

## Current State
- **Version:** `1.4.0`
- **Phase:** Phase 3 (Autosave, Project Open, Drag-and-Drop, Migration) deployed to GitHub Pages.
- **App URL:** https://ethannorland.github.io/hello-world/
- **Repository:** https://github.com/EthanNorland/hello-world

## What Works
- Single-file HTML app (`index.html`) using Three.js r128 vendored locally in `/vendor/`.
- Full Core Loop (`Select → Add → Slide → Check Fit`):
  - Direct 3D Raycasting: click and drag any bead or spacer to slide smoothly along the bracelet loop.
  - Left Palette: Add sphere, faceted, rondelle, barrel, cube, and star beads; silver/gold/carved spacers; swap magnetic, lobster, and screw-in clasps with gold/silver materials.
  - Right Properties: Edit selected bead diameter (6mm-16mm), switch shape across 6 options (Sphere, Faceted, Rondelle, Barrel, Cube, Star), swap materials (`Glass`, `Quartz`, `Stone`, `Metal`, `Wood`), and customize color with swatches, hex picker, and dedicated always-visible **Silver** & **Gold** quick buttons.
  - Front Monogram & Symbol Engraving: Dedicated cube inscription inspector with text input, full dropdown (Symbols: Dash, Heart, Cross, Smiley Face, Peace; Letters A–Z; Numbers 0–9; Blank), clear button, and dynamic 512x512 debossed canvas texture mapped onto outward-facing (+X) face.
  - Star Bead Geometry: 5-pointed extruded beveled geometry, oriented upright with silhouette facing outward (+X) and threaded along the cord (+Z/-Z).
  - Fit Calculation: Live accumulator showing mm used vs wrist circumference, remaining space, and visual overflow indicator.
  - Bracelet Base Tailoring: Dynamically adjust wrist circumference (140mm-220mm), chain types, and custom cord color.
  - Complete Undo/Redo stack wired to on-screen buttons and `Cmd+Z` / `Cmd+Shift+Z`.
  - Quick Actions: Duplicate bead (`D`) and Delete bead (`Delete`/`Backspace`).
  - Exports: High-res beauty shot PNG export, `.bracelet` project file save (`Cmd+S`), and itemized materials spec sheet with 1-click clipboard copy including the **bracelet base type**, clasp mechanism, and engraved beads/symbols.
- Phase 3 Persistence & Project Management:
  - **Continuous Autosave (IndexedDB):** Real-time debounced storage to `bracelet-designer-db` with fallback to `localStorage`.
  - **Session Restoration:** Automatically restores current working bracelet on page visit/reload with atelier notification.
  - **Project Open:** Open `.bracelet` and `.json` project files via file picker (`Cmd+O`) or header **Open** button.
  - **Drag-and-Drop on 3D Stage:** Drag `.bracelet` project files directly onto the 3D viewport with an atelier drop overlay.
  - **Format Migration:** Validates and normalizes legacy formats and external JSON to ensure clean schema, valid IDs, and safe fallback defaults.
  - **Undoable Loading & Reset:** Project opens and "New Design" resets are snapshot to the undo history stack.
  - **Atelier Feedback:** Unobtrusive brand bar saving indicator (`• Saving…` / `• Saved`) and floating toast notifications.
- PWA setup: `manifest.webmanifest` and `sw.js` with offline caching; version chip `1.4.0 ↻` with update hook.
- Local markup review tools in `/tools/` (`markup-server.py` and `markup-inject.js`), gitignored and verified.
- Screen context hook `window.__markupContext` configured.

## What's Next (Phase 4: Visual Identity, Custom Logo & Audio/Sensory Polish)
- Full visual audit on target MacBook screen.
- Verify "Preview on Wrist" lighting fidelity and scale balance.
- Refine subtle interactive animations and micro-transitions.

## Rules Learned & Project Constraints
- Dragging a bead records ONE undo step (pointerdown snapshot, pointerup commit).
- Direct manipulation in 3D must temporarily disable OrbitControls during raycast pointermove.
- Selection indicator ring follows the active 3D bead position and scales with bead diameter.
- Always bump version in both `APP.version` in `index.html` and `VERSION` in `sw.js`.
- On BoxGeometry cube beads, local face index 0 (+X) points radially outward toward the viewer; canvas texture materials (`faceMat`) must set `faceMat.color.setHex(0xFFFFFF)` to prevent Three.js color squaring with `material.map`.
- Form inputs (`input`, `textarea`, `select`) must be excluded from global single-key shortcuts (`D`, `Delete`, `Backspace`).
- Symbol vector canvas operations (`drawSymbol`) provide cross-platform consistency without relying on OS-level emoji fonts.
- Star ExtrudeGeometry created in X-Y plane must be rotated with `geo.rotateY(Math.PI / 2)` to align its front normal along +X (radially outward) and its cord passage along Z.
