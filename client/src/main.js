import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import auth from './firebase.auth.config'

Vue.config.productionTip = false

let app = ''
auth.onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      render: h => h(App),
      vuetify,
      router: router
    }).$mount('#app')
  }
})

