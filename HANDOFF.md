# Handoff Notes

## Current State
- **Version:** `1.7.6`
- **Phase:** Safari WebKit Grid & Canvas Fix (`v1.7.6`); Mobile Overflow Menu Specificity Patch (`v1.7.5`); Universal Mobile & iPhone Responsive Studio Architecture (`v1.7.4`); Clean Materials Spec Sheet & Parts Breakdown (`v1.7.3`); AudioContext Asynchronous Resume Patch (`v1.7.2`); Curated Starter Design Templates Gallery (`v1.7.0`) fully operational; Procedural Tactile Audio Engine (`v1.6.0`) verified.
- **App URL:** https://ethannorland.github.io/hello-world/
- **Repository:** https://github.com/EthanNorland/hello-world

## What Works
- Single-file HTML app (`index.html`) using Three.js r128 vendored locally in `/vendor/` (`three.min.js`, `OrbitControls.js`, `GLTFLoader.js`).
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
- Phase 4 Visual Identity, Custom Logo & Realistic Anatomical Arm:
  - **3D Preview on Wrist Mode (`btn-wrist`):** Instant toggle between Studio View and Wrist View draping the active bracelet around a realistic anatomical human arm and posed resting hand (`models/arm_wrist.glb`) with natural forearm musculature, ulnar styloid bone bump, carpal wrist recess, and relaxed fingers.
  - **Watertight Solid Planar Arm Cap (v1.6.1):** Truncated the forearm at natural display height ($Z \approx 14.6$) with a 100% watertight, solid planar horizontal cutoff and smooth beveled perimeter rim. Mesh contains 0 boundary edges. `wristSkinMat` configured with `side: THREE.DoubleSide` to prevent interior hollow voids under any orbit or clipping angle.
  - **Clean Anterior Surface (No Hanging Flaps):** Boundary loop sliced cleanly at planar threshold ($Z > 0.41$) removing non-manifold vertices; completely eliminates the excess skin flap and seam on the anterior arm surface.
  - **Smoothed Lateral Arm Surface (Creases Eliminated):** Cyclically smoothed relative perimeter offsets along the wrist-to-forearm boundary, replacing alternating in-and-out vertex pleats with a smooth organic curve to eliminate the two vertical creases on the outside of the arm.
  - **Dynamic Anatomical Fit Scaling:** Arm geometry dynamically scales in real time in unison with the wrist circumference slider (140mm–220mm) using calibrated ratio `(wristRadius * 0.76) / 1.95`.
  - **Calibrated Studio Lighting in Wrist Mode:** Shading balanced (`keyLight: 1.30`, `fillLight: 0.50`, `ambientLight: 0.60`, `rimLight: 0.35`) to prevent palm/forearm highlight burnout.
  - **Skin Tone Swatches:** 4 realistic skin tone presets (Fair `#F4D0BA`, Natural `#D8A684`, Warm Tan `#A66D44`, Deep Rich `#5C3826`) in a floating control banner (`#wrist-banner`) with real-time material updates and dedicated Exit button.
  - **Brand Mark in Header:** Embedded brand logo (`icon.svg`) directly into the header brand block with balanced vertical centering.
  - **Custom Logo in About Dialog:** Embedded high-resolution brand mark (`reference/bracelet designer logo.jpg`) within a shadowed editorial card in `dlg-about`, with complete Three.js engine and Antigravity pair programming credits.
  - **Searchable Help Dialog:** Instant keyword filter (`#help-search`) in `dlg-help` with real-time guide matching and workbench ring highlighting.
  - **Deep Linking Query Parameters:** Support for `?view=wrist&tone=...&cam=top` and `&cam=side`, `?dialog=about`, `?dialog=help&q=...`, `?dialog=templates`, `?template=...`, and `?sound=1` / `?sound=0`.
- Phase 5 Procedural Tactile Audio Synthesis Engine:
  - **100% Procedural Synthesis:** Zero external audio files or network latency; uses Web Audio API oscillators, exponential gain ramps, and harmonic overtones.
  - **Material Signatures:** Unique acoustic timbres for glass (clear ping), quartz (crystalline chime with shimmer), metal (harmonic ping), stone (dense mineral knock), and wood (warm triangle marimba).
  - **Sliding Cadence:** Throttled micro-ticks ($\ge 65$ms and $\Delta\theta > 0.035$ rad) when beads are dragged in 3D.
  - **Mechanical Clasps:** Dual-snap magnetic latch, spring-loaded lobster claw click, and double-thread screw-in lock.
  - **Tactile UI Actions:** Subtle ticks for 3D selection, spawn chimes for duplication, unstring pop for deletion, and directional ticks for undo/redo.
  - **Header Sound Toggle & Persistence:** `#btn-sound` (`🔊 Sound` / `🔇 Mute`) with user preference saved to `localStorage` (`bracelet_sound_enabled`).
- Phase 6 Curated Starter Design Templates:
  - **Atelier Templates Gallery (`dlg-templates`):** Replaced plain browser reset confirm with a 6-card curated gallery accessible via **New** button in the header bar or `?dialog=templates`.
  - **6 Curated Iconic Presets:**
    1. *The Signature Atelier* (Evil eye & royal lapis talisman)
    2. *Minimalist 18K Heirloom* (Pure polished gold with celestial star focal)
    3. *Bohemian Earth & Sandalwood* (Desert solstice with sandalwood & raw turquoise)
    4. *Chakra Resonance Spectrum* (Complete 7 energy center alignment)
    5. *Monogram Keepsake* ("LOVE" monogram cubes framed by gold stars & quartz)
    6. *Blank Canvas* (Clean unadorned cord ready for freeform stringing)
  - **Instant Sequence Visualizer:** Each card renders an interactive visual pill preview of every bead with shape geometry, color swatch, and tooltip.
  - **Precise Arc-Spacing Math:** Adjacent beads touch naturally with exact physical arc calculations ($\Delta\theta = \pi(d_i + d_{i+1}) / \text{wristMm}$).
  - **Full Undo Protection:** Template loading automatically snapshots previous design to `undoStack`, allowing instant undo via <kbd>Cmd+Z</kbd>.
  - **Deep Linking:** Full support for `?template=signature`, `?template=gold`, `?template=boho`, `?template=chakra`, `?template=keepsake`, `?template=blank`.
- Phase 6.2 Materials Spec Sheet & Parts Recipe:
  - **Itemized Parts Breakdown:** Tabbed modal view inside `#dlg-materials` with item quantities, color dots, component names, category tags, and dimensions.
  - **Plaintext Spec Sheet:** Formatted text recipe with complete parts breakdown and dimensions for jeweler ordering.
  - **1-Click CSV Recipe Export (`btn-export-csv`):** Downloads `bracelet-materials-spec-[timestamp].csv` with itemized part names, quantities, sizes, materials, and colors.
  - **Deep Linking:** Added `?dialog=materials` to open the Materials Spec Sheet on load.
- Phase 7 Universal Mobile & iPhone Responsive Studio Architecture:
  - **Bottom Drawer System:** `#left-panel` and `#right-panel` smoothly animate upward as touch sheets on viewports $\le 900$px with drag handles and close buttons (`✕`).
  - **Mobile Navigation Dock:** Fixed bottom dock (`#mobile-dock`) with 1-tap thumb controls for Palette, Properties, Undo, and Redo.
  - **Compact Header & Overflow Menu:** Condenses desktop header into visible quick buttons and sleek `⋯` dropdown for Templates, Open, Save, Export PNG, Materials, Help, and About.
  - **Safe Area & Dynamic Viewport:** `100dvh` and `viewport-fit=cover` with `env(safe-area-inset-*)` support.
  - **100% Desktop Preservation:** Zero visual or functional changes on desktop viewports ($> 900$px).
- PWA setup: `manifest.webmanifest` and `sw.js` with offline caching; version chip `1.7.6 ↻` with update hook; precaches `vendor/GLTFLoader.js` and `models/arm_wrist.glb`.
- Local markup review tools in `/tools/` (`markup-server.py` and `markup-inject.js`), gitignored and verified.
- Screen context hook `window.__markupContext` configured.

## What's Next
- Enhanced materials spec export with estimated physical weight and supply catalog links.
- Solicit end-user feedback on tactile audio sweet spot across various mobile devices.

## Rules Learned & Project Constraints
- Safari WebKit CSS Grid bug: `position: fixed` elements inside a CSS Grid are still counted during grid auto-placement unless explicit `grid-row` / `grid-column` are assigned to grid children; always explicitly anchor `#stage-container` to `grid-row: 2; grid-column: 1;`.
- Three.js camera initialization must guard against `0` dimensions (`Math.max(container.clientWidth || 0, window.innerWidth)`) to avoid `NaN` aspect ratios before WebKit completes its initial layout pass.
- Web Audio synthesis must resume or initialize on user interaction (`pointerdown`, `keydown`) to satisfy browser autoplay policies.
- Always use non-zero start and stop levels (e.g. `0.001` or `0.0001`) with `exponentialRampToValueAtTime` to avoid DOMExceptions.
- Raycast pointer dragging fires at high frequency (60Hz–120Hz); sliding audio must be throttled with both time interval and angular displacement thresholds.
- Dragging a bead records ONE undo step (pointerdown snapshot, pointerup commit).
- Direct manipulation in 3D must temporarily disable OrbitControls during raycast pointermove.
- Selection indicator ring follows the active 3D bead position and scales with bead diameter.
- Always bump version in both `APP.version` in `index.html` and `VERSION` in `sw.js`.
- On BoxGeometry cube beads, local face index 0 (+X) points radially outward toward the viewer; canvas texture materials (`faceMat`) must set `faceMat.color.setHex(0xFFFFFF)` to prevent Three.js color squaring with `material.map`.
- Form inputs (`input`, `textarea`, `select`) must be excluded from global single-key shortcuts (`D`, `Delete`, `Backspace`).
- Symbol vector canvas operations (`drawSymbol`) provide cross-platform consistency without relying on OS-level emoji fonts.
- Star ExtrudeGeometry created in X-Y plane must be rotated with `geo.rotateY(Math.PI / 2)` to align its front normal along +X (radially outward) and its cord passage along Z.
- For wrist mesh shader under bright multi-light studio environment, use `MeshStandardMaterial` with `envMapIntensity: 0.35` and call `renderer.render(scene, camera)` synchronously on tone switch for instant visual feedback.
- To reframe camera in OrbitControls, always update `controls.target` (e.g. `controls.target.set(0, -9, 0); controls.update();`), otherwise OrbitControls overrides manual `camera.lookAt()` calls on the next render frame.
- When generating glTF forearm models in Blender via extrusion stages, apply vertex scaling relative to the base wrist loop rather than compounding onto previous extrusion rings.
