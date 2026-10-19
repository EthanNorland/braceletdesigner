# Project Brief: Bracelet Designer

## 1. The Seed

- **What it is (Q1):** An interactive app that lets the user design a 3D bracelet by selecting a bracelet type, beads and spacers, and a clasp.
- **Medium & Materiality (Q2):** 3D form with realistic physical materials (reflective metal clasps and spacers, translucent/glassy beads). Direct physical manipulation: beads and spacers can be slid dynamically along the bracelet cord, bead diameters can be scaled, and bracelet length is driven by custom wrist circumference measurements.
- **Origin / Frustration (Q3):** Frustration with not being able to see how beads and spacers will look together on a bracelet before buying them. Wanting to experiment with combinations of bead sizes, spacer styles, and colors, and physically slide them around on the loop before committing to a purchase.
- **Visual Reference:** [`reference/sample bracelet.png`](file:///Users/ethannorland/hello-world/reference/sample%20bracelet.png) — A circular bracelet featuring an engraved silver evil-eye focal bead with a sapphire-blue stone center and detailed rondelle endcaps, arranged in a rhythmic sequence of crackle quartz crystal spheres, deep blue-green mottled lapis/azurite stone beads, polished cyan mineral spheres, and relief-engraved silver barrel spacers.

## 2. Raison d'Être

- **What it lets the user do, see, or feel (Q4):** 
  - Preview how reflective metal spacers and glass/stone beads harmonize under interactive 3D lighting before purchasing physical supplies.
  - Dynamically slide beads and spacers around the circular loop in real time to experiment with pattern symmetry, cadence, and negative space.
  - Set an accurate wrist circumference upfront to ensure that bead counts, spacer widths, and clasp dimensions fit comfortably and balance properly.
- **The ONE thing it does best (Q5):** Material fidelity and authentic 3D lighting—making translucent glass, crackle quartz crystal, and engraved silver look stunning, tactile, and true-to-life under rotating light so users genuinely trust what they see.
- **Deliberate non-goals / scope boundaries (Q6):** 
  - No e-commerce or checkout system (this is a focused creative design instrument, not an online store or inventory catalogue).
  - No complex rope/cloth simulation or knot-tying physics (the bracelet maintains a stable, elegant, and interactive 3D circular form).
- **Core statement / About line (Q7):** *"Bracelet Designer exists because everyone should be able to test their creative instincts and feel like they are manipulating physical materials on a tabletop."*

## 3. The User

- **Primary User (Q8):** Someone relaxing on the couch with their MacBook, spending 15–20 minutes designing a personalized gift bracelet for a friend. They want an intuitive, tactile creative experience without technical friction, and their primary goal is to walk away with a clean, high-resolution 3D preview render to share.
- **Secondary User (Q9):** A jeweler, Etsy artisan, or craftsperson who receives the customer's design image and parts breakdown (bead counts, sizes, materials, and wrist circumference) in order to source supplies and physically assemble the custom piece.
- **Who it is NOT for (Q10):**
  - Professional CAD jewelers looking for precision manufacturing/CAM tooling specs or wax mold export.
  - Impulse e-commerce shoppers wanting 1-click checkout on mass-market pre-made goods.
  - Children seeking a gamified arcade toy with cartoon effects or unlocks.
- **User Testing Match:** A friend with a MacBook who loves customized gifts. (Will test Version 1 on their laptop without assistance to observe where they hesitate or succeed).

## 4. The Interaction Model

- **Primary Input (Q11):** Hybrid trackpad-first design. Optimized for MacBook trackpads (smooth two-finger camera orbit, pinch-to-zoom, click-and-drag bead sliding) while maintaining visible on-screen Undo/Redo buttons and generous touch targets (≥44px) so the interface feels natural on iPad and mobile touchscreens.
- **Core Model (Q12):** Direct manipulation (primary) with Parametric adjustments (secondary). Users interact directly with 3D elements in the viewport (clicking and dragging beads to slide, reorder, or remove them), while numerical sliders/dials in a subtle panel control wrist circumference, bead millimeter diameters, and chain tightness.
- **First 10 Seconds (Q13):** The app opens on a sleek bracelet base with a metal clasp and 3 sample beads already strung, resting under soft studio lighting. A gentle, floating callout invites: *"Pick a bead or slide to begin."* The user immediately grasps the 3D space, sees the materials' realism, and is invited to interact without facing a blank slate.
- **Core Loop (Q14):** `Select → Add → Slide → Check Fit` (Pick a bead/spacer from the tray → string it onto the bracelet → slide it along the loop to adjust spacing and symmetry → check the circumference indicator to verify fit).
- **Export & Output (Q15):**
  - **High-Resolution PNG Render:** A studio-lit beauty shot of the custom 3D bracelet to text or share with friends.
  - **Parts Breakdown (Spec Sheet):** An itemized list detailing wrist circumference, total bead counts, millimeter sizes, spacer styles, and material names for the jeweler/artisan to assemble.
  - **Project File (`.bracelet` / JSON):** A lightweight save file preserving the exact beads, order, and wrist measurements so the design can be reopened and edited anytime.
- **Screen Layout & Architecture:**
  - **Center Viewport:** Full-height 3D interactive stage showcasing the bracelet under studio lighting.
    - *Under Viewport:* Contextual action buttons to `[Delete Bead]` or `[Duplicate Bead]` for the currently selected item.
  - **Left Sidebar (Element Palette):**
    - Bead shapes selection (spheres, faceted, rondelles, barrels).
    - Spacer selection with instant color choice (Gold or Silver).
    - Clasp selection with type choice (**Magnetic**, **Lobster Claw**, **Screw-In**) and color choice (Gold or Silver).
  - **Right Sidebar (Properties & Specifications):**
    - *Top Action Bar:* `[Save in App]`, `[Export Image (PNG)]`, `[Make Materials List]`, `[Preview on Wrist]`.
    - *Selected Bead Controls:* Color picker, millimeter size slider, and physical material selector (`Metal`, `Glass`, `Wood`, `Translucent/Crystal`).
    - *Bracelet Cord Settings:* Base material (`Gold Chain`, `Silver Chain`, `Leather`, `Cord` with custom cord color picker) and wrist circumference / size slider.

```
+-----------------------------------------------------------------------------------+
|  [Left: Element Palette]   |            [Center: 3D Stage]            | [Right: Tools & Props]  |
|----------------------------+------------------------------------------+-------------------------|
| • Bead Shapes              |                                          | [Save] [Export] [List]  |
|   (Sphere, Faceted, etc.)  |                                          | [Preview on Wrist]      |
|                            |               ( 3D Bracelet )            |-------------------------|
| • Spacers                  |                  ( in Light )            | • Bead Properties       |
|   [Gold] [Silver]          |                                          |   - Color & Size (mm)   |
|                            |                                          |   - Material:           |
| • Clasps                   |                                          |     [Glass] [Metal]     |
|   - Magnetic               |                                          |     [Wood] [Translucent]|
|   - Lobster Claw           |                                          |                         |
|   - Screw-In               |------------------------------------------| • Bracelet Base         |
|   [Gold] [Silver]          |      [ Duplicate ]    [ Delete ]         |   - [Gold] [Silver]     |
|                            |                                          |     [Leather] [Cord]    |
|                            |                                          |   - Cord Color Picker   |
|                            |                                          |   - Wrist Size / Fit mm |
+-----------------------------------------------------------------------------------+
```

## 5. Prior Art and Research

### Researched Prior Art

1. **Pandora 3D Bracelet Builder** (Pandora Jewelry, commercial web configurator)
   - **Link:** [pandora.net](https://us.pandora.net/)
   - **What it does:** Web-based 3D visualizer that lets shoppers drag proprietary charms onto a fixed silver or gold bracelet.
   - **Takeaway for our app:** Shows intuitive category grouping and chain snapping, but is locked into a commercial shopping cart with no control over bead diameters, custom colors, or DIY parts lists.
2. **Trollbeads Bracelet Designer** (Trollbeads, commercial configurator)
   - **Link:** [trollbeads.com](https://www.trollbeads.com/)
   - **What it does:** Allows modular glass, stone, and silver beads to be strung along a bracelet chain.
   - **Takeaway for our app:** Demonstrates high-contrast glass and silver aesthetic harmony, but is slow and restricted to fixed commercial inventory.
3. **BeadMaster / Bead Tool 4** (Christopher & Perle Software, 2005/2018)
   - **Link:** [beadtool.net](https://www.beadtool.net/)
   - **What it does:** Dedicated desktop pattern software for peyote, loom, and bead weaving with itemized bead count tables.
   - **Takeaway for our app:** Demonstrates the immense value of precise bead counting and parts breakdown tables for crafters, but is trapped in flat 2D grids without 3D spatial or lighting interaction.
4. **Three.js Physical Transmission & Glass Showcase** (Mr.doob & Three.js community, 2020+, MIT License)
   - **Link:** [threejs.org/examples/#webgl_materials_physical_transmission](https://threejs.org/examples/#webgl_materials_physical_transmission)
   - **What it does:** Demonstrates real-time transmission, roughness, thickness, chromatic aberration, and specular highlights for glass and gems in WebGL.
   - **Takeaway for our app:** Direct technical foundation for rendering realistic translucent glass, crackle quartz, and glossy metals in our single-file app.
5. **Nervous System: Cell Cycle & Floraform** (Jessica Rosenkrantz & Jesse Louis-Rosenberg, 2014)
   - **Link:** [n-e-r-v-o-u-s.com/cellCycle/](https://n-e-r-v-o-u-s.com/cellCycle/)
   - **What it does:** WebGL algorithmic jewelry design software that lets users twist, subdivide, and deform 3D cellular rings and bracelets.
   - **Takeaway for our app:** Inspires clean, minimal studio lighting and tactile 3D browser manipulation, though our app focuses on modular bead stringing rather than procedural mesh deformation.
6. **Curve3D & TubeGeometry Path Distribution** (Three.js Documentation, MIT License)
   - **Link:** [threejs.org/docs/#api/en/geometries/TubeGeometry](https://threejs.org/docs/#api/en/geometries/TubeGeometry)
   - **What it does:** Spline curves (`CatmullRomCurve3D`, `EllipseCurve`) and Frenet frames to position and orient 3D objects along closed curves.
   - **Takeaway for our app:** Direct algorithmic method to slide beads around a variable-circumference loop and orient spacers tangentially.
7. **Arc-Length Parameterization for Curve Spacing** (David Eberly, Geometric Tools, 2007)
   - **Link:** [geometrictools.com](https://www.geometrictools.com/Documentation/MovingAlongCurveSpecifiedSpeed.pdf)
   - **What it does:** Mathematical technique ensuring beads of different diameters (e.g. 8mm vs 12mm) slide at constant physical speeds along curves without overlapping.
   - **Takeaway for our app:** Solves the collision and spacing algorithm so sliding beads push their neighbors realistically along the bracelet cord.
8. **Victorian Charm Bracelets & The Chatelaine Tradition** (Historical Precedent, 1800s–1950s)
   - **Link:** [metmuseum.org](https://www.metmuseum.org/art/collection/search/238245)
   - **What it does:** Historical physical precedent of modular tokens, commemorative spacers, and counting rhythm on a closed loop.
   - **Takeaway for our app:** Reinforces the emotional meaning of assembling customized tactile tokens as a personalized gift for a friend.
9. **Kai's Power Tools (KPT Bryce & Goo)** (Kai Krause / MetaCreations, 1990s, Pre-2000)
   - **Link:** [archive.org/details/kaispowertools](https://archive.org/details/kaispowertools)
   - **What it does:** Groundbreaking creative software known for tactile, skeuomorphic controls that felt like interacting with real physical materials on a tabletop.
   - **Takeaway for our app:** Demonstrates how non-standard, physical-feeling interfaces make digital creation feel intuitive, playful, and magical.

- **Closest Precedents (Q16):** **Pandora/Trollbeads + Three.js Physical Glass**.
  - *What ours does that they don't:* Commercial tools like Pandora and Trollbeads are closed, slow e-commerce catalogs tied to corporate inventory with no custom sizing, DIY parts lists, or open color customization. Three.js Glass is just a tech demo. Ours combines the tactile charm modularity of Trollbeads with photorealistic PBR glass/metal rendering into an open, creative design studio where users can customize diameters, wrist fit, colors, and export blueprints.
- **Precedent to Avoid (Q17):** 
  - Not an outdated, clinical 2D spreadsheet or pixel grid (like Bead Tool 4).
  - Not a commercial sales pitch or corporate e-commerce cart (like Pandora).
  - Not cold procedural geometry or abstract math (like Nervous System).
  - *Standard:* It must feel like rich, tactile, and interactive 3D jewelry that you can touch and manipulate on a tabletop.
- **Techniques / Libraries to Borrow (Q18):**
  - **Three.js (vendored locally, MIT License):** For WebGL 3D rendering, studio lighting, camera orbiting, and physically based rendering (`MeshPhysicalMaterial`) for glass transmission and metal reflections.
  - **3D Raycasting:** For tactile direct manipulation—allowing the user to click, drag, slide, and select beads directly in 3D space with precise pointer collisions.
- **Student Reflection:** *"Existing jewelry tools are either corporate sales carts or flat spreadsheets. None of them offer an open, tactile 3D studio where you can play with materials and their placements to create your own design."*

## 6. Identity

- **Name (Q19):** **Bracelet Designer** (URL slug / App ID: `bracelet-designer`).
  - *URL:* `https://ethannorland.github.io/bracelet-designer/`
- **Wordmark Register & Typography (Q20):** Quiet luxury / editorial serif. The wordmark pairs an elegant, high-contrast all-caps editorial serif for "DESIGNER" with fluid script for "Bracelet", embracing the custom logo design.
- **Logo Reference:** [`reference/bracelet designer logo.jpg`](file:///Users/ethannorland/hello-world/reference/bracelet%20designer%20logo.jpg) — Custom mark featuring "Bracelet DESIGNER" encircled by a colorful, playful loop of beads and a dangling teardrop pendant.
- **Color Palette (Q21):** Midnight Navy & Sterling Silver.
  - *Background:* Rich midnight navy (`#0B0E14`)
  - *Panels / Sidebars:* Deep lapis-slate (`#141923`)
  - *Text:* Crisp off-white (`#EDF2F7` — contrast 14.5:1, exceeds WCAG AA 4.5:1)
  - *Accent:* Sterling silver / ice blue (`#88A4C4` & highlight silver `#C0C7D0`)
- **Voice and Tone (Q22):** Refined & encouraging atelier. Sophisticated, warm, attentive, and supportive—speaking like a master jeweler at a shared bench (e.g., *"Gently slide to test spacing."*, *"12mm of cord remaining."*, *"Rotate to inspect under light."*).
- **Clasp Visual References:**
  - Magnetic Clasp: [`reference/magnetic clasp gold.webp`](file:///Users/ethannorland/hello-world/reference/magnetic%20clasp%20gold.webp) & [`reference/magnetic clasp silver.webp`](file:///Users/ethannorland/hello-world/reference/magnetic%20clasp%20silver.webp)
  - Lobster Claw Clasp: [`reference/lobster clasp gold.webp`](file:///Users/ethannorland/hello-world/reference/lobster%20clasp%20gold.webp) & [`reference/lobster clasp silver.webp`](file:///Users/ethannorland/hello-world/reference/lobster%20clasp%20silver.webp)
  - Screw-In Clasp: [`reference/screw in clasp gold.webp`](file:///Users/ethannorland/hello-world/reference/screw%20in%20clasp%20gold.webp) & [`reference/screw in clasp silver.jpg`](file:///Users/ethannorland/hello-world/reference/screw%20in%20clasp%20silver.jpg)

## 7. Technical Choices

- **Versioning Scheme (Q23):** Semantic Versioning (`MAJOR.MINOR.PATCH`, starting at `1.0.0`).
- **Open Source License (Q24):** MIT License (permissive open source; anyone can learn from and adapt the code with copyright preserved, matching Three.js).
- **Target Browsers & Devices (Q25):** Universal Cross-Device. Version 1 promises responsive support across modern desktop browsers (Chrome, Safari, Firefox, Edge on macOS/Windows), tablets (iPadOS Safari), and mobile devices (iOS Safari & Android Chrome), featuring adaptive layouts and touch-friendly targets (≥44px).
- **PWA Display Mode (Q26):** `standalone` (Opens in a dedicated chromeless window without browser bars, behaving like a native application on Mac dock, iOS home screen, or Android).

## 8. The Plan

### Version 1 (Smallest Whole Product - Q27)
1. **Interactive 3D Stage:** Three.js scene, studio lighting with reflections, trackpad/mouse orbit controls, and 3D raycasting for direct manipulation.
2. **First 10 Seconds:** Opens on a minimal starter bracelet with a clasp and 3 sample beads, accompanied by an atelier invitation: *"Pick a bead or slide to begin."*
3. **Core Loop:** `Select → Add → Slide → Check Fit`. Direct click-and-drag sliding of beads along the bracelet curve.
4. **Left Sidebar:** Palette for bead shapes (sphere, faceted, rondelle), spacers (gold/silver), and clasps (Magnetic, Lobster Claw, Screw-In in gold and silver).
5. **Right Sidebar:**
   - Selected bead properties: color picker, millimeter diameter slider, and physical materials (`Metal`, `Glass`, `Wood`, `Translucent/Crystal`).
   - Bracelet base controls: material (`Gold Chain`, `Silver Chain`, `Leather`, `Cord` with cord color picker) and wrist circumference fit slider.
6. **Action Controls:**
   - Under viewport: `[Duplicate Bead]` and `[Delete Bead]`.
   - Top action bar: `[Save Project]`, `[Export Image (PNG)]`, `[Make Materials List]` (parts breakdown), and `[Preview on Wrist]`.
7. **Preview on Wrist (V1):** An interactive mode displaying a realistic 3D forearm/wrist cylinder draped with the custom bracelet to evaluate real-world scale and aesthetics.
8. **App Structure & Polish:**
   - Searchable Help dialog where clicking an item highlights the control with a glowing ring.
   - About dialog featuring the wordmark/logo, raison d'être, MIT license, credits, and AI disclosure.
   - Single-file HTML app, offline PWA (`manifest.webmanifest` + `sw.js`), and version chip.

### "Later" List (V1.1 / Future Releases)
- Procedural custom bead texture painting (e.g., marbling or painting directly onto bead surfaces).
- Subtle physical audio feedback (beads clicking/clacking when slid together).
- AR (Augmented Reality) camera try-on using WebXR or camera overlay.

### Build Phases (Part 4 Milestone Roadmap)
- **Phase 0:** Interview complete; `BRIEF.md` finalized; GitHub repo live on Pages.
- **Phase 1:** Walking Skeleton: Single-file app with Three.js rendering a simple 3D loop and version chip `1.0.0 ↻`, PWA manifest, service worker, and local markup review tools. Pushed & verified live.
- **Phase 2:** Core loop (`Select → Add → Slide → Check Fit`), direct 3D raycasting bead manipulation, bead tray, and Undo/Redo.
- **Phase 3:** Autosave (IndexedDB), Project Save/Open (`.bracelet` JSON), High-Res PNG Render export, and Materials List generation.
- **Phase 4:** Complete visual identity: Midnight Navy & Silver palette, quiet luxury editorial serif typography, custom logo integration, 3 clasp types (magnetic, lobster claw, screw-in), cord color picker, and "Preview on Wrist" mode. Searchable Help and About dialog.
- **Phase 5:** User test with target tester on a MacBook; gather feedback, record markup notes, and address issues.
- **Phase 6:** Release Version 1.0.0, update CHANGELOG.md, README.md, and tag release in git.

## 9. "What's Mine" (Authorship Statement)
The concept, visual identity, interaction model, and specific behaviors of **Bracelet Designer** are created and directed by Ethan Norland:
- **Concept:** An open, tactile 3D jewelry workshop designed to eliminate purchasing regret by letting users play with beads, spacers, clasps, and fit on a virtual tabletop.
- **Interaction Architecture:** Direct 3D raycast manipulation on a curve paired with wrist circumference fit calculations, bead duplication, and instant parts list generation for jewelers.
- **Aesthetic & Brand:** Quiet luxury register, Midnight Navy & Silver palette, and custom wordmark and logo featuring "Bracelet DESIGNER".
- **Code:** Implemented as a zero-dependency, single-file HTML Progressive Web App leveraging Three.js for local WebGL rendering without remote servers.
