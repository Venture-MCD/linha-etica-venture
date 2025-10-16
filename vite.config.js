import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Altere o base para o nome do repositório do GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/linha-etica-venture/',   // <= importante para evitar página branca
})
