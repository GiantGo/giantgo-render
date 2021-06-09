import FormOption from './index.vue'
import LabelOption from './label.vue'
import DefaultValueOption from './default-value.vue'
import LabelWidthOption from './label-width.vue'
import LabelPositionOption from './label-position.vue'
import KeyOption from './key.vue'
import RowsOption from './rows.vue'
import MinOption from './min.vue'
import MaxOption from './max.vue'
import PlaceholderOption from './placeholder.vue'
import HideRequiredAsteriskOption from './hide-required-asterisk.vue'
import StatusIconOption from './status-icon.vue'
import inlineOption from './inline.vue'
import sizeOption from './size.vue'
import shadowOption from './shadow.vue'
import clearableOption from './clearable.vue'
import disabledOption from './disabled.vue'
import prefixIconOption from './prefix-icon.vue'
import suffixIconOption from './suffix-icon.vue'

export default {
  install: (app) => {
    app.component(FormOption.name, FormOption)
    app.component(LabelOption.name, LabelOption)
    app.component(DefaultValueOption.name, DefaultValueOption)
    app.component(LabelWidthOption.name, LabelWidthOption)
    app.component(LabelPositionOption.name, LabelPositionOption)
    app.component(KeyOption.name, KeyOption)
    app.component(RowsOption.name, RowsOption)
    app.component(MinOption.name, MinOption)
    app.component(MaxOption.name, MaxOption)
    app.component(PlaceholderOption.name, PlaceholderOption)
    app.component(HideRequiredAsteriskOption.name, HideRequiredAsteriskOption)
    app.component(StatusIconOption.name, StatusIconOption)
    app.component(inlineOption.name, inlineOption)
    app.component(sizeOption.name, sizeOption)
    app.component(shadowOption.name, shadowOption)
    app.component(clearableOption.name, clearableOption)
    app.component(disabledOption.name, disabledOption)
    app.component(prefixIconOption.name, prefixIconOption)
    app.component(suffixIconOption.name, suffixIconOption)
  }
}
