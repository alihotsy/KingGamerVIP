<template>
  <div>
    <form>
      <input type="text" v-model="form.name" />
      <textarea v-model="form.description"></textarea>
      <input type="text" v-model="form.image" />
      <input type="text" v-model="form.urlBuy" />
      <button type="button" @click="registerProduct()">Registrar</button>
    </form>
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
