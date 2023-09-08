import Vue from "vue";
import axios from "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import Toasted from "vue-toasted";
import vuetify from "./plugins/vuetify";
import auth from "./plugins/auth";
import store from "./store";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(auth);
Vue.use(axios);
Vue.use(Toasted);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
