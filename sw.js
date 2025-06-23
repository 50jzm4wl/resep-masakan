self.addEventListener("install", e => {
  e.waitUntil(caches.open("res-cache").then(c => c.addAll([
    "/index.html", "/style.css", "/app.js", "/manifest.json", "/assets/icon.png"
  ])));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
