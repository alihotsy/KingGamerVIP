<template>
  <Header2 v-if="header" />
  <HeaderAdminVue v-if="headerAdmin" />
  <Login v-if="login" />
</template>

<script>
import Header2 from "./components/Header2.vue";
import HeaderAdminVue from "./components/HeaderAdmin.vue";
import Login from "./views/auth/Login.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header2,
    HeaderAdminVue,
    Login,
  },
  data: () => ({
    header: false,
    headerAdmin: false,
    login: false,
  }),
  created() {
    let pathname = window.location.pathname;

    if (pathname.includes("admin") || pathname == "/login") {
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
            console.log(data);
            if (data.ok) {
              this.headerAdmin = true;
              this.$router.replace(pathname);
            } else {
              this.login = true;
              this.$router.replace("/login");
            }
          })
          .catch((e) => {
            console.log(e);
            window.location.href = "/login";
          });
      } else {
        this.login = true;
      }
    } else {
      this.header = true;
      this.$router.replace(pathname);
    }
  },
};
</script>

<style></style>
