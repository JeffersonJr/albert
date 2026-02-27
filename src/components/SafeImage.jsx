import { useState } from 'react';

const SafeImage = ({ 
    src, 
    alt, 
    className = '', 
    loading = 'lazy',
    priority = false,
    width,
    height,
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
        setError(false);
    };

    const handleError = () => {
        setError(true);
        setIsLoaded(false);
    };

    // Preload critical images
    if (priority && typeof window !== 'undefined' && src) {
        const img = new Image();
        img.onload = () => {
            console.log(`Critical image preloaded: ${src}`);
        };
        img.src = src;
    }

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
            
            {/* Safe image */}
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : loading}
                decoding="async"
                width={width}
                height={height}
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
        </div>
    );
};

export default SafeImage;
