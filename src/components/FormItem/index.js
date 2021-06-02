import FormItem from './index.vue'
import ObjectField from './object.vue'
import InputField from './input.vue'
import TextareaField from './textarea.vue'
import CardField from './card.vue'

export default {
  install: (app) => {
    app.component(FormItem.name, FormItem)
    app.component(ObjectField.name, ObjectField)
    app.component(InputField.name, InputField)
    app.component(TextareaField.name, TextareaField)
    app.component(CardField.name, CardField)
  }
}
