import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/News.vue')
    },
    {
      path: '/post/:id?',
      name: 'post',
      component: () => import('../views/Post.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/find-news',
      name: 'find-news',
      component: () => import('../views/FindNews.vue')
    }
  ]
})

export default router
