import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入组件
const Home = ()=>import('views/home/home')
const Category= ()=>import('views/category/Category')
const Car= ()=>import('views/car/car')
const Profile= ()=>import('views/profile/Profile')
const Detail= ()=>import('views/detail/Detail')
const Login= ()=>import('components/common/login/Login')

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
    name:"首页",
    component: Home
  },
  {
    path: '/category',
    name:"分类",
    component: Category
  },
  {
    path: '/car',
    name:"购物车",
    component: Car
  },
  {
    path: '/profile',
    name:"个人信息",
    component: Profile
  },
  {
    path: '/detail/:id',
    name:"商品详情",
    component: Detail
  },
  {
    path: '/login',
    name:"登录",
    component: Login
  }
]



const router= new VueRouter({
  routes,
  mode:'history'
})
// 路由守卫
//跳转前
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;
  if (to.path.indexOf("detail")){
    document.title="商品详情"
  }
  if (to.path.indexOf("home")){
    document.title="购物街"
  }
  next()
})
// 跳转后
// router.afterEach((to,from)=>{
//   document.title = to.matched[0].meta.title
// })
export default router


