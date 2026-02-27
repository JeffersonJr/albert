// Console Cleaner for Development - Filters external noise
(function() {
    'use strict';
    
    // Configuration for development
    const config = {
        ignorePatterns: [
            'SES Removing unpermitted intrinsics',
            'initEternlDomAPI',
            'injectDomScript',
            'gtm.js',
            'Google Tag Manager',
            'Download the React DevTools',
            'DOM Error Handler instalado com sucesso',
            'Console Cleaner ativado',
            'SW registered with scope',
            'Google Analytics loaded'
        ],
        deduplication: true,
        maxCacheSize: 20
    };
    
    // Cache for deduplication
    const messageCache = new Set();
    
    // Check if message should be ignored
    function shouldIgnore(message) {
        if (!message || typeof message !== 'string') return false;
        return config.ignorePatterns.some(pattern => message.includes(pattern));
    }
    
    // Check if message is duplicate
    function isDuplicate(messageStr) {
        if (!config.deduplication) return false;
        
        if (messageCache.has(messageStr)) {
            return true;
        }
        
        // Manage cache size
        if (messageCache.size >= config.maxCacheSize) {
            const firstItem = messageCache.values().next().value;
            messageCache.delete(firstItem);
        }
        
        messageCache.add(messageStr);
        return false;
    }
    
    // Override console methods
    function overrideConsole() {
        const originalLog = window.console.log;
        const originalWarn = window.console.warn;
        const originalError = window.console.error;
        
        window.console.log = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalLog.apply(window.console, args);
        };
        
        window.console.warn = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalWarn.apply(window.console, args);
        };
        
        window.console.error = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalError.apply(window.console, args);
        };
    }
    
    // Error event handlers
    function setupErrorHandlers() {
        window.addEventListener('error', function(event) {
            if (event.filename && event.filename.includes('gtm.js')) {
                event.preventDefault();
                return;
            }
            
            if (event.error && event.error.message) {
                if (shouldIgnore(event.error.message)) {
                    event.preventDefault();
                    return;
                }
            }
        });
        
        window.addEventListener('unhandledrejection', function(event) {
            if (event.reason && event.reason.message) {
                if (shouldIgnore(event.reason.message)) {
                    event.preventDefault();
                    return;
                }
            }
        });
    }
    
    // Initialize
    function init() {
        try {
            overrideConsole();
            setupErrorHandlers();
            
            // API for manual control
            window.ConsoleCleaner = {
                addIgnorePattern: function(pattern) {
                    config.ignorePatterns.push(pattern);
                },
                removeIgnorePattern: function(pattern) {
                    const index = config.ignorePatterns.indexOf(pattern);
                    if (index > -1) config.ignorePatterns.splice(index, 1);
                },
                clearCache: function() {
                    messageCache.clear();
                }
            };
            
            console.log('✅ Console Cleaner Dev ativado - desenvolvimento limpo');
            
        } catch (error) {
            // Fail silently
        }
    }
    
    // Initialize immediately
    init();
    
})();
