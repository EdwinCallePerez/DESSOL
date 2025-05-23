import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/DESSOL/", // esto está bien para producción en GitHub Pages
})
