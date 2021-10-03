<template>
  <header class="header">
    <nav class="nav">
      <img src="/assets/KingGamerLogo.png" alt="" class="logo" />
      <ul class="nav__menu">
        <li>
          <router-link to="/"> <i class="fas fa-home"></i>Inicio </router-link>
        </li>
        <li>
          <router-link to="/productos">
            <i class="fas fa-box-open"></i>Productos
          </router-link>
        </li>
        <li>
          <router-link to="/noticias">
            <i class="fas fa-box-open"></i>Noticias
          </router-link>
        </li>
        <!-- <li>
          <a href=""><i class="fas fa-book-open"></i>Registro</a>
        </li> -->
        <!-- <li>
          <a href="#"><i class="fas fa-download"></i>Descargas</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-phone-alt"></i>Contáctanos</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-store"></i>Tienda Online</a>
        </li> -->
      </ul>
    </nav>
    <hr />
    <div class="fondo"></div>
    <div class="text">
      <h1>King Gamer</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        officia culpa asperiores, minima tempore tempora suscipit? Accusantium
        dicta praesentium doloremque odit ratione, impedit aspernatur, nulla ea
        at similique, voluptatum debitis aperiam maiores illum fugit suscipit
        libero? Adipisci nostrum error odio quia, eligendi quasi quod, maxime
        dolorum, facilis recusandae id.
      </p>
      <button class="boton">Comprar</button>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "Header2",
};
</script>
<style lang=""></style>
