import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Minificação padrão do Vite (esbuild) — sem dependência extra
    minify: 'esbuild',
  },
})
