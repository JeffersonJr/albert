import { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    loading = 'lazy',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    priority = false,
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef(null);

    // WebP support detection
    const supportsWebP = () => {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Generate responsive image sources
    const generateSrcSet = (originalSrc) => {
        if (!originalSrc) return '';
        
        // If it's an external URL, return as-is
        if (originalSrc.startsWith('http')) {
            return `${originalSrc} 1x`;
        }
        
        // For local images, generate multiple sizes
        const baseName = originalSrc.replace(/\.[^/.]+$/, '');
        const extension = originalSrc.match(/\.[^/.]+$/)?.[0] || '.jpg';
        
        return `
            ${baseName}-320${extension} 320w,
            ${baseName}-640${extension} 640w,
            ${baseName}-768${extension} 768w,
            ${baseName}-1024${extension} 1024w,
            ${baseName}-1280${extension} 1280w,
            ${originalSrc} 1920w
        `.trim();
    };

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!imgRef.current || priority) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            },
            { rootMargin: '50px' }
        );

        observer.observe(imgRef.current);

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
        setError(false);
    };

    const handleError = () => {
        setError(true);
        setIsLoaded(false);
    };

    const optimizedSrc = src;
    const srcSet = generateSrcSet(src);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Loading skeleton */}
            {!isLoaded && !error && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-lg" />
            )}
            
            {/* Error fallback */}
            {error && (
                <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Imagem não disponível</p>
                    </div>
                </div>
            )}
            
            {/* Optimized image */}
            <img
                ref={imgRef}
                src={priority ? optimizedSrc : undefined}
                data-src={!priority ? optimizedSrc : undefined}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                loading={priority ? 'eager' : loading}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={`
                    transition-opacity duration-300 
                    ${isLoaded ? 'opacity-100' : 'opacity-0'} 
                    ${error ? 'hidden' : ''}
                    w-full h-full object-cover
                `}
                {...props}
            />
            
            {/* Preload critical images */}
            {priority && typeof window !== 'undefined' && (
                <link
                    rel="preload"
                    as="image"
                    href={optimizedSrc}
                    imagesrcset={srcSet}
                    imagesizes={sizes}
                />
            )}
        </div>
    );
};

export default OptimizedImage;
