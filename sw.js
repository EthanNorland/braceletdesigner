const APP_ID = "bracelet-designer";
const VERSION = "1.8.12";
const CACHE = APP_ID + "-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./reference/bracelet designer logo.jpg",
  "./reference/glasstexture.png",
  "./reference/quartztexture.png",
  "./reference/stonetexture.png",
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
