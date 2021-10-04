<template>
  <h2 class="title-section">Últimos Productos</h2>
  <Product />
  <h2 class="title-section2">Las Últimas Noticias</h2>
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
