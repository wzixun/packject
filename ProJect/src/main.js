// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-CN',
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

