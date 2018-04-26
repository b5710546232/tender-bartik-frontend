import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Admin from '../pages/Admin'

import RegisterPage from '../pages/Register'
import SubordinatorProfilePage from '../pages/subordinator/Profile'
import SupervisorProfilePage from '../pages/supervisor/Profile'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path:'/register',
      name:'RegisterPage',
      component:RegisterPage
    },
    {
      path: '/supervisor',
      name: 'SupervisorProfilePage',
      component: SupervisorProfilePage
    },
    {
      path: '/subordinator',
      name: 'SubordinatorProfilePage',
      component: SubordinatorProfilePage
    }
  ]
})