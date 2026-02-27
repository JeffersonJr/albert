import { useEffect } from 'react';

const OptimizedAnalytics = () => {
    useEffect(() => {
        // Load analytics only after page is fully loaded
        const loadAnalytics = () => {
            // Load Vercel Analytics
            if (typeof window !== 'undefined' && !window.va) {
                const script = document.createElement('script');
                script.src = '/_vercel/insights/script.js';
                script.defer = true;
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
        if ('requestIdleCallback' in window) {
            // Load when browser is idle
            requestIdleCallback(() => {
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
