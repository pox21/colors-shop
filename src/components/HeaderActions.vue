<template>
  <div class="header-actions">
    <BaseBtnActions
      v-for="btn in actionBtns"
      :key="btn.id"
      class="header-actions__btn btn-reset"
      :class="btn.count ? 'actions-btn--count' : ''"
      :data-count="btn.count ? btn.count : ''"
      :name="btn.name"
      @click="$emit('actionActive', btn)"
    />
  </div>
</template>

<script>
import BaseBtnActions from "./BaseBtnActions.vue";
export default {
  emits: ["actionActive"],
  props: {
    isMobile: Boolean,
    actionBtns: Array,
  },
  components: { BaseBtnActions },
};
</script>

<style lang="scss" scoped>
.header-actions {
  display: flex;
  gap: 24px;

  @include mobile {
    padding: 20px;
  }

  &__btn {
    //
  }
}
</style>