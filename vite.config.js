import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from "vite-plugin-babel";
import checker from 'vite-plugin-checker';

const ReactCompilerConfig = { /* ... */ }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    checker({ typescript: true}),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: [
          "@babel/preset-react",
          '@babel/preset-typescript'
        ],
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
})
