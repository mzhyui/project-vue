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

import { reqGetCode, reqRegister, reqLogin, reqUserInfo, reqUserLogout } from '@/api'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    characterType: null,
    code: '',
    // vue仓库存储数据不是持久化的，刷新数据丢失
    token: localStorage.getItem('TOKEN') || '',
    userInfo: {}
  },
  mutations: {
    setUsername(state, newUsername) {
      state.characterType = newUsername;
    },
    USERLOGIN(state, token) {
      state.token = token;
    },
    USERINFO(state, userInfo) {
      state.userInfo = userInfo || {};
    },

  },
  actions: {
    setUserNameAsync(context, newUsername) {
      setTimeout(() => {
        context.commit('setUsername', newUsername);
      }, 1000);
    },
    async userLogin(context, data) {
      // 发送登录请求
      let result = await reqLogin(data);
      if (result.code === 200) {
        // 存放token，vuex和localStorage各一份
        context.commit('USERLOGIN', result.data.token);
        localStorage.setItem('TOKEN', result.data.token);
        return 'ok';
      } else {
        // 登录失败
        return Promise.reject(new Error(result.message));
      }
    },
  }
});

export default store;
