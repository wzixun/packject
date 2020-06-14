import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/view/tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab
    }
  ]
})
