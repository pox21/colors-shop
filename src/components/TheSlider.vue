<template>
  <swiper
    class="slider"
    :modules="modules"
    :slides-per-view="1"
    :pagination="paginateOption"
    :navigation="navigateOption"
    :autoplay="autoplayOption"
  >
    <swiper-slide v-for="item in items" :key="item.id">
      <div class="slide">
        <h2 class="slide__title">{{ item.title }}</h2>
        <p class="slide__text">
          {{ item.text }}
        </p>
      </div>
    </swiper-slide>
    <div class="buttons">
      <button class="btn-slide prev-slide btn-reset" type="button"></button>
      <button class="btn-slide next-slide btn-reset" type="button"></button>
    </div>
    <div class="slider-pagination">
      <button class="slider-pagination__bullet" type="button"></button>
    </div>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import BaseIcon from "./UI/Icons/BaseIcon.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BaseIcon,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      paginateOption: {
        el: ".slider-pagination",
        type: "bullets",
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet--active",
        bulletElement: "button",
        clickable: true,
      },
      navigateOption: {
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      },
      autoplayOption: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.slider {
  padding-top: 138px;
  padding-bottom: 40px;

  @include tablet {
    padding-top: 40px;
  }

  @include mobile {
    display: none;
  }
}

.slide {
  max-width: 472px;
  margin: 0 auto;
  text-align: center;

  &__title {
    margin-top: 0;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 72px;
    line-height: 88%;
    letter-spacing: -0.02em;
    color: var(--color-light-text);

    @include tablet {
      font-size: 44px;
    }
  }
  &__text {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: var(--color-light-text);

    @include tablet {
      // font-size: 44px;
    }
  }
}

.buttons {
  display: flex;
  align-items: center;
  max-width: 966px;
  margin: 0 auto;
  margin-bottom: 75px;
}

.btn-slide {
  width: 80px;
  height: 80px;
  color: var(--color-light-text);
  background-image: url("/img/right-arrow.svg");
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: center;

  &:disabled {
    display: none;
  }
}

.prev-slide {
  margin-right: auto;
  transform: rotate(-180deg);
}
.next-slide {
  margin-left: auto;
}

.slider-pagination {
  margin: 0 auto;
  max-width: fit-content;
  display: flex;
  align-items: center;
  padding: 13px 24px;
  gap: 10px;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;

  &__bullet {
    padding: 0;
    width: 6px;
    height: 6px;
    background-color: var(--color-bg);
    border: none;
    border-radius: 100%;
    flex-shrink: 0;
    cursor: pointer;
    opacity: 0.2;
    transition: opactiy 0.2s ease-in-out;

    &--active {
      opacity: 1;
    }
  }
}
</style>