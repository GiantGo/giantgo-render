import { FormDesign, FormRender } from '@giantgo-render/components'
import '@giantgo-render/theme/src/index.scss'

export default function install(app) {
  app.component('FormDesign', FormDesign)
  app.component('FormRender', FormRender)
}

export { FormDesign, FormRender }
