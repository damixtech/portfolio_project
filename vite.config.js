import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio_project/' : '/',

  build: {
    outDir: 'dist', // Carpeta donde se generarán los archivos de producción
    rollupOptions: {
      input: 'index.html'
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});