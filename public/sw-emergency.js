// Emergency Service Worker - Simple and robust
const CACHE_NAME = 'albert-ia-emergency-v1';

// Install event
self.addEventListener('install', event => {
    console.log('SW installing...');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    console.log('SW activated');
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

// Fetch event - simple network-first strategy
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Skip non-HTTP requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Skip development server requests
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
        return;
    }
    
    // Simple fetch without caching to avoid errors
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Offline', { 
                status: 503, 
                statusText: 'Service Unavailable' 
            });
        })
    );
});
