const cacheName = 'v1';

const resourcesToPrecache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '../assets/img/arrow-left.svg',
  '../assets/img/arrow-right.svg',
  '../assets/img/big-eclipse.svg',
  '../assets/img/cart.svg',
  '../assets/img/dot-full.svg',
  '../assets/img/dot.svg',
  '../assets/img/favicon.ico',
  '../assets/img/logo-svg',
  '../assets/img/matebook.png',
  '../assets/img/mid-eclipse.svg',
  '../assets/img/small-eclipse.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => (cache.addAll(resourcesToPrecache))),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cache.match(event.request).then(cacheResponse => (cacheResponse) || fetch(event.request)),
  );
})