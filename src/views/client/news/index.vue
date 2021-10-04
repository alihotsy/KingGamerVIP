<template>
  <h2 class="title-section">Noticas</h2>
  <News />

  <Footer></Footer>
</template>

<script>
// import Header2 from "../../../components/Header2.vue";
import News from "../../../components/News.vue";
import Footer from "../../../components/Footer.vue";

export default {
  name: "App",
  components: {
    // Header2,
    News,
    Footer,
  },
  mounted: () => {},
};
</script>

<style></style>
