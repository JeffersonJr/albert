import { useEffect, useRef } from 'react';

const PerformanceMonitor = () => {
    const metricsRef = useRef({
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0
    });

    useEffect(() => {
        // Core Web Vitals monitoring
        const measurePerformance = () => {
            // First Contentful Paint (FCP)
            const fcpEntry = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
                metricsRef.current.fcp = fcpEntry.startTime;
                console.log('FCP:', fcpEntry.startTime);
            }

            // Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                if (lastEntry) {
                    metricsRef.current.lcp = lastEntry.startTime;
                    console.log('LCP:', lastEntry.startTime);
                }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.processingStart) {
                        const fid = entry.processingStart - entry.startTime;
                        metricsRef.current.fid = fid;
                        console.log('FID:', fid);
                    }
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift (CLS)
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        metricsRef.current.cls = clsValue;
                        console.log('CLS:', clsValue);
                    }
                });
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // Time to First Byte (TTFB)
            const navigation = performance.getEntriesByType('navigation')[0];
            if (navigation) {
                metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart;
                console.log('TTFB:', metricsRef.current.ttfb);
            }
        };

        // Measure after page load
        if (document.readyState === 'complete') {
            measurePerformance();
        } else {
            window.addEventListener('load', measurePerformance);
        }

        // Image optimization check
        const optimizeImages = () => {
            const images = document.querySelectorAll('img:not([data-optimized])');
            images.forEach(img => {
                // Add loading="lazy" to images below the fold
                if (img.getBoundingClientRect().top > window.innerHeight) {
                    img.loading = 'lazy';
                }
                
                // Add error handling
                img.onerror = function() {
                    this.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'bg-gray-200 rounded-lg flex items-center justify-center h-full';
                    fallback.innerHTML = '<span class="text-gray-500">Imagem indisponível</span>';
                    this.parentNode.replaceChild(fallback, this);
                };
                
                img.dataset.optimized = 'true';
            });
        };

        // Defer non-critical CSS
        const deferCSS = () => {
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
                if (!link.href.includes('critical')) {
                    link.media = 'print';
                    link.onload = function() {
                        this.media = 'all';
                    };
                }
            });
        };

        // Preload critical resources
        const preloadCriticalResources = () => {
            const criticalResources = [
                '/img/logo-green.png',
                '/img/logo.png'
            ];

            criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = resource.endsWith('.png') ? 'image' : 'fetch';
                link.href = resource;
                document.head.appendChild(link);
            });
        };

        // Initialize optimizations earlier
        setTimeout(() => {
            optimizeImages();
            deferCSS();
            preloadCriticalResources();
        }, 0); // Execute immediately instead of 100ms delay

        // Report metrics to console
        setTimeout(() => {
            console.log('🚀 Performance Metrics:', metricsRef.current);
            
            // Performance score calculation
            const score = calculatePerformanceScore(metricsRef.current);
            console.log(`📊 Performance Score: ${score}/100`);
            
            // Send to analytics (optional)
            if (window.gtag) {
                window.gtag('event', 'performance_metrics', {
                    custom_map: {
                        fcp: metricsRef.current.fcp,
                        lcp: metricsRef.current.lcp,
                        fid: metricsRef.current.fid,
                        cls: metricsRef.current.cls,
                        score: score
                    }
                });
            }
        }, 3000);

    }, []);

    const calculatePerformanceScore = (metrics) => {
        let score = 100;
        
        // FCP scoring (good: <1.8s)
        if (metrics.fcp > 1800) score -= Math.min(20, (metrics.fcp - 1800) / 100);
        
        // LCP scoring (good: <2.5s)
        if (metrics.lcp > 2500) score -= Math.min(25, (metrics.lcp - 2500) / 100);
        
        // FID scoring (good: <100ms)
        if (metrics.fid > 100) score -= Math.min(20, (metrics.fid - 100) / 10);
        
        // CLS scoring (good: <0.1)
        if (metrics.cls > 0.1) score -= Math.min(25, (metrics.cls - 0.1) * 100);
        
        // TTFB scoring (good: <600ms)
        if (metrics.ttfb > 600) score -= Math.min(10, (metrics.ttfb - 600) / 100);
        
        return Math.max(0, Math.round(score));
    };

    return null; // This component doesn't render anything
};

export default PerformanceMonitor;
