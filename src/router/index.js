import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from 'views/adminLogin/login'
import Home from 'views/home/Home'
// import Comment from 'views/home/Comment'
import Article from 'views/home/article/Article'
import AddArticle from 'views/home/article/AddArticle'

Vue.use(VueRouter)

// 解决重复点击报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', redirect: '/adminLogin' },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: "/article",
    children: [
      {
        path: '/article', // 默认子路由
        name: 'Article',
        component: Article,
      },
      {
        path: '/addArticle',
        name: 'AddArticle',
        component: AddArticle,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // to 表示将要访问的路径
  if (to.path === '/adminLogin') {
    return next()
  }
  const token = localStorage.getItem("token")
  if (!token) {
    return next('/adminLogin')
  }
  next()
})

export default router
