<template>
  <nav class="nav">
    <ul class="nav__list list-reset">
      <NavItem
        v-for="navItem in navItems"
        :link="navItem.link"
        :value="navItem.value"
        :key="navItem.id"
      />
    </ul>
    <ContactsBlock v-if="isMobile" />
    <HeaderActions v-if="isMobile" :action-btns="actionBtns" />
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";
import ContactsBlock from "./ContactsBlock.vue";
import HeaderActions from "./HeaderActions.vue";
export default {
  components: { NavItem, ContactsBlock, HeaderActions },
  props: {
    isMobile: Boolean,
    actionBtns: Array,
  },
  data() {
    return {
      navItems: [
        {
          id: 1,
          link: "#",
          value: "Продукты",
        },
        {
          id: 2,
          link: "#",
          value: "Цвета",
        },
        {
          id: 3,
          link: "#",
          value: "Вдохновение",
        },
        {
          id: 4,
          link: "#",
          value: "Советы",
        },
        {
          id: 5,
          link: "#",
          value: "Найти магазин",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 24px;
    max-width: 600px;

    overflow: auto;

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    ::-webkit-scrollbar {
      width: 0;
    }

    @include laptop {
      padding: 10px 0;
      flex-direction: column;
      align-items: stretch;
    }
  }

  @include laptop {
    width: 320px;
    min-height: 100vh;
    padding-top: 50px;
    background-color: var(--color-bg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    box-shadow: 0 0 5px 1px #00000050;
  }

  @include mobile {
    width: 80%;
  }
}
</style>