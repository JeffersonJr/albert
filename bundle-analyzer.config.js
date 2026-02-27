// Bundle analyzer configuration for performance optimization
export const bundleConfig = {
    // Target bundle sizes (in KB)
    targets: {
        'main': 150,        // Main application bundle
        'vendor': 200,      // Third-party libraries
        'router': 50,       // React Router
        'ui': 100,          // UI components (Lucide icons)
        'animations': 80,    // GSAP animations
        'analytics': 30       // Analytics scripts
    },
    
    // Code splitting strategies
    splitting: {
        // Split by route
        routes: [
            '/',
            '/sobre',
            '/cases',
            '/blog',
            '/politica-privacidade',
            '/termos'
        ],
        
        // Split by feature
        features: [
            'hero',
            'comparison',
            'features',
            'testimonials',
            'pricing',
            'faq'
        ]
    },
    
    // Tree shaking optimizations
    treeShaking: {
        // Remove unused exports
        removeUnused: true,
        
        // Mark side effects
        pureModules: [
            'lucide-react',
            '@vercel/analytics'
        ]
    },
    
    // Compression settings
    compression: {
        // Enable gzip compression
        gzip: true,
        
        // Enable brotli compression
        brotli: true,
        
        // Compression level
        level: 9
    },
    
    // Runtime optimizations
    runtime: {
        // Minimize React runtime
        reactRuntime: 'production',
        
        // Enable code splitting
        codeSplitting: true,
        
        // Enable lazy loading
        lazyLoading: true
    }
};

// Performance monitoring
export const performanceMetrics = {
    // Core Web Vitals targets
    targets: {
        fcp: 1800,    // First Contentful Paint (ms)
        lcp: 2500,    // Largest Contentful Paint (ms)
        fid: 100,      // First Input Delay (ms)
        cls: 0.1,      // Cumulative Layout Shift
        ttfb: 600      // Time to First Byte (ms)
    },
    
    // Bundle size monitoring
    bundleSize: {
        // Maximum total bundle size (KB)
        maxTotal: 500,
        
        // Maximum individual chunk size (KB)
        maxChunk: 200,
        
        // Warning threshold
        warningThreshold: 0.8
    }
};

export default { bundleConfig, performanceMetrics };
