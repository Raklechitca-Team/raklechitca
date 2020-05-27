<template>
  <header class="header">
    <app-sidebar
      v-if="sidebarShown"
      class="header__sidebar"
      @buttonClick="$emit('buttonClick')"
    />
    <app-container>
      <div class="header__container">
        <nuxt-link to="/" class="header__logo">
          {{ header.title }}
        </nuxt-link>
        <div class="header__links">
          <app-menu class="header__menu" />
          <app-main-button class="header__button" @buttonClick="showPopup"
            >Рассказать историю</app-main-button
          >
        </div>
        <button class="header__menu-button" @click="sidebarHandler">
          <app-menu-open
            class="header__icon-open"
            alt="menu"
            v-if="!sidebarShown"
          ></app-menu-open>
          <app-menu-close
            class="header__icon-close"
            alt="close"
            v-if="sidebarShown"
          ></app-menu-close>
        </button>
      </div>
    </app-container>
  </header>
</template>

<script scoped>
import Container from '@/components/Container';
import Sidebar from '@/components/ui/Sidebar';
import Menu from '@/components/ui/Menu';
import MainButton from '@/components/ui/MainButton';
import MenuOpenButton from '@/components/svg/MenuOpenButton';
import CloseButton from '@/components/svg/CloseButton';
export default {
  name: 'Header',
  components: {
    'app-container': Container,
    'app-sidebar': Sidebar,
    'app-menu': Menu,
    'app-main-button': MainButton,
    'app-menu-open': MenuOpenButton,
    'app-menu-close': CloseButton,
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
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
  computed: {
    header() {
      return this.$store.state.blocks.blocks.find(el => el.block === 'header');
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
  z-index: 1;
  justify-content: space-between;
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
  text-decoration: none;
}

.header__logo:hover {
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0s;
}

.header__links {
  display: flex;
}

.header__menu-button {
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

.header__menu-button:focus {
  outline: none;
}

.header__icon-open {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 32px;
  height: 24px;
  margin: auto;
}

.header__icon-close {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  margin: auto;
}

.header /deep/ .main-button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 18px;
  line-height: 24px;
  width: 182px;
  height: 24px;
  font-weight: normal;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 0;
  color: #000;
  border-bottom: 1px solid transparent;
  background-color: transparent;
}

.header__button:hover {
  opacity: 0.8;
  border-bottom: 1px solid #000;
  transition: opacity 0.2s ease-in-out, border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.header__button:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .header__sidebar {
    height: 60px;
    padding: 18px 40px;
  }

  .header__logo {
    line-height: 18px;
  }

  .header /deep/ .main-button {
    font-size: 16px;
    max-width: 162px;
  }
}

@media screen and (min-width: 769px) {
  .header__menu-button {
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

  .header__button {
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

  .header__menu-button {
    width: 26px;
    height: 20px;
  }

  .header__icon-open {
    width: 26px;
    height: 20px;
  }

  .header__icon-close {
    width: 20px;
    height: 20px;
  }

  .header /deep/ .main-button {
    max-width: 152px;
    font-size: 15px;
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
  }

  .header /deep/ .main-button {
    font-size: 13px;
    line-height: 16px;
    max-width: 132px;
  }
}

@media screen and (max-width: 320px) {
  .header__sidebar {
    padding: 18px 15px;
  }
}
</style>
