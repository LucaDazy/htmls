// service-worker.js with heavy logging

const CACHE_NAME = 'study-hub-cache-v25'; // Prioritize network to prevent stale content
const LOG_PREFIX = '[ServiceWorker]';
console.log(`${LOG_PREFIX} Script loading. Cache name: ${CACHE_NAME}`);

const urlsToCache = [
  './',
  'index.html',
  'Global/Css/main.css',
  'Global/Css/animations.css',
  'Global/Scripts/background-animation.js',
  'Global/tool-manifest.json',
  // Core SVGs
  'Global/SVGs/logo.svg',
  'Global/SVGs/avatar.svg',
  // Background Animation Doodles
  'Global/SVGs/doodles/apple.svg',
  'Global/SVGs/doodles/books.svg',
  'Global/SVGs/doodles/dot.svg',
  'Global/SVGs/doodles/emc2.svg',
  'Global/SVGs/doodles/gradcap.svg',
  'Global/SVGs/doodles/pencil.svg',
  'Global/SVGs/doodles/plus.svg',
  'Global/SVGs/doodles/ruler.svg',
  'Global/SVGs/doodles/sparkle.svg',
  'Global/SVGs/doodles/square.svg',
  'Global/SVGs/doodles/star.svg',
  'Global/SVGs/doodles/worm.svg',
  // Tools
  'Tools/A&P1_2_1/MuscleList_4_0/MuscleList.html'
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
  // We only handle local GET requests. Ignore all other requests.
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) {
    return;
  }

  // Use a "Network falling back to cache" strategy for all local assets.
  // This ensures that online users always get the latest content.
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // If the network request is successful, cache the new response and return it.
        if (networkResponse && networkResponse.ok) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            console.log(LOG_PREFIX, `NETWORK-FIRST: Caching fresh asset: ${event.request.url}`);
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If the network request fails (e.g., user is offline),
        // try to serve the asset from the cache instead.
        console.warn(LOG_PREFIX, `NETWORK-FIRST: Network failed, serving from cache: ${event.request.url}`);
        return caches.match(event.request);
      })
  );
});
