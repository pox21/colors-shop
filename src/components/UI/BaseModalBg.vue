<template>
  <transition
    enter-active-class="modal-bg--active"
    enter-from-class="modal-bg--from"
    enter-to-class="modal-bg--to"
    leave-active-class="modal-bg--active"
    leave-from-class="modal-bg--to"
    leave-to-class="modal-bg--from"
  >
    <div v-show="isOpen" class="modal-bg"></div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        document.body.classList.add("scroll-off");
      } else {
        document.body.classList.remove("scroll-off");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  opacity: 0.7;
  z-index: 2;

  &--to {
    opacity: 0.7;
  }

  &--from {
    opacity: 0;
  }

  &--active {
    transition: opacity 0.3s ease-in-out;
  }
}
</style>