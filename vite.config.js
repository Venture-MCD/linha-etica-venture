import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// troque pelo NOME DO SEU REPO no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/linha-etica-venture/', // << importante para Pages
})
