import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), svgLoader()],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.js'),
        name: 'giantgo-render',
        fileName: (format) => `giantgo-render.${format}.js`
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', 'element-plus'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
            'element-plus': 'ElementPlus'
          }
        }
      }
    }
  }
})
