import FormBuilder from './index.vue'
const formItems = import.meta.globEager('./FormItem/*.vue')

export default {
  install: (app) => {
    app.component(FormBuilder.name, FormBuilder)
    for (const modulePath in formItems) {
      const component = formItems[modulePath].default
      app.component(component.name, component)
    }
  }
}
