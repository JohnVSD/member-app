/**
 * Created by wangchunwei on 2018/6/8.
 */
/* global window:true document:true */
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/vant-css/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
