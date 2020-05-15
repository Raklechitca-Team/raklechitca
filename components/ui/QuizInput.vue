<template>
  <input
    class="quiz__input"
    type="text"
    minlength="2"
    maxlength="20"
    required
  />
  <!-- не стала здесь minlength, maxlength и required делать пропсами
нужно решить, откуда будем получать (из стора?) и по возможности добавить -->
</template>

<script>
export default {
  name: 'QuizInput',
};
</script>

<style scoped></style>
