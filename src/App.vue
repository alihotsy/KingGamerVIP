<template>
<Header2></Header2>
 <Services></Services>
 <News></News>
  <Team></Team>
  <Footer></Footer>
</template>

<script>
import Header2 from './components/Header2.vue'
import Services from './components/Services.vue'
import News from './components/News.vue'
import Team from './components/Team.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header2,
    Services,
    News,
    Team,
    Footer
  }
}
</script>

<style>

</style>
