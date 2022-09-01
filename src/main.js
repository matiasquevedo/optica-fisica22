import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import vuetify from './plugins/vuetify'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import _ from 'lodash'

import VueSession from 'vue-session'





// import { initializeApp } from "firebase/app";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDOQ87thddS_ZwEF2dIQkbAW_-CvR_cd_0",
//   authDomain: "optica-fisica2022.firebaseapp.com",
//   projectId: "optica-fisica2022",
//   storageBucket: "optica-fisica2022.appspot.com",
//   messagingSenderId: "130588272582",
//   appId: "1:130588272582:web:509d3c1e672cb91083f4c7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);











import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-file-agent/dist/vue-file-agent.css'
import '@/assets/base.scss'; 
import titleMixin from './utils/title'

Vue.mixin(titleMixin)

Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

var options = {
    persist: true
}
Vue.use(VueSession, options)

Vue.config.productionTip = false

Vue.prototype._ = _





new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// https://www.positronx.io/vue-js-firebase-authentication-tutorial-example/#tc_9746_03
