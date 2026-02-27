// Console Cleaner Final - Super Otimizado
(function() {
    'use strict';
    
    // Configuração
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
            'TTFB:'
        ],
        deduplication: true,
        maxCacheSize: 50
    };
    
    // Cache para deduplicação
    const messageCache = new Set();
    
    // Função para verificar se mensagem deve ser ignorada
    function shouldIgnore(message) {
        if (typeof message !== 'string') return false;
        return config.ignorePatterns.some(pattern => message.includes(pattern));
    }
    
    // Função para deduplicar mensagem
    function isDuplicate(messageStr) {
        if (!config.deduplication) return false;
        
        if (messageCache.has(messageStr)) {
            return true;
        }
        
        // Gerenciar tamanho do cache
        if (messageCache.size >= config.maxCacheSize) {
            const firstItem = messageCache.values().next().value;
            messageCache.delete(firstItem);
        }
        
        messageCache.add(messageStr);
        return false;
    }
    
    // Override console.log
    const originalLog = console.log;
    console.log = function(...args) {
        const messageStr = JSON.stringify(args);
        
        if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
            return;
        }
        
        return originalLog.apply(console, args);
    };
    
    // Override console.warn
    const originalWarn = console.warn;
    console.warn = function(...args) {
        const messageStr = JSON.stringify(args);
        
        if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
            return;
        }
        
        return originalWarn.apply(console, args);
    };
    
    // Override console.error
    const originalError = console.error;
    console.error = function(...args) {
        const messageStr = JSON.stringify(args);
        
        if (shouldIgnore(args[0]) || isDuplicate(messageStr)) {
            return;
        }
        
        return originalError.apply(console, args);
    };
    
    // Interceptar erros globais
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
    
    // Interceptar unhandled rejections
    window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && event.reason.message) {
            if (shouldIgnore(event.reason.message)) {
                event.preventDefault();
                return;
            }
        }
    });
    
    // API para controle manual
    window.ConsoleCleaner = {
        addIgnorePattern: (pattern) => config.ignorePatterns.push(pattern),
        removeIgnorePattern: (pattern) => {
            const index = config.ignorePatterns.indexOf(pattern);
            if (index > -1) config.ignorePatterns.splice(index, 1);
        },
        clearCache: () => messageCache.clear(),
        getIgnoredPatterns: () => [...config.ignorePatterns],
        enableDeduplication: () => config.deduplication = true,
        disableDeduplication: () => config.deduplication = false
    };
    
    // Log silencioso
    if (!shouldIgnore('Console Cleaner Final ativado')) {
        originalLog.call(console, '✅ Console Cleaner Final ativado - console super limpo');
    }
    
})();
