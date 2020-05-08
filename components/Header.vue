<template>
  <header class="header">
    <p class="header__paragraph">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <nav class="menu">
      <nuxt-link to="/" class="header__link header__link_active"
        >Главная</nuxt-link
      >
      <nuxt-link to="/stories/index" class="header__link">Истории</nuxt-link>
      <nuxt-link to="/" class="header__link">Рассказать историю</nuxt-link>
    </nav>
    <button class="burger-menu__button">
      <img class="burger-menu__icon" src="@/static/burger-menu.svg" />
    </button>
    <app-sidebar />
    <app-overlay />
  </header>
</template>

<script>
import Sidebar from '@/components/ui/Sidebar';
import Overlay from '@/components/ui/Overlay';
export default {
  name: 'Header',
  components: {
    'app-sidebar': Sidebar,
    'app-overlay': Overlay,
  },
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
  z-index: 1;
}
.menu {
  min-width: 400px;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
  .header__paragraph {
    line-height: 18px;
  }
  .header__link {
    font-size: 16px;
  }
}
@media screen and (max-width: 979px) {
  .header {
    justify-content: flex-end;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
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
.burger-menu__button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-content: center;
  box-shadow: none;
  margin-left: 50px;
}
@media screen and (min-width: 980px) {
  .burger-menu__button {
    display: none;
  }
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
