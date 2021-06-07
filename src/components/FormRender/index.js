import FormRender from './index.vue'
import FormItem from './FormItem/index.vue'
import ObjectItem from './FormItem/object.vue'
import InputItem from './FormItem/input.vue'
import TextareaItem from './FormItem/textarea.vue'
import CardItem from './FormItem/card.vue'

export default {
  install: (app) => {
    app.component(FormRender.name, FormRender)
    app.component(FormItem.name, FormItem)
    app.component(ObjectItem.name, ObjectItem)
    app.component(InputItem.name, InputItem)
    app.component(TextareaItem.name, TextareaItem)
    app.component(CardItem.name, CardItem)
  }
}
