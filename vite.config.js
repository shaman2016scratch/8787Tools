import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    })
  ],
  base: '/8787Tools',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        devtools: resolve(__dirname, 'devTools.html')
      }
    }
  }
})