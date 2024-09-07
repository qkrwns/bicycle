/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createMemoryHistory } from "vue-router";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
// })
import HomeView from '../views/Home.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Register.vue') },
    { path: '/register', name: 'register', component: () => import('../views/Register.vue') },
  ]

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;