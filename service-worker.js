self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/about.html','/services.html','/doctors.html', '/appointments.html', '/contact.html', '/script.js', '/dist/css/styles.min.css', '/dist/js/scripts.min.js']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});