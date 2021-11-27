//导入Vue，使这个js可以使用（Vue.方法）
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import About1 from '../components/About1.vue'
import User from '../components/User.vue'

//路由懒加载的写法
const Home1 = () => import('../components/Home1.vue');
const HomeMessage = () => import('../components/HomeMessage.vue');
const HomeNews = () => import('../components/HomeNews.vue');
const Profile = () => import('../components/Profile.vue');
const User1 = () => import('../components/User1.vue');
const Profile1 = () => import('../components/Profile1.vue');

//1：通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//配置路由和组件之间的关系
const routes = [
  {
    path: '',
    redirect: '/home'// redirect重定向
  },
  {
    path: '/home',
    component: Home,
    children: [//设置嵌套路由
      // {
      //   path: '',
      //   redirect: 'message'//配置默认路径
      // },
      {
        path: 'message',//不需要加'/'
        component: HomeMessage,
        // meta: {
        //   title: 'message',
        // }
      },
      {
        path: 'news',
        component: HomeNews,
        // meta: {
        //   title: 'news',
        // }
      }
    ],
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About',
    }
  },
  {
    path: '/home1',
    component: Home1,
  },
  {
    path: '/about1',
    component: About1,
    meta: {
      title: 'About1',
    }
  },
  {
    path: '/user/:userId',//动态路由(:userId)
    component: User,
    meta: {
      title: 'User',
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile',
    }
  },
  {
    path: '/user1/:userId',
    component: User1,
    meta: {
      title: 'User1',
    }
  },
  {
    path: '/profile1',
    component: Profile1,
    meta: {//原数据（描述数据的数据）
      title: 'Profile1',
    },
    beforeEnter: (to,from,next)=>{//路由独享守卫
      console.log('profile1');
      next()
    }
  },
]

//2：创建router对象，管理路由
const router = new VueRouter({
  mode: 'history',//更改成history模式，默认是hash
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'//统一更改活跃状态的class名字
})

//全局守卫
//前置钩子(guard)
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;//对于嵌套路由取第一个
  // document.title = to.meta.title;
  next()//传入false则停止，也可以传入跳转的地址
})
//后置钩子（hook）
router.afterEach((to,from)=>{

})


//3：将router传入vue实例中
export default router

//解决重复点击时报错
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete===undefined && onAbort===undefined) {
    return originPush.call(this, location, onComplete, onAbort).catch(() => {})
  } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort)
  }
}
// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete===undefined && onAbort===undefined) {
    return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}