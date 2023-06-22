import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('../views/Dashboard.vue') },
  { path: '/orders', component: () => import('../views/Orders/Index.vue') },
  {
    path: '/customers',
    component: () => import('../views/Customers/Index.vue')
  },
  {
    path: '/inventory',
    component: () => import('../views/Inventory/Index.vue')
  },
  {
    path: '/reports',
    component: () => import('../views/Inventory/Index.vue'),
    children: [
      {
        path: '/intern',
        componet: () => import('../views/Reports/Intern.vue')
      },
      {
        path: '/extern',
        componet: () => import('../views/Reports/Extern.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
