// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuesax from 'vuesax'
import App from './App'
import store from './store/store'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './styles/mainStyle.sass'


Vue.use(Vuetify)
Vue.use(Vuesax)
Vue.config.productionTip = false
require('packery')
require('draggabilly')
require('muuri')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  iconfont: 'fa'
})
