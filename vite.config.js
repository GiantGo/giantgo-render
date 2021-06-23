import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  // now you can access config with process.env.{configName}

  return defineConfig({
    base: './',
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src')
      }
    },
    server: {
      proxy: {
        [process.env.VITE_BASE_URL]: {
          target: process.env.VITE_PROXY_TARGET,
          ws: true,
          secure: false,
          changeOrigin: true
        }
      }
    }
  })
}
