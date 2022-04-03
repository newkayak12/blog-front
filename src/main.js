import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/mixin.scss'
import '@/assets/css/style.scss'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import Vue from 'vue'

const options = {

};

createApp(App).use(store).use(Toast).use(router).mount('#app')
