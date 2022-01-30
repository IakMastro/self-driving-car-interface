import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Sonar from '@/views/Sonar.vue'
import Camera from '@/views/Camera.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Sonar',
    component: Sonar
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
