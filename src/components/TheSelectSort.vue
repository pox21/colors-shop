<template>
  <div class="select-sort">
    <button @click="$emit('select-active')" class="select-sort__btn btn-reset" type="button">
      {{ checked.label }}
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 7.5L8.4641 3L1.5359 3L5 7.5Z" fill="#202020" />
      </svg>
    </button>
    <transition
      enter-active-class="select-sort__list--active"
      enter-from-class="select-sort__list--from"
      enter-to-class="select-sort__list--to"
      leave-active-class="select-sort__list--active"
      leave-from-class="select-sort__list--to"
      leave-to-class="select-sort__list--from"
    >
      <ul v-show="isOpen" class="select-sort__list list-reset">
        <li
          class="select-sort__item"
          :class="checked.id === item.id ? 'select-sort__item--active' : ''"
          v-for="item in selectItems"
          :key="item.id"
          @click="$emit('checked-item', item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
    <div class="select-sort__bg"></div>
  </div>
</template>

<script>
export default {
  emits: ["select-active", "checked-item"],
  props: {
    selectItems: Array,
    checked: Object,
    isOpen: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.select-sort {
  max-width: fit-content;
  position: relative;

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text);
  }

  &__list {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-bg);
    z-index: 10;

    &--to {
      opacity: 1;
      transform: scale(1);
    }

    &--from {
      transform: scale(0.9);
      opacity: 0;
    }

    &--active {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
  }

  &__item {
    padding: 16px 24px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
      background-color: #7bb899;
    }

    &--active {
      background-color: #7bb899;
    }
  }
}
</style>