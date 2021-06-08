import FormBuilder from './index.vue'
import FormItemBuilder from './FormItem/index.vue'
import ObjectBuilder from './FormItem/object.vue'
import InputBuilder from './FormItem/input.vue'
import TextareaBuilder from './FormItem/textarea.vue'
import CardBuilder from './FormItem/card.vue'

export default {
  install: (app) => {
    app.component(FormBuilder.name, FormBuilder)
    app.component(FormItemBuilder.name, FormItemBuilder)
    app.component(ObjectBuilder.name, ObjectBuilder)
    app.component(InputBuilder.name, InputBuilder)
    app.component(TextareaBuilder.name, TextareaBuilder)
    app.component(CardBuilder.name, CardBuilder)
  }
}
