import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/case-01',
    name: 'case-01',
    component: () => import('../views/Case01.vue')
  },
  {
    path: '/case-02',
    name: 'case-02',
    component: () => import('../views/Case02.vue')
  },
  {
    path: '/case-03',
    name: 'case-03',
    component: () => import('../views/Case03.vue')
  },
  {
    path: '/case-04',
    name: 'case-04',
    component: () => import('../views/Case04.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
