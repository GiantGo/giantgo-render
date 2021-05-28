import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))
  // now you can access config with process.env.{configName}

  return defineConfig({
    plugins: [vue()],
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
