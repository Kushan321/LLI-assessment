import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    vehicles: [],
  },
  getters: {},
  mutations: {
    setLoginState(state, data) {
      state.isLoggedIn = data;
    },
  },
  actions: {
    login({ commit, state }, { userName = null, password = null }) {
      axios.post(
        "/api/login",
        {
          phone: userName,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    },
  },
  modules: {},
});
