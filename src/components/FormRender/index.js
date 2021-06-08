import FormRender from './index.vue'
import FormItemRender from './FormItem/index.vue'
import ObjectRender from './FormItem/object.vue'
import InputRender from './FormItem/input.vue'
import TextareaRender from './FormItem/textarea.vue'
import CardRender from './FormItem/card.vue'

export default {
  install: (app) => {
    app.component(FormRender.name, FormRender)
    app.component(FormItemRender.name, FormItemRender)
    app.component(ObjectRender.name, ObjectRender)
    app.component(InputRender.name, InputRender)
    app.component(TextareaRender.name, TextareaRender)
    app.component(CardRender.name, CardRender)
  }
}
