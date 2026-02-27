// Console Cleaner - Remove ruídos e erros externos
(function() {
    'use strict';
    
    // Lista de mensagens para ignorar
    const ignorePatterns = [
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
        'Google Analytics loaded'
    ];
    
    // Cache para evitar mensagens duplicadas
    const messageCache = new Set();
    const maxCacheSize = 100;
    
    // Override console.log para filtrar
    const originalConsoleLog = console.log;
    console.log = function(...args) {
        const message = args[0];
        const messageStr = JSON.stringify(args);
        
        // Verificar duplicação
        if (messageCache.has(messageStr)) {
            return; // Ignorar mensagem duplicada
        }
        
        // Adicionar ao cache
        if (messageCache.size >= maxCacheSize) {
            // Limpar cache antigo se estiver muito grande
            const firstItem = messageCache.values().next().value;
            messageCache.delete(firstItem);
        }
        messageCache.add(messageStr);
        
        if (typeof message === 'string') {
            const shouldIgnore = ignorePatterns.some(pattern => message.includes(pattern));
            if (shouldIgnore) {
                return; // Silenciar mensagem
            }
        }
        return originalConsoleLog.apply(console, args);
    };
    
    // Override console.warn para filtrar
    const originalConsoleWarn = console.warn;
    console.warn = function(...args) {
        const message = args[0];
        if (typeof message === 'string') {
            const shouldIgnore = ignorePatterns.some(pattern => message.includes(pattern));
            if (shouldIgnore) {
                return; // Silenciar mensagem
            }
        }
        return originalConsoleWarn.apply(console, args);
    };
    
    // Override console.error para filtrar
    const originalConsoleError = console.error;
    console.error = function(...args) {
        const message = args[0];
        if (typeof message === 'string') {
            const shouldIgnore = ignorePatterns.some(pattern => message.includes(pattern));
            if (shouldIgnore) {
                return; // Silenciar mensagem
            }
        }
        return originalConsoleError.apply(console, args);
    };
    
    // Interceptar erros globais
    window.addEventListener('error', function(event) {
        if (event.filename && event.filename.includes('gtm.js')) {
            event.preventDefault();
            return;
        }
        
        if (event.error && event.error.message) {
            const shouldIgnore = ignorePatterns.some(pattern => 
                event.error.message.includes(pattern)
            );
            if (shouldIgnore) {
                event.preventDefault();
                return;
            }
        }
    });
    
    // Interceptar erros não capturados
    window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && event.reason.message) {
            const shouldIgnore = ignorePatterns.some(pattern => 
                event.reason.message.includes(pattern)
            );
            if (shouldIgnore) {
                event.preventDefault();
                return;
            }
        }
    });
    
    console.log('Console Cleaner ativado - ruídos filtrados');
    
})();
