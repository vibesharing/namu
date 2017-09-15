// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'
import firebase from './service/firebase'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuefire)
Vue.use(VueResource)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAd7k4cerxYQXnydcxCzV0TCx8qFupHBPc',
    v: '3',
    libraries: 'places'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
