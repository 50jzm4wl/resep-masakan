self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("res-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/style.css",
        "/app.js",
        "/manifest.json",
        "/assets/icon.png"
        "/assets/nasi-goreng.jpg",
        "/assets/sate-ayam.jpg",
        "/assets/pancake.jpg",
        "/assets/rendang.jpg",
        "/assets/gado-gado.jpg",

      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
