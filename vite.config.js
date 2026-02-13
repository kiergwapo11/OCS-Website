import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from https://<user>.github.io/<repo-name>/
// Set base to your repo name (with leading and trailing slash)
export default defineConfig({
  base: '/OCS-Website/',
  plugins: [react()],
})
