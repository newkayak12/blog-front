import { createRouter, createWebHistory } from 'vue-router'
// USER
import userLogin from '@/views/user/login/index'
import userJoin from '@/views/user/join/index'
import findId from '@/views/user/find/findId'
import findPw from '@/views/user/find/findPw'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: userLogin
  },{
    path: '/join',
    name: 'join',
    component: userJoin
  },{
    path: '/findId',
    name: 'findId',
    component: findId
  },{
    path: '/findPw',
    name: 'findPw',
    component: findPw
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
