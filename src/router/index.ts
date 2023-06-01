import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAME } from './names'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: ROUTE_NAME.DASHBOARD_HOME,
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'agency',
          name: ROUTE_NAME.DASHBOARD_AGENCY,
          component: () => import('@/views/AgencyDetails.vue')
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: ROUTE_NAME.AUTH_LOGIN,
          component: () => import('@/views/AuthLogin.vue')
        }
      ]
    }
  ]
})

export default router

export { ROUTE_NAME }
