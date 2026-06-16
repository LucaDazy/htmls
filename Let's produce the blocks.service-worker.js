const CACHE_NAME = 'study-hub-cache-v1';
// A list of all core files to be cached for offline access.
// Using relative paths makes this work seamlessly on GitHub Pages.
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

// Install the service worker and cache all specified assets.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets.');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercept network requests and serve cached assets if available.
self.addEventListener('fetch', event => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response from cache.
        if (response) {
          return response;
        }
        // Not in cache - fetch from network.
        return fetch(event.request);
      })
  );
});

// Clean up old caches when a new service worker is activated.
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
