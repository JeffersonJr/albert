const CACHE_NAME = 'albert-ia-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/img/logo-green.png',
    '/img/logo.png',
    '/img/fav.png',
    '/src/index.css',
    '/src/main.jsx'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                self.skipWaiting();
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Strategy
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip external requests
    if (url.origin !== self.location.origin) {
        return;
    }

    // Network-first strategy for critical resources
    if (urlsToCache.includes(url.pathname)) {
        event.respondWith(
            caches.open(CACHE_NAME)
                .then(cache => {
                    return cache.match(request)
                        .then(response => {
                            // Return cached version if available
                            if (response) {
                                return response;
                            }
                            
                            // Otherwise fetch from network
                            return fetch(request)
                                .then(networkResponse => {
                                    // Cache successful responses
                                    if (networkResponse.ok) {
                                        cache.put(request, networkResponse.clone());
                                    }
                                    return networkResponse;
                                })
                                .catch(() => {
                                    // Return cached version if network fails
                                    return cache.match(request);
                                });
                        });
                })
        );
        return;
    }
    
    // Cache-first for images
    if (request.destination === 'image') {
        event.respondWith(
            caches.open(CACHE_NAME)
                .then(cache => {
                    return cache.match(request)
                        .then(response => {
                            if (response) {
                                return response;
                            }
                            
                            return fetch(request)
                                .then(networkResponse => {
                                    if (networkResponse.ok) {
                                        cache.put(request, networkResponse.clone());
                                    }
                                    return networkResponse;
                                });
                        });
                })
        );
        return;
    }
});

// Background Sync for offline functionality
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Handle background sync tasks
            Promise.resolve()
        );
    }
});

// Push Notifications
self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: '/img/logo-green.png',
        badge: '/img/logo-green.png',
        vibrate: [100, 50, 100],
        data: event.data.json ? event.data.json() : {}
    };

    event.waitUntil(
        self.registration.showNotification(event.data.title(), options)
    );
});

// Notification Click
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.notification.data.url) {
        event.waitUntil(
            clients.openWindow(event.notification.data.url)
        );
    }
});
