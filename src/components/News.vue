<template>
  <section class="row section" style="padding: 50px">
    <div
      class="card-news col-sm-12 col-md-6"
      style="margin-bottom: 30px"
      v-for="item in news"
      :key="item._id"
    >
      <h3 class="noticia1">{{ item.title }}</h3>
      <div class="noticia">
        <img
          class="img-3"
          :src="`http://localhost:3001/load/image/${item.image}`"
          width="50"
          height="500"
        />

        <p class="paragraph1" id="info-freefire">
          {{ item.description }}
        </p>
        <!-- <a
          class="info"
          href="https://www.geekmi.news/videojuegos/Garena-Free-Fire-Codigos-de-canje-gratis-27-de-agosto-2021-20210826-0035.html"
          ><i class="arrow fas fa-arrow-right"></i>Encuentra los códigos aquí</a
        > -->
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "News",
  data: () => ({
    news: [],
  }),

  mounted() {
    axios
      .get("http://localhost:3001/news")
      .then(({ data }) => {
        this.news = data.body;
      })
      .catch((e) => console.log(e));
  },
};
</script>
<style lang=""></style>
