import FormItem from './index.vue'
import input from './input.vue'
import textarea from './textarea.vue'
import card from './card.vue'

export default {
  install: (app) => {
    app.component(FormItem.name, FormItem)
    app.component(input.name, input)
    app.component(textarea.name, textarea)
    app.component(card.name, card)
  }
}
