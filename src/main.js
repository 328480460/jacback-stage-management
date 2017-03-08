// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/mian.vuex.js'

console.log(store);
 
/* eslint-disable no-new */

var vm = new Vue({
  el: '#pp',
  router,
  store,
  template: '<App/>',
  components: { App }
})