import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import router from './router'
import store from './store/index.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)

app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }

app.mount('#app')
