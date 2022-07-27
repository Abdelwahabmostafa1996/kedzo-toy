<template>
<nav>
  <v-app-bar app color="white" dark flat sm="12"  >
        <v-container sm="6">
 <v-toolbar-title class="ml-2 black--text kidzo-toys">  Kidzo Toys</v-toolbar-title>
        </v-container>
          <v-spacer></v-spacer>
          <v-container sm="6"> 
     <v-btn text class="ml-2 black--text" >Shop</v-btn>
          <v-btn text class="ml-2 black--text">About</v-btn>
           <v-btn text class="ml-2 black--text">My Account</v-btn>
          <v-btn text class="ml-2 black--text" @click="cart = true">Cart({{cartarray.length}})</v-btn>
                <Cart :dialog="cart" :method="closeModal" />
          </v-container>
      </v-app-bar> 
</nav> 
</template>

<script>
import Cart from "./../components/Cart.vue";

export default {
    data: () => ({
        cart: false,
 
  }),

  computed: {
    cartarray() { 
return this.$store.getters.Carts;
    },
  },
    components: {
    Cart,
  },
    mounted(){
    },
    methods: {
       closeModal(status) {
      this.cart = status
    },
    }
}
</script>

<style lang="scss">
.kidzo-toys{

padding-left:200px;


}


</style>
