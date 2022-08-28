<template>
  <TheHeader @open-modal-cart="openCart" />
  <main>
    <TheHero />
    <TheProducts />
    <TheCartModal
      :is-cart-modal-open="isCartModalOpen"
      @close-modal-cart="closeCart"
      @send-order="isSendOrder = true"
    />
    <BaseModalBg :is-open="isSendOrder">
      <h2 class="send-order-title">Спасибо за покупку</h2>
    </BaseModalBg>
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
      isSendOrder: false,
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
  watch: {
    isSendOrder() {
      if (this.isSendOrder) {
        setTimeout(() => (this.isSendOrder = false), 2000);
      }
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

.send-order-title {
  margin: 0;
  padding: 30px;
  max-width: fit-content;
  background-color: var(--color-bg);
  font-size: 36px;
  line-height: 1;
  text-align: center;
  color: #4b5754;
}
</style>