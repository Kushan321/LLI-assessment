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
    setVehicles(state, data) {
      state.vehicles = data;
    },
  },
  actions: {
    async login({ commit, state }, { userName = null, password = null }) {
      // await axios.post(
      //   "/api/login",
      //   {
      //     phone: userName,
      //     password: password,
      //   },
      //   {
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const resToken = "7|4QDKIK6aEOwXzXWuTxIMhN4S7jxlKJ3qXAonSDrW";
      $cookies.set("token", `Bearer ${resToken}`);
    },
    async getAllVehicles({ commit, state }) {
      await axios
        .get("/vehicles/vehicles", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: $cookies.get("token"),
          },
        })
        .then((res) => {
          //fill vehicles
          store.commit("setVehicles", );
        })
        .catch((err) => {});
    },
    async getVehicleById({ commit, state }, id) {
      await axios
        .get(`/vehicles/vehicles/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: $cookies.get("token"),
          },
        })
        .then((res) => {
          //fill vehicles
        })
        .catch((err) => {});
    },
  },
  modules: {},
});
