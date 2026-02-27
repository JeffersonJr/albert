// Console Cleaner for Production - Works even with minification
(function() {
    'use strict';
    
    // Configuration
    const config = {
        ignorePatterns: [
            'SES Removing unpermitted intrinsics',
            'initEternlDomAPI',
            'injectDomScript',
            'gtm.js',
            'Google Tag Manager',
            'Download the React DevTools',
            'Resource size is not correct',
            'DOM Error Handler instalado com sucesso',
            'Console Cleaner ativado',
            'SW registered with scope',
            'Google Analytics loaded',
            'Performance Metrics:',
            'Performance Score:',
            'LCP:',
            'TTFB:',
            'CLS:',
            'FID:',
            'FCP:'
        ],
        deduplication: true,
        maxCacheSize: 30
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
    
    // Safe console override
    function overrideConsole() {
        // Store original methods
        const originalLog = window.console.log;
        const originalWarn = window.console.warn;
        const originalError = window.console.error;
        const originalInfo = window.console.info;
        const originalDebug = window.console.debug;
        
        // Override log
        window.console.log = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalLog.apply(window.console, args);
        };
        
        // Override warn
        window.console.warn = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalWarn.apply(window.console, args);
        };
        
        // Override error
        window.console.error = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalError.apply(window.console, args);
        };
        
        // Override info
        window.console.info = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalInfo.apply(window.console, args);
        };
        
        // Override debug
        window.console.debug = function(...args) {
            const messageStr = JSON.stringify(args);
            
            if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
                return;
            }
            
            return originalDebug.apply(window.console, args);
        };
    }
    
    // Error event handler
    function setupErrorHandlers() {
        // Global error handler
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
        
        // Unhandled rejection handler
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
                },
                getIgnoredPatterns: function() {
                    return [...config.ignorePatterns];
                }
            };
            
            // Silent activation
            if (!shouldIgnore('Console Cleaner Production ativado')) {
                // Don't log to avoid being filtered
            }
            
        } catch (error) {
            // Fail silently
        }
    }
    
    // Initialize immediately
    init();
    
})();
