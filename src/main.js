import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Icon } from '@iconify/vue'
import NavBar from './components/the/NavBar.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('NavBar', NavBar)
app.component('Icon', Icon)

app.mount('#app')
