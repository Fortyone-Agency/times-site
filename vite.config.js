import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        german: resolve(process.cwd(), 'de/index.html'),
        germanPrivacy: resolve(process.cwd(), 'de/privacy/index.html'),
        spanish: resolve(process.cwd(), 'es/index.html'),
        spanishPrivacy: resolve(process.cwd(), 'es/privacy/index.html'),
        french: resolve(process.cwd(), 'fr/index.html'),
        frenchPrivacy: resolve(process.cwd(), 'fr/privacy/index.html'),
        japanese: resolve(process.cwd(), 'ja/index.html'),
        privacy: resolve(process.cwd(), 'privacy/index.html'),
        japanesePrivacy: resolve(process.cwd(), 'ja/privacy/index.html'),
      },
    },
  },
})