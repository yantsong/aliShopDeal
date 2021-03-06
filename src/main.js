// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import {
  Toast
} from 'vant';
import {
  NoticeBar
} from 'vant';

Vue.use(NoticeBar);
// import {
//   Select,
//   Option
// }
// from 'element-ui'
import './style/index.scss'
Vue.config.productionTip = false
import clipboard from 'clipboard'
let clp = new clipboard('.cpbtn')
clp.on('success', (e) => {
  console.log(e.text);
})
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
Toast.setDefaultOptions({
  position: 'top'
})
Vue.use(Toast)
// Vue.use(Option)
