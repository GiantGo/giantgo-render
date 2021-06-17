import CodeMirror from './index.vue'

export default {
  install: (app) => {
    app.component(CodeMirror.name, CodeMirror)
  }
}
