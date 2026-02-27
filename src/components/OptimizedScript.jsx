import { useEffect, useRef } from 'react';

const OptimizedScript = ({ 
    src, 
    strategy = 'lazyOnload', 
    async = true, 
    defer = true,
    onLoad,
    onError,
    ...props 
}) => {
    const scriptRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        scriptRef.current = script;

        // Set script attributes
        script.src = src;
        script.async = async;
        script.defer = defer;

        // Handle loading strategies
        if (strategy === 'lazyOnload') {
            script.onload = () => {
                if (onLoad) onLoad();
                console.log(`Script loaded: ${src}`);
            };
            script.onerror = () => {
                if (onError) onError();
                console.error(`Script failed to load: ${src}`);
            };
            
            // Load after page is fully loaded
            if (document.readyState === 'complete') {
                document.head.appendChild(script);
            } else {
                window.addEventListener('load', () => {
                    document.head.appendChild(script);
                });
            }
        } else if (strategy === 'idle') {
            // Load when browser is idle
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    document.head.appendChild(script);
                });
            } else {
                setTimeout(() => {
                    document.head.appendChild(script);
                }, 100);
            }
        } else {
            // Immediate loading
            document.head.appendChild(script);
        }

        return () => {
            if (scriptRef.current && scriptRef.current.parentNode) {
                scriptRef.current.parentNode.removeChild(scriptRef.current);
            }
        };
    }, [src, strategy, async, defer, onLoad, onError]);

    return null;
};

export default OptimizedScript;
