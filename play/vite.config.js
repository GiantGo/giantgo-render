import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  plugins: [vue(), svgLoader()]
})
