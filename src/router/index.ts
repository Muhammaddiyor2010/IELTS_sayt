import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Blogs from '../pages/Blogs.vue'
import Reviews from '../pages/Rewievs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
  },
  {
    path: '/blog/:id',
    name: 'blog-detail',
    component: () => import('../pages/BlogDetail.vue'),
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews,
  },
  {
    path: '/ielts',
    name: 'ielts',
    component: () => import('../pages/IELTS.vue'),
  },
  {
    path: '/ielts/reading',
    name: 'ielts-reading',
    component: () => import('../pages/IELTSReading.vue'),
  },
  {
    path: '/ielts/listening',
    name: 'ielts-listening',
    component: () => import('../pages/IELTSListening.vue'),
  },
  {
    path: '/ielts/writing',
    name: 'ielts-writing',
    component: () => import('../pages/IELTSWriting.vue'),
  },

  {
    path: '/price',
    name: 'price',
    component: () => import('../pages/Price.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('../pages/ResetPassword.vue'),
  },
      {
      path: '/demo-test',
      name: 'demo-test',
      component: () => import('../pages/DemoTest.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
