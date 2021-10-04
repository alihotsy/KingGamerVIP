<template>
  <div class="products-container">
    <h2 v-if="products.length === 0">No hay productos registrados.</h2>
    <div class="flex-container row">
      <div
        v-for="product of products"
        :key="product.id"
        class="product-item col-sm-12 col-md-6 col-lg-2"
      >
        <div class="img-container">
          <img
            :src="`http://localhost:3001/load/image/${product.image}`"
            alt="img-product.png"
          />
        </div>
        <h2>{{ product.name.substring(0, 30) }}</h2>
        <p>{{ product.description.substring(0, 200) }}</p>
        <a :href="product.urlBuy">
          <button class="btn-buy">Ir a comprar</button>
        </a>
        <button
          class="btn-details"
          data-bs-toggle="modal"
          data-bs-target="#modal_show"
          @click="setProduct(product)"
        >
          Ver detalles
        </button>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modal_show"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Detalle del producto
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" style="background-color: black;">
          <br />
          <br />
          <form class="productos__form">
            <h1 class="header-title">Detalle</h1>
            <div class="productos__form-campo">
              <h2 style="color:#fff">{{ product.name }}</h2>
            </div>
            <div
              style="display:flex; justify-content:center; z-index:5000px !important"
            >
              <img
                :src="`http://localhost:3001/load/image/${product.image}`"
                height="200"
                alt=""
              />
            </div>
            <div class="productos__form-campo">
              <p style="color:#fff">{{ product.description }}</p>
            </div>
            <!-- <div class="productos__form-campo">
              <label class="title" for="">URL de la compra</label>
              <input class="input" type="text" v-model="product.urlBuy" />
            </div> -->

            <!-- <button class="button2" @click="registerProduct()">
              Registrar
            </button> -->
            <span class="span1"></span>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="close_register"
          >
            Cerrar
          </button>
          <!-- <button
            type="button"
            class="btn btn-primary"
            @click="registerProduct()"
          >
            Guardar
          </button> -->
          <a :href="product.urlBuy">
            <button class="btn-buy">Ir a comprar</button>
          </a>
        </div>
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
    product: {},
  }),

  mounted() {
    axios
      .get("http://localhost:3001/product")
      .then(({ data }) => {
        this.products = data.body;
      })
      .catch((e) => console.log(e));
  },
  methods: {
    setProduct(product) {
      this.product = product;
    },
  },
};
</script>
<style lang=""></style>
