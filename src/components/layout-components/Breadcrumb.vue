<template>
  <div class="breadcrumb">
    <v-row no-gutters justify="center">
      <v-col cols="11" md="12">
        <p>
          <span>{{ formatRoute(this.$route.path, 1) }}</span> /
          <span class="bold">{{ formatRoute(this.$route.path, 2) }}</span>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb", // multi-word component name
  methods: {
    formatRoute(path, partIndex) {
      const parts = path.split("/");
      const filteredParts = parts.filter((part) => part !== "");
      if (partIndex <= filteredParts.length) {
        return filteredParts[partIndex - 1].replace(/-/g, " ");
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss">
.breadcrumb {
  margin-top: 20px;
  p {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 300;
    .bold {
      font-weight: 500;
    }
  }
}
</style>
