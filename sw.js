// An Bình Tự service worker: the page always comes fresh from the network (so updates show at once),
// while statues, the Draco decoder, icons and the hashed code files are kept on the phone after the
// first visit, so coming back is fast and costs no data. Code files carry a hash in their name and never
// change; statues and icons keep their names, so a kept copy is refreshed quietly for the next visit.
const CACHE = 'anbinhtu-v9';
const KEEP = /^\/(models|draco|icons|assets)\//;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !KEEP.test(url.pathname)) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(e.request);
      // hashed code never changes: a kept copy is final
      if (hit && url.pathname.startsWith('/assets/')) return hit;
      const fresh = fetch(e.request).then((res) => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      });
      if (!hit) return fresh;
      e.waitUntil(fresh.catch(() => {}));
      return hit;
    }),
  );
});
