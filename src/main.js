// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'


import router from './router'
Vue.config.productionTip = false

window.Promise = Promise   //兼容ie的Promise报错问题

//延迟加载引用
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/images/imgerror.jpg',
  loading: './static/images/imgloading.jpg',
  attempt: 1
})
// 滚动的引用
Vue.use(VueScroller)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
