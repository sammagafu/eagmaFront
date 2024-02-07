import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/counter';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      path:'/account/',
      name:'account',
      // component : () => import('../views/ArtistDetails.vue')
      children:[
        {
          path:'login',
          name:'login',
          component : () => import('../views/Login.vue')

        },
        {
          path:'register',
          name:'register',
          component : () => import('../views/Register.vue')

        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.token) {
    next('account/login');
  } else {
    next();
  }
});

export default router
