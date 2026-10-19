# Handoff Notes

## Current State
- **Version:** `1.0.0`
- **Phase:** Phase 1 (Walking Skeleton) complete & deployed to GitHub Pages.
- **App URL:** https://ethannorland.github.io/hello-world/
- **Repository:** https://github.com/EthanNorland/hello-world

## What Works
- Single-file HTML app (`index.html`) using Three.js r128 vendored locally in `/vendor/`.
- 3D stage rendering an illuminated bracelet ring with magnetic silver clasp and 3 beads (lapis lazuli, cyan glass, crackle quartz) with gentle auto-rotation and OrbitControls.
- Responsive 3-column UI: Left Palette (beads, spacers, clasps), Center 3D Viewport with duplicate/delete buttons, Right Properties (wrist fit, bead sizes).
- PWA setup: `manifest.webmanifest` and `sw.js` with offline caching; version chip `1.0.0 ↻` with update hook.
- Local markup review tools in `/tools/` (`markup-server.py` and `markup-inject.js`), gitignored and verified.
- Screen context hook `window.__markupContext` configured.
- Clean documentation: `BRIEF.md`, `README.md`, `CHANGELOG.md`, `ATTRIBUTION.md`, `LICENSE`.

## What's Next (Phase 2: Core Loop)
- Implement dynamic bead placement and direct 3D raycast sliding along the bracelet curve.
- Wire up the Left Sidebar palette to string new beads/spacers/clasps onto the cord.
- Connect the Right Sidebar controls (color picker, diameter slider, material swap) to the selected bead.
- Implement Undo/Redo history stack with on-screen buttons and Cmd+Z keyboard shortcut.

## Rules Learned & Project Constraints
- No build step, no npm: edit files directly and ship.
- Three.js is vendored in `/vendor/` with `vendor/LICENSE`.
- `tools/` must remain in `.gitignore` and never be committed to GitHub.
- PWA service worker is bypassed on localhost so live edits reload instantly.
- Always bump version in both `APP.version` in `index.html` and `VERSION` in `sw.js`.
