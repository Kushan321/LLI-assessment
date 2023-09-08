"use strict";
import store from "@/store";
// import router from "@/router";
let authPlugin = {
  install() {
    if (!store.state.isLoggedIn) {
      console.log("triggerd!");
      // router.push("/");
    }
  },
};

export default authPlugin;
