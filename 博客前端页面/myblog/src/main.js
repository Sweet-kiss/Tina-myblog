import Vue from 'vue'
import App from './App'
import router from './router'
import './common/style/reset.css'
import axios from 'axios'
//import  FastClick  from  'fastclick'

//FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.prototype.$axios=axios

Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
