<template>
  <div class="vista container">
    <div class="productos">
      <div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="reset()"
        >
          <i class="fas fa-cart-plus"></i> Nuevo producto
        </button>
      </div>

      <br />
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <td>#</td>
            <td>Nombre</td>
            <td>Imagen</td>
            <td>Link de compra</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) of products" :key="product.id">
            <td>{{ i + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img
                :src="`http://localhost:3001/load/image/${product.image}`"
                :alt="product.name"
                height="100"
              />
            </td>
            <td>
              <a target="_blank" :href="product.urlBuy" class="btn btn-primary"
                ><i class="fas fa-shopping-cart"></i
              ></a>
            </td>
            <td>
              <button
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#modal_show"
                @click="setProduct(product)"
              >
                <i class="fas fa-eye"></i>
              </button>
              <button
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#modal_edit"
                @click="setProduct(product)"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-danger" @click="deleteProduct(product)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal edit -->

  <div
    class="modal fade"
    id="modal_edit"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Editando producto
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <br />
          <br />
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
              <label class="title" for="">URL de la compra</label>
              <input class="input" type="text" v-model="form.urlBuy" />
            </div>
            <div class="productos__form-campo">
              <label class="title" for="">Imagen URL</label>
              <input class="input" type="file" @change="loadImage" />
            </div>
            <div
              style="display:flex; justify-content:center; z-index:5000px !important"
            >
              <img
                :src="`http://localhost:3001/load/image/${form.image}`"
                height="200"
                alt=""
              />
            </div>
            <!-- <button class="button2" @click="registerProduct()">
              Registrar
            </button> -->
            <!-- <span class="span1"></span>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span> -->
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="close_edit"
          >
            Cerrar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateProduct(form._id)"
          >
            Guardar
          </button>
        </div>
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
            Producto
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <br />
          <br />
          <form class="productos__form">
            <h1 class="header-title">Productos</h1>
            <div class="productos__form-campo">
              <label class="title" for="">Nombre</label>
              <input disabled class="input" type="text" v-model="form.name" />
            </div>
            <div class="productos__form-campo">
              <label class="title" for="">Descripción</label>
              <textarea
                disabled
                class="area edit"
                v-model="form.description"
              ></textarea>
            </div>
            <div class="productos__form-campo">
              <label class="title" for="">URL de la compra</label>
              <input disabled class="input" type="text" v-model="form.urlBuy" />
            </div>
            <!-- <div class="productos__form-campo">
              <label class="title" for="">Imagen URL</label>
              <input disabled class="input" type="file" @change="loadImage" />
            </div> -->
            <div
              style="display:flex; justify-content:center; z-index:5000px !important"
            >
              <img
                :src="`http://localhost:3001/load/image/${form.image}`"
                height="200"
                alt=""
              />
            </div>
            <!-- <button class="button2" @click="registerProduct()">
              Registrar
            </button> -->
            <!-- <span class="span1"></span>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span> -->
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            id="close_edit"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal register -->

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Registrando producto
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <br />
          <br />
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
              <label class="title" for="">URL de la compra</label>
              <input class="input" type="text" v-model="form.urlBuy" />
            </div>
            <div class="productos__form-campo">
              <label class="title" for="">Imagen URL</label>
              <input class="input" type="file" @change="loadImage" />
            </div>
            <div
              style="display:flex; justify-content:center; z-index:5000px !important"
            >
              <img :src="form.image" height="200" alt="" />
            </div>
            <!-- <button class="button2" @click="registerProduct()">
              Registrar
            </button> -->
            <!-- <span class="span1"></span>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span> -->
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
          <button
            type="button"
            class="btn btn-primary"
            @click="registerProduct()"
          >
            Guardar
          </button>
        </div>
      </div>
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
    products: [],
  }),
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      axios
        .get("http://localhost:3001/product")
        .then(({ data }) => {
          this.products = data.body;
        })
        .catch((e) => console.log(e));
    },
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
            document.getElementById("close_register").click();
            this.loadData();
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
    updateProduct(id) {
      if (this.form.image.includes("base64")) delete this.form.image;

      axios
        .put(`http://localhost:3001/product/${id}`, this.form)
        .then(({ data }) => {
          if (data.ok) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            document.getElementById("close_edit").click();
            this.loadData();
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
    deleteProduct(product) {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "!No podras reversir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "!Sí, eliminar producto!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
          axios
            .delete(`http://localhost:3001/product/${product._id}`)
            .then(({ data }) => {
              if (data.ok) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: data.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
                this.products.splice(this.products.indexOf(product), 1);
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
        }
      });
    },
    loadImage({ target }) {
      console.log(target.files);
      let file = target.files[0];
      let reader = new FileReader();
      reader.onload = ({ target }) => {
        // console.log(e, " xxxx");
        this.form.image = target.result;
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(file);
    },
    setProduct(product) {
      this.form = product;
    },
    reset() {
      this.form = {
        name: "",
        description: "",
        image: "",
        urlBuy: "",
      };
    },
  },
};
</script>

<style>
.productos__form {
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
