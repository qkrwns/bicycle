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
    { path: '/', component: HomeView },
    { path: '/register', component: RegisterView },
  ]


  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;