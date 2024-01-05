import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/road-to-eagma',
      name: 'roadtoeagma',
      component: () => import('../views/RoadToEagma.vue')
    },
    {
      path: '/road-to-eagma/details',
      name: 'roaddetail',
      component: () => import('../views/RoadToEagmaDetail.vue')
    },
  ]
})

export default router
