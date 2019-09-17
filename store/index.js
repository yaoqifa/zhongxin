import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';

Vue.use(Vuex)

const getter = {};
const modules = {
  test
};

const store = new Vuex.Store({
  state: {
    userInfo: uni.getStorageSync('userInfo') || {}
  },
  mutations: {
    setUserInfo(state, provider) {
      state.userInfo = provider
    }
  },
  getter,
  modules
})

export default store

