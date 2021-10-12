import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export default () => {
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      })
    ],
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
            'element-plus': 'elementPlus'
          }
        }
      }
    }
  })
}
