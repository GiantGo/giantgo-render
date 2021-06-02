import FormItemOption from './index.vue'
import LabelOption from './label.vue'
import KeyOption from './key.vue'
import RowsOption from './rows.vue'

export default {
  install: (app) => {
    app.component(FormItemOption.name, FormItemOption)
    app.component(LabelOption.name, LabelOption)
    app.component(KeyOption.name, KeyOption)
    app.component(RowsOption.name, RowsOption)
  }
}
