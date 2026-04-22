import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' garante que os assets são carregados corretamente no Render
  base: '/',
  build: {
    outDir: 'dist',
    // Minificação padrão do Vite (esbuild) — sem dependência extra
    minify: 'esbuild',
    // Garante que o index.html referencia os assets com caminhos absolutos
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Nomes de arquivo com hash para cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
