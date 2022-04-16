import { createRouter, createWebHistory } from 'vue-router'
// USER
import userLogin from '@/views/user/login/index'
import userJoin from '@/views/user/join/index'
import findId from '@/views/user/find/findId'
import findPw from '@/views/user/find/findPw'
import myPage from '@/views/user/myPage/index'
import boardList from '@/views/board/list/index'
import boardView from '@/views/board/view/index'

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
  {
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
  },{
    path: '/myPage',
    name: 'myPage',
    component: myPage
  },{
    path: '/boardList',
    name: 'boardList',
    component: boardList
  },{
    path: '/boardView',
    name: 'boardView',
    component: boardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
