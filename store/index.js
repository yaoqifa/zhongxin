import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import { CHANGE_TAGS, CHANGE_SELECTED_TAGS } from './modules/mutation-types';

Vue.use(Vuex)

const getter = {};
const modules = {
  test
};

const mutations = {
  [CHANGE_TAGS](state, { type, tags }) {
    const tagMap = {
      1: 'hobbyTags',
      2: 'travelTags',
      3: 'foodTags',
      4: 'characterTags'
    };
    state[tagMap[type]] = tags;
  },
  [CHANGE_SELECTED_TAGS](state, { type, tags }) {
    const tagMap = {
      1: 'selectedHobbyTags',
      2: 'selectedTravelTags',
      3: 'selectedFoodTags',
      4: 'selectedCharacterTags',
    };
    state[tagMap[type]] = tags;
  },
};

const actions = {
  changeTags(ctx, params) {
    ctx.commit(CHANGE_TAGS, params);
  },
  changeSelectedTags(ctx, params) {
    ctx.commit(CHANGE_SELECTED_TAGS, params);
  },
};

const store = new Vuex.Store({
  state: {
    userInfo: uni.getStorageSync('userInfo') || {},
    hobbyTags: [],
    travelTags: [],
    foodTags: [],
    characterTags: [],
    selectedHobbyTags: [],
    selectedTravelTags: [],
    selectedFoodTags: [],
    selectedCharacterTags: [],
  },
  mutations: {
    setUserInfo(state, provider) {
      state.userInfo = provider
    }
  },
  getter,
  actions,
  mutations,
  modules
})

export default store;
