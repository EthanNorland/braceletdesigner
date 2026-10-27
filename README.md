# Bracelet Designer

> An interactive 3D studio for designing custom bracelets with realistic beads, spacers, and clasps.

[![Live App](https://img.shields.io/badge/Live_App-Visit_Site-88A4C4?style=flat-square)](https://ethannorland.github.io/braceletdesigner/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Version: 1.9.27](https://img.shields.io/badge/Version-1.9.27-lightgrey?style=flat-square)](#)

---

## What It Is

**Bracelet Designer** exists because everyone should be able to test their creative instincts and feel like they are manipulating physical materials on a tabletop.

Instead of navigating flat online store catalogs or static 2D grid software, **Bracelet Designer** gives creators a tactile 3D workshop. Select from realistic glass, crystal, stone, and metal beads, arrange them on a bracelet cord with intuitive direct manipulation, and preview true proportions and fit before purchasing physical supplies.

---

## Live Link & Installation

- **Live URL:** [https://ethannorland.github.io/braceletdesigner/](https://ethannorland.github.io/braceletdesigner/)
- **Install as an App (PWA):**
  - **Mac (Safari):** File → *Add to Dock*.
  - **Chrome / Edge (Desktop & Android):** Click the install icon in the address bar, or menu → *Install app*.
  - **iPhone / iPad (Safari):** Tap Share → *Add to Home Screen*.

Works 100% offline after your first visit. All designs are saved privately in your browser—no accounts, no tracking, and no remote servers.

---

## Key Features
- **Spotlight Feature Inspection & Picture-in-Picture Mode (v1.9.3):** Replaced the dark blurred modal backdrop with a clear, non-blackout studio view. When clicking any chapter's "Highlight Feature ✨" button, the demo video dynamically docks into a sleek Picture-in-Picture (PiP) mini-player in the bottom corner while the actual feature in the studio (3D Stage, Element Palette, Properties, Monogram Engraving, Wrist View, Spec Sheet) lights up with an animated golden halo beacon and spotlight ring. Includes manual Picture-in-Picture toggle (`🗕 / ⤢`) in the video header, floating inspection toast with quick return, and 5s auto-expand.
- **Silent 7-Chapter Walkthrough Video Engine (v1.9.11):** A zero-dependency procedural 60fps video player built directly on `<canvas>` demonstrating all 7 major features of the studio in high definition without intrusive audio cues. Features authentic vertical forearm and palm-forward posed hand in Chapter 6 Wrist View faithfully matching reference `wristview.png` with 4 dangling fingers and gaps, thumb thenar muscle pad, dynamic skin tone switching with active indicator ring, floating controls pills, dynamic macro zoom-in on the 18K Gold Screw-in Clasp in Chapter 2, streamlined descriptions in Chapters 3 and 7, monochromatic neutral element palette symbols, continuous gold screw clasp, focused bead properties spotlighting, interactive Cube Peace sign (☮) engraving, bottom-left PiP docking, and authentic internal cord lacing:
  1. *Start New, Base Sizing & Open Project* (starting fresh blank canvas or starter presets, configuring wrist circumference 140–220mm, selecting base types like Silver Chain, Gold Chain, Cord, and Leather, and opening saved `.bracelet` files with an authentic 18K Gold Screw-in Clasp from your computer or drag-and-drop).
  2. *3D Stage Orbit, Bead Sliding & Clasp Macro Detail* (interactive 360° rotation, bead sliding along cord, real-time mm fit gauge, and dynamic 2.6x camera zoom on the 18K Gold Screw-in Clasp showcasing knurling threads and center seam).
  3. *Bead Geometries, Spacers & Clasps* (sphere, faceted, rondelle, barrel, cube, stars, spacers, clasps with monochromatic neutral symbols).
  4. *PBR Materials & Jewel-Tone Colors* (translucent glass, crystalline quartz, stone, high-polish metal, painted wood with dedicated bead properties spotlighting).
  5. *Personalized Monograms & Hallmarks* (cube bead selection, peace sign ☮ symbol debossing replacing sample love text, and numerals description).
  6. *Realistic 3D Wrist Mode & Reference-Calibrated Hand* (anatomical vertical forearm and palm-forward hand matching desktop reference `wristview.png`, 4 downward fingers with gaps, rightward thumb, floating control pills, 18K gold screw-in clasp, 4 natural skin tones with active selector ring, and dynamic wrist scaling).
  7. *Materials Spec Sheet & Project Exports* (itemized recipe with 18K Gold Screw-in Clasp and ☮ Cube, 1-click CSV order export, high-res PNG studio renders).
  Includes custom video player controls (Play/Pause, interactive Scrubber slider track, 0:00/0:53 timestamp counter, Restart), 7 clickable Chapter navigation pills, lower-third explanatory captions, animated mouse cursor and click ripples, keyboard shortcuts (<kbd>Space</kbd>, <kbd>←</kbd>, <kbd>→</kbd>), auto-open on app startup, instant close buttons (`✕` and footer close), and a *"Don't show video automatically when opening the app"* preference saved to `localStorage`.
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
- **Inspiration & Credits Gallery (v1.9.14):** Added a dedicated "Inspiration & Credits" section within the About dialog ([`dlg-about`](file:///Users/ethannorland/braceletdesigner/index.html#L2170)) celebrating the creators, artisans, and platforms that gave ideas and inspiration to Bracelet Designer, arranged in alphabetical order (Antigravity, Banter, Beadmod, Bracelet Designer, Etsy, Fire Mountain Gems, GitHub, JewDIY, Pantone, Phillip Renato, Textures.com, Three.js Community) with custom scroll handling and verified external links.
- **Softened Clearcoat Glaze & Dense Pigment Tuning on Light Glass and Quartz (v1.8.21):** Calibrated material parameters to prevent lighter colors (light cyan, pastel pink, pale yellow, mint) from bleaching into pure white glare on Glass and Quartz. Reduced white clearcoat reflection ([`clearcoat: 0.35` / `0.30`](file:///Users/ethannorland/hello-world/index.html#L3272), `clearcoatRoughness: 0.10–0.12`, `specularIntensity: 0.60–0.65`) and dynamically scaled optical transmission with lightness (`trans = 0.18–0.35` on glass, `0.12–0.22` on quartz), keeping light tints richly pigmented and colorful rather than washing out into clear or white.
- **True-to-Selection Studio Lighting & Linear Tone Mapping (v1.8.20):** Calibrated the 3D studio lighting and tone mapping to achieve true 1:1 color accuracy between the 2D color selector and 3D beads. Replaced harsh 5× over-illumination and ACES highlight bleaching with balanced studio lighting (`ambientLight: 0.65`, `keyLight: 0.55`, `fillLight: 0.35`, `rimLight: 0.30`) and `LinearToneMapping` (`exposure: 1.0`). Beads now directly display the chosen hue and saturation across the visible body, with soft 3D form shading and crisp specular highlights across Glass, Quartz, Wood, Stone, and Metal.
- **Painted Wood Beads with True Color Selection & Tactile Grain (v1.8.19):** Configured wood beads to match the user's selected palette or custom picker color as painted wooden beads (birch, maple, or sandalwood). Replaced hard-coded brown teak diffuse pixels with a neutral high-key wood grain map (`240–255` luminance) that preserves 94%–100% of any chosen paint color without discoloration, while retaining natural tactile wood growth rings, longitudinal fibers, and micro-pores via normal and bump maps, finished with a smooth satin lacquer glaze (`clearcoat: 0.28`, `roughness: 0.38`).
- **Luminous Vibrant Jewel-Tone Colors on Glass & Crystalline Quartz (v1.8.18):** Amplified color vibrancy, saturation, and optical depth on Glass and Crystalline Quartz materials. Glass transmission is calibrated to `0.48` with high-gloss clearcoat glaze (`clearcoat: 0.75`, `clearcoatRoughness: 0.04`), eliminating dark studio background washout while retaining translucent refractive depth. Quartz features a pure white crystalline foundation with high-key sparkle facets and crackle hairline veins (`218–255` luminance), preserving 85%–100% of the bead's vibrant chosen color without muddy grey photo contamination, paired with balanced optical transmission (`0.30`) and jewelry clearcoat (`0.70`). Chromatic jewel tones automatically receive an intelligent saturation and luminance boost (`getVibrantGemColor`), rendering dazzling turquoise, lapis, amethyst, emerald, and ruby beads.
- **High-Polish Smooth Jeweler's Metal (v1.8.17):** Configured a pristine, silky-smooth mirror finish across all metal beads, spacers, and stars with zero surface bumpiness or scratches (`roughness: 0.12`, `metalness: 0.96`, `envMapIntensity: 1.40`), delivering crisp specular highlights and radiant studio reflections across 18K gold, sterling silver, and gunmetal.
- **Reference-Calibrated Honed Limestone & Pitted Travertine Texture (v1.8.16):** Modeled directly after desktop 3D reference `reference/stonetexture3.png`, featuring a smooth honed spherical stone body with directional honing micro-striations, scattered organic porous cavities & pockmarks with ambient occlusion depth, fine pin-prick micro-pores, and dry matte PBR mineral shading (`roughness: 0.78`, `bumpScale: 0.020`, `normalScale: [1.0, 1.0]`). Includes a dedicated Honed Limestone / Travertine swatch (`#A2A5A0`) in the studio color palette.
- **Reference-Calibrated Tumble-Polished Metal with Micro-Scratches & Patina (v1.8.15):** Modeled directly after desktop 3D reference `reference/metaltexture2.png`, featuring ~140 multi-directional organic micro-scratches, spatial grid acceleration, cloudy micro-patina / tarnish smudging, high-frequency abrasion grain, pixel-level roughness mapping (`roughnessMap: 0.12 - 0.28`), and micro-AO in scratch cuts under an authentic semi-gloss jeweler's tumble finish (`metalness: 0.94`, `normalScale: [0.95, 0.95]`). Includes a dedicated Gunmetal / Antiqued Steel swatch (`#4B4E54`) in the studio color palette.
- **Reference-Calibrated Polished Wood & Brushed Satin Metal Textures (v1.8.13):**
  - **Polished Wood:** Natural bamboo, teak, and sandalwood growth ring bands with longitudinal micro-fiber striations, micro-pore relief, and smooth lacquer clearcoat glaze (`clearcoat: 0.32`, `roughness: 0.44`), modeled directly after desktop 3D reference `reference/woodtexture.png`.
  - **Brushed Satin Metal:** Lathe/spun horizontal hairline brushed tracks with anisotropic specular highlight elongation (`normalScale: [0.85, 0.45]`, `metalness: 0.92`, `roughness: 0.22`, `envMapIntensity: 1.35`), modeled directly after desktop 3D reference `reference/metaltexture.png`.
- **Reference-Calibrated Crystalline Quartz & Natural Stone Textures (v1.8.12):**
  - **Crystalline Quartz:** Speckled multi-tone crystal fleck maps with translucent sparkling white facets, slate-charcoal inclusions, micro-relief normal mapping, optical transmission (`0.58`), and refractive index (`ior: 1.54`), modeled directly from desktop reference `reference/quartztexture.png`.
  - **Weathered Natural Stone:** 28x28 Voronoi cellular rock plateau normal and bump maps with steep fissure crevices, multi-octave Hermite spline rock turbulence, and ambient occlusion fissure shading modeled after desktop 3D reference `reference/stonetexture.png`.
- **Reference-Calibrated Hammered Glass Texture (v1.8.11):** Procedural 30x30 Voronoi cellular water glass normal and bump maps modeled directly after desktop reference `reference/glasstexture.png`, producing shimmering organic facet glints, optical transmission (`0.86`), and clearcoat glaze (`0.45`) across all bead shapes.
- **Deep Dark Brown Leather Recalibration (v1.8.10):** Calibrated the procedural bolo leather cord color ramp for authentic deep dark chocolate / walnut leather brown under Three.js studio illumination (`[60, 36, 22]` body / `#3C2416`, `[86, 54, 34]` highlight, `[36, 20, 12]` crevice), capturing rich dark cowhide depth with balanced satin sheen (`roughness: 0.74`, `envMapIntensity: 0.22`).
- **Authentic 3D Bracelet Base Types Matching Reference Photos (v1.8.6):**
  - **Sterling Silver & 18K Gold Snake Chains:** Faithful 3D reproduction of `silver chain bracelet.png` and `gold chain bracelet.png`, featuring ~128 interlocking slanted metal segments with deep joint seams, convex plate bevels, specular roughness maps, and polished tapered end-cap ferrules flanking the clasp.
  - **Two-Tone Braided Diamond Woven Cord:** Modeled after `Woven Cord Bracelet.png`, featuring a continuous interlacing twill braid with micro-fiber yarn striations, primary cord color inheritance, and contrasting deep charcoal-black (`#181A20`) strands.
  - **Vintage Round Bolo Leather Cord:** Modeled after `Leather Bracelet.png`, featuring true round bolo cowhide cord rendered via continuous 2D periodic Hermite spline noise with rich natural brown mottling, longitudinal rolled burnished seam, and satin sheen.
  - **Preserved Bead Clearance:** Base core diameter maintained at `0.184` ensuring clear visible space inside enlarged bead holes (`0.38`–`0.60` diameter) during smooth 3D sliding.
- **Neutral Pure White Studio Lighting (v1.8.5):** Replaced warm gold/yellow key and rim lights with crisp, daylight-balanced white studio lighting (`0xFFFFFF`), ensuring silver metal, stone, and wood beads reflect clean white specular highlights with zero yellow cast.
- **Rich Darker Gold & Silver Shading for Stone & Wood (v1.8.4):** Calibrated deep antique gold mineral stone (`#7D5A18`), silver hematite slate (`#4A4D53`), golden teak wood (`#744E14`), and weathered silver driftwood (`#46494F`), preventing diffuse chalk/white artifacts while preserving material selection.
- **Harmonized Gold & Silver Shader Engine (v1.8.3):** Full Cook-Torrance BRDF alignment (`metalness: 0.90`, `roughness: 0.18`, `envMapIntensity: 1.2`) and ColorSync P3-to-sRGB recalibrated warm 18K gold (`#D2AC4C`) across beads, clasps, base chains, and spacers.
- **Progressive Web App (PWA):** Offline service worker caching, installable manifest, and interactive version chip (`1.9.0 ↻`).

---

## How to Use

1. **Orbit:** Click and drag in the 3D viewport to spin the bracelet under the light. Pinch or scroll to zoom in.
2. **Palette:** Explore bead shapes, spacers, and clasps on the left.
3. **Properties:** Adjust wrist circumference and bead diameters on the right.
4. **Export:** Export high-resolution renders and itemized materials lists for your jeweler or Etsy artisan.

---

## Credits & License

- **Created by:** Ethan Norland with [Antigravity](https://antigravity.google) (Google DeepMind)
- **License:** Released under the [MIT License](LICENSE).
- **Libraries:** Powered by [Three.js](https://threejs.org/) (MIT License). See [ATTRIBUTION.md](ATTRIBUTION.md) for full credits.
