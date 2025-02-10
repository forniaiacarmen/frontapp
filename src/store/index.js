import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    saveToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit('saveToken', token);
    },
  },
});

export default store;
