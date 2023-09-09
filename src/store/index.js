import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    vehicles: [
      {
        vehicle_id: "CBRB0001",
        make: "YAMAHA",
        model: "XMAX ABS",
        year: "2021",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0001",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0001/photos/fHOPZq22PVebdWYtLlf5kC8az0ALtNvpvIN2Spim.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0001/photos/thumb_fHOPZq22PVebdWYtLlf5kC8az0ALtNvpvIN2Spim.jpg",
        },
      },
      {
        vehicle_id: "CBRB0002",
        make: "HONDA",
        model: "ADV CBS",
        year: "2022",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0002",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0002/photos/kzFEpuoXKmS2qr0OVUeGwGzKEMctLRLwgyPH9KoL.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0002/photos/thumb_kzFEpuoXKmS2qr0OVUeGwGzKEMctLRLwgyPH9KoL.jpg",
        },
      },
      {
        vehicle_id: "CBRB0003",
        make: "HONDA",
        model: "ADV CBS",
        year: "2019",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0003",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0003/photos/BQTAUOE6iW51i96DPye3FU4S214Y8Aht9h4x6WG7.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0003/photos/thumb_BQTAUOE6iW51i96DPye3FU4S214Y8Aht9h4x6WG7.jpg",
        },
      },
      {
        vehicle_id: "CBRB0004",
        make: "HONDA",
        model: "SCOOPY",
        year: "2019",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0004",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0004/photos/XlGlRN65knRiK51TpvNWV7lrPL2xcMJM4m20Agoz.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0004/photos/thumb_XlGlRN65knRiK51TpvNWV7lrPL2xcMJM4m20Agoz.jpg",
        },
      },
      {
        vehicle_id: "CBRB0005",
        make: "HONDA",
        model: "PCX ABS",
        year: "2022",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0005",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0005/photos/C0f9X46fPwgGTfprCRU6jA3c7Qse9hT2PO3RxkSY.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0005/photos/thumb_C0f9X46fPwgGTfprCRU6jA3c7Qse9hT2PO3RxkSY.jpg",
        },
      },
      {
        vehicle_id: "CBRB0006",
        make: "YAMAHA",
        model: "XMAX ABS",
        year: "2021",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0006",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0006/photos/iwwXwiBjjuZTYMxA4CoZUt8NigNWlCzIFrtdOw2i.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0006/photos/thumb_iwwXwiBjjuZTYMxA4CoZUt8NigNWlCzIFrtdOw2i.jpg",
        },
      },
      {
        vehicle_id: "CBRB0007",
        make: "HONDA",
        model: "VARIO",
        year: "2009",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0007",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0007/photos/Zbma210gnFOMhPwr4Bw4hJEcaofZM0wpPmQlp0Zp.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0007/photos/thumb_Zbma210gnFOMhPwr4Bw4hJEcaofZM0wpPmQlp0Zp.jpg",
        },
      },
      {
        vehicle_id: "CBRB0008",
        make: "HONDA",
        model: "SCOOPY",
        year: "2023",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0008",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0008/photos/ATP3kO71FBgjvVm0S9SxRi3M4xzT0KkjUw556jrc.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0008/photos/thumb_ATP3kO71FBgjvVm0S9SxRi3M4xzT0KkjUw556jrc.jpg",
        },
      },
      {
        vehicle_id: "CBRB0009",
        make: "YAMAHA",
        model: "NMAX",
        year: "2019",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0009",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0009/photos/NqV5QC7t9KIbiYWdImR5BBkRRTJSDu483CgPWqei.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0009/photos/thumb_NqV5QC7t9KIbiYWdImR5BBkRRTJSDu483CgPWqei.jpg",
        },
      },
      {
        vehicle_id: "CBRB0010",
        make: "HONDA",
        model: "PCX CBS",
        year: "2020",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0010",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0010/photos/GHlCINcnZUP5lnp2R1FxTCyH9ua5aq2cZB7OazcY.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0010/photos/thumb_GHlCINcnZUP5lnp2R1FxTCyH9ua5aq2cZB7OazcY.jpg",
        },
      },
      {
        vehicle_id: "CBRB0011",
        make: "HONDA",
        model: "PCX ABS",
        year: "2020",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0011",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0011/photos/xn6fH8arnY8LwkLhE2d0QMAQ10Ym1ld2MvifQpZh.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0011/photos/thumb_xn6fH8arnY8LwkLhE2d0QMAQ10Ym1ld2MvifQpZh.jpg",
        },
      },
      {
        vehicle_id: "CBRB0013",
        make: "HONDA",
        model: "VARIO",
        year: "2016",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0013",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0013/photos/QPMfybf3OAcsawixDmwWJguoEWzTEcZhnokfDEdS.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0013/photos/thumb_QPMfybf3OAcsawixDmwWJguoEWzTEcZhnokfDEdS.jpg",
        },
      },
      {
        vehicle_id: "CBRB0014",
        make: "HONDA",
        model: "VARIO",
        year: "2021",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0014",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0014/photos/vqhtNpTMHTwZg0KVfMhRxTroCGn9J9QEHjrwHn7a.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0014/photos/thumb_vqhtNpTMHTwZg0KVfMhRxTroCGn9J9QEHjrwHn7a.jpg",
        },
      },
      {
        vehicle_id: "CBRB0015",
        make: "HONDA",
        model: "SCOOPY",
        year: "2017",
        status: 1,
        status_name: "no available",
        photo_first: {
          vehicle_id: "CBRB0015",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0015/photos/l0AhtXqp0lA6g9gIxn5zllODQjlJJgeMFTN0UyyM.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0015/photos/thumb_l0AhtXqp0lA6g9gIxn5zllODQjlJJgeMFTN0UyyM.jpg",
        },
      },
      {
        vehicle_id: "CBRB0016",
        make: "HONDA",
        model: "SCOOPY",
        year: "2015",
        status: 1,
        status_name: "Ready to rent",
        photo_first: {
          vehicle_id: "CBRB0016",
          url: "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0016/photos/6l8xDvtKkwI6vOMPIKkdm6KS17eA2gXyNRD0AkHB.jpg",
          thumb_url:
            "https://cbr-bali.s3.ap-southeast-1.amazonaws.com/production/vehicles/CBRB0016/photos/thumb_6l8xDvtKkwI6vOMPIKkdm6KS17eA2gXyNRD0AkHB.jpg",
        },
      },
    ],
    isLoggedOut: false,
  },
  getters: {},
  mutations: {
    setLoginState(state, data) {
      state.isLoggedIn = data;
    },
    setVehicles(state, data) {
      state.vehicles = data;
    },
    setLogOut(state, data) {
      state.isLoggedOut = data;
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
    async logOut({ commit, state }) {
      try {
        const response = await axios.get("api/logout", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: $cookies.get("token"),
          },
        });
        if (response.data.success === "Logout") {
          commit("setLogOut", true);
          router.push("/");
        } else {
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getAllVehicles({ commit, state }) {
      await axios
        .get("api/vehicles/vehicles", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: $cookies.get("token"),
          },
        })
        .then((res) => {
          //fill vehicles
          store.commit("setVehicles");
        })
        .catch((err) => {});
    },
    async getVehicleById({ commit, state }, id) {
      await axios
        .get(`api/vehicles/vehicles/${id}`, {
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
