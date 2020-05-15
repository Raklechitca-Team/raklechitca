<template>
  <button
    :class="['button', className, { button__disabled: disabled }]"
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
}
.quiz__buttons {
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  position: absolute;
  bottom: 40px;
  margin: 0;
  width: 334px;
}

.quiz /deep/ .quiz__button_back {
  margin: 16px 30px;
  color: #c0c0c0;
  padding: 0;
}

.quiz /deep/ .quiz__button_back:focus {
  outline: none !important;
}

.quiz /deep/ .quiz__button_next {
  width: 226px;
  height: 52px;
  background-color: #613a93;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz /deep/ .quiz__button_next:focus {
  outline: none !important;
}
</style>
