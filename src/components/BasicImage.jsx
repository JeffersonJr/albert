const BasicImage = ({
    src,
    alt,
    title,
    className = '',
    loading = 'lazy',
    priority = false,
    width,
    height,
    ...props
}) => {
    // Preload critical images
    if (priority && typeof window !== 'undefined' && src) {
        const img = new Image();
        img.onload = () => {
            console.log(`Critical image preloaded: ${src}`);
        };
        img.src = src;
    }

    return (
        <img
            src={src}
            alt={alt}
            title={title || alt}
            loading={priority ? 'eager' : loading}
            decoding="async"
            width={width}
            height={height}
            className={`w-full h-full object-cover ${className}`}
            {...props}
        />
    );
};

export default BasicImage;
