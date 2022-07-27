<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        persistent
        transition="dialog-top-transition"
        max-width="420"
      >
        <template>
          <v-card>
            <button class="close-icon" @click="method(false)">
              <v-icon class="close" small> mdi-window-close </v-icon>
            </button>
            <v-card class="mx-auto" max-width="400" outlined>
              <div v-for="(item) in cartarray" :key="item.id">
              <div class="add-item">Item add to your cart</div>
                <v-list-item three-line>
                  <v-img class="img-product" :src="item.imgUrl"> </v-img>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      >{{item.name}}</v-list-item-subtitle
                    >
                    <div class="count">
                      <v-btn  class="pluse" x-small elevation="0" @click="increaseQ(item.id)" outlined color="green">
                        <v-icon> mdi-plus </v-icon>
                        
                      </v-btn>

                      <p>{{item.quantity}}</p>

                      <v-btn @click="decreaseQ(item.id)" class="minus" x-small elevation="0" outlined color="red">
                        <v-icon> mdi-minus </v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <v-btn class="btn1" block color="error"> View My Cart({{cartarray.length}}) </v-btn>
              <v-btn class="btn2" block color="primary"> Check Out </v-btn>
              <p class="Countinue" color="grey">Countinue Shopping</p>
            </v-card>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Cart: false,
    };
  },
  computed: {
    cartarray() {
      return this.$store.getters.Carts;
    },
  },
  props: {
    method: { type: Function },
    dialog: { default: false },
  },
    methods: {
    AddToCart(item) { 
      this.$store.dispatch("addProduct",item)
      },
     deleteItem(item) {
      this.cartarray.splice(this.cartarray.indexOf(item), 1);
      },
      increaseQ(id) {
      this.$store.dispatch("increase", id);
    },
     decreaseQ(id) {
     this.$store.dispatch("decrease", id);
    }

  },

};
</script>

<style scoped>
.btn1 {
  margin-bottom: 10px !important;
}

.add-item,
.Countinue {
  text-align: center;
}
.Countinue {
  text-decoration: underline;
}

.count {
  display: flex;
}

.pluse , .minus {
  font-weight: bold;
}

.img-product{
width:20px;
}
</style>
