// An Bình Tự service worker v22
const CACHE = 'anbinhtu-v22';
const KEEP = /^\/(models|draco|icons|assets)\//;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !KEEP.test(url.pathname)) return;

  // For /assets/, always fetch fresh network first so updates show at once
  if (url.pathname.startsWith('/assets/')) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((cache) => cache.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // For heavy 3D assets (models, draco, icons), cache first with quiet background refresh
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(e.request);
      const fresh = fetch(e.request).then((res) => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      });
      if (!hit) return fresh;
      e.waitUntil(fresh.catch(() => {}));
      return hit;
    })
  );
});
