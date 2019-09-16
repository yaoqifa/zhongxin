import { SET_TEST_INFO } from './mutation-types';

const initialState = {
  info: 'just test'
};

const mutations = {
  [SET_TEST_INFO](state, info) {
    state.info = info;
  }
};

const actions = {
  setInfo({ commit }, info) {
    commit(SET_TEST_INFO, info);
  }
};

export default ({
  namespaced: true,
  state: initialState,
  mutations,
  actions
});
