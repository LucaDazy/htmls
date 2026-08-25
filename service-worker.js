// service-worker.js with heavy logging

const CACHE_NAME = 'study-hub-cache-v24'; // Improve caching strategy
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
  // We only handle GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Ignore non-local assets (e.g., Google Fonts).
  if (url.origin !== self.location.origin) {
    return;
  }

  console.log(LOG_PREFIX, 'FETCH event for local asset:', event.request.url);

  // Define assets that are part of the "app shell" and need to be fresh.
  const isAppShell = event.request.destination === 'document' ||
                     event.request.destination === 'style' ||
                     event.request.destination === 'script' ||
                     url.pathname.endsWith('tool-manifest.json');
  
  // Define static assets that can be served from the cache first.
  const isStaticAsset = url.pathname.endsWith('.svg');

  // Strategy 1: Network First for App Shell.
  // This ensures the user always gets the latest version of the core app files.
  // If the network fails, it falls back to the cached version.
  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // If we get a valid response, cache it before returning.
          if (networkResponse && networkResponse.ok) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              console.log(LOG_PREFIX, `NETWORK-FIRST: Caching fresh asset: ${event.request.url}`);
              cache.put(event.request, responseToCache);
            });
          }
          // Return the original network response to the browser to handle.
          return networkResponse;
        })
        .catch(() => {
          // If network fails (offline), serve the asset from the cache.
          console.warn(LOG_PREFIX, `NETWORK-FIRST: Network failed, serving from cache: ${event.request.url}`);
          return caches.match(event.request);
        })
    );
  } 
  // Strategy 2: Cache First for static assets (SVGs).
  // These assets change infrequently, so serving them from cache is fast and efficient.
  else if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // If the asset is in the cache, return it.
        if (cachedResponse) {
          console.log(LOG_PREFIX, `CACHE-FIRST: Serving from cache: ${event.request.url}`);
          return cachedResponse;
        }

        // If not in cache, fetch from network, cache it if valid, and then return it.
        return fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.ok) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              console.log(LOG_PREFIX, `CACHE-FIRST: Caching new asset: ${event.request.url}`);
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
  }
  // Any other local requests will pass through to the network without being cached.
});
