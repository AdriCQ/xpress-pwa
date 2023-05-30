import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ROUTE_NAME } from './names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAME.HOME,
      component: HomeView
    },
    {
      path: '/details',
      name: ROUTE_NAME.DETAILS,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AgencyDetails.vue')
    }
  ]
})

export default router

export { ROUTE_NAME }
