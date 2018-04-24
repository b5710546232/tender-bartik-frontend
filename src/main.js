
// import 'jquery'
// import 'popper.js'
import 'bootstrap'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';

import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.use(VeeValidate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


