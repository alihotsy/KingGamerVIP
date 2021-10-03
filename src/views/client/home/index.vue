<template>
  <Product />
  <News />
  <Team />
  <Footer />
</template>

<script>
import Product from "../../../components/Product.vue";
import News from "../../../components/News.vue";
import Team from "../../../components/Team.vue";
import Footer from "../../../components/Footer.vue";

export default {
  name: "App",
  components: {
    Product,
    News,
    Team,
    Footer,
  },
};
</script>

<style></style>
