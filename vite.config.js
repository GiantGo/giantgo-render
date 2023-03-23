import { defineConfig } from 'vite'
import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '@giantgo-render': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  plugins: [
    VueMacros(),
    vue(),
    Icons({
      compiler: 'vue3'
    }),
    Components({
      dirs: ['./packages/components'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [IconsResolver({})],
      dts: './packages/giantgo-render/components.d.ts'
    }),
    dts({
      skipDiagnostics: false,
      logDiagnostics: true,
      insertTypesEntry: true
    })
  ],
  build: {
    outDir: './packages/giantgo-render/dist',
    lib: {
      entry: path.resolve(__dirname, 'packages/giantgo-render/src/main.ts'),
      name: 'GiantgoRender',
      fileName: (format) => `giantgo-render.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus', 'axios', '@wangeditor/editor', 'ace-builds'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          axios: 'axios',
          '@wangeditor/editor': 'editor',
          'ace-builds': 'ace'
        }
      }
    }
  }
})
