# Handoff Notes

## Current State
- **Version:** `1.3.1`
- **Phase:** Phase 2 (The Core Loop) + Base Type in Spec Sheet & Silver/Gold Color Controls deployed to GitHub Pages.
- **App URL:** https://ethannorland.github.io/hello-world/
- **Repository:** https://github.com/EthanNorland/hello-world

## What Works
- Single-file HTML app (`index.html`) using Three.js r128 vendored locally in `/vendor/`.
- Full Core Loop (`Select → Add → Slide → Check Fit`):
  - Direct 3D Raycasting: click and drag any bead or spacer to slide smoothly along the bracelet loop.
  - Left Palette: Add sphere, faceted, rondelle, barrel, cube, and star beads; silver/gold/carved spacers; swap magnetic, lobster, and screw-in clasps with gold/silver materials.
  - Right Properties: Edit selected bead diameter (6mm-16mm), switch shape across 6 options (Sphere, Faceted, Rondelle, Barrel, Cube, Star), swap materials (`Glass`, `Quartz`, `Stone`, `Metal`, `Wood`), and customize color with swatches, hex picker, and dedicated always-visible **Silver** & **Gold** quick buttons.
  - Front Monogram & Symbol Engraving: Dedicated cube inscription inspector with text input, full dropdown (Symbols: Heart, Cross, Smiley Face, Peace; Letters A–Z; Numbers 0–9; Blank), clear button, and dynamic 512x512 debossed canvas texture mapped onto outward-facing (+X) face.
  - Star Bead Geometry: 5-pointed extruded beveled geometry, oriented upright with silhouette facing outward (+X) and threaded along the cord (+Z/-Z).
  - Fit Calculation: Live accumulator showing mm used vs wrist circumference, remaining space, and visual overflow indicator.
  - Bracelet Base Tailoring: Dynamically adjust wrist circumference (140mm-220mm), chain types, and custom cord color.
  - Complete Undo/Redo stack wired to on-screen buttons and `Cmd+Z` / `Cmd+Shift+Z`.
  - Quick Actions: Duplicate bead (`D`) and Delete bead (`Delete`/`Backspace`).
  - Exports: High-res beauty shot PNG export, `.bracelet` project file save, and itemized materials spec sheet with 1-click clipboard copy including the **bracelet base type**, clasp mechanism, and engraved beads/symbols.
- PWA setup: `manifest.webmanifest` and `sw.js` with offline caching; version chip `1.3.1 ↻` with update hook.
- Local markup review tools in `/tools/` (`markup-server.py` and `markup-inject.js`), gitignored and verified.
- Screen context hook `window.__markupContext` configured.

## What's Next (Phase 3: Autosave, Project Open, & Migration)
- Connect IndexedDB (`idbSet`/`idbGet`) for automatic background session persistence so reloads lose nothing.
- Add "Open Project" file picker and drag-and-drop file import onto the 3D stage.
- Test loading legacy project formats and handle migration.

## Rules Learned & Project Constraints
- Dragging a bead records ONE undo step (pointerdown snapshot, pointerup commit).
- Direct manipulation in 3D must temporarily disable OrbitControls during raycast pointermove.
- Selection indicator ring follows the active 3D bead position and scales with bead diameter.
- Always bump version in both `APP.version` in `index.html` and `VERSION` in `sw.js`.
- On BoxGeometry cube beads, local face index 0 (+X) points radially outward toward the viewer; canvas texture materials (`faceMat`) must set `faceMat.color.setHex(0xFFFFFF)` to prevent Three.js color squaring with `material.map`.
- Form inputs (`input`, `textarea`, `select`) must be excluded from global single-key shortcuts (`D`, `Delete`, `Backspace`).
- Symbol vector canvas operations (`drawSymbol`) provide cross-platform consistency without relying on OS-level emoji fonts.
- Star ExtrudeGeometry created in X-Y plane must be rotated with `geo.rotateY(Math.PI / 2)` to align its front normal along +X (radially outward) and its cord passage along Z.
