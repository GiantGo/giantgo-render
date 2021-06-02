import FormItem from './index.vue'
import ObjectItem from './object.vue'
import InputItem from './input.vue'
import TextareaItem from './textarea.vue'
import CardItem from './card.vue'

export default {
  install: (app) => {
    app.component(FormItem.name, FormItem)
    app.component(ObjectItem.name, ObjectItem)
    app.component(InputItem.name, InputItem)
    app.component(TextareaItem.name, TextareaItem)
    app.component(CardItem.name, CardItem)
  }
}
