import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProjectListView.vue'),
    meta: { requiresAuth: false }
  }, 
  {
    path: '/projects',
    name: 'ProjectList',
    component: () => import('../views/ProjectListView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/ProjectEdit.View.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/tasks',
    name: 'TaskList',
    component: () => import('../views/TaskListView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/RegisterView.vue'),
    meta: { requiresAuth: false }
  },
  /*{
    path: '/project',
    name: 'Project',
    component: () => import('../views/ProjectView.vue'),
    meta: { requiresAuth: true }
  },*/
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/TaskView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/TaskView.vue'),
    meta: { requiresAuth: true }
  },

/*   {
    path: '/createproject',
    name: 'createproject',
    component: () => import('../views/CreateProjectView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/createtask',
    name: 'createtask',
    component: () => import('../views/CreateTaskView.vue'),
    meta: { requiresAuth: true }
  }, */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("Authorization")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  if ( !isAuthenticated && requiresAuth) {
    next('/login')
  }
  else if ((isAuthenticated && to.path === '/login') || (isAuthenticated && to.path === '/register')) {
    // User is already logged in, redirect to project page
    next('/' + localStorage.getItem("userID"));
  }
  else {
    next()
  }
})

export default router