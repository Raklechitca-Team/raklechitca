<template>
  <header class="header">
    <p class="header__paragraph">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <nav class="menu">
      <a href="/" class="header__link header__link_active">Главная</a>
      <a href="/about" class="header__link">Истории</a>
      <a href="/stories" class="header__link">Рассказать историю</a>
    </nav>
    <nav class="burger-menu">
      <button class="burger-menu__button">
        <img class="burger-menu__icon" src="@/static/burger-menu.svg" />
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
  height: 76px;
  padding: 0 60px;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  margin: 0;
  border: 0;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
}

.menu {
  min-width: 400px;
}

@media screen and (max-width: 979px) {
  .header {
    justify-content: flex-end;
  }

  .menu {
    display: none;
  }

  .header__paragraph {
    display: none;
  }
}

.header__paragraph {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 18px 0px;
  text-align: left;
  max-width: 340px;
  left: 0;
}

.burger-menu {
  right: 20px;
  top: 0;
  align-content: center;
  justify-content: center;
  box-shadow: none;
}

@media screen and (min-width: 980px) {
  .burger-menu {
    display: none;
  }
}

.burger-menu__button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.burger-menu__button:focus {
  outline: none !important;
}

.burger-menu__icon {
  width: 22px;
  height: 14px;
  margin: auto;
  align-self: center;
}

.header__link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: normal;
  color: #000000;
  text-decoration: none;
  margin: 0 40px 0 0;
  cursor: pointer;
  color: #000000;
}

.header__link:last-child {
  margin: 0;
}

.header__link_active {
  text-decoration: none;
  border-bottom: 1px solid #000000;
}

.header__link:hover {
  text-decoration: none;
  color: #582b71;
  opacity: 0.8;
  border-bottom: 1px solid #582b71;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}
</style>
