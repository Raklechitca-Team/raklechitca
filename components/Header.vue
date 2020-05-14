<template>
  <header class="header">
    <app-sidebar
      v-if="sidebarShown"
      class="header__sidebar"
      @buttonClick="$emit('buttonClick')"
    />
    <div class="header__container">
      <p class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <app-menu class="header__menu" @buttonClick="$emit('buttonClick')" />
      <button class="burger-menu__button" @click="sidebarHandler">
        <img
          class="burger-menu__icon"
          alt="burger-menu"
          src="@/static/burger-menu.svg"
          v-if="!sidebarShown"
        />
        <img
          class="burger-menu__close"
          alt="burger-menu_close"
          src="@/static/x.svg"
          v-if="sidebarShown"
        />
      </button>
    </div>
  </header>
</template>

<script scoped>
import Sidebar from '@/components/ui/Sidebar';
import Overlay from '@/components/ui/Overlay';
import Menu from '@/components/ui/Menu';
export default {
  name: 'Header',
  components: {
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
  background-color: #ffffff;
  padding: 0;
  border-bottom: 1px solid #efefef;
}

.header__sidebar {
  margin: 0;
  padding: 18px 50px;
  height: 60px;
}

.header__container {
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  max-width: 1440px;
}

.header__logo {
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
  outline: none !important;
}

.burger-menu__icon {
  width: 32px;
  height: 24px;
  align-self: center;
}

.burger-menu__close {
  width: 25px;
  height: 25px;
  align-self: center;
}

@media screen and (max-width: 1280px) {
  .header {
    border-bottom: 0;
  }

  .header__container {
    padding: 0 50px;
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
  .header__container {
    padding: 0 20px;
  }

  .header__sidebar {
    height: 120px;
    padding: 18px 20px;
  }
}

@media screen and (max-width: 340px) {
  .header__container {
    padding: 0 15px;
  }

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
