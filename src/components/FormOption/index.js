import FormOption from './index.vue'
import LabelOption from './label.vue'
import DefaultValueOption from './default-value.vue'
import WidthOption from './width.vue'
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
import filterableOption from './filterable.vue'
import prefixIconOption from './prefix-icon.vue'
import suffixIconOption from './suffix-icon.vue'
import rulesOption from './rules.vue'
import optionsOption from './options.vue'
import gutterOption from './gutter.vue'
import showWordLimitOption from './show-word-limit.vue'
import maxlengthOption from './maxlength.vue'
import noDataTextOption from './no-data-text.vue'
import noMatchTextOption from './no-match-text.vue'

export default {
  install: (app) => {
    app.component(FormOption.name, FormOption)
    app.component(LabelOption.name, LabelOption)
    app.component(DefaultValueOption.name, DefaultValueOption)
    app.component(WidthOption.name, WidthOption)
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
    app.component(filterableOption.name, filterableOption)
    app.component(prefixIconOption.name, prefixIconOption)
    app.component(suffixIconOption.name, suffixIconOption)
    app.component(rulesOption.name, rulesOption)
    app.component(optionsOption.name, optionsOption)
    app.component(gutterOption.name, gutterOption)
    app.component(showWordLimitOption.name, showWordLimitOption)
    app.component(maxlengthOption.name, maxlengthOption)
    app.component(noDataTextOption.name, noDataTextOption)
    app.component(noMatchTextOption.name, noMatchTextOption)
  }
}
