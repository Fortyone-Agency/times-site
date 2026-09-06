import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        japanese: resolve(process.cwd(), 'ja/index.html'),
        privacy: resolve(process.cwd(), 'privacy/index.html'),
        japanesePrivacy: resolve(process.cwd(), 'ja/privacy/index.html'),
      },
    },
  },
})