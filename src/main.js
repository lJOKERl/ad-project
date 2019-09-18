import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  create() {
    fb.initializeApp({
      apiKey: "AIzaSyAjX1LiFF8GOGLXwAXKbt9y_OwwA1CDBrw",
      authDomain: "ad-project-d8a06.firebaseapp.com",
      databaseURL: "https://ad-project-d8a06.firebaseio.com",
      projectId: "ad-project-d8a06",
      storageBucket: "ad-project-d8a06.appspot.com",
      messagingSenderId: "69520577378",
      appId: "1:69520577378:web:0b203a9515c171917b923b"
    })
  },
  render: h => h(App)
}).$mount('#app')
