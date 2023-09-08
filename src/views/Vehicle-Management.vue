<template>
  <div class="vehicle-management elevation-1">
    <ShowVehicles v-if="this.$route.path == '/vehicle-management/vehicles'" />
    <AddVehicles
      v-if="this.$route.path == '/vehicle-management/add-vehicles'"
    />
  </div>
</template>

<script>
import ShowVehicles from "../components/ui-components/showVehicles.vue";
import AddVehicles from "../components/ui-components/addVehicles.vue";

export default {
  data() {
    return {};
  },
  components: {
    ShowVehicles,
    AddVehicles,
  },
};
</script>
<style lang="scss">
.vehicle-management {
}
</style>
