import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/home.vue';
import Index from '../pages/index.vue';

const routes: Array<any> = [
  {
    path:'/',
    name:'home',
    component:Home,
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:'index',
        component:Index
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../pages/login.vue')
  },
  {
    path:'/mypage',
    name:'mypage',
    component:() => import('../pages/mypage.vue')
  },
  {
    path:'/question',
    name:'question',
    component:() => import('../pages/question.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;