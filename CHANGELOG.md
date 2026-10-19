# Changelog

All notable changes to **Bracelet Designer** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.4.0] - 2026-10-19

### Added - Phase 3: Autosave (IndexedDB), Project Open & Drag-and-Drop
- **Automatic Continuous Autosave (IndexedDB):** Implemented real-time background session persistence via an IndexedDB store (`bracelet-designer-db`) with graceful fallback to `localStorage`. Every bead slide, color change, diameter adjustment, and clasp toggle is automatically saved with debouncing.
- **Session Restoration on Load:** Automatically restores the user's active bracelet session upon opening or reloading the application, with a quiet atelier notification (*"Restored your active session from the atelier bench"*).
- **Atelier Autosave Status Indicator:** Added a subtle status indicator in the brand bar (`• Saving…` / `• Saved`) providing quiet visual assurance of persisted state.
- **Project Open File Picker (`.bracelet` & `.json`):** Added an **Open** button in the header bar wired to a file picker dialog, supporting `.bracelet` and `.json` project files, with keyboard shortcut `Cmd+O` / `Ctrl+O`.
- **Drag-and-Drop Project Import:** Added direct drag-and-drop file import onto the 3D stage viewport, complete with an atelier drop overlay (*"Drop .bracelet file here"*).
- **Format Validation & Robust Migration:** Built a complete migration and validation engine (`migrateAndValidateDoc`) that inspects incoming project files, guarantees valid wrist measurements, cord types, cord colors, clasps, bead geometries, materials, colors, and symbol inscriptions, and assigns unique IDs.
- **Undoable Project Loading:** Opening or resetting a project pushes a snapshot to the undo history stack, allowing users to safely undo (`Cmd+Z`) and restore their previous workbench.
- **New / Reset Design Action:** Added a **New** button in the header bar allowing users to reset their workbench to a fresh starter bracelet with an undoable confirmation prompt.
- **Keyboard Shortcuts:** Added `Cmd+S` / `Ctrl+S` to export `.bracelet` project files and `Cmd+O` / `Ctrl+O` to open saved projects.
- **Atelier Toast Notification System:** Non-blocking floating toast notifications confirming autosaves, file loads, and file exports.
- **Version 1.4.0 Bump:** Bumped app version and Service Worker cache key to `1.4.0`.

## [1.3.2] - 2026-10-19

### Added - Dash Inscription Option for Cube Beads
- **Dash (`—`) Inscription Option:** Added a clean horizontal dash to the cube bead engraving suite, rendered with rounded geometry, 3D debossed drop-shadow depth, and jeweler's hallmark border framing.
- **Smart Symbol Input & Dropdown:** Added `— Dash` to the Symbols optgroup in the Front Inscription dropdown, and enabled typing or pasting `-`, `—`, `–`, `"dash"`, `"hyphen"`, or `"minus"` directly in the inscription input field.
- **Spec Sheet Breakdown:** Itemizes dash-engraved cube beads as `[Engraved "Dash"]` in the exported materials recipe.
- **Version 1.3.2 Bump:** Bumped app version and Service Worker cache key to `1.3.2`.

## [1.3.1] - 2026-10-19

### Added - Bracelet Base Type in Spec Sheet & Dedicated Silver/Gold Bead Color Choices
- **Bracelet Base Type in Materials Spec Sheet:** The materials list now itemizes the selected bracelet base type (`Sterling Silver Chain`, `Gold Link Chain`, `Woven Jewelry Cord (Color: ...)` or `Stitched Leather Cord`) in both the header summary and as item #1 in the parts breakdown, along with the tailored wrist length (~mm) and clasp mechanism.
- **Dedicated Silver & Gold Bead Color Choices:** Added prominent, always-visible **Silver** and **Gold** button options directly under the bead color swatches in the Properties panel, allowing instant one-click switching to authentic sterling silver (`#E2E8F0`) or polished gold (`#FACC15`) with active state tracking.
- **Version 1.3.1 Bump:** Bumped app version and Service Worker cache key to `1.3.1`.

## [1.3.0] - 2026-10-19

### Added - Celestial Star Bead & Symbol Engravings (Heart, Cross, Smiley, Peace)
- **Celestial Star Bead Shape:** Added "★ Star" to the Left Palette and an expanded 6-shape switcher (`Sphere`, `Faceted`, `Rondelle`, `Barrel`, `Cube`, `Star`) in the Properties panel. Uses an extruded 5-pointed geometry with smooth jeweler's bevels, standing upright with its silhouette facing outward and threaded tangentially along the cord.
- **Heart, Cross, Smiley Face & Peace Engravings:** Added 4 iconic jewelry symbol inscriptions to cube beads:
  - **Heart (`♥`):** Plump symmetrical jeweler's heart with debossed 3D drop-shadow.
  - **Cross (`✝`):** Balanced Latin cross with rounded geometry and clean proportions.
  - **Smiley Face (`☺`):** Classic smiley with outer ring, dual eyes, and cheerful arc.
  - **Peace Sign (`☮`):** Authentic peace symbol with vertical stem and 45° angled struts.
- **Smart Inscription Controls:** Added a dedicated "Symbols" group in the Front Inscription dropdown and enhanced the input field to accept direct characters (`♥`, `✝`, `☺`, `☮`), keywords ("heart", "cross", "smile", "peace"), or capital letters (`A–Z`) and numbers (`0–9`).
- **Enhanced Materials Spec Sheet:** Spec sheet itemizes engraved symbols cleanly (e.g. `10mm STONE CUBE [Engraved "Heart"]`) and lists star beads (`10mm METAL STAR`).
- **Starter Showcase:** Updated starter bracelet to display both the Heart engraved cube and a gleaming Gold Star bead upon initial load.
- **Version 1.3.0 Bump:** Bumped app version and Service Worker cache key to `1.3.0`.

## [1.2.0] - 2026-10-19

### Added - Cube Bead Shape & Front Monogram Engraving
- **Cube Bead Shape Option:** Added "■ Cube" bead button to the Left Palette and an interactive 5-item shape switcher (`Sphere`, `Faceted`, `Rondelle`, `Barrel`, `Cube`) in the Properties panel, allowing beads to be added or converted directly to cubes.
- **Front Face Monogram Engraving (A–Z, 0–9):** Added a dedicated "Front Inscription" inspector for cube beads featuring both a single-character uppercase input field and a comprehensive dropdown selector with Blank/None, Letters A–Z, and Numbers 0–9, complete with a 1-click Clear button.
- **Dynamic Jeweler's Canvas Texture:** Engraved characters are rendered onto an outward-facing (+X) 512×512 texture using high-contrast debossed serif typography and an elegant jeweler's hallmark border, adjusting text color dynamically for dark or light bead materials.
- **Materials Spec Sheet Itemization:** Updated the Materials Spec Sheet generator and 1-click clipboard breakdown to specifically itemize engraved cube beads (e.g. `10mm STONE CUBE [Engraved "A"]`).
- **Version 1.2.0 Bump:** Bumped app version and Service Worker cache key to `1.2.0`.

## [1.1.2] - 2026-10-19

### Changed - Visual Refinements
- **Restored Atelier Stage Vignette:** Restored the high-contrast midnight navy radial background (`radial-gradient(circle at 50% 45%, #151D2A 0%, #0B0E14 75%)`) to provide optimal contrast, refraction, and internal glow for translucent glass beads and faceted quartz crystals.
- **Glass & Crystal Material Clarity:** By removing the opaque white background behind the 3D canvas, physically based transmission shaders for glass and crystal now cleanly sample the darker vignette, highlighting refraction, specular rim highlights, and rich material depth.
- **Atelier Selection Indicator:** Reverted bead selection halo to sterling silver (`#88A4C4`), harmonizing with the quiet luxury palette.
- **Retained Authentic Lobster Claw & PMREM Reflections:** Maintained the anatomically faithful 3D lobster claw clasp geometry and studio PMREM reflection environment so all metals, clasps, and beads sparkle with authentic jeweler's luster.

## [1.1.1] - 2026-10-19

### Changed - Visual Refinements
- **Studio White Viewport Background:** Replaced dark stage background with a luminous studio white canvas (`#FFFFFF`) with a subtle radial contact shadow plane under the bracelet, rendering a luxury jewelry display aesthetic.
- **Authentic Lobster Claw Clasp Geometry:** Replaced placeholder clasp with an anatomically faithful 3D lobster claw clasp directly matching `reference/lobster clasp gold.webp`, featuring a seamless sculpted teardrop body, functional thumb trigger lever with rounded push pad, graceful curved beak loop with open aperture hole, spring gate tongue, and interlocking connector jump ring.
- **Studio Environment Reflections:** Added runtime PMREM environment map reflecting soft overhead studio panels across all metallic clasps, beads, spacers, and chains for realistic jewelry luster.
- **High-Contrast Selection Ring:** Updated bead selection halo to vibrant sapphire blue (`0x2563EB`) for crisp contrast against the studio white stage.
- **Floating Dark-Glass Stage Controls:** Restyled invitation pill, fit accumulator meter, and undo/action bar into elegant floating dark-glass panels with subtle blur and translucent borders.

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
