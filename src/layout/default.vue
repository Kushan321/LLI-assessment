<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" md="3" lg="3" xl="2">
        <Drawer
          ref="drawer"
          style="height: 100%"
          :toggleDrawer="toggleDrawer"
        />
      </v-col>
      <v-col cols="12" md="9" lg="8" xl="9" class="main-page-wrap">
        <v-btn
          class="toggle"
          color="primary"
          style="z-index: 10"
          @click.stop="toggleDrawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <Navbar />
        <BreadCrumb />
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Drawer from "../components/layout-components/Drawer.vue";
import Navbar from "../components/layout-components/Navbar.vue";
import BreadCrumb from "../components/layout-components/Breadcrumb.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Drawer,
    BreadCrumb,
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggle(); // Call the child component's method
    },
  },
};
</script>

<style lang="scss">
.main-page-wrap {
  margin: auto;
  position: relative;
  @media (max-width: 958.98px) {
    position: absolute;
  }
  .toggle {
    position: fixed;
    top: 5px;
    left: 5px;
    @media (min-width: 959px) {
      display: none;
    }
  }
}
</style>
