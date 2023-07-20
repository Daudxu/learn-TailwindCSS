import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import Store from '@/store'
// import Cookies from 'js-cookie'
// import Store from '@/store';

//路由数组的类型 RouteRecordRaw
const routes = [
  {
    path: "/",
    name: 'Home',
    meta: { isCommonLayout: true },
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/register",
    name: 'Sign up',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Register.vue"),
  },
  {
    path: "/login",
    name: 'Sign in',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Login.vue"),
  },
  {
    path: "/forgot",
    name: 'Forgot Password',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Forgot.vue"),
  },
  {
    path: "/developers",
    name: 'Developers',
    meta: { isCommonLayout: true },
    component: () => import("@/views/Developers/Index.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});


// router.beforeEach((to,from,next)=>{
//   let token = Store().useUserStore.token
//   if(to.meta.requiresAuth){
//       if(token){
//           next()
//       }else{
//           next({
//               path:'/login',
//               query:{
//                   redirect:to.fullPath
//               }
//           })
//       }
//   }else{
//       next()
//   }
// })

export default router;

