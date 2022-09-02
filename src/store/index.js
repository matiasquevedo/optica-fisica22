import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	companyName:"Física 2022",
  	token: JSON.parse(localStorage.getItem('token')),
  	admin: JSON.parse(localStorage.getItem('admin')),
  },
  mutations: {
  	setToken(state, token) {
  	  state.token = token;
      localStorage.setItem('token', JSON.stringify(token))
  	},
  	setAdmin(state, admin) {
  	  state.admin = admin;
      localStorage.setItem('admin', JSON.stringify(admin))
  	},
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    isAdmin(state) {
      return !!state.admin;
    },
  },
})
