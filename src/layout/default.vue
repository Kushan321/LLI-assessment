<template>
  <v-app>
    <v-row no-gutters>
      <v-col cols="12" md="3" lg="3" xl="2">
        <Drawer style="height: 100%;" />
      </v-col>
      <v-col cols="12" md="9" lg="8" xl="9" class="main-page-wrap">
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
};
</script>

<style lang="scss">
.main-page-wrap {
  margin: auto;
}
</style>
