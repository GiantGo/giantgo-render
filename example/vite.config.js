import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        IconsResolver({}),
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    })
  ]
})
