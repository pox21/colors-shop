<template>
  <section class="products">
    <div class="container products__container">
      <button
        @click="openMobileFilter"
        class="products__filter-open btn-reset"
        type="button"
      >
        Фильтры
      </button>
      <TheFilter
        class="products__filter"
        :is-open-mobile-filter="isOpenMobileFilter"
        :filter-items="getTypeProducts"
        @close-filter="closeFilter"
        v-model:filter-products="filterProducts"
      />
      <TheCatalog
        :products="
          productsBeforeFilter.length > 0 ? productsBeforeFilter : dataProducts
        "
      />
      <TheSelectSort
        class="products__select"
        :is-open="isOpenSelect"
        :select-items="dataSelect"
        :checked="checked"
        @select-active="openSelect"
        @checked-item="checkedSelect"
      />
      <Teleport to="body">
        <BaseModalBg :is-open="isOpen" @click="closeModals" />
      </Teleport>
    </div>
  </section>
</template>

<script>
import TheFilter from "./TheFilter.vue";
import TheSelectSort from "./TheSelectSort.vue";
import BaseModalBg from "./UI/BaseModalBg.vue";
import BaseCard from "./BaseCard.vue";
import TheCatalog from "./TheCatalog.vue";
import { mapGetters } from "vuex";
export default {
  components: { TheFilter, TheSelectSort, BaseModalBg, BaseCard, TheCatalog },
  data() {
    return {
      isOpen: false,
      isOpenSelect: false,
      isOpenMobileFilter: false,

      checked: {
        id: 1,
        label: "Сначала дорогие",
        type: "priceTo",
      },
      dataSelect: [
        {
          id: 1,
          label: "Сначала дорогие",
          type: "priceTo",
        },
        {
          id: 2,
          label: "Сначала недорогие",
          type: "priceFrom",
        },
        {
          id: 3,
          label: "Сначала популярные",
          type: "rating",
        },
        {
          id: 4,
          label: "Сначала новые",
          type: "new",
        },
      ],

      filterProducts: [],
      filteredProducts: [],
      dataProducts: [],
      productsLoading: false,
      productsLoadingFailed: false,
    };
  },
  computed: {
    ...mapGetters(["getTypeProducts", "getDataProducts"]),
    productsBeforeFilter() {
      return this.filteredProducts;
    },
  },
  methods: {
    checkedSelect($event) {
      this.checked = $event;
      this.closeModals();
    },
    openSelect() {
      this.isOpen = true;
      this.isOpenSelect = true;
    },
    openMobileFilter() {
      this.isOpen = true;
      this.isOpenMobileFilter = true;
    },
    closeFilter() {
      this.isOpen = false;
      this.isOpenMobileFilter = false;
    },
    closeModals() {
      this.isOpen = false;
      this.isOpenSelect = false;
      this.isOpenMobileFilter = false;
    },

    changeFilterProducts() {
      this.filteredProducts = this.getDataProducts.filter(
        (item) => this.filterProducts.filter((el) => el === item.type).length
      );
    },

    sortAllProducts(type) {
      this.dataProducts.sort((product1, product2) => {
        if (type === "date") {
          return new Date(product1[type]) > new Date (product2[type]) ? -1 : 1;
        }
        return product1[type] > product2[type] ? -1 : 1;
      });
    },

    sortProducts(value) {
      if (value.id === 1) {
        this.sortAllProducts("price");
      }
      if (value.id === 2) {
        this.sortAllProducts("price");
        this.dataProducts.reverse();
      }
      if (value.id === 3) {
        this.sortAllProducts("rating");
      }
      if (value.id === 4) {
        this.sortAllProducts("date");
      }
    },
  },
  watch: {
    filterProducts() {
      this.changeFilterProducts();
    },
    checked(newVal) {
      this.sortProducts(newVal);
    },
    getDataProducts() {
      this.dataProducts = this.getDataProducts;
    },
  },
  mounted() {
    this.dataProducts = this.getDataProducts;
  },
};
</script>

<style lang="scss" scoped>
.products {
  position: relative;
  padding-top: 70px;
  padding-bottom: 140px;

  @include mobile {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  &__container {
    position: relative;
    display: grid;
    grid-template-columns: 280px minmax(400px, auto);
    grid-gap: 25px;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }

  &__filter-open {
    margin-right: auto;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text);
    display: none;

    @include tablet {
      display: block;
    }
  }

  &__count {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text);
  }

  &__select {
    position: absolute;
    top: 0;
    right: 9px;
    @include laptop {
      right: 24px;
    }
  }
}
</style>