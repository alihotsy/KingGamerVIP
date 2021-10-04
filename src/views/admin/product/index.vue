<template>
  <div class="vista">
    <nav class="nav">
      <img src="/assets/KingGamerLogo.png" alt="" class="logo" />
      <ul class="nav__menu">
        <!-- <li>
          <router-link to="/"> <i class="fas fa-home"></i>Inicio </router-link>
        </li> -->
        <li>
          <router-link to="/admin/productos">
            <i class="fas fa-box-open"></i>Productos
          </router-link>
        </li>
        <li>
          <router-link to="/admin/noticias">
            <i class="fas fa-newspaper"></i>Noticias
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="productos">
    <form class="productos__form">
      <h1 class="header-title">Productos</h1>
      <div class="productos__form-campo">
        <label class="title" for="">Nombre</label>
        <input class="input" type="text" v-model="form.name" />
      </div>
      <div class="productos__form-campo">
        <label class="title" for="">Descripción</label>
        <textarea class="area edit" v-model="form.description"></textarea>
      </div>
       <div class="productos__form-campo">
         <label class="title" for="">Imagen URL</label>
         <input class="input" type="text" v-model="form.image" @click="clickeame"/>
       </div>
      <div class="productos__form-campo">
        <label class="title" for="">URL de la compra</label>
        <input class="input" type="text" v-model="form.urlBuy" />
      </div>
      <button class="button2" @click="registerProduct()">Registrar</button>
      <span class="span1"></span>
      <span class="span2"></span>
      <span class="span3"></span>
       <span class="span4"></span>
    </form>
  </div>
  </div>
  
    

  
  
  <Footer></Footer>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    form: {
      name: "",
      description: "",
      image: "",
      urlBuy: "",
    },
  }),
  mounted: () => {},

  methods: {
    registerProduct() {
      axios
        .post("http://localhost:3001/product", this.form)
        .then(({ data }) => {
          if (data.ok) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch(console.log);
    },
    
  },
};

</script>

<style></style>
