// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

/* eslint-disable no-new */

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})