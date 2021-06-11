import FormBuilder from './index.vue'
import FormItemBuilder from './FormItem/index.vue'
import ObjectBuilder from './FormItem/object.vue'
import InputBuilder from './FormItem/input.vue'
import TextareaBuilder from './FormItem/textarea.vue'
import CardBuilder from './FormItem/card.vue'
import NumberBuilder from './FormItem/number.vue'
import SelectBuilder from './FormItem/select.vue'
import MultiSelectBuilder from './FormItem/multi-select.vue'
import CheckboxBuilder from './FormItem/checkbox.vue'
import RadioBuilder from './FormItem/radio.vue'

export default {
  install: (app) => {
    app.component(FormBuilder.name, FormBuilder)
    app.component(FormItemBuilder.name, FormItemBuilder)
    app.component(ObjectBuilder.name, ObjectBuilder)
    app.component(InputBuilder.name, InputBuilder)
    app.component(TextareaBuilder.name, TextareaBuilder)
    app.component(CardBuilder.name, CardBuilder)
    app.component(NumberBuilder.name, NumberBuilder)
    app.component(SelectBuilder.name, SelectBuilder)
    app.component(MultiSelectBuilder.name, MultiSelectBuilder)
    app.component(CheckboxBuilder.name, CheckboxBuilder)
    app.component(RadioBuilder.name, RadioBuilder)
  }
}
