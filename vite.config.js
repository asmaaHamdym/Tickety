import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Default minifier
    terserOptions: {
      compress: {
        drop_console: true, // Example: remove console.logs in production
      },
    },
  },
})
