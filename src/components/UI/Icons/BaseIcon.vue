<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  >
  </svg>
</template>

<script>
import icons from './icons';
export default {
  props: {
    name: String,
  },
  data() {
    return {
      path: icons[this.name],
    };
  },
}
</script>