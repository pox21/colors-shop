<template>
  <div class="counter">
    <button
      class="counter__btn btn-reset"
      type="button"
      @click.prevent="amountDown"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.3335 8H12.6668"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <input
      class="counter__input"
      type="text"
      v-model.number="amountProductItem"
    />

    <button
      class="counter__btn btn-reset"
      type="button"
      @click.prevent="amountUp"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.33325V12.6666"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.3335 8H12.6668"
          stroke="black"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    amountProd: Number,
  },
  data() {
    return {
      amountProductItem: 1,
    };
  },
  methods: {
    amountChange(amountProductItem) {
      this.$emit("update:amountProd", amountProductItem);
    },
    amountUp() {
      this.amountProductItem++;
    },
    amountDown() {
      if (this.amountProductItem) {
        this.amountProductItem--;
      }
    },
  },
  watch: {
    amountProductItem() {
      this.amountChange(this.amountProductItem);
    },
    amountProd() {
      this.amountProductItem = this.amountProd;
    },
  },
  mounted() {
    this.amountProductItem = this.amountProd;
  },
};
</script>

<style lang="scss" scoped>
.counter {
  max-width: 128px;
  display: flex;
  align-items: center;
  gap: 2px;

  &__btn {
    padding: 4px 12px;
    background-color: #f2f2f2;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
      background-color: #939090;
    }
  }

  &__input {
    text-align: center;
    width: 44px;
    background-color: transparent;
    border: none;
    transition: outline 0.2s ease-in-out;

    &:hover,
    &:focus {
      outline-color: #f2f2f2;
    }
  }
}
</style>