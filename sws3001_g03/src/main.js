// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//js
import FastClick from 'fastclick'
FastClick.attach(document.body);


//css
import 'css/reset.css'
import 'css/iconfont.css'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
