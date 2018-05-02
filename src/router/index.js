import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Admin from '../pages/Admin'

import RegisterPage from '../pages/Register'
import SubordinatorProfilePage from '../pages/subordinator/Profile'
import SupervisorProfilePage from '../pages/supervisor/Profile'
import SupervisorLeaveHistoryPage from '../pages/supervisor/LeaveHistory'
import SupervisorNotificationPage from '../pages/supervisor/Notification'

import EditProfile from '../pages/EditProfile'
import Print from '../pages/Print'

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
      path: '/administrator',
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
      path: '/supervisor/leave-history',
      name: 'SupervisorLeaveHistoryPage',
      component: SupervisorLeaveHistoryPage
    },
    {
      path: '/supervisor/notification',
      name: 'SupervisorNotificationPage',
      component: SupervisorNotificationPage
    },
    {
      path: '/subordinatate',
      name: 'SubordinatorProfilePage',
      component: SubordinatorProfilePage
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/print',
      name: 'Print',
      component: Print
    }
  ]
})