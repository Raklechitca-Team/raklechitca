<template>
  <section class="history">
    <h1 class="history__title">Истории неизлечимых привычек</h1>
    <div class="history__search">
      <input type="text" class="history__search-input" />
      <button class="history__search-button">Поиск</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-search',
};
</script>

<style scoped>
.history {
  max-width: 1320px;
  margin: 100px auto 0;
}

.history__title {
  max-width: 400px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.history__search {
  max-width: 1320px;
  margin: 60px auto 0;
  display: flex;
}

.history__search-input {
  width: 1074px;
  line-height: 50px;
  font-size: 24px;
  padding: 0;
  margin: 0 20px 0 0;
  border: 1px solid #e8e8e8;
}

.history__search-button {
  font-family: 'Inter', Arial, sans-serif;
  width: 226px;
  border: none;
  cursor: pointer;
  background-color: #613a93;
  padding: 16px 80px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  transition: 0.2s linear;
}

.history__search-button:hover,
.history__search-button:focus {
  opacity: 0.9;
  transition: 0.2s linear;
  outline: none;
}
</style>
