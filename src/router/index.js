import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import VehicleManagement from "../views/Vehicle-Management.vue";
import DefaultLayout from "@/layout/default.vue";
import ErrorLayout from "@/layout/error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: ErrorLayout,
  },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/vehicle-management",
    name: "vehicles",
    // route  level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DefaultLayout,
    children: [
      { path: "/vehicle-management/vehicles", component: VehicleManagement },
      {
        path: "/vehicle-management/add-vehicles",
        component: VehicleManagement,
      },
      // { path: "/vehicle-management/fees", component: VehicleManagement },
      // { path: "/vehicle-management/insteption", component: VehicleManagement },
      // {
      //   path: "/vehicle-management/extra-accessories",
      //   component: VehicleManagement,
      // },

      // { path: 'profile', component: UserProfile },
    ],
  },
];

const router = new VueRouter({
  mode: "history", // Set the mode to 'history'
  routes,
});

export default router;
