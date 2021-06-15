const formItems = import.meta.globEager('./*.vue')

export default {
  install: (app) => {
    for (const modulePath in formItems) {
      const component = formItems[modulePath].default
      app.component(component.name, component)
    }
  }
}
