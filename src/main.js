import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/mixin.scss'
import '@/assets/css/style.scss'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import moment from 'vue-moment-v3'


import Vue from 'vue'

const options = {

};

createApp(App).use(store).use(Toast).use(router).use(moment).mount('#app')
