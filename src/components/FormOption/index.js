import FormOption from './index.vue'
import LabelWidthOption from './label-width.vue'

export default {
  install: (app) => {
    app.component(FormOption.name, FormOption)
    app.component(LabelWidthOption.name, LabelWidthOption)
  }
}
