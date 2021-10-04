<template>
  <!-- <header class="header"> -->
  <nav class="nav">
    <img src="/assets/KingGamerLogo.png" alt="" class="logo" />
    <ul class="nav__menu">
      -->
      <!-- <li>
          <router-link to="/"> <i class="fas fa-home"></i>Inicio </router-link>
        </li> -->
      <li>
        <router-link active-class="active" to="/admin/productos">
          <i class="fas fa-box-open"></i>Productos
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/admin/noticias">
          <i class="fas fa-newspaper"></i>Noticias
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/admin/perfil">
          <i class="fas fa-user"></i>Perfil
        </router-link>
      </li>
      <li>
        <a href="/login" @click="logout()">
          <i class="fas fa-door-open"></i>Salir
        </a>
      </li>
    </ul>
  </nav>
  -->
  <!-- </header> -->
  <router-view />
</template>

<script>
export default {
  name: "HeaderAdmin",
  methods: {
    logout() {
      localStorage.removeItem("token");
    },
  },
};
</script>
<style lang=""></style>
