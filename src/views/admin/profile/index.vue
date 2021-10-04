<template>
  <div class="background">
    <form action="" class="form" id="form">
      <div class="grid__campo">
        <h2 class="grid__campo-label">Actualizar datos</h2>
      </div>
      <!--Inputs-->

      <div class="grid">
        <!-- <div class="grid__campo">
          <label for="" class="grid__campo-label">Foto de perfil</label>
          <input
            hidden
            type="file"
            placeholder="Juanito"
            class="grid__campo-input"
            autocomplete="off"
            id="photo"
            @change="loadImage"
          />
          <button type="button" @click="selectPhoto()">
            <img
              :src="
                person.image
                  ? `http://localhost:3001/load/image/${person.image}`
                  : '/assets/photoDefault.jpg'
              "
              height="45"
              alt=""
            />
          </button>
        </div> -->
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Nombre</label>
          <input
            type="text"
            placeholder="Juanito"
            class="grid__campo-input"
            id="name"
            autocomplete="off"
            v-model="person.first_name"
          />
          <i class="icon fas fa-edit"></i>
        </div>
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Usuario</label>
          <input
            disabled
            type="text"
            placeholder="Juanito247"
            class="form-control"
            id="user"
            autocomplete="off"
            v-model="user.user_name"
          />
          <i class="icon fas fa-user"></i>
        </div>
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Apellido</label>
          <input
            type="text"
            placeholder="Alvarado Gómez"
            class="grid__campo-input"
            id="apellido"
            autocomplete="off"
            v-model="person.last_name"
          />
          <i class="icon fas fa-edit"></i>
        </div>
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Contraseña</label>
          <input
            type="password"
            class="grid__campo-input"
            id="password"
            autocomplete="off"
            v-model="user.password"
          />
          <i class="icon fas fa-lock"></i>
        </div>
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Correo Electrónico</label>
          <input
            disabled
            type="email"
            placeholder="example@gmail.com"
            class="form-control"
            id="email"
            autocomplete="off"
            :value="user.email"
          />
          <i class="icon fas fa-envelope"></i>
        </div>
        <div class="grid__campo">
          <label for="" class="grid__campo-label">Confirmar Contraseña</label>
          <input
            type="password"
            placeholder=""
            class="grid__campo-input"
            id="confirmPass"
            autocomplete="off"
            v-model="user.password2"
          />
          <i class="icon fas fa-lock"></i>
        </div>
      </div>
      <!--Inputs-->
      <!--Botón y checkbox-->
      <div class="container">
        <!-- <div class="elements">
                    <input type="checkbox" class="elements__check" id="elements__check">
                    <label for="elements__check" class="elements__text">Acepto términos y condiciones</label>
                 </div> -->
        <!-- <input type="submit"  id="button" value="Aceptar"> -->
        <button class="button" type="button" @click="saveData()">
          Guardar
        </button>
      </div>
      <!--Botón y checkbox-->
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Profile",
  data: () => ({
    person: {},
    user: {},
  }),
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      const config = {
        headers: {
          authorization: `bearer ${token}`,
        },
      };
      axios
        .get("http://localhost:3001/login", config)
        .then(({ data }) => {
          if (data.ok) {
            axios
              .get(`http://localhost:3001/user/id/${data.body.user._id}`)
              .then(({ data }) => {
                if (data.ok) {
                  let { person_id, ...user } = data.body;
                  this.user = user;
                  this.person = person_id;
                }
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  methods: {
    selectPhoto() {
      document.getElementById("photo").click();
    },
    loadImage({ target }) {
      let file = target.files[0];
      let reader = new FileReader();
      reader.onload = ({ target }) => {
        this.person.image = target.result;
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(file);
    },
    saveData() {
      this.person.user = this.user;

      if (this.user.password !== this.user.password2) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Las contraseñas no coinciden",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      axios
        .put(`http://localhost:3001/user/${this.user._id}`, this.person)
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
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style lang=""></style>
