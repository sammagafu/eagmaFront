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
      path: '/road-to-eagma/',
      name: 'roadtoeagma',
      component: () => import('../views/RoadToEagma.vue')
    },
    {
      path: '/road-to-eagma/:slug',
      name: 'blog-post',
      component: () => import('../views/RoadToEagmaDetail.vue')
    },
    {
      path:'/artist/',
      name:'artist',
      component : () => import('../views/Artist.vue')
    },
    {
      path:'/artist/:slug',
      name:'artistDetial',
      component : () => import('../views/ArtistDetails.vue')
    },
    {
      path:'/nominees/',
      name:'nominees',
      component : () => import('../views/Nominees.vue')
    },
    {
      path:'/artist/:slug',
      name:'artistDetial',
      component : () => import('../views/ArtistDetails.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router
