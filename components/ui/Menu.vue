<template>
  <nav class="menu">
    <ul class="menu__links">
      <li class="menu__links-list-item">
        <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      </li>
      <li class="menu__links-list-item">
        <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
      </li>
    </ul>
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
}

.menu__links {
  list-style-type: none;
  display: flex;
  padding: 0;
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

.menu__link.nuxt-link-exact-active {
  border-bottom: 1px solid #000;
}

.menu__link:hover {
  text-decoration: none;
  opacity: 0.8;
  border-bottom: 1px solid #000;
  transition: color 0.3s ease-in-out, opacity 0.2s ease-in-out,
    border-bottom 0.1s ease-in-out;
  transition-delay: 0s;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .menu__link {
    margin: 0 30px 0 0;
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

  .menu__links {
    flex-direction: column;
  }

  .menu__links-list-item {
    margin: 0 0 10px;
  }

  .menu__link {
    font-size: 16px;
  }
}

@media screen and (max-width: 320px) {
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
}
</style>
