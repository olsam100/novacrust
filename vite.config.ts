import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@services': resolve(__dirname, 'src/services'),
      '@shared': resolve(__dirname, 'src/components/shared'),
      '@modal': resolve(__dirname, 'src/components/modal'),
      '@loader': resolve(__dirname, 'src/components/loader'),
      '@icons': resolve(__dirname, 'src/components/shared/icons'),
      '@generated': resolve(__dirname, 'src/_generated'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@plugins': resolve(__dirname, 'src/plugins'),
    },
  },
  define: {
    global: 'window',
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:8080',
  },
})
