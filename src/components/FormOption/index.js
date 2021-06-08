import FormOption from './index.vue'
import LabelOption from './label.vue'
import LabelWidthOption from './label-width.vue'
import LabelPositionOption from './label-position.vue'
import KeyOption from './key.vue'
import RowsOption from './rows.vue'
import MinOption from './min.vue'
import MaxOption from './max.vue'
import PlaceholderOption from './placeholder.vue'

export default {
  install: (app) => {
    app.component(FormOption.name, FormOption)
    app.component(LabelOption.name, LabelOption)
    app.component(LabelWidthOption.name, LabelWidthOption)
    app.component(LabelPositionOption.name, LabelPositionOption)
    app.component(KeyOption.name, KeyOption)
    app.component(RowsOption.name, RowsOption)
    app.component(MinOption.name, MinOption)
    app.component(MaxOption.name, MaxOption)
    app.component(PlaceholderOption.name, PlaceholderOption)
  }
}
