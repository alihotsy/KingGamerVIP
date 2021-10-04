<template>
  <div class="login">
    <form class="productos__form">
      <h1 class="header-title">Ingresar</h1>
      <div class="productos__form-campo">
        <label class="title" for="">Usuario o Correo</label>
        <input
          class="input"
          type="text"
          v-model="form.user_name"
          placeholder="Ingres el usuario"
        />
      </div>
      <div class="productos__form-campo">
        <label class="title" for="">Contraseña</label>
        <input
          class="input"
          type="password"
          v-model="form.password"
          placeholder="Ingres la contraseña"
        />
      </div>
      <button class="button2" type="button" @click="logIn()">
        Ingresar
      </button>
      <span class="span1"></span>
      <span class="span2"></span>
      <span class="span3"></span>
      <span class="span4"></span>
    </form>
    <div class="goBack">
      <a href="/">Ir al Inicio</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: () => ({
    form: {
      user_name: "",
      password: "",
    },
  }),
  methods: {
    logIn() {
      axios
        .post("http://localhost:3001/login", this.form)
        .then(({ data }) => {
          console.log(data);
          if (data.ok) {
            localStorage.setItem("token", data.body.token);
            window.location.href = "/admin/productos";
          } else {
            // this.$router.push("login");
          }
        })
        .catch((e) => {
          console.log(e);
          //   this.$router.push("login");
        });
    },
  },
};
</script>

<style scoped>
.login {
  /* background-color: blue; */
  height: 100vh;
  display: flex;
  padding: 15% 42%;
  flex-direction: column;
}
.goBack a {
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
