import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'Construction set', imgUrl: 'https://ae01.alicdn.com/kf/HTB1aR5oOpXXXXcuaXXXq6xXFXXXI/Children-Kids-Funny-Bricks-House-Building-Learning-Blocks-Construction-Toy-Set.jpg', price: 10.99, quantity: 1 },
      { id: 2, name: 'Soft Pink Bunny', imgUrl: 'https://i5.walmartimages.com/asr/75059d1d-a65b-4967-9328-8cda9c7e5d5c.44eaa16bb1284d9a2bd4262e0f993092.jpeg', price: 10.99, quantity: 1 },
      { id: 3, name: 'Ring Stacker Toy', imgUrl: 'https://m.media-amazon.com/images/I/31DXOSjcNZL._AC_SY780_.jpg', price: 10.99, quantity: 1 },
      { id: 4, name: 'Coil Spring Toy', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8CGoFQ7qZKYfq7FJob7bhZGcpWPMD2tQTg&usqp=CAU', price: 10.99, quantity: 1 },
    ],
    
      cart: [],

  },

  getters: {
    Carts(state) { 
      return state.cart
    }

  },


  mutations: {
    Add_Cart(state, products) {
      if (state.cart.findIndex(item => item.id === products.id) !== -1) {
        return
      }
      else {
        state.cart.push(products)
      }
    },

    INCREASE(state, id) {
      state.cart.map((p) => {
        if (p.id == id) {
          p.quantity += 1
        }
      })

    },
    DECREASE(state, id) {
      state.cart.map((p) => {
        if (p.id == id && p.quantity > 1) {
          p.quantity -= 1
        }
      })
    },  
  },


  actions: {
      addProduct({commit},products){
      commit('Add_Cart',products)
    },

    increase({ commit }, id) {
      commit('INCREASE', id)
    },

    decrease({ commit }, id) {
      commit('DECREASE', id)
    }


  },
  modules: {
  }
})
