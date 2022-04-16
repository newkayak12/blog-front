import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/mixin.scss'
import '@/assets/css/style.scss'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import moment from 'vue-moment-v3'
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";


const options = {

};

createApp(App).use(store).use(Toast).use(router).use(moment).component("infinite-loading", InfiniteLoading).mount('#app')
