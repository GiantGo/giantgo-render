import FormDesign from './components/FormDesign/index.vue'
import FormRender from './components/FormRender/index.vue'

export default function install(app) {
  app.component('FormDesign', FormDesign)
  app.component('FormRender', FormRender)
}

export { FormDesign, FormRender }
