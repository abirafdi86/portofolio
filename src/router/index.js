// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Project from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Gallery from '../views/Gallery.vue'
import Experience from '../views/Experience.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/project/:slug',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
