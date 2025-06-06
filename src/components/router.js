// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Index from './Pages/Index.vue'
import TemplateRef from './Pages/TemplateRef.vue'
import Child from './Pages/Child.vue'
import Parent from './Pages/Parent.vue'
import PropsValidation from './Pages/PropsValidation.vue'
import Post from './Pages/Post.vue'
import SinglePost from './Pages/SinglePost.vue'
import Fetchapi from './Pages/api/Fetchapi.vue'
import Form from './Pages/api/Form.vue'
import AxiosForm from './Pages/api/axiosForm.vue'


const routes = [
  { path: '/index', component: Index },
  { path: '/template-ref', component: TemplateRef },
  { path: '/child', component: Child },
  { path: '/parent', component: Parent },
  { path: '/props_validation', component: PropsValidation },
  { path: '/post', component: Post },
  { path: '/single_post ', component: SinglePost },
  { path: '/fetchapi', component:Fetchapi},
  { path: '/form', component:Form},
  { path: '/axios_form', component:AxiosForm}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
