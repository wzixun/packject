import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/Select',
      name: 'Select',
      component: resolve => require(['@/components/Select'], resolve)
    },
    {
      path: '/Pageing',
      name: 'Pageing',
      component: resolve => require(['@/components/Pageing'], resolve)
    },
    {
      path: '/Form',
      name: 'Form',
      component: resolve => require(['@/components/Form'], resolve)
    },
    {
      path: '/Threes',
      name: 'Threes',
      component: resolve => require(['@/components/threes'], resolve)
    },
    {
      path: '/Province',
      name: 'Province',
      component: resolve => require(['@/components/Province'], resolve)
    },
    {
      path: '/ZujianCall',
      name: 'ZujianCall',
      component: resolve => require(['@/components/zujiancall'], resolve)
    },{
      path: '/P',
      name: 'P',
      component: resolve => require(['@/components/slot/P'], resolve)
    },{
      path: '/getCode',
      name: 'getCode',
      component: resolve => require(['@/components/getCode'], resolve)
    },{
      path: '/slider',
      name: 'slider',
      component: resolve => require(['@/components/lunbo+scroll'], resolve)
    }
  ]
})
