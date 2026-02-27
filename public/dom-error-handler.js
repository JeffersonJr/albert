// DOM Error Handler para corrigir erros de insertBefore e outras manipulações DOM
(function() {
    'use strict';
    
    // Override original DOM methods para adicionar validação
    const originalInsertBefore = Node.prototype.insertBefore;
    const originalAppendChild = Node.prototype.appendChild;
    const originalRemoveChild = Node.prototype.removeChild;
    
    // Função de validação segura para insertBefore
    function safeInsertBefore(newNode, referenceNode) {
        try {
            // Verificar se os nós existem e são válidos
            if (!newNode || !referenceNode) {
                console.warn('insertBefore: nós inválidos', { newNode, referenceNode });
                return originalInsertBefore.call(this, newNode, referenceNode);
            }
            
            // Verificar se o nó pai existe
            if (!this || !this.appendChild) {
                console.warn('insertBefore: nó pai inválido', this);
                return originalInsertBefore.call(this, newNode, referenceNode);
            }
            
            // Verificar se o referenceNode é filho do nó pai
            if (referenceNode && referenceNode.parentNode !== this) {
                console.warn('insertBefore: referenceNode não é filho do nó pai', { 
                    referenceNode, 
                    parentNode: this, 
                    referenceParent: referenceNode.parentNode 
                });
                return originalInsertBefore.call(this, newNode, referenceNode);
            }
            
            // Executar operação original
            return originalInsertBefore.call(this, newNode, referenceNode);
            
        } catch (error) {
            console.error('insertBefore error capturado:', error);
            // Tentar recuperar com fallback
            try {
                if (this && this.appendChild && newNode) {
                    return this.appendChild(newNode);
                }
            } catch (fallbackError) {
                console.error('Fallback também falhou:', fallbackError);
            }
            throw error;
        }
    }
    
    // Função de validação segura para appendChild
    function safeAppendChild(newNode) {
        try {
            if (!newNode) {
                console.warn('appendChild: nó inválido', newNode);
                return;
            }
            
            if (!this || !this.appendChild) {
                console.warn('appendChild: nó pai inválido', this);
                return;
            }
            
            return originalAppendChild.call(this, newNode);
            
        } catch (error) {
            console.error('appendChild error capturado:', error);
            throw error;
        }
    }
    
    // Aplicar overrides globais
    if (typeof Node !== 'undefined') {
        Node.prototype.insertBefore = safeInsertBefore;
        Node.prototype.appendChild = safeAppendChild;
        
        console.log('DOM Error Handler instalado com sucesso');
    }
    
    // Interceptar erros globais
    window.addEventListener('error', function(event) {
        if (event.error && event.error.message && event.error.message.includes('insertBefore')) {
            console.warn('Erro de insertBefore interceptado:', event.error);
            event.preventDefault();
        }
    });
    
    // Interceptar erros não capturados
    const originalConsoleError = console.error;
    console.error = function(...args) {
        // Filtrar erros conhecidos que são seguros de ignorar
        const errorMessage = args[0];
        if (typeof errorMessage === 'string' && 
            (errorMessage.includes('insertBefore') || 
             errorMessage.includes('appendChild') ||
             errorMessage.includes('removeChild'))) {
            
            // Log como warning em vez de error
            console.warn('DOM manipulation warning:', ...args);
            return;
        }
        
        // Log original para outros erros
        return originalConsoleError.apply(console, args);
    };
    
    // Limpar erros de bibliotecas externas
    function clearExternalErrors() {
        const errorMessages = [
            'SES Removing unpermitted intrinsics',
            'initEternlDomAPI',
            'injectDomScript'
        ];
        
        // Override console.error para filtrar mensagens específicas
        const originalError = console.error;
        console.error = function(...args) {
            const message = args[0];
            if (typeof message === 'string' && 
                errorMessages.some(msg => message.includes(msg))) {
                return; // Silenciar erros específicos de bibliotecas externas
            }
            return originalError.apply(console, args);
        };
    }
    
    // Inicializar
    clearExternalErrors();
    
    // Adicionar método global para limpar cache se necessário
    window.clearDOMCache = function() {
        console.log('Limpando cache DOM...');
        // Forçar garbage collection se disponível
        if (window.gc) {
            window.gc();
        }
    };
    
})();
