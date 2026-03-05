import { useEffect } from 'react';

/**
 * Componente para carregar analytics de forma otimizada sem bloquear o thread principal.
 * Utiliza requestIdleCallback e delays estratégicos.
 */
const OptimizedAnalytics = () => {
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        const loadAnalytics = async () => {
            try {
                // Carregar Vercel Analytics se estiver no domínio correto ou localhost
                const isProduction = window.location.hostname === 'albert-self.vercel.app';
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

                if (isProduction || isLocal) {
                    const { inject } = await import('@vercel/analytics');
                    inject({
                        mode: isProduction ? 'production' : 'development',
                        debug: isLocal
                    });
                    console.log('Vercel Analytics initialized');
                }

                // Carregar Google Analytics
                if (!window.gtag) {
                    const gtagScript = document.createElement('script');
                    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX';
                    gtagScript.async = true;
                    gtagScript.onload = () => {
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { window.dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXX');
                        console.log('Google Analytics initialized');
                    };
                    document.head.appendChild(gtagScript);
                }
            } catch (error) {
                console.warn('Error loading analytics:', error);
            }
        };

        // Estratégia de carregamento: Esperar o browser ficar ocioso
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
                setTimeout(loadAnalytics, 2000); // 2 segundos de delay após idle
            });
        } else {
            // Fallback para browsers antigos
            window.addEventListener('load', () => {
                setTimeout(loadAnalytics, 3000);
            });
        }

        // Monitoramento básico de performance para logs internos
        if ('performance' in window && 'getEntriesByType' in performance) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const nav = performance.getEntriesByType('navigation')[0];
                    if (nav) {
                        const metrics = {
                            ttfb: nav.responseStart - nav.requestStart,
                            domReady: nav.domContentLoadedEventEnd - nav.responseStart,
                            loadTime: nav.loadEventEnd - nav.requestStart
                        };
                        console.log('Performance Summary:', metrics);
                    }
                }, 3000);
            });
        }
    }, []);

    return null;
};

export default OptimizedAnalytics;
