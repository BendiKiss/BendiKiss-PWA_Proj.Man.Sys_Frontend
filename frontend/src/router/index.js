import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/projects',
    name: 'ProjectList',
    component: () => import('../views/ProjectListView.vue')
  },
  {
    path: '/tasks',
    name: 'TaskList',
    component: () => import('../views/TaskListView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/TaskView.vue')
  },

  {
    path: '/createproject',
    name: 'createproject',
    component: () => import('../views/CreateProjectView.vue')
  },
  {
    path: '/createtask',
    name: 'createtask',
    component: () => import('../views/CreateTaskView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router