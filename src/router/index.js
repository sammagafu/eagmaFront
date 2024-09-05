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
      path: '/about/',
      name: 'aboutUs',
      children:[
        {
          path:'',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path:'board-of-directors',
          name:'boardDirectors',
          component : () => import('../views/BoardofDirector.vue')
        },
        {
          path:'board-of-advisory',
          name:'boardofadvisory',
          component : () => import('../views/BoardOfAdvisory.vue')
        },
      ]
    },
    {
      path: '/road-to-eagma/',
      name: 'roadtoeagma',
      component: () => import('../views/RoadToEagma.vue')
    },
    {
      path: '/how-to-vote/',
      name: 'howtovote',
      component: () => import('../views/HowToVote.vue')
    },
    {
      path: '/terms-and-policy/',
      name: 'terms',
      component: () => import('../views/TermPolicy.vue')
    },
    {
      path: '/how-to-volunteer/',
      name: 'howtovolunteer',
      component: () => import('../views/HowtoVolunteer.vue')
    },
    {
      path: '/contact-us/',
      name: 'contactus',
      component: () => import('../views/ContactUs.vue')
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
      name:'nominees-landing',
      children : [
        {
          path:'',
          name:'nominees',
          component : () => import('../views/Nominees.vue'),

        },
        {
          path:'filtered/:slug',
          name:'filtered-artist',
          component : () => import('@/views/FIlteredByCategory.vue')
        }
      ]
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
