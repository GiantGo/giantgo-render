const components = import.meta.globEager('./{FormBuilder,FormSetting,FormRender}/**/*.vue')

export default {
  install: (app) => {
    for (const modulePath in components) {
      const component = components[modulePath].default
      app.component(component.name, component)
    }
  }
}
