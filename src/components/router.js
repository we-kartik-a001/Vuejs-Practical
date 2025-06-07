// router.js
import { createRouter, createWebHistory } from "vue-router";
import Index from "./Pages/Index.vue";
import TemplateRef from "./Pages/TemplateRef.vue";
import Child from "./Pages/Child.vue";
import Parent from "./Pages/Parent.vue";
import PropsValidation from "./Pages/PropsValidation.vue";
import Post from "./Pages/Post.vue";
import SinglePost from "./Pages/SinglePost.vue";
import Fetchapi from "./Pages/api/Fetchapi.vue";
import Form from "./Pages/api/Form.vue";
import AxiosForm from "./Pages/api/axiosForm.vue";
import NotFound from "./Pages/Notfound/NotFound.vue";

const routes = [
  { path: "/index", component: Index },
  { path: "/template-ref", component: TemplateRef },
  { path: "/child", component: Child },
  { path: "/parent", component: Parent },
  { path: "/props_validation", component: PropsValidation },
  { path: "/post", component: Post },
  { path: "/single_post ", component: SinglePost },
  { path: "/fetchapi", component: Fetchapi },
  { path: "/form", name: "forms", component: Form },
  {
    // this will take take us to the page when no page found
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  // { path: '/axios_form', component:AxiosForm}
  // { path: '/axios_form',
  //   redirect: '/form' },
  //this will take us to form page
  // {
  //   path: '/user',
  //   name: 'Users',
  //   component:() => import ('./views/UserPage.vue')
  // },
  // {
  //   path: '/user/:id',
  //   name: 'UserSingle',
  //   component: () => import('./views/UserSingle.vue')
  // }
  {
    path: "/home",
    name: "Home",
    components: {
      users:()=> import('./views/UserPage.vue'),
      default:()=>import('./views/HomPage.vue')
    }
  },

  
  //when try to load other page on same page
  {
    path: "/user",
    name: "Users",
    component: () => import("./views/UserPage.vue"),
    children: [
      {
        path: ":id",
        name: "UserSingle",
        component: () => import("./views/UserSingle.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition){
   console.log('savedposition', savedPosition)
   if( savedPosition){
    return savedPosition
   }

   return {
    top:0,
    left:0
   }
  },
  routes,
});

export default router;
