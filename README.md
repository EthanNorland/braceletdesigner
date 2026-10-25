# Bracelet Designer

> An interactive 3D studio for designing custom bracelets with realistic beads, spacers, and clasps.

[![Live App](https://img.shields.io/badge/Live_App-Visit_Site-88A4C4?style=flat-square)](https://ethannorland.github.io/hello-world/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Version: 1.8.8](https://img.shields.io/badge/Version-1.8.8-lightgrey?style=flat-square)](#)

---

## What It Is

**Bracelet Designer** exists because everyone should be able to test their creative instincts and feel like they are manipulating physical materials on a tabletop.

Instead of navigating flat online store catalogs or static 2D grid software, **Bracelet Designer** gives creators a tactile 3D workshop. Select from realistic glass, crystal, stone, and metal beads, arrange them on a bracelet cord with intuitive direct manipulation, and preview true proportions and fit before purchasing physical supplies.

---

## Live Link & Installation

- **Live URL:** [https://ethannorland.github.io/hello-world/](https://ethannorland.github.io/hello-world/)
- **Install as an App (PWA):**
  - **Mac (Safari):** File → *Add to Dock*.
  - **Chrome / Edge (Desktop & Android):** Click the install icon in the address bar, or menu → *Install app*.
  - **iPhone / iPad (Safari):** Tap Share → *Add to Home Screen*.

Works 100% offline after your first visit. All designs are saved privately in your browser—no accounts, no tracking, and no remote servers.

---

## Key Features
- **Curated Starter Design Templates (Phase 6):** An atelier gallery modal accessible via **New** featuring 6 professionally balanced designs—*The Signature Atelier* (evil eye & lapis), *Minimalist 18K Heirloom* (gold & celestial star), *Bohemian Earth & Sandalwood* (desert solstice), *Chakra Resonance Spectrum* (7 energy centers), *Monogram Keepsake* ("LOVE" cubes & gold stars), and a pristine *Blank Canvas*—all with instant sequence visualizers, tactile loading chime, and full undo protection.
- **Procedural Tactile Audio Synthesis Engine:** 100% client-side Web Audio synthesis providing real-time acoustic resonance tailored by physical bead material (Glass, Quartz, Metal, Stone, Wood), throttled micro-tick clatter during 3D sliding, realistic dual-action clasp clicks (Magnetic, Lobster Claw, Screw-in), and subtle tactile feedback for selection, duplicate, and delete.
- **3D Preview on Wrist Mode:** Toggle between Studio View and Wrist View to drape your custom bracelet onto an anatomically realistic human arm and gracefully posed hand, featuring 4 skin tone presets (Fair, Natural, Warm Tan, Deep Rich) and dynamic scaling matching your exact wrist circumference.
- **Searchable Help & Tool Walkthrough:** Real-time keyword filter in the Help dialog with direct links to ring corresponding workbench controls.
- **Brand Identity & Atelier Logo:** Custom atelier logo mark embedded in the About dialog with complete Three.js engine and open-source attribution.
- **Continuous Autosave (IndexedDB):** All design changes, bead angles, colors, and cord lengths automatically persist in browser storage across tab reloads.
- **Project Open & Drag-and-Drop:** Save and reopen `.bracelet` files via one-click file picker or drag-and-drop directly onto the 3D stage, backed by automatic format migration and undo protection.
- **Direct 3D Raycasting ("Slide"):** Direct click-and-drag interaction allowing users to slide any bead or spacer along the 3D bracelet curve in real time.
- **6 Bead Geometries:** Sphere, Faceted crystal, Rondelle, Barrel, Cube, and **Celestial Star** with smooth jeweler's bevels.
- **Front Monogram & Symbol Engraving:** Engrave cube beads with custom capital letters (A–Z), digits (0–9), or iconic jewelry symbols (**Heart**, **Cross**, **Smiley Face**, **Peace Sign**, **Dash**) rendered with dynamic debossed typography and hallmark border.
- **Interactive Palette & Clasps:** Select from Magnetic, Lobster Claw, and Screw-In clasps in polished Gold or Silver; string discs and carved spacers.
- **Physically Based Materials:** Shaders for translucent glass, crackle quartz, stone, precious metals, and polished wood.
- **Fit Calculator:** Real-time millimeter accumulator tracking bracelet fullness against wrist circumference (140mm–220mm).
- **Studio Lighting & PMREM Reflections:** Multi-point studio lighting with high-contrast atelier backdrop.
- **Full Undo/Redo & Quick Actions:** Robust history stack, duplicate (`D`), and delete actions.
- **Materials Spec Sheet & Parts Recipe:** Itemized parts recipe with visual color swatches, millimeter dimensions, material categories, 1-click plaintext clipboard copy, and clean **CSV Export** for jeweler assembly.
- **Universal Mobile & iPhone Adaptation (Phase 7):** Responsive bottom-drawer architecture (`#left-panel` and `#right-panel` slide up smoothly on mobile), thumb-friendly navigation dock, compact header with `⋯ Menu`, Dynamic Island/Notch safe-area support, and dynamic viewport height (`100dvh`), while preserving 100% of the desktop 3-column studio layout.
- **Exact Reference-Calibrated Vintage Brown Leather (v1.8.8):** Calibrated the procedural bolo leather cord color ramp directly against the sampled pixel distribution of `reference/Leather Bracelet.png` on the desktop (`[105, 80, 72]` body, `[72, 46, 38]` crevice, `[138, 114, 105]` highlight), capturing authentic earthy antique vegetable-tanned cowhide brown with balanced satin sheen (`roughness: 0.70`, `envMapIntensity: 0.32`).
- **Authentic 3D Bracelet Base Types Matching Reference Photos (v1.8.6):**
  - **Sterling Silver & 18K Gold Snake Chains:** Faithful 3D reproduction of `silver chain bracelet.png` and `gold chain bracelet.png`, featuring ~128 interlocking slanted metal segments with deep joint seams, convex plate bevels, specular roughness maps, and polished tapered end-cap ferrules flanking the clasp.
  - **Two-Tone Braided Diamond Woven Cord:** Modeled after `Woven Cord Bracelet.png`, featuring a continuous interlacing twill braid with micro-fiber yarn striations, primary cord color inheritance, and contrasting deep charcoal-black (`#181A20`) strands.
  - **Vintage Round Bolo Leather Cord:** Modeled after `Leather Bracelet.png`, featuring true round bolo cowhide cord rendered via continuous 2D periodic Hermite spline noise with rich natural brown mottling, longitudinal rolled burnished seam, and satin sheen.
  - **Preserved Bead Clearance:** Base core diameter maintained at `0.184` ensuring clear visible space inside enlarged bead holes (`0.38`–`0.60` diameter) during smooth 3D sliding.
- **Neutral Pure White Studio Lighting (v1.8.5):** Replaced warm gold/yellow key and rim lights with crisp, daylight-balanced white studio lighting (`0xFFFFFF`), ensuring silver metal, stone, and wood beads reflect clean white specular highlights with zero yellow cast.
- **Rich Darker Gold & Silver Shading for Stone & Wood (v1.8.4):** Calibrated deep antique gold mineral stone (`#7D5A18`), silver hematite slate (`#4A4D53`), golden teak wood (`#744E14`), and weathered silver driftwood (`#46494F`), preventing diffuse chalk/white artifacts while preserving material selection.
- **Harmonized Gold & Silver Shader Engine (v1.8.3):** Full Cook-Torrance BRDF alignment (`metalness: 0.90`, `roughness: 0.18`, `envMapIntensity: 1.2`) and ColorSync P3-to-sRGB recalibrated warm 18K gold (`#D2AC4C`) across beads, clasps, base chains, and spacers.
- **Progressive Web App (PWA):** Offline service worker caching, installable manifest, and interactive version chip (`1.8.8 ↻`).

---

## How to Use

1. **Orbit:** Click and drag in the 3D viewport to spin the bracelet under the light. Pinch or scroll to zoom in.
2. **Palette:** Explore bead shapes, spacers, and clasps on the left.
3. **Properties:** Adjust wrist circumference and bead diameters on the right.
4. **Export:** Export high-resolution renders and itemized materials lists for your jeweler or Etsy artisan.

---

## Credits & License

- **Created by:** Ethan Norland
- **License:** Released under the [MIT License](LICENSE).
- **Libraries:** Powered by [Three.js](https://threejs.org/) (MIT License). See [ATTRIBUTION.md](ATTRIBUTION.md) for full credits.
