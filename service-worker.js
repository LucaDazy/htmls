// service-worker.js with heavy logging

const CACHE_NAME = 'study-hub-cache-v2'; // Incremented version to trigger update
const LOG_PREFIX = '[ServiceWorker]';
console.log(`${LOG_PREFIX} Script loading. Cache name: ${CACHE_NAME}`);

const urlsToCache = [
  './',
  'index.html',
  'Global/Css/main.css',
  'Global/Css/animations.css',
  'Global/tool-manifest.json',
  'Global/SVGs/logo.svg',
  'Global/SVGs/logo-alt1.svg',
  'Global/SVGs/logo-alt2.svg',
  'Global/SVGs/avatar.svg',
  'Global/SVGs/avatar-alt1.svg',
  'Global/SVGs/avatar-alt2.svg',
  'Global/SVGs/wip.svg',
  'Global/Clicker/SVGs/flashcard.svg'
];

self.addEventListener('install', event => {
  console.log(LOG_PREFIX, 'INSTALL event fired.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log(LOG_PREFIX, `Cache opened: '${CACHE_NAME}'. Caching initial assets...`);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log(LOG_PREFIX, 'All initial assets have been cached successfully.');
        // Force the waiting service worker to become the active service worker.
        return self.skipWaiting();
      })
      .catch(error => {
        console.error(LOG_PREFIX, 'Asset caching failed during install:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log(LOG_PREFIX, 'ACTIVATE event fired.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(LOG_PREFIX, `Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log(LOG_PREFIX, 'Now controlling clients.');
      // Take control of all open clients without waiting for a reload.
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Log only requests for local assets to reduce noise.
  if (url.origin === self.location.origin) {
    console.log(LOG_PREFIX, 'FETCH event for:', event.request.url);
  }

  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  // Use a "Cache, then Network with Cache Update" strategy.
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
      if (cachedResponse) {
        console.log(LOG_PREFIX, `CACHE HIT for: ${event.request.url}`);
        return cachedResponse;
      }

      console.warn(LOG_PREFIX, `CACHE MISS for: ${event.request.url}. Fetching from network.`);
      
      return fetch(event.request).then(networkResponse => {
        console.log(LOG_PREFIX, `NETWORK FETCH successful for: ${event.request.url}`);
        
        // Check if we received a valid response.
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          console.warn(LOG_PREFIX, `Won't cache invalid response for ${event.request.url}. Status: ${networkResponse ? networkResponse.status : 'N/A'}`);
          return networkResponse;
        }

        // IMPORTANT: Clone the response. A response is a stream and can only be consumed once.
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            console.log(LOG_PREFIX, `Caching new network response for: ${event.request.url}`);
            cache.put(event.request, responseToCache);
          });

        return networkResponse;
      }).catch(error => {
          console.error(LOG_PREFIX, `NETWORK FETCH FAILED for: ${event.request.url}`, error);
          throw error;
      });
    })
  );
});
