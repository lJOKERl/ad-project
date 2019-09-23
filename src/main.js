import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import BuyModal from "./components/Shared/BuyModal";

Vue.config.productionTip = false
Vue.component('buy-modal', BuyModal);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAjX1LiFF8GOGLXwAXKbt9y_OwwA1CDBrw",
      authDomain: "ad-project-d8a06.firebaseapp.com",
      databaseURL: "https://ad-project-d8a06.firebaseio.com",
      projectId: "ad-project-d8a06",
      storageBucket: "ad-project-d8a06.appspot.com",
      messagingSenderId: "69520577378",
      appId: "1:69520577378:web:0b203a9515c171917b923b"
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds');
  },
}).$mount('#app')
