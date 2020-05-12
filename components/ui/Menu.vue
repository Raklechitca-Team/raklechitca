<template>
  <nav class="menu">
    <nuxt-link
      to="/"
      v-if="$route.path == '/'"
      class="menu__link menu__link_active"
      >Главная</nuxt-link
    >
    <nuxt-link to="/" v-else class="menu__link">Главная</nuxt-link>
    <nuxt-link
      to="/stories/index"
      v-if="$route.path == '/stories/index'"
      class="menu__link menu__link_active"
      >Истории</nuxt-link
    >
    <nuxt-link to="/stories/index" v-else class="menu__link">Истории</nuxt-link>
    <button class="menu__button" @click="$emit('buttonClick')">
      Рассказать историю
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  min-width: 410px;
}

.menu__link {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: normal;
  color: #000000;
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

.menu__link:last-child {
  margin: 0;
}

.menu__link_active {
  text-decoration: none;
  border-bottom: 1px solid #000000;
}

.menu__link:hover {
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid #000000;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.menu__button {
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 0;
  color: #000000;
  border-bottom: 1px solid #fff;
}

.menu__button:hover {
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid #000000;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

.menu__button:focus {
  outline: none !important;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 980px) {
  .menu {
    flex-direction: column;
    min-width: 170px;
  }

  .menu__link {
    margin: 0 0 20px;
    align-self: flex-end;
    line-height: 24px;
    letter-spacing: normal;
  }

  .menu__button {
    text-align: right;
  }
}
</style>
