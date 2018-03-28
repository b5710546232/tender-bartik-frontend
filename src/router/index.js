import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import SubordinatorProfilePage from '../pages/subordinator/Profile'
import SupervisorProfilePage from '../pages/supervisor/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/supervisor/profile',
        name: 'SupervisorProfilePage',
        component: SupervisorProfilePage
      },
      {
        path: '/subordinator/profile',
        name: 'SubordinatorProfilePage',
        component: SubordinatorProfilePage
      }
  ]
})