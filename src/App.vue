<template>
  <Header2 v-if="!pathname.includes('admin')" />
  <HeaderAdminVue v-if="pathname.includes('admin')" />
</template>

<script>
import Header2 from "./components/Header2.vue";
import HeaderAdminVue from "./components/HeaderAdmin.vue";

export default {
  name: "App",
  components: {
    Header2,
    HeaderAdminVue,
  },
  data: () => ({
    pathname: "",
  }),
  mounted() {
    this.pathname = window.location.pathname;
  },
};
</script>

<style></style>
