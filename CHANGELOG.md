# Changelog

All notable changes to **Bracelet Designer** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-10-19

### Added - Phase 2: The Core Loop
- **Direct 3D Raycasting ("Slide"):** Direct click-and-drag interaction allowing users to slide any bead or spacer along the 3D bracelet curve in real time with smooth pointer tracking.
- **Element Palette Actions ("Select & Add"):** Full stringing capability—clicking bead shapes (Sphere, Faceted, Rondelle, Barrel) or spacers (Silver Disc, Gold Disc, Carved Barrel) strings them onto the bracelet.
- **Clasp Customization:** Interactive clasp selection (Magnetic, Lobster Claw, Screw-In) with instant Silver and Gold material switching.
- **Properties Inspector:** Real-time editing of selected bead millimeter diameter (6mm–16mm), material shaders (`Glass`, `Quartz`, `Stone`, `Metal`, `Wood`), and colors via preset swatches or custom hex picker.
- **Fit Calculator ("Check Fit"):** Live millimeter accumulator calculating total used space versus wrist circumference, displaying remaining slack and visual overflow alert.
- **Bracelet Base Tailoring:** Wrist circumference slider (140mm–220mm) driving 3D bracelet radius dynamically, with chain type options and custom woven cord color picker.
- **Undo/Redo History:** Robust `change()` state doorway with undo/redo stack supporting both on-screen buttons and `Cmd+Z` / `Cmd+Shift+Z` shortcuts. Drag actions are captured as a single undo step.
- **Quick Actions:** Duplicate bead (`D`) and Delete bead (`Delete`/`Backspace`) with safeguards.
- **Materials Spec Sheet:** Itemized parts list breakdown generator with 1-click clipboard copy for jeweler/artisan assembly.
- **Exports:** High-res PNG rendering with selection indicators automatically hidden, and `.bracelet` JSON project file save.

## [1.0.0] - 2026-10-19

### Added - Phase 1: Walking Skeleton
- **Interactive 3D Stage:** Real-time WebGL canvas powered by vendored Three.js with ambient, key, fill, and rim studio lighting.
- **Tabletop Materials:** Physically based rendering shaders (`MeshPhysicalMaterial` and `MeshStandardMaterial`) for glass, lapis lazuli stone, crackle quartz, and silver/gold metals.
- **OrbitControls:** Smooth mouse, trackpad, and touch orbiting, damping, and zooming.
- **Responsive Interface:** Three-column layout featuring Left Palette (bead shapes, spacers, clasps), Center 3D Stage with floating action bar, and Right Properties panel (wrist circumference, bead diameters).
- **Atelier Visual Identity:** Midnight Navy (`#0B0E14`) & Sterling Silver (`#88A4C4`) palette with quiet luxury typography.
- **PWA Capabilities:** Web App Manifest (`manifest.webmanifest`) and Service Worker (`sw.js`) supporting full offline operation and standalone install mode.
- **Version Chip:** Live `1.0.0 ↻` chip with update-checking mechanism.
- **Local Review Tools:** Integrated local markup toolbar (`tools/markup-server.py` and `tools/markup-inject.js`) gitignored for visual review batches.
- **Documentation:** Complete `BRIEF.md`, `README.md`, `ATTRIBUTION.md`, `HANDOFF.md`, and MIT `LICENSE`.
