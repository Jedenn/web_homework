import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 作业要求3:  访问/目录会自动跳转到 login 页面, 这里使用重定向实现
  {
    path: '/',
    redirect: '/login'
  },

  {
    name: 'login',
    path: '/login',
    component: Login
  },

  {
    name: 'home',
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
