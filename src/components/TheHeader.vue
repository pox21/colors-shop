<template>
  <header class="header">
    <div class="container header__container">
      <TheBtnMobileMenu @click="isOpen = !isOpen" :is-open="isOpen" />
      <Teleport to="body">
        <BaseModalBg :is-open="isOpen" @click="isOpen = false" />
      </Teleport>
      <a href="/" class="logo header__logo hover-link">
        <img src="/img/logo.png" alt="Логотип Краски" class="logo__img" />
      </a>
      <TheNav
        class="header__nav"
        :class="isOpen ? 'header__nav--open' : ''"
        :is-mobile="isMobile"
        :action-btns="actionBtns"
        @click="closeMenu"
      />
      <ContactsBlock class="header__contacts" v-if="!isMobile" />
      <HeaderActions
        v-if="!isMobile"
        :is-mobile="isMobile"
        :action-btns="actionBtns"
        @actionActive="openCart"
      />
      <div v-if="isMobile">
        <BaseBtnActions
          :class="cartTotalAmountProducts > 0 ? 'actions-btn--count' : ''"
          name="cart"
          :data-count="
            cartTotalAmountProducts > 99 ? 99 : cartTotalAmountProducts
          "
          @click="$emit('openModalCart')"
        >
        </BaseBtnActions>
      </div>
    </div>
  </header>
</template>

<script>
import TheNav from "./TheNav.vue";
import TheBtnMobileMenu from "./TheBtnMobileMenu.vue";
import ContactsBlock from "./ContactsBlock.vue";
import HeaderActions from "./HeaderActions.vue";
import BaseBtnActions from "./BaseBtnActions.vue";
import BaseModalBg from "./UI/BaseModalBg.vue";
import { mapGetters } from "vuex";

export default {
  emits: ["openModalCart"],
  props: {
    isCartModalOpen: Boolean,
  },
  components: {
    TheNav,
    TheBtnMobileMenu,
    ContactsBlock,
    HeaderActions,
    BaseBtnActions,
    BaseModalBg,
  },
  data() {
    return {
      isOpen: false,
      isMobile: false,
      actionBtns: [
        {
          id: 1,
          name: "search",
        },
        {
          id: 2,
          name: "profile",
        },
        {
          id: 3,
          name: "heart",
        },
        {
          id: 4,
          name: "cart",
          cartOpen: true,
        },
      ],
    };
  },
  methods: {
    openCart($event) {
      if ($event.name === "cart") {
        this.$emit("openModalCart");
      }
    },
    onResize() {
      if (window.innerWidth <= 576) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    closeMenu(e) {
      if (
        !e.target.classList.contains("header__nav") &&
        !e.target.closest(".menu-btn")
      ) {
        this.isOpen = false;
      }
    },
  },
  computed: {
    ...mapGetters(["cartTotalAmountProducts"]),
  },
  watch: {
    cartTotalAmountProducts() {
      this.actionBtns.forEach((item) => {
        if (item.name === "cart") {
          item.count =
            this.cartTotalAmountProducts > 99 ? 99 : this.cartTotalAmountProducts;
        }
      });
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 37px 0;
  background-color: var(--color-bg);

  @include laptop {
    padding: 20px 0;
  }

  &__container {
    display: flex;
    align-items: center;

    @include laptop {
      justify-content: space-between;
    }
  }

  &__logo {
    margin-right: 172px;
    flex-shrink: 0;

    @media (max-width: 1320px) {
      margin-right: 20px;
    }

    @include laptop {
      margin-right: 0;
    }
  }

  &__nav {
    margin-right: auto;
    transition: transform 0.3s ease-in-out;

    @include laptop {
      transform: translateX(-100%);
    }

    &--open {
      @include laptop {
        transform: translateX(0);
      }
    }
  }

  &__contacts {
    margin-right: 116px;
    flex-shrink: 0;

    @include desktop {
      margin-right: 20px;
    }

    @include laptop {
      margin-right: 0;
    }
  }
}

.logo {
  position: relative;
  display: block;
  width: 131px;
  height: 26px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>