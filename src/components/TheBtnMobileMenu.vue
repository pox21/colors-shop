<template>
  <button
    class="menu-btn btn-reset"
    :class="isOpen ? 'menu-btn--active' : ''"
    type="button"
  >
    <span class="menu-btn__line"></span>
  </button>
</template>

<script>
export default {
  props: ["isOpen"],
};
</script>

<style lang="scss" scoped>
.menu-btn {
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 4;
  overflow: hidden;

  @include laptop {
    display: flex;
  }

  width: 24px;
  height: 16px;
  &__line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-text);
    transition: background-color 0.1s ease-in-out;

    &::before,
    &::after {
      content: "";
      display: block;
      height: 2px;
      background-color: var(--color-text);
      position: absolute;
      left: 0;
      right: 0;

      transition: transform 0.2s ease-in-out;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  &--active {
    .menu-btn__line {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
        top: 7px;
      }

      &::after {
        transform: rotate(-45deg);
        bottom: 7px;
      }
    }
  }
}
</style>
