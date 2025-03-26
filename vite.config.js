import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  theme: {
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
    },
    gridTemplateColumns: {
      '70/30' : '70% 28%',
    }
  }
})
