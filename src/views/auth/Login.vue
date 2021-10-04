<template>
  <div class="container">
    <h2>Iniciar sessión</h2>
    <form>
      <div>
        <label for="">Usuario o Correo</label>
        <input type="text" v-model="form.user_name" />
      </div>
      <div>
        <label for="">Contraseña</label>
        <input type="text" v-model="form.password" />
      </div>
      <button type="button" @click="logIn()">Ingresar</button>
    </form>
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
            this.$router.push("login");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$router.push("login");
        });
    },
  },
};
</script>
