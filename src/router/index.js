import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import MyBlogs from '../views/MyBlogs.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    // meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    // meta: { requiresAuth: true },
  },
  {
    path: '/myblogs',
    name: 'myblogs',
    component: MyBlogs,
    // meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



// ejemplo de como usar checkAuth midleware
/*
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/protected',
      component: () => import('./views/Protected.vue'),
      beforeEnter: checkAuth
    },
    // ...
  ]
})
*/