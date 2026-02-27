// Cache clearing script for development
(function() {
    'use strict';
    
    // Clear all caches
    if ('caches' in window) {
        caches.keys().then(function(names) {
            names.forEach(function(name) {
                caches.delete(name);
            });
            console.log('All caches cleared');
        });
    }
    
    // Unregister service workers
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            registrations.forEach(function(registration) {
                registration.unregister();
            });
            console.log('Service workers unregistered');
        });
    }
    
    // Force reload
    setTimeout(function() {
        window.location.reload(true);
    }, 1000);
})();
