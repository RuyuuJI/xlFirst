// import './vue-shim'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/index'
// ------------------------
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// -------------------
Vue.use(VueRouter);
// Vue.use(ElementUI);

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
new Vue({
  el: '#app',
  router: router,
  render: (h: Function) => h(App)
})
