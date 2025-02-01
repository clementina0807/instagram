import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/Edit.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search/index.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/Personal/index.vue')
  },
];

const router = createRouter({   
  history: createWebHashHistory(), 
  routes
});

export default router