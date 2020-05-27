<template>
  <input
    :class="['input', className, { 'inpput_bottom-bordered': bottomBordered }]"
    :type="type"
    v-model="content"
    @input="handleInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'QuizInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    bottomBordered: Boolean,
    placeholder: String,
    className: String,
    type: {
      type: String,
      default: 'text',
      validator: value =>
        'text|number|email|password|search|url|tel'.split('|').indexOf(value) >
        -1,
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, prevVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped></style>
