<template>
  <div class="products-container">
    <h2 class="title-section">Últimos servicios</h2>
    <div class="flex-container">
      <h2 v-if="products.length === 0">No hay productos registrados.</h2>
      <div v-for="product of products" :key="product.id" class="product-item">
        <div class="img-container">
          <img src="/assets/pc.jpg" alt="img-product.png" />
        </div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <a :href="product.urlBuy">
          <button class="btn-buy">Ir a comprar</button>
        </a>
        <button class="btn-details">Ver detalles</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Product",

  data: () => ({
    products: [],
  }),

  mounted() {
    axios
      .get("http://localhost:3001/product")
      .then(({ data }) => {
        this.products = data.body;
      })
      .catch((e) => console.log(e));
  },
};
</script>
<style lang=""></style>
