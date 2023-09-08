"use strict";
import store from "@/store";
import router from "@/router";
/* eslint-disable */
let authPlugin = {
  install() {
    if ($cookies.isKey("token")) {
      store.commit("setLoginState", true);
      router.push("/vehicle-management/vehicles");
    } else {
      console.log("user not loggedIn!");
      router.push("/");
    }
  },
};

export default authPlugin;
