# Handoff Notes

## Current State
- **Version:** `1.1.2`
- **Phase:** Phase 2 (The Core Loop) + Visual Polish deployed to GitHub Pages.
- **App URL:** https://ethannorland.github.io/hello-world/
- **Repository:** https://github.com/EthanNorland/hello-world

## What Works
- Single-file HTML app (`index.html`) using Three.js r128 vendored locally in `/vendor/`.
- Full Core Loop (`Select → Add → Slide → Check Fit`):
  - Direct 3D Raycasting: click and drag any bead or spacer to slide smoothly along the bracelet loop.
  - Left Palette: Add sphere, faceted, rondelle, and barrel beads; silver/gold/carved spacers; swap magnetic, lobster, and screw-in clasps with gold/silver materials.
  - Right Properties: Edit selected bead diameter (6mm-16mm), swap materials (`Glass`, `Quartz`, `Stone`, `Metal`, `Wood`), and customize color (swatches + hex picker).
  - Fit Calculation: Live accumulator showing mm used vs wrist circumference, remaining space, and visual overflow indicator.
  - Bracelet Base Tailoring: Dynamically adjust wrist circumference (140mm-220mm), chain types, and custom cord color.
  - Complete Undo/Redo stack wired to on-screen buttons and `Cmd+Z` / `Cmd+Shift+Z`.
  - Quick Actions: Duplicate bead (`D`) and Delete bead (`Delete`/`Backspace`).
  - Exports: High-res beauty shot PNG export, `.bracelet` project file save, and itemized materials spec sheet with 1-click clipboard copy.
- PWA setup: `manifest.webmanifest` and `sw.js` with offline caching; version chip `1.1.0 ↻` with update hook.
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
