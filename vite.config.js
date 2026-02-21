import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';

const ReactCompilerConfig = { /* ... */ }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig]
        ],
      },
    }),
    checker({ typescript: true}),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variables" as *;
          @use "@/assets/styles/typography" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})