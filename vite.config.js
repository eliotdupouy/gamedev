import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying to GitHub Pages for username.github.io/repo, set base to /repo/
export default defineConfig({
  base: '/gamedev/',
  plugins: [react()]
})