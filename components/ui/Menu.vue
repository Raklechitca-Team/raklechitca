<template>
  <nav class="menu">
    <nuxt-link
      to="/"
      v-if="$route.path == '/'"
      class="menu__link menu__link_active"
      >Главная</nuxt-link
    >
    <nuxt-link to="/" v-else class="menu__link">Главная</nuxt-link>
    <!-- коммент от Хаза: тут точно можно облегчить, используя условия внутри :style (единственное отличие тут класс) 
    не поняла, как исправить здесь-->
    <nuxt-link
      to="/stories"
      v-if="$route.path == '/stories'"
      class="menu__link menu__link_active"
      >Истории</nuxt-link
    >
    <nuxt-link to="/stories" v-else class="menu__link">Истории</nuxt-link>
    <main-button class="menu__button" @buttonClick="showPopup">
      Рассказать историю
    </main-button>
  </nav>
</template>

<script>
import MainButton from '@/components/ui/MainButton';
export default {
  name: 'Menu',
  components: {
    'main-button': MainButton,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
}

.menu__link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: normal;
  color: #000;
  text-decoration: none;
  margin: 0 40px 0 0;
  cursor: pointer;
  border-bottom: 1px solid transparent;
}

.menu__link_active {
  text-decoration: none;
  border-bottom: 1px solid #000;
}

.menu__link:hover {
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid #000;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.menu /deep/ .main-button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 18px;
  line-height: 24px;
  width: 170px;
  height: 24px;
  font-weight: normal;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 0;
  color: #000;
  border-bottom: 1px solid #fff;
  background-color: transparent;
}

.menu__button:hover {
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid #000;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.menu__button:focus {
  outline: none;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }

  .menu /deep/ .main-button {
    font-size: 16px;
    max-width: 162px;
  }
}

@media screen and (max-width: 1024px) {
  .menu__link {
    margin: 0 30px 0 0;
  }

  .menu /deep/ .main-button {
    max-width: 150px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .menu__link {
    margin: 0 30px 0 0;
  }
}

@media screen and (max-width: 452px) {
  .menu {
    flex-direction: column;
    align-items: flex-start;
    align-content: space-between;
  }

  .menu__link {
    margin: 0 0 10px;
    font-size: 15px;
    line-height: 16px;
  }

  .menu /deep/ .main-button {
    max-width: 142px;
    font-size: 15px;
  }
}

@media screen and (max-width: 340px) {
  .menu {
    flex-direction: column;
    align-items: flex-start;
    align-content: space-between;
  }

  .menu__link {
    margin: 0 0 18px;
    font-size: 13px;
    line-height: 16px;
  }

  .menu /deep/ .main-button {
    font-size: 13px;
    line-height: 16px;
    max-width: 122px;
  }
}
</style>
