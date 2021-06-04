import FormOption from './index.vue'
import LabelOption from './label.vue'
import LabelWidthOption from './label-width.vue'
import KeyOption from './key.vue'
import RowsOption from './rows.vue'

export default {
  install: (app) => {
    app.component(FormOption.name, FormOption)
    app.component(LabelOption.name, LabelOption)
    app.component(LabelWidthOption.name, LabelWidthOption)
    app.component(KeyOption.name, KeyOption)
    app.component(RowsOption.name, RowsOption)
  }
}
