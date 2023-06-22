import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/orders',
    name: 'orders.index',
    component: () => import('../views/Orders/Index.vue')
  },
  {
    path: '/customers',
    name: 'customers.index',
    component: () => import('../views/Customers/Index.vue')
  },
  {
    path: '/expenses',
    name: 'expenses.index',
    component: () => import('../views/Expenses/Index.vue')
  },
  {
    path: '/inventory',
    name: 'inventory.index',
    component: () => import('../views/Inventory/Index.vue')
  },
  {
    path: '/reports',
    component: () => import('../views/Reports/Index.vue'),
    children: [
      {
        path: '/intern',
        name: 'reports.intern',
        component: () => import('../views/Reports/Intern.vue')
      },
      {
        path: '/extern',
        name: 'reports.extern',
        component: () => import('../views/Reports/Extern.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
