<template>
  <article class="cart-item">
    <div class="cart-item__img-wrapper">
      <img
        :src="cartProduct.img || ''"
        :alt="cartProduct.name"
        class="cart-item__img"
      />
    </div>
    <div class="cart-item__text-wrapper">
      <h3 class="cart-item__title">{{ cartProduct.name }}</h3>
      <span class="cart-item__price">
        {{ numberFormat(cartProduct.price * cartProduct.amount) }} ₽
      </span>
    </div>
    <BaseCounterItem v-model:amount-prod="amount" :="$attrs" />
    <button
      class="cart-item__btn-del btn-reset"
      type="button"
      @click="$emit('removeProductOfCart', cartProduct)"
    >
      <BaseIcon name="close" />
    </button>
  </article>
</template>

<script>
import { numberFormat } from "../helpers/";
import { mapActions } from "vuex";
import BaseCounterItem from "./BaseCounterItem.vue";
import BaseIcon from "./UI/Icons/BaseIcon.vue";
export default {
  components: { BaseCounterItem, BaseIcon },
  props: {
    cartProduct: Object,
  },
  emits: ["removeProductOfCart"],
  methods: {
    ...mapActions(["updateCartProductAmount", "deleteProduct"]),
    numberFormat(price) {
      return numberFormat(price);
    },
  },
  computed: {
    amount: {
      get() {
        return this.cartProduct.amount;
      },
      set(value) {
        this.updateCartProductAmount({
          ...this.cartProduct,
          amount: value,
        });
      },
    },
  },
  watch: {
    amount() {
      if (this.amount < 1) {
        this.deleteProduct(this.cartProduct);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 8px;

  @include mobile {
    flex-wrap: wrap;
  }

  &__img-wrapper {
    width: 96px;
    height: 96px;
    @include mobile {
      width: 48px;
      height: 48px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text-wrapper {
    max-width: 165px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-right: auto;

    @include mobile {
      gap: 4px;
    }
  }

  &__title {
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    color: var(--color-text);

    @include mobile {
      font-size: 14px;
    }
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-text);
  }

  &__btn-del {
    margin-left: 3%;
    width: 24px;
    height: 24px;
    color: var(--color-text);
    opacity: 0.1;
    transition: opacity 0.2s ease-in-out;

    @include mobile {
      margin-left: auto;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
}
</style>