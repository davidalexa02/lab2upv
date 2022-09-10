// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import model from './services/model.js'
import model from './services/mode_rest.js'

Vue.prototype.$model = model;
Vue.prototype.$user = {};


Vue.use(VueMaterial)
Vue.config.productionTip = false

window.Vue = Vue

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
