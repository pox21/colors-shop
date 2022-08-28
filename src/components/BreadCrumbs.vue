<template>
  <div class="bread-crumbs">
    <ul class="bread-crumbs__list">
      <li class="bread-crumbs__item" v-for="item in list" :key="item.id">
        <a :href="item.link" class="bread-crumbs__link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "Главная",
          link: "#",
        },
        {
          id: 2,
          title: "Продукты",
          link: "#",
        },
        {
          id: 3,
          title: "Краски",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid transparent;

  @include mobile {
    padding-top: 16px;
    padding-bottom: 16px;
    border-top: 1px solid #1f202060;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 21px;
    margin: 0;
    padding: 0;
  }

  &__item {
    opacity: 0.3;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    &:first-child::marker {
      content: "";
      color: transparent;
    }
  }

  &__link {
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &--light {
    .bread-crumbs__link {
      color: var(--color-light-text);
    }
    .bread-crumbs__item::marker {
      color: #fff;
    }
  }

  &--dark {
    .bread-crumbs__link {
      color: var(--color-text);
    }
    .bread-crumbs__item::marker:not(:first-child) {
      color: var(--color-text);
    }
  }
}
</style>