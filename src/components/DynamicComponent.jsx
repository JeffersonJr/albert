import { useState, useEffect } from 'react';

const DynamicComponent = ({ 
    children, 
    fallback = null, 
    trigger = 'visible', // 'visible', 'click', 'hover', 'idle'
    delay = 0 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (trigger === 'idle') {
            // Load when browser is idle
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    setTimeout(() => setShouldLoad(true), delay);
                });
            } else {
                setTimeout(() => setShouldLoad(true), 100 + delay);
            }
        } else if (trigger === 'visible') {
            // Load when component is visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => setShouldLoad(true), delay);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { rootMargin: '50px' }
            );

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => {
                if (containerRef.current) {
                    observer.unobserve(containerRef.current);
                }
            };
        } else if (trigger === 'click') {
            // Load on click
            const handleClick = () => {
                setShouldLoad(true);
            };

            const container = containerRef.current;
            if (container) {
                container.addEventListener('click', handleClick);
                return () => {
                    container.removeEventListener('click', handleClick);
                };
            }
        } else if (trigger === 'hover') {
            // Load on hover
            const handleMouseEnter = () => {
                setTimeout(() => setShouldLoad(true), delay);
            };

            const container = containerRef.current;
            if (container) {
                container.addEventListener('mouseenter', handleMouseEnter);
                return () => {
                    container.removeEventListener('mouseenter', handleMouseEnter);
                };
            }
        }
    }, [trigger, delay]);

    useEffect(() => {
        if (shouldLoad && !isLoaded) {
            setIsLoaded(true);
        }
    }, [shouldLoad, isLoaded]);

    return (
        <div ref={containerRef}>
            {isLoaded ? children : fallback}
        </div>
    );
};

export default DynamicComponent;
