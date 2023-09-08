<template>
  <v-app>
    <v-row align="center" justify="center" class="error-layout">
      <v-col cols="12" class="text-center">
        <div>
          <h1>404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <v-btn
            color="transparent"
            class="gradient-btn"
            @click="redirectToVehicles"
          >
            Go to Vehicles
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    redirectToVehicles() {
      this.$router.push("/vehicle-management/vehicles");
    },
  },
};
</script>

<style lang="scss">
.error-layout {
  height: 100vh;
  background-color: #f0f0f0;
}

.text-center {
  text-align: center;
}

.gradient-btn {
  background: linear-gradient(to right, yellow, orange);
  text-transform: none;
}
</style>
