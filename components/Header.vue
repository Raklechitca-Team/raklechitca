<template>
  <header class="header">
    <nav class="menu">
      <a href="/" class="header__link header__link_active">ГЛАВНАЯ</a>
      <a href="/about" class="header__link">О ПРОЕКТЕ</a>
      <a href="/stories" class="header__link">ИСТОРИИ</a>
      <button href="" class=" button header__button">
        Рассказать свою историю
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  max-width: 1440px;
  width: 100%;
  height: 7vh;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  justify-content: flex-end;
}

@media screen and (max-width: 980px) {
  .header {
    display: none;
  }
}

.menu {
  width: 697px;
}

.header__link {
  font-family: 'Intro', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  text-decoration: none;
  margin: 0 25px 0;
  cursor: pointer;
}

.header__link_active {
  text-decoration: none;
  color: #582b71;
  opacity: 0.8;
  border-bottom: 2px solid #582b71;
  font-weight: 600;
}

.header__link:hover {
  text-decoration: none;
  color: #582b71;
  opacity: 0.8;
  border-bottom: 2px solid #582b71;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.header__button {
  display: inline-block;
  height: 40px;
  width: 247px;
  text-align: center;
  font-family: 'Intro', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  text-decoration: none;
  margin: 3px 30px 3px 40px;
  padding: 0 30px;
  border: 3px solid white;
  background-color: #582b71;
  cursor: pointer;
}

.header__button:focus {
  outline: none !important;
}

.header__button:hover {
  background-color: white;
  border: 3px solid #582b71;
  color: #582b71;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
}
</style>
