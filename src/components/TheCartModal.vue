<template>
  <form
    class="cart"
    :class="isCartModalOpen ? 'cart--open' : ''"
    @submit.prevent="sendOrder"
  >
    <div class="cart__header">
      <h2 class="cart__title">Корзина</h2>
      <button
        class="cart__close-btn btn-reset"
        type="button"
        @click="$emit('closeModalCart')"
      >
        <BaseIcon name="close" />
      </button>
    </div>
    <div class="cart__info">
      <div class="cart__info-header">
        <span class="cart__count">
          {{
            `${
              cartTotalAmountProducts > 0
                ? cartTotalAmountProducts + " товаров"
                : "корзина пуста :("
            }`
          }}</span
        >
        <button
          class="cart__clear-btn btn-reset"
          type="button"
          @click="clearCart"
          :disabled="cartProducts.length < 1"
        >
          очистить список
        </button>
      </div>
      <ul class="cart__list list-reset">
        <li
          class="cart__item"
          v-for="cartItem in cartProducts"
          :key="cartItem.id"
        >
          <BaseCartItem
            :cart-product="cartItem"
            @remove-product-of-cart="removeProd"
          />
        </li>
      </ul>
    </div>
    <div class="cart__footer">
      <div class="cart__total-price-block">
        <span class="cart__total-price-text">Итого</span>
        <span class="cart__total-price">
          {{ numberFormat(cartTotalPrice) }} ₽
        </span>
      </div>
      <button
        class="cart__buy-btn btn-reset"
        type="submit"
        :disabled="cartProducts.length < 1"
      >
        Оформить заказ
      </button>
    </div>
  </form>
</template>
<script>
import { numberFormat } from "../helpers/";
import { mapActions, mapGetters } from "vuex";
import BaseCartItem from "./BaseCartItem.vue";
import BaseIcon from "./UI/Icons/BaseIcon.vue";
export default {
  components: { BaseCartItem, BaseIcon },
  props: {
    isCartModalOpen: Boolean,
  },
  emits: ["sendOrder", "closeModalCart"],
  data() {
    return {
      cartProducts: [],
    };
  },
  computed: {
    ...mapGetters([
      "getCartProducts",
      "cartTotalPrice",
      "cartTotalAmountProducts",
    ]),
  },
  methods: {
    ...mapActions(["deleteProduct", "clearCart"]),
    removeProd(product) {
      this.deleteProduct(product);
    },
    numberFormat(price) {
      return numberFormat(price);
    },
    sendOrder() {
      this.$emit("sendOrder");
      this.$emit("closeModalCart");
      this.clearCart();
    },
  },
  watch: {
    getCartProducts() {
      this.cartProducts = this.getCartProducts;
    },
  },
  mounted() {
    this.cartProducts = this.getCartProducts;
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  padding: 40px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  background-color: var(--color-bg);
  transform: translateY(-100%);
  transition: transform 0.25s ease-in-out;
  overflow: auto;

  &--open {
    transform: translateY(0);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;

    @include mobile {
      margin-bottom: 30px;
    }
  }

  &__info-header {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__count {
    font-size: 14px;
    line-height: 112%;
    color: var(--color-text);
  }

  &__clear-btn {
    font-weight: 300;
    font-size: 14px;
    line-height: 112%;
    color: var(--color-text);
    opacity: 0.4;
    transition: opacity 0.2s ease-in-out;

    &:disabled {
      cursor: no-drop;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  &__title {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 88%;
    letter-spacing: -0.04em;
    color: var(--color-text);
  }

  &__close-btn {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    padding: 12px;
    border: 1px solid #ababab;
    border-radius: 100%;
    transition: border-color 0.2s ease-in-out;

    &:focus,
    &:active,
    &:hover {
      border-color: #000;
    }

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item {
    padding-top: 12px;

    &:not(:last-child) {
      border-top: 1px solid #00000030;
    }
  }

  &__footer {
    padding-top: 40px;
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__total-price-block {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__total-price-text {
    font-size: 16px;
    line-height: 100%;
    color: var(--color-text);
  }

  &__total-price {
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--color-text);

    @include mobile {
      font-size: 20px;
    }
  }

  &__buy-btn {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text);

    max-width: 240px;
    width: 100%;
    padding: 20px;
    background-color: #7bb899;
    border-radius: 4px;

    &:disabled {
      cursor: no-drop;
    }

    @include mobile {
      align-self: center;
    }
  }
}
</style>