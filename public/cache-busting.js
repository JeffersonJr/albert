// Advanced Cache Busting Script for Development
(function() {
    'use strict';
    
    // Configuration
    const config = {
        developmentHosts: ['localhost', '127.0.0.1'], // Removido 'vercel.app'
        forceClear: false, // Desativado por padrão
        logLevel: 'info', // 'debug', 'info', 'warn', 'error'
        autoReload: false // Desativado reload automático
    };
    
    // Logger utility
    const logger = {
        debug: (msg, ...args) => config.logLevel === 'debug' && console.log(`[Cache Debug] ${msg}`, ...args),
        info: (msg, ...args) => ['debug', 'info'].includes(config.logLevel) && console.log(`[Cache Info] ${msg}`, ...args),
        warn: (msg, ...args) => ['debug', 'info', 'warn'].includes(config.logLevel) && console.warn(`[Cache Warning] ${msg}`, ...args),
        error: (msg, ...args) => console.error(`[Cache Error] ${msg}`, ...args)
    };
    
    // Check if we're in development
    function isDevelopment() {
        const hostname = window.location.hostname;
        return config.developmentHosts.some(host => hostname.includes(host));
    }
    
    // Clear all caches
    async function clearAllCaches() {
        if (!('caches' in window)) {
            logger.warn('Cache API not available');
            return;
        }
        
        try {
            logger.info('Starting cache clearing...');
            const cacheNames = await caches.keys();
            logger.debug('Found caches:', cacheNames);
            
            const deletePromises = cacheNames.map(async (cacheName) => {
                try {
                    await caches.delete(cacheName);
                    logger.debug(`Deleted cache: ${cacheName}`);
                    return { name: cacheName, success: true };
                } catch (error) {
                    logger.error(`Failed to delete cache ${cacheName}:`, error);
                    return { name: cacheName, success: false, error };
                }
            });
            
            const results = await Promise.allSettled(deletePromises);
            const successful = results.filter(r => r.value?.success).length;
            const failed = results.length - successful;
            
            logger.info(`Cache clearing completed: ${successful} successful, ${failed} failed`);
            return { successful, failed, total: results.length };
            
        } catch (error) {
            logger.error('Cache clearing failed:', error);
            return { successful: 0, failed: 1, total: 1, error };
        }
    }
    
    // Unregister all service workers
    async function unregisterServiceWorkers() {
        if (!('serviceWorker' in navigator)) {
            logger.warn('Service Worker API not available');
            return;
        }
        
        try {
            logger.info('Starting service worker unregistration...');
            const registrations = await navigator.serviceWorker.getRegistrations();
            logger.debug('Found service workers:', registrations.length);
            
            const unregisterPromises = registrations.map(async (registration) => {
                try {
                    await registration.unregister();
                    logger.debug(`Unregistered service worker: ${registration.scope}`);
                    return { scope: registration.scope, success: true };
                } catch (error) {
                    logger.error(`Failed to unregister service worker ${registration.scope}:`, error);
                    return { scope: registration.scope, success: false, error };
                }
            });
            
            const results = await Promise.allSettled(unregisterPromises);
            const successful = results.filter(r => r.value?.success).length;
            const failed = results.length - successful;
            
            logger.info(`Service worker unregistration completed: ${successful} successful, ${failed} failed`);
            return { successful, failed, total: results.length };
            
        } catch (error) {
            logger.error('Service worker unregistration failed:', error);
            return { successful: 0, failed: 1, total: 1, error };
        }
    }
    
    // Clear storage
    function clearStorage() {
        try {
            logger.info('Clearing localStorage and sessionStorage...');
            
            // Clear localStorage
            const localStorageKeys = Object.keys(localStorage);
            localStorageKeys.forEach(key => localStorage.removeItem(key));
            logger.debug(`Cleared ${localStorageKeys.length} localStorage items`);
            
            // Clear sessionStorage
            const sessionStorageKeys = Object.keys(sessionStorage);
            sessionStorageKeys.forEach(key => sessionStorage.removeItem(key));
            logger.debug(`Cleared ${sessionStorageKeys.length} sessionStorage items`);
            
            logger.info('Storage clearing completed');
            return { localStorage: localStorageKeys.length, sessionStorage: sessionStorageKeys.length };
            
        } catch (error) {
            logger.error('Storage clearing failed:', error);
            return { localStorage: 0, sessionStorage: 0, error };
        }
    }
    
    // Force reload with cache busting
    function forceReload() {
        const timestamp = Date.now();
        const url = `${window.location.origin}${window.location.pathname}?t=${timestamp}`;
        logger.info(`Force reloading to: ${url}`);
        window.location.href = url;
    }
    
    // Main cache busting function
    async function performCacheBusting() {
        if (!isDevelopment()) {
            logger.debug('Not in development environment, skipping cache busting');
            return;
        }
        
        if (!config.forceClear) {
            logger.debug('Force clear disabled, skipping cache busting');
            return;
        }
        
        logger.info('Starting development cache busting...');
        
        try {
            // Step 1: Clear caches
            const cacheResult = await clearAllCaches();
            
            // Step 2: Unregister service workers
            const swResult = await unregisterServiceWorkers();
            
            // Step 3: Clear storage
            const storageResult = clearStorage();
            
            // Step 4: Log results
            logger.info('Cache busting completed:', {
                cache: cacheResult,
                serviceWorkers: swResult,
                storage: storageResult
            });
            
            // Step 5: Force reload only if autoReload is enabled
            if (config.autoReload) {
                setTimeout(() => {
                    forceReload();
                }, 1000);
            } else {
                logger.info('Auto reload disabled, manual reload required');
            }
            
        } catch (error) {
            logger.error('Cache busting failed:', error);
        }
    }
    
    // Auto-execute disabled - manual control only
    // if (isDevelopment() && config.forceClear) {
    //     // Wait for DOM to be ready
    //     if (document.readyState === 'loading') {
    //         document.addEventListener('DOMContentLoaded', performCacheBusting);
    //     } else {
    //         performCacheBusting();
    //     }
    // }
    
    // Export for manual control
    window.CacheBusting = {
        clearCaches: clearAllCaches,
        unregisterServiceWorkers: unregisterServiceWorkers,
        clearStorage: clearStorage,
        forceReload: forceReload,
        performCacheBusting: performCacheBusting,
        isDevelopment: isDevelopment
    };
    
    logger.debug('Cache busting script loaded (manual control only)');
    
})();
