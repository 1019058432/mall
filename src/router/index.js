import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入组件
const Home = ()=>import('views/home/home')
const Category= ()=>import('views/category/category')
const Car= ()=>import('views/car/car')
const Profile= ()=>import('views/profile/profile')
const Detail= ()=>import('views/detail/Detail')

//通过Vue.use(插件)，安装插件
Vue.use(VueRouter)


// 创建VueRouter对象
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]



const router= new VueRouter({
  routes,
  mode:'history'
})
// 路由守卫
//跳转前
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})
//跳转后
// router.afterEach((to,from)=>{
//   document.title = to.matched[0].meta.title
// })
export default router


