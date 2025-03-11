import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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
  {
    path: '/postdetail/:id',
    name: 'postdetail',
    component: () => import('@/views/Postdetail/index.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/Video/index.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/Message/index.vue')
  },
  {
    path: '/storyviewer',
    name: 'storyviewer',
    component: () => import('@/views/StoryViewer/index.vue')
  },
   {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/notice/index.vue')
  },
];

const router = createRouter({   
  history: createWebHashHistory(), 
  routes
});

export default router