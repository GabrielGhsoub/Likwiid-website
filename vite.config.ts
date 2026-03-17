import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: 'gzip', threshold: 1024, disable: process.env.NODE_ENV !== 'production' }),
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024, disable: process.env.NODE_ENV !== 'production' }),
  ],
  build: {
    cssMinify: 'lightningcss',
    target: 'es2020',
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
