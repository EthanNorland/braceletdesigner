# Handoff Notes

## Current State
- **Date & Time:** November 9, 2026 (13:00 EST)
- **Version:** `1.9.61`
- **Phase:** Root GitHub Pages Portfolio Setup & Link Architecture (`v1.9.61`); Clickable Bracelet Designer Brand Link & In-App About & Portfolio Overlay (`v1.9.60`); Orange & Light Yellow Palette Swatches (`v1.9.59`); Streamlined Bead Color Swatches & Cleaned Duplicate Palette Circles (`v1.9.58`); Fit Indicator Accuracy & 3D Geometry-Calibrated Cord Occupancy (`v1.9.57`); Portfolio Top Navigation Link Streamlining (`v1.9.56`); Spacers and Rondelle Bead Overlap and Collision Geometry Fix (`v1.9.55`); Star, Barrel, and Cube Bead Collision and Overlap Fix (`v1.9.54`); Portfolio Page About Navigation (`v1.9.53`); Coming Soon Navigation Link & Roadmap Section (`v1.9.52`).
- **Primary Studio App URL:** [https://ethannorland.github.io/braceletdesigner/](https://ethannorland.github.io/braceletdesigner/)
- **Landing Page URL:** [https://ethannorland.github.io/braceletdesigner/landing.html](https://ethannorland.github.io/braceletdesigner/landing.html) (also accessible at `/welcome.html`)
- **Creator Portfolio Page URL:** [https://ethannorland.github.io/](https://ethannorland.github.io/) (hosted via dedicated root repository `EthanNorland.github.io`)
- **Studio Codebase Repository:** [https://github.com/EthanNorland/braceletdesigner](https://github.com/EthanNorland/braceletdesigner)
- **Portfolio Repository:** [https://github.com/EthanNorland/EthanNorland.github.io](https://github.com/EthanNorland/EthanNorland.github.io)

---

## Deliverables & Course Template Audit (Part 12)
Verified against [`Single_File_HTML_App_Template.TXT`](file:///Users/ethannorland/Downloads/Single_File_HTML_App_Template.TXT) and [`Single_File_HTML_App_Template (1).TXT`](file:///Users/ethannorland/Downloads/Single_File_HTML_App_Template%20(1).TXT) (both verified identical, MD5 `df49fa33721d65d997680bfe93b0018f`):

| Requirement | Status | Verification & Notes |
| :--- | :---: | :--- |
| **Live App URL** | ✅ Active | [https://ethannorland.github.io/braceletdesigner/](https://ethannorland.github.io/braceletdesigner/) |
| **Public GitHub Repo** | ✅ Active | [`github.com/EthanNorland/braceletdesigner`](https://github.com/EthanNorland/braceletdesigner) with [`README.md`](file:///Users/ethannorland/braceletdesigner/README.md), [`LICENSE`](file:///Users/ethannorland/braceletdesigner/LICENSE), [`CHANGELOG.md`](file:///Users/ethannorland/braceletdesigner/CHANGELOG.md), [`ATTRIBUTION.md`](file:///Users/ethannorland/braceletdesigner/ATTRIBUTION.md) |
| **Portfolio Site** | ✅ Active | Root domain [https://ethannorland.github.io/](https://ethannorland.github.io/) (dedicated repository `EthanNorland.github.io`) |
| **[`BRIEF.md`](file:///Users/ethannorland/braceletdesigner/BRIEF.md)** | ✅ Complete | 190 lines covering Raison d'être, User, Interaction Model, Prior Art, and "What's mine" (0 provisional tags) |
| **Tagged Versions (≥3)** | ✅ Exceeded | 61+ releases tagged from `v1.0.0` through `v1.9.61` |
| **Visual Identity** | ✅ Complete | Wordmark, custom logo, favicon, touch icons ([`icon-192.png`](file:///Users/ethannorland/braceletdesigner/icon-192.png), [`icon-512.png`](file:///Users/ethannorland/braceletdesigner/icon-512.png), [`icon.svg`](file:///Users/ethannorland/braceletdesigner/icon.svg)) |
| **Searchable Help & Tooltips** | ✅ Active | Searchable Help modal with animated beacon rings pointing to controls; tooltips across workbench |
| **About Dialog** | ✅ Active | Features version chip, purpose, inspiration & credits gallery, MIT license, and AI disclosure |
| **Autosave, Project Save & Export** | ✅ Active | IndexedDB autosave, `.bracelet` project file save/load, high-res PNG studio render export, and CSV/plaintext materials spec list |
| **Offline PWA** | ✅ Active | Offline service worker ([`sw.js`](file:///Users/ethannorland/braceletdesigner/sw.js)), [`manifest.webmanifest`](file:///Users/ethannorland/braceletdesigner/manifest.webmanifest), and active version chip (`1.9.0 ↻`) |
| **Review Tools** | ✅ Ready | Local markup server ([`markup-server.py`](file:///Users/ethannorland/braceletdesigner/tools/markup-server.py)) and toolbar ([`markup-inject.js`](file:///Users/ethannorland/braceletdesigner/tools/markup-inject.js)) configured in [`tools/`](file:///Users/ethannorland/braceletdesigner/tools/) |

---

## Repositories & Deployment Architecture

### 1. `braceletdesigner` ([`github.com/EthanNorland/braceletdesigner`](https://github.com/EthanNorland/braceletdesigner))
- **Deployment URL:** `https://ethannorland.github.io/braceletdesigner/`
- **Architecture:** Zero-dependency single-page WebGL PWA using Three.js r128 vendored locally in `/vendor/`.
- **Primary Files:**
  - [`index.html`](file:///Users/ethannorland/braceletdesigner/index.html): Complete 3D jewelry atelier application.
  - [`landing.html`](file:///Users/ethannorland/braceletdesigner/landing.html) & [`welcome.html`](file:///Users/ethannorland/braceletdesigner/welcome.html): Marketing and guided product showcase (maintained 100% byte-for-byte identical).
  - [`portfolio.html`](file:///Users/ethannorland/braceletdesigner/portfolio.html): Atelier portfolio page with client-side forwarder to `https://ethannorland.github.io/` for standalone visits, and embedded in `#dlg-portfolio` modal inside `index.html`.
  - [`sw.js`](file:///Users/ethannorland/braceletdesigner/sw.js): Progressive Web App service worker with offline cache management (`APP_ID + "-" + VERSION`).
  - [`manifest.webmanifest`](file:///Users/ethannorland/braceletdesigner/manifest.webmanifest): PWA manifest for macOS Dock, iOS Home Screen, and Android app install.
  - [`reference/Braceletuponappstartup.bracelet`](file:///Users/ethannorland/braceletdesigner/reference/Braceletuponappstartup.bracelet): Seed startup project file.
  - [`models/arm_wrist.glb`](file:///Users/ethannorland/braceletdesigner/models/arm_wrist.glb): 3D anatomical arm and resting hand for Wrist View.
  - [`vendor/`](file:///Users/ethannorland/braceletdesigner/vendor/): Local Three.js runtime (`three.min.js`, `OrbitControls.js`, `GLTFLoader.js`).

### 2. `EthanNorland.github.io` ([`github.com/EthanNorland/EthanNorland.github.io`](https://github.com/EthanNorland/EthanNorland.github.io))
- **Deployment URL:** `https://ethannorland.github.io/` (Root user domain)
- **Architecture:** Standalone personal portfolio showcase of Ethan Norland.
- **Featured Works:**
  1. *Bracelet Designer* (Interactive 3D WebGL PWA)
  2. *Liquid Death Halloween Poster* (Brand identity, typography, 16MB master print download)
  3. *The Best & Worst of Disney World* (8-page editorial zine, 18MB PDF download)
  4. *Stan Lee Typographic Tribute Portrait* (Digital typography illustration)
  5. *Footwear Study / Shoe Drawing* (Observational graphite illustration)
- **Media Assets:** All exhibition displays, preview thumbnails, and PDFs stored locally in `reference/`.

---

## What Works

### 1. Root Portfolio Ecosystem & Link Architecture (`v1.9.61`)
- **Root Domain Deployment:** Served directly from `main` of `EthanNorland.github.io` at `https://ethannorland.github.io/`.
- **Cross-Linking:** All project cards seamlessly cross-link to the live 3D studio at `https://ethannorland.github.io/braceletdesigner/`.
- **Standalone Forwarder:** Standalone visitors hitting `/braceletdesigner/portfolio.html` are smoothly routed to `https://ethannorland.github.io/` without breaking in-app iframe usage.

### 2. In-App About & Portfolio Modal Overlay (`v1.9.60`)
- **Clickable Header Wordmark:** The header title **"Bracelet DESIGNER"** is an interactive link (`#brand-link`) with subtle hover transitions and gold accent lighting.
- **Tabletop Preservation (`#dlg-portfolio`):** Clicking the title opens a modal dialog embedding `portfolio.html` in an iframe. Users can browse Ethan's bio, projects, and art without resetting, reloading, or losing unsaved beads on the 3D tabletop.
- **Modal Header & Controls:** Custom top bar with EN avatar, "Open Full Page ↗" link to the root portfolio, and close button (`✕`) supporting backdrop-click and `Escape` key dismissal.
- **Mobile Menu Integration:** Added `💼 Ethan Norland (About & Portfolio)` to the mobile drawer menu.

### 3. Streamlined Color Palette & Harmonized Materials (`v1.9.58` - `v1.9.59`)
- **Clean Palette Layout:** Removed redundant gold and silver swatch circles (relying on the dedicated, persistent **Silver** & **Gold** action buttons directly beneath). Removed two duplicate gray swatches, keeping a single neutral Gunmetal/Slate Gray circle (`#4B4E54`).
- **New Swatches:** Added vibrant **Orange** (`#F97316`, Mandarin / Carnelian) and **Light Yellow** (`#FEF08A`, Light Lemon / Citrine) circles.
- **Material Classification & Spec Sheet Sync:**
  - Added names to `getColorName()`: `#FEF08A` (*Light Lemon Yellow*), `#F97316` (*Mandarin Orange*), `#EF4444` (*Coral Red*).
  - Calibrated shader classification in `getPBRMaterial()` so light yellow beads retain crystalline/glass translucency instead of being misclassified as opaque gold metal.

### 4. 3D Geometry-Calibrated Fit Meter & Accumulator (`v1.9.57`)
- **Arc-Occupancy Math:** Replaced naive 1D diameter summing with true 3D cord arc occupancy derived from `getBeadAngularHalfExtent(b, radius)`.
- **Discrepancy Resolution:** Resolved the issue where the fit meter showed remaining mm even when the physical bracelet loop was full clasp-to-clasp.
- **Capacity State Detection:** Live indicator clearly reads `Bracelet Full (0 mm left)` at 100% capacity when no space remains for even the smallest 6mm spacer.

### 5. Shape-Aware Non-Penetration Collision Physics (`v1.9.54` - `v1.9.55`)
- **Closed-Form Extent Math:**
  - **Cube:** Uses flat square corner subtense to inner corner radius $r_{\text{inner}} = R - s/2$ using $\arctan(s/2 / r_{\text{inner}})$.
  - **Star:** Uses 5-pointed star tip reach $r_{\text{tip}} = R - 1.22 \times s/2$.
  - **Barrel & Carved Spacers:** Uses end-rim subtense along loop curvature.
  - **Rondelle Beads & Spacers:** Derived closed-form asymmetric elliptical tangent cone ($a = \text{halfS}$, $b = 1.25 \times \text{halfS}$) matching physical thickness ($s/2$) along the cord.
- **Pairwise Verification:** Validated across all 36 shape combinations, ensuring flush physical contact without mesh penetration during dragging, resizing, duplication, and template loading.

### 6. Core 3D Atelier Loop (`Select → Add → Slide → Check Fit`)
- **Direct 3D Raycasting:** Click and drag any bead or spacer to slide smoothly along the bracelet cord loop with collision detection.
- **Element Palette:** Add sphere, faceted, rondelle, barrel, cube, and star beads; silver/gold/carved spacers; swap magnetic, lobster, and screw-in clasps.
- **Properties Inspector:** Adjust bead diameter (6mm–16mm), change shape, swap materials (`Glass`, `Quartz`, `Stone`, `Metal`, `Wood`), and select colors.
- **Engraved Inscriptions:** Monogram cube beads with debossed canvas textures mapped onto outward (+X) and inward (-X) faces (letters A–Z, numbers 0–9, and symbols: Heart, Cross, Smiley Face, Peace, Dash).
- **Persistent Autosave (IndexedDB):** Real-time debounced storage to `bracelet-designer-db` with fallback to `localStorage`.
- **Tactile Procedural Audio:** 100% procedural Web Audio synthesis with unique acoustic signatures for each material (glass ping, quartz chime, metal ring, stone knock, wood marimba).
- **Wrist View Preview:** Toggle into 3D Wrist Mode draping the bracelet onto a realistic anatomical arm with 4 selectable skin tones.
- **Exports:** High-resolution beauty shot PNG preview, `.bracelet` project file save (`Cmd+S`), and itemized materials spec sheet with 1-click CSV export.

---

## Key Mathematical Formulations & Implementations

### 1. Shape-Aware Angular Extent (`getBeadAngularHalfExtent`)
```javascript
function getBeadAngularHalfExtent(b, radius) {
  const s = (b.sizeMm || 10) * 0.1;
  const halfS = s * 0.5;
  if (b.shape === "cube") {
    const rInner = Math.max(0.1, radius - halfS);
    return Math.atan(halfS / rInner) + 0.008;
  }
  if (b.shape === "star") {
    const rInner = Math.max(0.1, radius - halfS * 1.22);
    return Math.atan(halfS / rInner) + 0.008;
  }
  if (b.shape === "barrel") {
    const rEnd = Math.max(0.1, radius - halfS * 0.92);
    return Math.atan(halfS / rEnd) + 0.006;
  }
  if (b.shape === "rondelle" || b.isSpacer || b.type === "spacer") {
    const a = halfS;
    const bRad = halfS * 1.25;
    const phi = Math.atan2(bRad, a);
    const rTangent = Math.hypot(a * Math.cos(phi), bRad * Math.sin(phi));
    return Math.asin(Math.min(0.999, rTangent / Math.max(rTangent + 0.01, radius))) + 0.005;
  }
  return Math.asin(Math.min(0.999, halfS / Math.max(halfS + 0.01, radius))) + 0.004;
}
```

### 2. Physical Cord Arc Occupancy in `calculateFit()`
```javascript
function calculateFit() {
  const beads = doc.beads || [];
  const radius = getBraceletRadius();
  let occupiedAngle = 0;
  for (let i = 0; i < beads.length; i++) {
    occupiedAngle += getBeadAngularHalfExtent(beads[i], radius) * 2;
  }
  const claspAngle = (CLASP_FERRULE_OFFSET * 2) / radius;
  const totalUsableAngle = Math.PI * 2 - claspAngle;
  const fractionUsed = occupiedAngle / totalUsableAngle;
  const mmCircumference = doc.wristMm;
  const mmUsed = Math.min(mmCircumference, Math.round(fractionUsed * mmCircumference));
  const mmLeft = Math.max(0, mmCircumference - mmUsed);
}
```

---

## Canonical Version Synchronization Rule
Any version bump MUST be synchronized across all 9 canonical files simultaneously:
1. [`index.html`](file:///Users/ethannorland/braceletdesigner/index.html) (`#chip`, `#about-version`, `APP.version`)
2. [`sw.js`](file:///Users/ethannorland/braceletdesigner/sw.js) (`const VERSION = "...";`)
3. [`landing.html`](file:///Users/ethannorland/braceletdesigner/landing.html) (footer badge)
4. [`welcome.html`](file:///Users/ethannorland/braceletdesigner/welcome.html) (100% byte-for-byte identical to `landing.html`)
5. [`portfolio.html`](file:///Users/ethannorland/braceletdesigner/portfolio.html) (footer badge)
6. [`reference/Braceletuponappstartup.bracelet`](file:///Users/ethannorland/braceletdesigner/reference/Braceletuponappstartup.bracelet) (`"appVersion": "..."`)
7. [`README.md`](file:///Users/ethannorland/braceletdesigner/README.md) (version badge and text)
8. [`CHANGELOG.md`](file:///Users/ethannorland/braceletdesigner/CHANGELOG.md) (release heading and itemized notes)
9. [`HANDOFF.md`](file:///Users/ethannorland/braceletdesigner/HANDOFF.md) (Current State header)

---

## Rules Learned & Project Constraints
- **Landing & Welcome Sync:** `welcome.html` must always be an exact copy of `landing.html` (`cp landing.html welcome.html && cmp landing.html welcome.html`).
- **Metal Color Calibration:** Use reference-sampled diffuse albedos (`#D2AC4C` for 18K yellow gold, `#A8A9AC` for sterling silver) with `metalness: 0.90`, `roughness: 0.18`, and `envMapIntensity: 1.2` across clasps, beads, chains, and spacers for consistent specular reflections.
- **Bead Hole Clearance:** Base cord radius is `0.09` (diameter `0.18`), while bead holes range from ~`0.40` to `0.60`. This guarantees daylight clearance around the cord with zero clipping.
- **Double-Sided PBR Shading:** All PBR materials (`glass`, `quartz`, `metal`, `stone`, `wood`) must specify `side: THREE.DoubleSide` to properly shade the inside of drilled holes and hollow sections.
- **Raycast Dragging:** Direct manipulation in 3D temporarily disables `OrbitControls` during raycast `pointermove`. Dragging records exactly one undo snapshot upon `pointerdown` and commits on `pointerup`.
- **Safari CSS Grid Bug:** Elements with `position: fixed` inside a CSS Grid can trigger auto-placement errors in WebKit; explicitly define `grid-row` and `grid-column` for grid children.
- **Web Audio Context:** AudioContext must initialize or resume asynchronously inside user pointer/touch handlers to obey browser autoplay restrictions. All exponential ramps must start and end on non-zero positive values (e.g. `0.0001`).
- **Cube Engraving Orientation:** In Three.js `BoxGeometry`, face index 0 (+X) points radially outward toward the viewer on the bracelet ring; inscriptions are drawn on an offscreen canvas and mapped to this face.

---

## How to Resume Work in the Next Session

1. **Check Repositories Status:**
   ```bash
   git -C /Users/ethannorland/braceletdesigner status
   git -C /Users/ethannorland/EthanNorland.github.io status
   ```
2. **Local Testing & Markup Review:**
   ```bash
   cd /Users/ethannorland/braceletdesigner
   python3 tools/markup-server.py 8765
   # Opens in browser at http://localhost:8765/
   ```
3. **Commit & Deploy:**
   ```bash
   git -C /Users/ethannorland/braceletdesigner add .
   git -C /Users/ethannorland/braceletdesigner commit -m "Your commit message"
   git -C /Users/ethannorland/braceletdesigner push origin main
   ```

---

## What's Next & Roadmap Opportunities
1. **Presentation / Review Preparation:** Walkthrough practice, live demo talking points, or project submission packaging.
2. **Catalog & Weight Estimates:** Extend the CSV spec sheet to calculate estimated gram weights for precious metals and include supplier search links (e.g., Fire Mountain Gems).
3. **Wrist Mode Custom Color Picker:** As outlined in the "Coming Soon" roadmap, add a freeform hex/RGB color picker for skin tone customization in Wrist Mode.
4. **Custom Bead Designer:** Interactive lathe or bead sculpting tool allowing users to define custom geometry profiles.
5. **Studio Lighting Presets:** Add selectable studio lighting environments (Daylight, Warm Candlelight, High-Key Jewelry Showcase).
