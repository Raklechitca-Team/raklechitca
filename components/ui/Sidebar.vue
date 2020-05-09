<template>
  <div class="sidebar">
    <a href="/" class="sidebar__link">Главная</a>
    <a href="/stories/index" class="sidebar__link">Истории</a>
    <a href="/stories" class="sidebar__link">Рассказать историю</a>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  display: flex;
  top: 0;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  max-width: 250px;
  height: 100vh;
  padding: 40px 40px;
  position: fixed;
  align-content: flex-start;
  text-align: right;
  display: none;
  z-index: 2;
}

@media screen and (min-width: 980px) {
  .sidebar {
    display: none;
  }
}

.sidebar__link {
  align-self: flex-end;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: normal;
  color: #000000;
  text-decoration: none;
  margin: 0 0 20px;
  cursor: pointer;
  color: #000000;
}

.sidebar__link:hover {
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0s;
}
</style>
