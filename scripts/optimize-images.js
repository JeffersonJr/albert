// Image optimization script
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = path.join(__dirname, '../public/img');
const outputDir = path.join(__dirname, '../public/img/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Image sizes to generate
const sizes = [320, 640, 768, 1024, 1280];

// Optimize images
const optimizeImages = async () => {
    try {
        const files = fs.readdirSync(imageDir);
        
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const inputPath = path.join(imageDir, file);
                const ext = path.extname(file);
                const baseName = path.basename(file, ext);
                
                console.log(`Optimizing: ${file}`);
                
                // Generate different sizes
                for (const size of sizes) {
                    const outputPath = path.join(outputDir, `${baseName}-${size}${ext}`);
                    
                    await sharp(inputPath)
                        .resize(size, null, {
                            withoutEnlargement: true,
                            fit: 'inside'
                        })
                        .jpeg({ quality: 80, progressive: true })
                        .toFile(outputPath);
                    
                    console.log(`Generated: ${baseName}-${size}${ext}`);
                }
                
                // Generate WebP versions
                for (const size of sizes) {
                    const webpPath = path.join(outputDir, `${baseName}-${size}.webp`);
                    
                    await sharp(inputPath)
                        .resize(size, null, {
                            withoutEnlargement: true,
                            fit: 'inside'
                        })
                        .webp({ quality: 80 })
                        .toFile(webpPath);
                    
                    console.log(`Generated WebP: ${baseName}-${size}.webp`);
                }
            }
        }
        
        console.log('Image optimization completed!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
};

optimizeImages();
