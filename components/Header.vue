<template>
  <header class="header">
    <app-sidebar
      v-if="sidebarShown"
      class="header__sidebar"
      @buttonClick="$emit('buttonClick')"
    />
    <app-container>
      <div class="header__container">
        <p class="header__logo">
          Проект Благотворительного Фонда Константина Хабенского
        </p>
        <app-menu class="header__menu" />
        <button class="burger-menu__button" @click="sidebarHandler">
          <div class="burger-menu__icon" alt="menu" v-if="!sidebarShown"></div>
          <div class="burger-menu__close" alt="close" v-if="sidebarShown"></div>
        </button>
      </div>
    </app-container>
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
    'app-container': Container,
    'app-sidebar': Sidebar,
    overlay: Overlay,
    'app-menu': Menu,
  },
  data() {
    return {
      sidebarShown: false,
    };
  },
  methods: {
    sidebarHandler() {
      this.sidebarShown = !this.sidebarShown;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}

.header__container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.header__logo {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000;
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
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: none;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
}

.burger-menu__button:focus {
  outline: none;
}

.burger-menu__icon {
  background-image: url('../static/burger-menu.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 32px;
  height: 24px;
  margin: auto;
}

.burger-menu__close {
  background-image: url('../static/x.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  margin: auto;
}

@media screen and (max-width: 1280px) {
  .header__sidebar {
    height: 60px;
    padding: 18px 40px;
  }

  .header__logo {
    line-height: 18px;
  }
}

@media screen and (min-width: 769px) {
  .burger-menu__button {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header__sidebar {
    height: 60px;
    padding: 18px 40px;
  }

  .header__container {
    justify-content: space-between;
  }

  .header__menu {
    display: none;
  }
}

@media screen and (max-width: 452px) {
  .header__sidebar {
    height: 120px;
    padding: 18px 40px;
  }

  .header__logo {
    font-size: 14px;
    line-height: 16px;
  }

  .burger-menu__button {
    width: 26px;
    height: 20px;
  }

  .burger-menu__icon {
    width: 26px;
    height: 20px;
  }

  .burger-menu__close {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 418px) {
  .header__sidebar {
    height: 120px;
    padding: 18px 40px;
  }
}

@media screen and (max-width: 340px) {
  .header__logo {
    font-size: 12px;
    line-height: 14px;
  }

  .header__sidebar {
    height: 120px;
    padding: 18px 15px;
  }
}
</style>
