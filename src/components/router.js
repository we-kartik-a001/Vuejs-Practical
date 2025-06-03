// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Index from './Pages/Index.vue'
import TemplateRef from './Pages/TemplateRef.vue'
import Child from './Pages/Child.vue'
import Parent from './Pages/Parent.vue'


const routes = [
  { path: '/index', component: Index },
  { path: '/template-ref', component: TemplateRef },
  { path: '/child', component: Child },
  { path: '/parent', component: Parent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
