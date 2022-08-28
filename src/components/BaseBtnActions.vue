<template>
  <button class="actions-btn btn-reset" type="button">
    <BaseIcon :name="name" />
  </button>
</template>

<script>
import BaseIcon from "./UI/Icons/BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.actions-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border-bottom: 1px solid transparent;
  color: var(--color-text);
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  svg {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &--count {
    &::after {
      content: attr(data-count);
      display: flex;
      align-content: center;
      justify-content: center;
      border-radius: 100%;
      background-color: #7bb899;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.06em;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  &:focus,
  &:hover {
    color: #475550;
    border-color: var(--hover-border);
  }
}
</style>