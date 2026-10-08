import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    cssMinify: 'lightningcss',
    target: 'es2020',
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        // Function form so react-dom's client runtime (createRoot + internals) is actually
        // grouped into the long-lived vendor chunk instead of leaking into the entry chunk.
        // i18next is split out too so the framework cache survives content-string changes.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)) {
            return 'vendor'
          }
          if (/[\\/]node_modules[\\/](i18next|react-i18next)[\\/]/.test(id)) return 'i18n'
          // framer-motion is deliberately not pinned to one chunk: the small `m` runtime rides
          // in the entry, and the domMax feature bundle (src/motionFeatures.ts) splits into its
          // own lazy chunk instead of being modulepreloaded ahead of the first render.
        },
      },
    },
  },
})
