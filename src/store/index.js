import { createStore } from 'vuex'
import getters from './getters.js'

const modulesFiles = import.meta.globEager('./modules/*.js')
let modules = {}

for (const modulePath in modulesFiles) {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles[modulePath].default
}

const store = createStore({
  modules,
  getters
})

export default store
