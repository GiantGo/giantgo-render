import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
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
    DefineOptions(),
    Icons({
      compiler: 'vue3'
    }),
    Components({
      dirs: ['../packages/components'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({}),
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: '../packages/giantgo-render/components.d.ts'
    })
  ]
})
