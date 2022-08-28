<template>
  <article class="card">
    <div class="card__img-wrapper">
      <img :src="product.img || ''" :alt="product.name" />
    </div>
    <div class="card__text-wrapper">
      <h3 class="card__title">{{ product.name }}</h3>
      <span>{{ product.date }}</span
      ><br />
      <span>Рейтинг {{ product.rating }}</span>
      <div class="card__footer">
        <span class="card__price">{{ product.price }} ₽</span>
        <button
          class="card__btn btn-reset"
          type="button"
          @click="$emit('addToCart', product)"
        >
          <svg
            class="card__btn--plus"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.16663V15.8333"
              stroke="#1F2020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.16699 10H15.8337"
              stroke="#1F2020"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            class="card__btn--ok"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  emits: ["addToCart"],
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 278px;
  padding-bottom: 16px;
  border-bottom: 1px solid #00000010;

  @include mobile {
    max-width: 156px;
  }

  &__img-wrapper {
    width: 100%;
    height: 278px;
    margin-bottom: 16px;

    @include mobile {
      height: 156px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 16px;
    line-height: 106%;
    letter-spacing: 0.02em;
    color: var(--color-text);
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: var(--color-text);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 32px;
    background: #7bb899;
    border-radius: 8px;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    transition: transform 0.12s ease-in-out;

    &--ok {
      position: absolute;
      opacity: 0;
      transition: opacity 2s ease-in-out;
    }
    &--plus {
      opacity: 1;
      transition: opacity 5s ease-in-out;
    }

    &:active {
      transform: scale(0.9);

      .card__btn--plus {
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
      }
      .card__btn--ok {
        opacity: 1;
        transition: opacity 0.1s ease-in-out;
      }
    }

    @include mobile {
      width: 50px;
      height: 25px;
    }
  }

  &:hover {
    .card__btn {
      opacity: 1;
    }
  }
}
</style>