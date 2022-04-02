import { createRouter, createWebHistory } from 'vue-router'
// USER
import userLogin from '@/views/user/login/index'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: userLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
