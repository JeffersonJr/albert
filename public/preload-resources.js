// Preload critical resources for performance optimization
(function() {
    'use strict';

    // Critical resources to preload
    const criticalResources = [
        {
            href: '/img/hero-mockup.png',
            as: 'image',
            type: 'image/png',
            priority: 'high'
        },
        {
            href: '/img/logo-green.png',
            as: 'image',
            type: 'image/png',
            priority: 'high'
        },
        {
            href: '/img/logo.png',
            as: 'image',
            type: 'image/png',
            priority: 'high'
        }
    ];

    // Preconnect to external domains
    const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://wa.me',
        'https://www.googletagmanager.com',
        'https://vercel.live'
    ];

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com',
        '//wa.me',
        '//www.googletagmanager.com'
    ];

    // Function to preload resources
    function preloadResource(resource) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) {
            link.type = resource.type;
        }
        if (resource.priority) {
            link.setAttribute('importance', resource.priority);
        }
        document.head.appendChild(link);
    }

    // Function to preconnect to domains
    function preconnectToDomain(domain) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
    }

    // Function to DNS prefetch domains
    function dnsPrefetchDomain(domain) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = 'https:' + domain;
        document.head.appendChild(link);
    }

    // Execute preloading strategies
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Preload critical resources
            criticalResources.forEach(preloadResource);
            
            // Preconnect to domains
            preconnectDomains.forEach(preconnectToDomain);
            
            // DNS prefetch domains
            dnsPrefetchDomains.forEach(dnsPrefetchDomain);
        });
    } else {
        // DOM already loaded, execute immediately
        criticalResources.forEach(preloadResource);
        preconnectDomains.forEach(preconnectToDomain);
        dnsPrefetchDomains.forEach(dnsPrefetchDomain);
    }

    // Preload fonts with font-display: swap
    const fontPreload = [
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            as: 'style',
            type: 'text/css'
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&display=swap',
            as: 'style',
            type: 'text/css'
        }
    ];

    fontPreload.forEach(preloadResource);

})();
