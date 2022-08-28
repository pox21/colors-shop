<template>
  <div class="products__catalog catalog">
    <span class="catalog__count">
      {{
        `${products.length > 0 ? products.length + " товаров" : "товаров нет"} `
      }}
    </span>
    <ul class="catalog__list list-reset">
      <li
        class="catalog__item card"
        v-for="product in products"
        :key="product.id"
      >
        <BaseCard :product="product" @add-to-cart="addToCart" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: {
    products: Array,
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    addToCart(product) {
      this.addProductToCart({
        ...product,
        amount: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  position: relative;
  &__count {
    display: block;
    margin-bottom: 44px;
    @media (max-width: 1200px) {
      text-align: center;
      margin-bottom: 20px;
    }

    @include mobile {
      display: none;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 278px);
    grid-gap: 16px 24px;
    align-items: center;

    @media (max-width: 1800px) {
      grid-template-columns: repeat(4, 278px);
      justify-content: space-around;
    }

    @media (max-width: 1500px) {
      grid-template-columns: repeat(3, 278px);
    }

    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__item {
    display: flex;
    justify-content: center;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #fff;
  }
}
</style>