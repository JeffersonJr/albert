import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build-optimized Vite configuration (fallback without terser)
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['gsap']
  },
  build: {
    // Enable basic optimization without terser
    target: 'es2015',
    minify: 'esbuild', // Use esbuild instead of terser
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', 'framer-motion'],
          utils: ['gsap']
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimize build performance
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    // Enable source maps for debugging
    sourcemap: false,
    // Report compressed size
    reportCompressedSize: true,
    // Optimize for production
    cssMinify: true,
    // Empty outDir on build
    emptyOutDir: true
  },
  // Resolve optimizations
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Server configuration
  server: {
    host: true,
    port: 3000
  },
  // Preview configuration
  preview: {
    host: true,
    port: 3000
  }
});
