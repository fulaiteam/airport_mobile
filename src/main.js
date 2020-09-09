// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import WebIM from './utils/WebIM';
import vant from 'vant';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
// 公共样式
import './assets/css/common.css'
import CommonJs from './assets/javascript/common.js';
import Excel from './assets/javascript/excel.js';
import Print from './assets/javascript/print.js';
Vue.config.productionTip = false
Vue.use(ElementUI).use(vant);
Vue.use(CommonJs);
Vue.use(Excel);
Vue.use(Print) // 注册
/* eslint-disable no-new */




window.Vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  WebIM,
  render: h => h(App)
})
