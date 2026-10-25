# Changelog

All notable changes to **Bracelet Designer** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.8.1] - 2026-10-24

### Changed - Calibrate Gold & Silver Metal Hues from Reference Samples
- **Authentic 18K Gold Calibration (`#CCAD5C`):** Replaced harsh neon yellow tones (`#FACC15`, `#F5C542`) with rich, warm jeweler's gold (`#CCAD5C`, rgb(204, 173, 92)) sampled directly from the user's `reference/gold.png` master swatch.
- **Sterling Silver Calibration (`#A8A9AC`):** Replaced pale cool-white tones (`#E2E8F0`, `#C0C7D0`) with genuine polished sterling silver (`#A8A9AC`, rgb(168, 169, 172)) sampled directly from the user's `reference/silver.png` master swatch.
- **Universal Atelier Synchronization:** Calibrated tones seamlessly across:
  - 3D Bracelet Clasps (`Magnetic`, `Lobster Claw`, `Screw-in`) in [`createClaspMesh()`](file:///Users/ethannorland/hello-world/index.html#L2828).
  - 3D Base Link Chains (`Gold Chain`, `Silver Chain`) in [`rebuild3DScene()`](file:///Users/ethannorland/hello-world/index.html#L3138).
  - Properties Panel quick action buttons (`Silver`, `Gold`) and active state detectors in [`updateAppUI()`](file:///Users/ethannorland/hello-world/index.html#L3426).
  - Color palette swatch buttons, default star bead, and metal spacer elements in the Left Palette.
  - Curated Starter Design Templates and visual pill previews in [`TEMPLATES`](file:///Users/ethannorland/hello-world/index.html#L4025).
  - Materials Spec Sheet itemization and CSV export definitions.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.8.1`.

## [1.8.0] - 2026-10-24

### Added - Enlarged Drilled Bead Holes with Visible Cord Clearance
- **Enlarged Bead Holes & Visible Clearance:** Redesigned all 6 bead geometries (`Sphere`, `Faceted`, `Rondelle`, `Barrel`, `Cube`, `Star`) and metal/carved spacers to feature realistic drilled hollow apertures along the tangential cord axis (local Z).
- **Dynamic Hole Sizing (`getBeadHoleRadius`):** Bead hole diameters dynamically calibrate from ~0.40 to 0.60 relative units across sizes (4mm–20mm), ensuring beads maintain substantial, realistic wall thickness while displaying open apertures.
- **Refined Cord Base Proportions:** Refined base cord/chain tube radius to `0.09` (diameter `0.18`), creating a clear, visible annular daylight gap (`0.11`–`0.19` clearance on all sides) between the base cord and the bead hole.
- **Chamfered Drilled Rims:** Applied realistic jeweler's chamfer steps around bead hole openings to capture specular highlights and prevent polygon edge artifacts.
- **Double-Sided PBR Interior Shading:** Configured `side: THREE.DoubleSide` across all PBR materials (`glass`, `quartz`, `metal`, `stone`, `wood`), allowing light to illuminate the inner cylindrical drill walls and rendering realistic refractive air tunnels in translucent glass and crystalline quartz.
- **Hollow Inscribed Cube Beads:** Adapted monogram and symbol engravings on cube beads with synchronized double-sided overlays on outward-facing (+X) and inward-facing (-X) faces.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.8.0`.

## [1.7.6] - 2026-10-20

### Fixed - Safari WebKit CSS Grid Auto-Placement & Three.js Canvas Sizing
- **WebKit CSS Grid Auto-Placement Bug:** Resolved an issue where Safari (iOS and macOS WebKit) failed to exclude `position: fixed` elements (`#left-panel` and `#right-panel`) from grid cell auto-placement in mobile view (`@media (max-width: 900px)`), pushing `#stage-container` to an implicit row with `0px` height. Explicitly locked `header` to `grid-row: 1; grid-column: 1;` and `#stage-container` to `grid-row: 2 !important; grid-column: 1 !important; width: 100vw; height: 100%;`.
- **Three.js Initial Viewport Fallback:** Added safe fallback dimensions (`Math.max(container.clientWidth || 0, window.innerWidth || 390)`) during camera and renderer initialization, preventing `camera.aspect` from computing as `NaN` (`0 / 0`) prior to WebKit's initial layout pass.
- **Dynamic Render Buffer Synchronization:** Added a lightweight layout check within the `animate()` render loop to instantly update `camera.aspect` and `renderer.setSize()` whenever WebKit completes or updates container dimensions.
- **Gesture Event Capture (`touch-action: none`):** Added `touch-action: none` to `#stage-container` in addition to `#stage-canvas`, preventing Safari's native page bounce/overscroll gestures from blocking OrbitControls manipulation.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.6`.

## [1.7.5] - 2026-10-20

### Fixed - Mobile Overflow Menu Display Specificity & Tap Toggle
- **Resolved CSS Specificity Conflict:** Fixed an author CSS rule where `#mobile-menu-dropdown` had an unqualified `display: none !important;` that overrode inline JavaScript attempts to display the dropdown on mobile. Scoped the desktop-hidden rule strictly inside `@media (min-width: 901px)` and added `.mobile-menu-dropdown.open { display: block !important; }`.
- **Enhanced Touch Event Handling:** Added `e.preventDefault()` and `e.stopPropagation()` to the `⋯` menu button ([`#btn-mobile-menu`](file:///Users/ethannorland/hello-world/index.html#L1187)) to ensure responsive tap toggling across iOS Safari and mobile browsers.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.5`.

## [1.7.4] - 2026-10-20

### Added - Universal Mobile & iPhone Responsive Studio Architecture
- **Responsive Bottom-Drawer Panels:** Replaced the mobile hidden panels rule (`display: none`) with an atelier bottom-drawer sheet architecture. On mobile viewports ($\le 900$px), the Left Palette (`#left-panel`) and Right Properties (`#right-panel`) slide up smoothly as gesture-friendly sheets with grab handles and close buttons (`✕`).
- **Mobile Bottom Navigation Dock (`#mobile-dock`):** Added a thumb-friendly dock fixed above the iOS Home Indicator with dedicated triggers for `[✦ Palette]`, `[⚙ Properties]`, `[↩ Undo]`, and `[↪ Redo]`.
- **Compact Header & Overflow Menu (`#mobile-menu-dropdown`):** Condenses the 10 header actions into visible primary quick buttons (`Wrist`, `🔊 Sound`) and a sleek `⋯` more menu dropdown providing instant access to Templates, Open, Save, Export PNG, Materials, Help, and About.
- **Dynamic Viewport Height & Safe Area Insets:** Configured `height: 100dvh`, `overflow: hidden`, and `viewport-fit=cover` with `env(safe-area-inset-*)` support, eliminating vertical scroll bounce and honoring the iPhone Dynamic Island, notch, and home bar.
- **100% Desktop Preservation:** All desktop layouts ($> 900$px) remain 100% identical and untouched with the standard 3-column workstation grid, pinned sidebars, and full header action bar.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.4`.

## [1.7.3] - 2026-10-20

### Changed - Clean Materials Spec Sheet & Parts Breakdown
- **Removed Third-Party Catalog Links:** Eliminated broken and empty search query links to Fire Mountain Gems, Rio Grande, and Etsy from the Materials Spec Sheet modal and exported formats.
- **Refined Parts List View:** Replaced external search buttons with clean, high-contrast jeweler tags (`Category`, `Dimensions`) alongside color swatches, item names, and component quantities.
- **Clean Plaintext Spec Sheet:** Updated the formatted recipe to display clean itemized component counts, wrist circumference, base cord, clasp mechanism, and beads without search URL clutter.
- **Streamlined CSV Bill of Materials:** Cleaned up `#btn-export-csv` to export a spreadsheet with `Item #`, `Category`, `Part Description`, `Quantity`, `Target Size (mm)`, `Material`, and `Color`.
- **Searchable Help Update:** Refreshed the Materials Spec Sheet entry in `#dlg-help` to reflect the refined parts recipe and dimensions breakdown.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.3`.

## [1.7.2] - 2026-10-20

### Fixed - AudioContext Asynchronous Resume & Multi-Gesture Activation
- **Asynchronous AudioContext Resume Guard (`playWithContext`):** Fixed browser race condition where tones scheduled while `AudioContext` was in a `suspended` state would compute `now = ctx.currentTime` as 0 before `audioCtx.resume()` completed, causing the audio schedule to expire before the audio thread started. All 8 procedural synthesis functions (`audioPlayAdd`, `audioPlaySlide`, `audioPlayClasp`, `audioPlaySelect`, `audioPlayDuplicate`, `audioPlayDelete`, `audioPlayUndo`, `audioPlayRedo`) now safely await context resumption before calculating sample timestamps.
- **Multi-Event Browser Gesture Unlock:** Added comprehensive passive event listeners for `["click", "pointerdown", "touchstart", "touchend", "keydown"]` to guarantee instant AudioContext wake on iOS Safari, Android Chrome, and desktop browsers without requiring repeated clicks.
- **Sound Button UI Clarification:** Updated `#btn-sound` text to explicitly display `🔊 Sound` when active and `🔇 Muted` when sound is disabled, providing immediate visual feedback on the audio engine state.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.2`.

## [1.7.1] - 2026-10-20

### Added - Supply Catalog Export Links & Materials Spec Sourcing (Phase 6.2)
- **1-Click Supply Catalog Sourcing Links:** Integrated targeted search URLs for every component (chains, cords, clasps, gemstone beads, metal stars, carved spacers, and monogram cubes) to three leading jewelry supply distributors:
  - **Fire Mountain Gems & Beads:** Leading US distributor for beads and jeweler findings (`firemountaingems.com`).
  - **Rio Grande Jewelry Supply:** Benchmark supplier for precious metals, chains, and clasps (`riogrande.com`).
  - **Etsy Artisan Supplies:** Marketplace for rare natural gemstones, artisan cabochons, and craft supplies (`etsy.com`).
- **Interactive Sourcing View in `#dlg-materials`:** Redesigned the Materials dialog with tabbed views:
  - **Catalog Links (Interactive):** Displays itemized parts list with component quantities, color swatches, search keywords, and color-coded 1-click catalog search badges (`🔥 Fire Mtn`, `💎 Rio Grande`, `🛒 Etsy`).
  - **Plaintext Spec Sheet:** Full recipe formatted with complete direct sourcing URLs for copy/pasting into jeweler inquiry emails.
- **CSV Recipe Export (`#btn-export-csv`):** 1-click export of `bracelet-materials-sourcing-[timestamp].csv` with itemized part names, categories, quantities, millimeter dimensions, and full catalog search links for spreadsheet tracking in Excel, Numbers, or Google Sheets.
- **Deep Linking Query Parameter:** Added `?dialog=materials` to automatically open the Materials Spec Sheet on page launch.
- **Searchable Help:** Updated the Materials Spec Sheet guide item in `dlg-help` with keywords for supplier sourcing and CSV export.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.1`.

## [1.7.0] - 2026-10-20

### Added - Phase 6: Curated Starter Design Templates
- **Atelier Starter Templates Gallery (`#dlg-templates`):** Replaced plain browser reset confirm dialog with an atelier template gallery modal accessible via the **New** button in the header bar or `?dialog=templates`.
- **6 Curated Iconic Jewelry Presets:**
  - **The Signature Atelier:** Inspired by the original atelier talisman reference piece with evil eye, royal lapis lazuli, crackle quartz crystal, cyan glass, and sterling silver spacers.
  - **Minimalist 18K Heirloom:** Polished yellow gold spheres, faceted crystal cuts, and an upright celestial star focal bead with quiet luxury symmetry.
  - **Bohemian Earth & Sandalwood:** Warm natural sandalwood barrels, raw turquoise stones, and gold spacers strung on stitched leather cord.
  - **Chakra Resonance Spectrum:** Complete 7-chakra spectrum aligned along an obsidian cord with sterling silver disc spacers (Quartz, Amethyst, Lapis, Jade, Amber, Carnelian, Jasper).
  - **Monogram Keepsake:** Personalized keepsake featuring engraved "L-O-V-E" stone cubes framed by gold celestial stars and faceted quartz.
  - **Blank Canvas:** Pristine unadorned cord ready for freeform bespoke stringing from scratch.
- **Dynamic Sequence Visualizer:** Each template card displays an interactive horizontal pill preview reflecting each bead's exact shape (sphere, faceted, cube, star, rondelle, barrel), physical color swatch, dimension tooltip, and engraved monogram letter.
- **Jeweler's Arc-Spacing Math:** Automatic physical arc spacing ($\Delta\theta = \pi(d_i + d_{i+1}) / \text{wristMm}$) ensuring all adjacent beads sit flush without collision or artificial gaps.
- **Full Undo Protection & Audio Cues:** Loading a template automatically snapshots the current document into the `undoStack` (instant <kbd>Cmd+Z</kbd> restoration), triggers ascending tactile duplicate audio synthesis, and displays atelier toast feedback.
- **Deep Linking Query Parameters:** Direct template loading via `?template=signature`, `?template=gold`, `?template=boho`, `?template=chakra`, `?template=keepsake`, `?template=blank`.
- **Searchable Help Integration:** Added Starter Templates guide item into `dlg-help` with search keywords and direct action triggers.
- **PWA Precache Bump:** Bumped application version and service worker cache to `1.7.0`.

## [1.6.1] - 2026-10-20

### Fixed - Watertight Solid Arm Top Cap in Wrist View
- **Watertight Solid Planar Arm Cap:** Truncated the proximal forearm in `models/arm_wrist.glb` at a natural mannequin display height ($Z \approx 14.6$) with a 100% solid, planar, watertight horizontal cap and smooth beveled rim. Replaced the previous 23-unit dome apex fan extrusion that exhibited pinched starburst normals.
- **Double-Sided Material Rendering:** Added `side: THREE.DoubleSide` to `wristSkinMat` in Three.js, completely eliminating any interior transparent/hollow voids when orbiting the camera down from top-down or steep angles.
- **Organic Forearm Perimeter Smoothing:** Healed UV seam splits with tight double removal ($0.0005$) and applied perimeter offset smoothing to eliminate lateral vertex pleats and vertical creases.
- **PWA Precache & Cache Manifest:** Bumped application version and service worker cache to `1.6.1`.

## [1.6.0] - 2026-10-20

### Added - Phase 5: Procedural Tactile Audio Synthesis Engine
- **Procedural Web Audio Synthesis Engine:** Built a 100% client-side, zero-latency physical audio synthesis engine using the Web Audio API with zero external audio file downloads or CDN requests (100% offline-ready PWA).
- **Material-Differentiated Acoustic Signatures:**
  - **Glass:** High-clear resonant ping (880 Hz down to 520 Hz) with natural decay.
  - **Quartz:** Crystalline bell chime (1150 Hz down to 780 Hz) layered with a subtle overtone shimmer at 2300 Hz.
  - **Metal:** Bright metallic ping (1400 Hz down to 900 Hz) with high harmonic resonance (2800 Hz).
  - **Stone:** Deep, dense mineral drop (650 Hz down to 380 Hz) with short decay.
  - **Wood:** Warm acoustic marimba knock (460 Hz down to 280 Hz) using warm triangle harmonic synthesis.
- **Throttled 3D Bead Sliding Cadence:** Synthesized tactile micro-ticks tailored by bead material when dragging along the 3D loop, throttled at 65ms intervals and angular step threshold ($\Delta\theta > 0.035$ rad) to create an organic bead-to-bead clatter without audio stutter.
- **Realistic Clasp Fastening Mechanics:**
  - **Magnetic Clasp:** Crisp dual-impulse snap (1800 Hz micro-contact ping followed by 1200 Hz $\to$ 800 Hz magnetic latch).
  - **Lobster Claw Clasp:** Spring-loaded mechanical click (1600 Hz lever release followed by 2200 Hz $\to$ 1300 Hz latch snap).
  - **Screw-in Clasp:** Dual-notch thread ratchet click (980 Hz followed by 1350 Hz lock notch).
- **Atelier Tactile Feedback:**
  - **3D Bead Selection:** Ultra-subtle tactile tick (1600 Hz, 15ms, gain 0.08).
  - **Duplicate Action:** Pleasant ascending two-tone spawn chime (720 Hz $\to$ 1080 Hz).
  - **Delete Action:** Soft descending unstring pop (580 Hz $\to$ 220 Hz).
  - **Undo / Redo:** Directional tactile micro-clicks (Undo: 580 Hz $\to$ 420 Hz; Redo: 420 Hz $\to$ 580 Hz).
- **Header Sound Toggle & Persistence:**
  - Added `#btn-sound` in the header bar (`🔊 Sound` / `🔇 Mute`) with user preference persisted in `localStorage` (`bracelet_sound_enabled`).
  - Tactile sound feedback and toast confirmation when toggling mute state.
- **Searchable Help & Deep Linking:**
  - Integrated Tactile Audio Engine guide item into `dlg-help` with instant search filter keywords (`sound`, `audio`, `tactile`, `mute`, `chime`) and interactive button ring targeting.
  - Deep linking query parameters `?sound=1` (force audio active) and `?sound=0` (force audio muted).
- **PWA Precache Bump:** Bumped cache manifest in `sw.js` and application version to `1.6.0`.

## [1.5.3] - 2026-10-19

### Fixed - Smoothed Forearm Surface & Crease Elimination
- **Eliminated Lateral Forearm Creases:** Identified alternating in-and-out radial vertex offsets on the lateral wrist rim (verts 14–20). Applied cyclical perimeter ring smoothing to the relative offsets, mathematically transforming the sawtooth accordion into a smooth organic curve and eliminating the 2 vertical creases running down the outside of the arm.
- **Deep-Linking Camera Expansion:** Added support for `&cam=side` in `index.html` allowing instant lateral view inspection.

## [1.5.2] - 2026-10-19

### Fixed - Watertight Arm Capping & Anterior Surface Cleanup
- **Top-View Solid Arm Dome Cap:** Capped the proximal end of the forearm mesh with an apex dome fan, eliminating the open cavity and preventing users from seeing inside the hollow arm when orbiting to the top view.
- **Deleted Anterior Skin Flap & Seam:** Cleaned wrist cap face deletion at the boundary plane ($Z > 0.41$), eliminating a 4-edge non-manifold vertex that previously caused a double-walled flap of excess skin to hang over the anterior surface.
- **100% Watertight Manifold Mesh:** Eliminated all boundary edges ($0$ boundary edges remaining), cleared custom split normals, and recalculated smooth organic surface shading across all 5,618 vertices.

## [1.5.1] - 2026-10-19

### Added - Realistic Anatomical Forearm & Posed Hand in Wrist View
- **Anatomical 3D Arm Model (`models/arm_wrist.glb`):** Replaced the generic geometric cylinder in Wrist Preview mode with a realistic human forearm, wrist, and gracefully posed resting hand:
  - Sculpted with authentic anatomical landmarks: forearm muscular tapering, distinct ulnar styloid bone prominence on the lateral wrist, carpal wrist recess where the bracelet naturally rests, natural thenar/hypothenar palm contours, and relaxed, gracefully posed fingers and thumb.
  - High fidelity, lightweight binary glTF asset (273 KB, 5,602 vertices, 5,601 smooth-shaded faces, watertight).
- **Vendored Three.js GLTFLoader (`vendor/GLTFLoader.js`):** Vendored Three.js r128 GLTFLoader locally, maintaining 100% offline self-containment with zero external CDN dependencies.
- **Dynamic Anatomical Fit Scaling:** Arm geometry dynamically scales in real time in unison with the wrist circumference slider (140mm–220mm) using calibrated ratio `(wristRadius * 0.76) / 1.95`, ensuring the bracelet encircles the carpal wrist line snugly without clipping or excessive air gaps.
- **Tuned Studio Shading & Skin Tone Preservation:** Calibrated multi-point studio lights in Wrist View (`keyLight: 1.30`, `fillLight: 0.50`, `ambientLight: 0.60`, `rimLight: 0.35`) to eliminate highlight blowout and preserve rich, natural contrast across all 4 skin tones: Fair (`#F4D0BA`), Natural (`#D8A684`), Warm Tan (`#A66D44`), and Deep Rich (`#5C3826`).
- **Smooth Orbit Framing & Zoom:** Reframed OrbitControls target to center vertically on the bracelet resting on the wrist with expanded `maxDistance` (75) for fluid inspection.
- **Pre-cached Offline PWA Support:** Added `vendor/GLTFLoader.js` and `models/arm_wrist.glb` directly to the `sw.js` cache manifest with version bump to `1.5.1`.

## [1.5.0] - 2026-10-19

### Added - Phase 4: Visual Identity, Custom Logo & Wrist Preview
- **Interactive 3D "Preview on Wrist" Mode (`btn-wrist`):** Added a dedicated header toggle allowing creators to switch instantly between Studio View and Wrist View. Drapes the active bracelet design around an anatomically tapered human forearm/wrist cylinder with realistic skin PBR shader, natural wrist flattening (1.12X, 1.0Y, 0.84Z), and organic forearm curvature.
- **Adjustable Skin Tone Swatches:** Added a floating control banner (`#wrist-banner`) featuring 4 skin tone presets: Fair (`#F4D0BA`), Natural (`#D8A684`), Warm Tan (`#A66D44`), and Deep Rich (`#5C3826`), updating the 3D forearm in real time.
- **Dynamic Wrist Scaling:** Forearm geometry dynamically recalculates and scales in unison with the wrist circumference slider (140mm–220mm) so the bracelet cord and beads always rest gracefully along the wrist surface.
- **Header Brand Identity:** Integrated the brand mark icon (`icon.svg`) directly into the header bar alongside the serif title with responsive vertical centering.
- **Custom Atelier Logo in About Dialog:** Embedded the full brand mark asset (`reference/bracelet designer logo.jpg`) within a shadowed editorial card in `dlg-about`, accompanied by documented Three.js 3D engine attribution and Antigravity pair programming disclosure.
- **Real-Time Searchable Help Dialog:** Added an instant keyword search input (`#help-search`) in `dlg-help` that filters guides, shortcuts, and core concepts on keystroke with empty-state feedback and workbench ring targeting.
- **Deep Linking Support:** Added query parameter support (`?view=wrist&tone=...`, `?dialog=about`, `?dialog=help&q=...`) enabling direct navigation to specific views and guides.
- **Version 1.5.0 Bump:** Bumped application version in `index.html` and Service Worker cache key in `sw.js` to `1.5.0`, and added the custom logo asset to the offline PWA cache.

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
