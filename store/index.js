import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: uni.getStorageSync('userInfo') || {},
    token: '123jjjjjj',
    avatarUrl: '',
    userName: ''
  },
  mutations: {
    login(state, provider) {
      console.log(state)
    },
    logout(state) {
      state.login = false
    }
  }
})

export default store

