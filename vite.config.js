 url=https://github.com/eliotdupouy/gamedev/blob/main/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gamedev/',
  plugins: [react()]
})