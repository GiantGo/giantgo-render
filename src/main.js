import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import router from './router'
import store from './store/index.js'
import FormBuilder from './components/FormDesign/FormBuilder/index.js'
import FormRender from './components/FormRender/index.js'
import FormOption from './components/FormOption/index.js'
import CodeMirror from './components/CodeMirror/index.js'

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(FormBuilder)
app.use(FormRender)
app.use(FormOption)
app.use(CodeMirror)
app.use(router)
app.use(store)

app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }

app.mount('#app')
