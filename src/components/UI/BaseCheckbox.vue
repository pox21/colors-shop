<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input
        class="checkbox__input"
        type="checkbox"
        :="$attrs"
        :value="item.id"
        :id="item.id"
        v-model="modelValue"
      />
      <span class="checkbox__thumb"></span>
      <span class="checkbox__text">{{ item.name }}</span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    modelValue: Array,
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  &__input {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  &__label {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  &__thumb {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 22px;
    background-color: #f2f2f2;
    border-radius: 40px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #1f2020;
      border-radius: 100%;

      position: absolute;
      top: 50%;
      left: 7px;
      transform: translateY(-50%);

      transition: transform 0.2s ease-in-out;
    }
  }

  &__input:checked + .checkbox__thumb {
    background-color: #7bb899;
  }

  &__input:checked + .checkbox__thumb::after {
    transform: translate(14px, -50%);
  }
}
</style>