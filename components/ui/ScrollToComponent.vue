<template>
  <span ref="component">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'scroll-to-component',
  props: {
    alignToTop: {
      required: false,
      default: null,
      type: Boolean,
    },
    options: {
      required: false,
      default: null,
      type: Object,
    },
  },
  methods: {
    scrollTo() {
      this.$refs.component.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
