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
    component: () => import('../views/orders/Index.vue')
  },
  {
    path: '/orders/create',
    name: 'orders.create',
    component: () => import('../views/orders/Create.vue')
  },
  {
    path: '/products',
    name: 'products.index',
    component: () => import('../views/products/Index.vue')
  },
  {
    path: '/customers',
    name: 'customers.index',
    component: () => import('../views/customers/Index.vue')
  },
  {
    path: '/customers/create',
    name: 'customers.create',
    component: () => import('../views/customers/Create.vue')
  },
  {
    path: '/expenses',
    name: 'expenses.index',
    component: () => import('../views/expenses/Index.vue')
  },
  {
    path: '/inventory',
    name: 'inventory.index',
    component: () => import('../views/inventory/Index.vue')
  },
  {
    path: '/reports',
    name: 'reports.index',
    component: () => import('../views/reports/Index.vue'),
    children: [
      {
        path: '/intern',
        name: 'reports.intern',
        component: () => import('../views/reports/Intern.vue')
      },
      {
        path: '/extern',
        name: 'reports.extern',
        component: () => import('../views/reports/Extern.vue')
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
