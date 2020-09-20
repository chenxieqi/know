import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Index from "../pages/Index.vue";

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
      },
      {
        path:'/mypage',
        name:'mypage',
        component:() => import("../pages/Mypage.vue")
      },
      {
        path:'/question',
        name:'question',
        component:() => import("../pages/Question.vue")
      },
      {
        path:'/answer',
        name:'answer',
        component:() => import("../pages/Answer.vue")
      },
      {
        path:'/topic',
        name:'topic',
        component:() => import("../pages/Topic.vue")
      },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import("../pages/Login.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;