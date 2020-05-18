<template>
  <button
    :class="['button', className, { button_disabled: disabled }]"
    @click="handlerClick"
    :disabled="disabled"
  >
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  name: 'QuizButton',
  props: {
    disabled: Boolean,
    className: String,
  },
  methods: {
    handlerClick(e) {
      e.preventDefault();
      if (this.disabled) {
        return;
      }
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 16px;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 16px 90px;
  background-color: #613a93;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button:focus {
  outline: none;
}

.button_disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
