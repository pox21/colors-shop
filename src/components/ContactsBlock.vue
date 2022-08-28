<template>
  <div class="contacts">
    <a href="tel:+74952217769" class="contacts__link hover-link">
      +7 (495) 221-77-69
    </a>
    <button class="contacts__btn btn-reset hover-link" type="button">
      Заказать звонок
    </button>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @include mobile {
    padding: 20px;
    gap: 10px;
  }

  &__link {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  &__btn {
    position: relative;
    font-size: 14px;
    color: var(--color-gray);
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;

    &:focus {
      opacity: 1;
    }
  }
}
</style>