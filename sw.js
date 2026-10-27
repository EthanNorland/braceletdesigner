const APP_ID = "bracelet-designer";
const VERSION = "1.9.35";
const CACHE = APP_ID + "-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./landing.html",
  "./welcome.html",
  "./portfolio.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./reference/bracelet designer logo.jpg",
  "./reference/studio_hero_preview.png",
  "./reference/liquid_death_poster_preview.jpg",
  "./reference/liquid_death_poster_display.jpg",
  "./reference/liquid%20death%20final%20poster%20.jpg",
  "./reference/DisneyZine.pdf",
  "./reference/disneyzine_cover_preview.jpg",
  "./reference/disneyzine_spread_preview.jpg",
  "./reference/disneyzine_page_1.jpg",
  "./reference/disneyzine_page_2.jpg",
  "./reference/disneyzine_page_3.jpg",
  "./reference/disneyzine_page_4.jpg",
  "./reference/disneyzine_page_5.jpg",
  "./reference/disneyzine_page_6.jpg",
  "./reference/disneyzine_page_7.jpg",
  "./reference/disneyzine_page_8.jpg",
  "./reference/Still%20life%20drawing-Ethan%20Norland.jpg",
  "./reference/still_life_drawing_preview.jpg",
  "./reference/Typographic%20Portrait%20Stan%20Lee%20.png",
  "./reference/typographic_portrait_stan_lee_preview.jpg",
  "./reference/typographic_portrait_stan_lee_display.jpg",
  "./reference/Braceletuponappstartup.bracelet",
  "./reference/glasstexture.png",
  "./reference/quartztexture.png",
  "./reference/stonetexture.png",
  "./reference/stone2.png",
  "./reference/stonetexture3.png",
  "./reference/woodtexture.png",
  "./reference/metaltexture.png",
  "./reference/metaltexture2.png",
  "./vendor/three.min.js",
  "./vendor/OrbitControls.js",
  "./vendor/GLTFLoader.js",
  "./vendor/LICENSE",
  "./models/arm_wrist.glb"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c =>
    c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))));
  if (!self.registration.active) self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(k => k.startsWith(APP_ID + "-") && k !== CACHE)
    .map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("message", e => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true })
    .then(hit => hit || fetch(e.request)));
});
