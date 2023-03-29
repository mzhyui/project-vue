import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bgM from '../components/background_manage.vue'
import bgMs from '../components/background_manage_staff.vue'

import addD from '../components/add_detail.vue'
import FormView from '../views/formView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage',
    name: 'manage',
    component: bgM
  },
  {
    path: '/manageStaff',
    name: 'manageStaff',
    component: bgMs
  },
  {
    path: '/add',
    name: 'addD',
    component: addD
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
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

const router = new VueRouter({
  routes
})

export default router
