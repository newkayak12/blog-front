import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/mixin.scss'
import '@/assets/css/style.scss'

createApp(App).use(store).use(router).mount('#app')
