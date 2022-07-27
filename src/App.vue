<template>
  <v-app>
    <NavBar />
    <v-main>
      <Cart/>
      </v-main>
      <router-view/>
    <Footer />
  </v-app>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    NavBar,
        Cart,
    Footer,
  },

};
</script>


<style scoped>

*{font-family:"Helvetica";
}


</style>
