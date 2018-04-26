
// import 'jquery'
// import 'popper.js'
import 'bootstrap'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

Vue.use(VeeValidate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


