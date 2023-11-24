import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import { Icon } from '@iconify/vue'
import NavBar from './components/the/NavBar.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('NavBar', NavBar)
app.component('Icon', Icon)
app.component('QuillEditor', QuillEditor)

app.mount('#app')
