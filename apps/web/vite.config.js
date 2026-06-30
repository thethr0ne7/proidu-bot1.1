import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/proidu-bot1.1/',  // ← Добавьте эту строку!
})