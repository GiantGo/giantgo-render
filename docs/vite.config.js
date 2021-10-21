import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  plugins: [svgLoader()]
})
