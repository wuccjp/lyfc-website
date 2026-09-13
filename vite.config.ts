import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Project Pages 預覽路徑；切自訂網域 (lyfc.com.tw) 時改回 '/'
  base: '/lyfc-website/',
  plugins: [react(), tailwindcss()],
})
