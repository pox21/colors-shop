<template>
  <aside class="filter" :class="isOpenMobileFilter ? 'filter--open' : ''">
    <button
      @click="$emit('close-filter')"
      class="filter__mobile-btn btn-reset"
      type="button"
    ></button>
    <ul class="filter__list list-reset">
      <li class="filter__item" v-for="item in filterItems" :key="item.id">
        <BaseCheckbox v-model="filterProducts" :item="item" />
      </li>
    </ul>
  </aside>
</template>

<script>
import BaseCheckbox from "./UI/BaseCheckbox.vue";
export default {
  components: { BaseCheckbox },
  props: {
    isOpenMobileFilter: Boolean,
    filterItems: Array,
  },
  emits: ["close-filter", "update:filterProducts"],
  data() {
    return {
      filterProducts: [],
    };
  },
  watch: {
    filterProducts() {
      this.$emit("update:filterProducts", this.filterProducts);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  background-color: var(--color-bg);
  max-width: 80%;

  @include tablet {
    max-width: 100%;
    height: 75%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    padding: 54px 24px;
    overflow: auto;
    border-radius: 24px 24px 0px 0px;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;

    &--open {
      transform: translateY(0);
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 1200px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @include tablet {
      flex-direction: column;
    }
  }

  &__mobile-btn {
    display: block;
    margin: 0 auto;
    width: 28px;
    height: 4px;
    background: var(--color-text);
    opacity: 0.6;
    border-radius: 40px;
    transform: translateY(-40px);
    display: none;

    @include tablet {
      display: block;
    }
  }
}
</style>