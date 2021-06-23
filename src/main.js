import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import FormBuilder from './components/FormDesign/index.js'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(FormBuilder)

app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }

app.mount('#app')
