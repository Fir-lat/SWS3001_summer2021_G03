import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Scholar from '@/components/Scholar/Scholar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Scholar',
      name: 'Scholar',
      component: Scholar
    }
  ]
})
