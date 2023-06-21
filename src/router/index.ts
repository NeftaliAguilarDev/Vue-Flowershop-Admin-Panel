import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('../views/Dashboard.vue') },
  { path: '/orders', component: () => import('../views/Orders/Index.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
