const CACHE_NAME = 'albert-ia-v4';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/img/logo-green.png',
    '/img/logo.png',
    '/img/fav.png',
    '/img/fav-192.png',
    '/img/fav-512.png',
    '/img/avatar-1-1024.jpg',
    '/img/avatar-2-1024.jpg',
    '/img/avatar-3-1024.jpg'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Cache each resource individually to avoid failures
                return Promise.allSettled(
                    urlsToCache.map(url => 
                        cache.add(url).catch(error => {
                            console.warn(`Failed to cache ${url}:`, error);
                        })
                    )
                );
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

    // Skip non-GET requests and external requests
    if (request.method !== 'GET' || url.origin !== self.location.origin) {
        return;
    }

    // Skip API calls and dynamic content
    if (url.pathname.includes('/api/') || 
        url.pathname.includes('/sw.js') ||
        url.pathname.includes('/manifest.json')) {
        return;
    }

    event.respondWith(
        caches.match(request)
            .then(response => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }

                return fetch(request)
                    .then(response => {
                        // Cache successful responses
                        if (response.ok && 
                            (request.destination === 'image' || 
                             request.destination === 'script' || 
                             request.destination === 'style')) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(request, responseClone))
                                .catch(error => {
                                    console.warn('Failed to cache response:', error);
                                });
                        }
                        return response;
                    })
                    .catch(error => {
                        console.warn('Fetch failed:', error);
                        return new Response('Offline', { 
                            status: 503, 
                            statusText: 'Service Unavailable' 
                        });
                    });
            })
    );
});
