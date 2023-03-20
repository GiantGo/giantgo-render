import { FormDesign, FormRender } from '@giantgo-render/components'
import '@giantgo-render/theme/src/index.scss'
import type { App } from 'vue'

export default function install(app: App) {
  app.component('FormDesign', FormDesign)
  app.component('FormRender', FormRender)
}

export { FormDesign, FormRender }
