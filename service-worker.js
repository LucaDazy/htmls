const CACHE_NAME = 'study-hub-cache-v1';

// Install event: cache essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/Global/Css/main.css',
        '/Global/Css/animations.css',
        '/Global/SVGs/logo.svg',
        '/Global/SVGs/logo-alt1.svg',
        '/Global/SVGs/logo-alt2.svg',
        '/Global/SVGs/avatar.svg',
        '/Global/SVGs/avatar-alt1.svg',
        '/Global/SVGs/avatar-alt2.svg',
        '/Global/SVGs/wip.svg',
        '/Global/tool-manifest.json',
        '/Global/Clicker/SVGs/flashcard.svg'
      ]);
    })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: serve from cache, falling back to network
self.addEventListener('fetch', event => {
  // Ignore non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => {
        // Cache hit - return response from cache.
        if (response) {
          return response;
        }

        // Not in cache – fetch from network and cache the response
        return fetch(event.request).then(networkResponse => {
          // Don't cache non-ok responses
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response because it's a stream
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch(() => {
          // Offline fallback: return a simple offline page
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});
