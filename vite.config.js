import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ troque aqui se o nome do repositório for outro
  base: '/linha-etica-venture/', 
  build: {
    sourcemap: true,
  },
})
