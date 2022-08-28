<template>
  <li class="nav__item">
    <a :href="link" class="nav__link hover-link">{{ value }}</a>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.nav__link {
  display: block;
  position: relative;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1f2020;
  white-space: nowrap;

  @include laptop {
    padding: 5px 15px;
  }
}
</style>