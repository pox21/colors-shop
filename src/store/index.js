import axios from "axios";
import { createStore } from "vuex";

const getTypeProductsURL = "./db/typeProducts.json";
const getProductsURL = "./db/products.json";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      cartProducts: [],
      dataTypeProducts: [],
      dataProducts: [],
    };
  },
  getters: {
    getTypeProducts(state) {
      return state.dataTypeProducts;
    },
    getDataProducts(state) {
      return state.dataProducts;
    },
    getCartProducts(state) {
      return state.cartProducts;
    },
    cartTotalPrice(state, getters) {
      return getters.getCartProducts.reduce((acc, item) => {
        return item.price * item.amount + acc;
      }, 0);
    },
    cartTotalAmountProducts(state, getters) {
      return getters.getCartProducts.reduce((acc, item) => {
        return item.amount + acc;
      }, 0);
    },
  },
  mutations: {
    setTypeProducts(state, typeProducts) {
      state.dataTypeProducts = typeProducts;
    },
    setDataProducts(state, dataProducts) {
      state.dataProducts = dataProducts;
    },
    setCartProducts(state, products) {
      state.cartProducts = products;
    },
    updateCartProductAmount(state, product) {
      const item = state.cartProducts.find((item) => item.id === product.id);
      if (item) {
        item.amount = product.amount;
      }
    },
    deletCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== productId
      );
    },
  },
  actions: {
    async loadTypeProducts(context) {
      const response = await axios.get(getTypeProductsURL);
      context.commit("setTypeProducts", response.data);
    },

    async loadProducts(context) {
      const response = await axios.get(getProductsURL);
      context.commit("setDataProducts", response.data);
    },

    addProductToCart(context, product) {
      
      const dataLS = JSON.parse(localStorage.getItem("cart"));
      
      if (!dataLS) {
        localStorage.setItem("cart", JSON.stringify([product]));
        context.commit("setCartProducts", [product]);
      } else {
        if (dataLS.filter((item) => item.id === product.id).length) {
          dataLS.forEach((prod) => {
            if (prod.id === product.id) {
              prod.amount++;
            }
          });
        } else {
          dataLS.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(dataLS));
        context.commit("setCartProducts", dataLS);
      }
    },
    loadCart(context) {
      const dataLS = JSON.parse(localStorage.getItem("cart"));
      if (dataLS) context.commit("setCartProducts", dataLS);
    },

    updateCartProductAmount(context, product) {
      context.commit("updateCartProductAmount", product);
      if (product.amount < 1) {
        return;
      }
      localStorage.setItem("cart", JSON.stringify(this.state.cartProducts));
    },
    deleteProduct(context, product) {
      context.commit("deletCartProduct", product.id);
      localStorage.setItem("cart", JSON.stringify(this.state.cartProducts));
    },
    clearCart(context) {
      context.commit("setCartProducts", []);
      localStorage.setItem("cart", JSON.stringify([]));
    }
  },
});
