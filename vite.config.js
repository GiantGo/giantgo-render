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
    ]
  })
}
