import { useEffect } from 'react';

const OptimizedAnalytics = () => {
    useEffect(() => {
        // Load analytics only after page is fully loaded
        const loadAnalytics = () => {
            // Load Vercel Analytics (only in production)
            if (typeof window !== 'undefined' && 
                window.location.hostname === 'albert-self.vercel.app' && 
                !window._vaq) {
                const script = document.createElement('script');
                script.src = '/_vercel/insights/script.js';
                script.defer = true;
                script.onerror = () => {
                    console.warn('Vercel Analytics script not available');
                };
                script.onload = () => {
                    console.log('Analytics loaded');
                };
                document.head.appendChild(script);
            }

            // Load Google Analytics (if needed)
            if (typeof window !== 'undefined' && !window.gtag) {
                const gtagScript = document.createElement('script');
                gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX';
                gtagScript.async = true;
                gtagScript.onload = () => {
                    console.log('Google Analytics loaded');
                };
                document.head.appendChild(gtagScript);
            }
        };

        // Load analytics with different strategies
        if (window.requestIdleCallback) {
            // Load when browser is idle
            window.requestIdleCallback(() => {
                setTimeout(loadAnalytics, 2000); // 2 seconds delay
            });
        } else {
            // Fallback: load after 3 seconds
            setTimeout(loadAnalytics, 3000);
        }

        // Performance monitoring
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Performance Metrics:', {
                            fcp: perfData.responseStart - perfData.requestStart,
                            lcp: perfData.loadEventEnd - perfData.responseStart,
                            ttfb: perfData.responseStart - perfData.requestStart,
                        });
                    }
                }, 1000);
            });
        }

    }, []);

    return null;
};

export default OptimizedAnalytics;
