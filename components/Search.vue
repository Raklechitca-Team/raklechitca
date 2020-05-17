<template>
  <!-- Варя: поправила здесь верстку и убрала отсюда заголовок
нужно допроверить, нет ли конфликтов в стилях main-button и стилей в history__search-button
я исправила кое-что, но нужно еще взглянуть тому, кто делал -->
  <section class="history">
    <div class="history__search">
      <input type="text" class="history__search-input" />
      <main-button class="history__search-button">Поиск</main-button>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/ui/MainButton';
export default {
  name: 'app-search',
  components: {
    'main-button': MainButton,
  },
};
</script>

<style scoped>
.history {
  max-width: 1320px;
  margin: 0 auto;
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
  font-family: 'Inter', 'Arial', sans-serif;
  width: 226px;
  border: none;
  cursor: pointer;
  background-color: #613a93;
  padding: 0;
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
