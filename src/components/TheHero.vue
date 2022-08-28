<template>
  <section class="hero">
    <div class="container">
      <BreadCrumbs
        :class="isMobile ? 'bread-crumbs--dark' : 'bread-crumbs--light'"
      />
      <h1 class="title" :class="isMobile ? '' : 'visually-hidden'">Краски</h1>
      <TheSlider :items="slideList" />
    </div>
  </section>
</template>

<script>
import TheSlider from "./TheSlider.vue";
import BreadCrumbs from "./BreadCrumbs.vue";
export default {
  components: { TheSlider, BreadCrumbs },
  data() {
    return {
      isMobile: false,
      slideList: [
        {
          id: 1,
          title: "Краски",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: 2,
          title: "Краски 2",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: 3,
          title: "Краски 3",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: 4,
          title: "Краски 4",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: 5,
          title: "Краски 5",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: 6,
          title: "Краски 6",
          text: "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
      ],
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 576) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  max-width: 1920px;
  margin: 0 auto;
  background-image: url("/img/bg-image2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 560px;
  background-color: #4b5754;

  @include tablet {
    min-height: auto;
  }

  @include mobile {
    background: none;
  }
}
</style>