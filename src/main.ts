// import './vue-shim'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/index.js'

// -------------------
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
Vue.use(VueRouter);
new Vue({
  el: '#app',
  Router: router,
  template: '<App/>',
  render: (h: Function) => h(App)
})
