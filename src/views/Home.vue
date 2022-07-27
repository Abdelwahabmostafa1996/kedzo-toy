<template>
  <v-container fluid>
    <v-container fluid class="bg-img">
      <v-col col="12" class="content-img">
           <h1 class="h1-content">award winning toys For Children</h1>
      <p>Creative,Timeless toys for Children of all ages</p>
      <v-btn
       large
        rounded 
        elevation="1"
         color="orange"
          class="white--text"
        >Shop Now
      </v-btn>
      </v-col>
    </v-container>
    <v-col>
       <h1 class="new-arrives">New Arrives</h1>
    </v-col>
    <v-col>

</v-col>
<v-row class="toys-img">
  <ul v-for="item in productsItem" :key="item.id" class="toys-products" >
  <div  md4>
        <img class="cart" @click="AddToCart(item)" src="./../assets/cart.png"
                width="30px">
    <img  :src="item.imgUrl"  :alt="item.title" 
    width="220px" height="220px" >
        <h4 class="img-content">{{item.name}}</h4>
            <p class="price">{{item.price}}</p>
  </div>
</ul>
 </v-row>

<br width="100px"> 
  </v-container>

</template>

<script>

export default {
  name: "Home",
  components: {
  },
 data: () => ({
    cart: false,

  }),
 computed: {
    productsItem () {
      return this.$store.state.products
    }
 },

  methods: {
    AddToCart(item) { 
      this.$store.dispatch("addProduct",item)
    },
  },

};
</script>

<style scoped>
.bg-img {
  background-image: url("./../assets/section1BG.png");
  width: 100vw;
  height: 100vh;
padding:0;
  /* background-attachment: inherit; */
  background-repeat: no-repeat;
  background-size: cover;
  /* position: absolute; */
}

.content-img{
padding: 200px;
padding-top:300px;
}

.h1-content{
width:300px;
}

.new-arrives{

text-align:center;
color:gray;
}

.price{
color:gray;
}

.cart{

  position: absolute;
  cursor: pointer;
}

v-container, v-main{

padding:0;

}

.toys-img{
justify-content: space-around;
}
</style>
