import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from 'views/adminLogin/login'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/adminLogin' },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
