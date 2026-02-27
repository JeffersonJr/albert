// Performance testing script
const fs = require('fs');
const path = require('path');

// Performance thresholds
const thresholds = {
    bundleSize: {
        main: 150, // KB
        vendor: 200, // KB
        total: 500 // KB
    },
    coreWebVitals: {
        fcp: 1800, // ms
        lcp: 2500, // ms
        fid: 100, // ms
        cls: 0.1,
        ttfb: 600 // ms
    }
};

// Check bundle sizes
const checkBundleSizes = () => {
    const buildDir = path.join(__dirname, '../dist');
    
    if (!fs.existsSync(buildDir)) {
        console.log('❌ Build directory not found. Run "npm run build" first.');
        return false;
    }
    
    const jsDir = path.join(buildDir, 'assets');
    const files = fs.readdirSync(jsDir);
    
    let totalSize = 0;
    const bundleSizes = {};
    
    files.forEach(file => {
        if (file.endsWith('.js')) {
            const filePath = path.join(jsDir, file);
            const stats = fs.statSync(filePath);
            const sizeKB = Math.round(stats.size / 1024);
            
            bundleSizes[file] = sizeKB;
            totalSize += sizeKB;
            
            console.log(`📦 ${file}: ${sizeKB} KB`);
        }
    });
    
    console.log(`\n📊 Total bundle size: ${totalSize} KB`);
    
    // Check thresholds
    let passed = true;
    
    if (totalSize > thresholds.bundleSize.total) {
        console.log(`❌ Total bundle size exceeds threshold: ${totalSize} KB > ${thresholds.bundleSize.total} KB`);
        passed = false;
    }
    
    Object.entries(bundleSizes).forEach(([file, size]) => {
        if (size > thresholds.bundleSize.main) {
            console.log(`❌ Bundle ${file} exceeds threshold: ${size} KB > ${thresholds.bundleSize.main} KB`);
            passed = false;
        }
    });
    
    return passed;
};

// Generate performance report
const generateReport = () => {
    const report = {
        timestamp: new Date().toISOString(),
        bundleSizes: checkBundleSizes(),
        recommendations: []
    };
    
    // Add recommendations based on results
    if (!report.bundleSizes) {
        report.recommendations.push('Run "npm run build" to generate bundles for analysis');
    }
    
    // Save report
    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📄 Performance report saved to: ${reportPath}`);
    return report;
};

// Main execution
console.log('🚀 Running performance tests...\n');

const report = generateReport();

if (report.bundleSizes) {
    console.log('\n✅ Performance tests completed successfully!');
} else {
    console.log('\n❌ Performance tests failed!');
    process.exit(1);
}
