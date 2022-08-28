<template>
  <TheHeader @open-modal-cart="openCart" />
  <main>
    <TheHero />
    <TheProducts />
    <TheCartModal
      :is-cart-modal-open="isCartModalOpen"
      @close-modal-cart="closeCart"
    />
    <BaseModalBg :is-open="isOpen" @click="closeCart" />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHero from "./components/TheHero.vue";
import TheProducts from "./components/TheProducts.vue";
import TheCartModal from "./components/TheCartModal.vue";
import BaseModalBg from "./components/UI/BaseModalBg.vue";
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHero,
    TheProducts,
    TheCartModal,
    BaseModalBg,
  },
  data() {
    return {
      isCartModalOpen: false,
      isOpen: false,
    };
  },
  methods: {
    ...mapActions(["loadTypeProducts", "loadProducts", "loadCart"]),
    openCart() {
      this.isCartModalOpen = true;
      this.isOpen = true;
    },
    closeCart() {
      this.isCartModalOpen = false;
      this.isOpen = false;
    },
  },
  mounted() {
    this.loadTypeProducts();
    this.loadProducts();
    this.loadCart();
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 32px 0;
  margin: 0;
  font-weight: 400;
  font-size: 36px;
  line-height: 88%;
  letter-spacing: -0.04em;
  color: var(--color-text);
}
</style>