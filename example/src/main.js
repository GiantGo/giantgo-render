import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import GiantgoRender from 'giantgo-render'

import 'giantgo-render/dist/style.css'
import './styles/index.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(GiantgoRender)

app.mount('#app')
