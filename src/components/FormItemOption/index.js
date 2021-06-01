import FormItemProperty from './index.vue'
import label from './label.vue'

export default {
  install: (app) => {
    app.component(FormItemProperty.name, FormItemProperty)
    app.component(label.name, label)
  }
}
