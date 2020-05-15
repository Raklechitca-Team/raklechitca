<template>
  <header class="header">
    <container>
      <div class="header__container">
        <p class="header__paragraph">
          Проект Благотворительного Фонда Константина Хабенского
        </p>
        <app-menu class="header__menu" @buttonClick="$emit('buttonClick')" />
        <button class="burger-menu__button">
          <div class="burger-menu__icon" />
        </button>
      </div>
    </container>
    <app-sidebar />
  </header>
</template>

<script scoped>
import Container from '@/components/Container';
import Sidebar from '@/components/ui/Sidebar';
import Overlay from '@/components/ui/Overlay';
import Menu from '@/components/ui/Menu';
export default {
  name: 'Header',
  components: {
    container: Container,
    'app-sidebar': Sidebar,
    overlay: Overlay,
    'app-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
}
.header__container {
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  z-index: 1;
}

@media screen and (max-width: 1280px) {
  .header {
    padding: 0 50px;
  }
  .header__paragraph {
    line-height: 18px;
  }
}
@media screen and (max-width: 980px) {
  .header {
    justify-content: flex-end;
    border: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
  }
  .header__menu {
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
@media screen and (min-width: 981px) {
  .burger-menu__button {
    display: none;
  }
}
.burger-menu__button:focus {
  outline: none;
}
.burger-menu__icon {
  background-image: url('../static/burger-menu.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 22px;
  height: 14px;
  margin: auto;
  align-self: center;
}
</style>
