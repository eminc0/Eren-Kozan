const CACHE_NAME = 'eren-kozan-admin-v1';
const urlsToCache = [
  'admin-dashboard.html',
  'admin-login.html',
  'manifest.json'
];

// Yükleme (Install)
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Önbellek açıldı');
        return cache.addAll(urlsToCache);
      })
  );
});

// Getirme (Fetch)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});