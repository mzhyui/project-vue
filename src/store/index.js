// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    characterType: null
  },
  mutations: {
    setUsername(state, newUsername) {
      state.characterType = newUsername;
    }
  },
  actions: {
    setUserNameAsync(context, newUsername) {
      setTimeout(() => {
        context.commit('setUsername', newUsername);
      }, 1000);
    }
  }
});

export default store;
