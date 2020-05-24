<template>
  <app-container class="sidebar">
    <app-menu class="sidebar__menu" @buttonClick="$emit('buttonClick')" />
    <main-button class="header__button" @buttonClick="showPopup"
      >Рассказать историю</main-button
    >
  </app-container>
</template>

<script>
import Menu from '@/components/ui/Menu';
import MainButton from '@/components/ui/MainButton';
import Container from '@/components/Container';
export default {
  name: 'Sidebar',
  components: {
    'app-menu': Menu,
    'main-button': MainButton,
    'app-container': Container,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}

.sidebar__menu {
  align-items: center;
}

@media screen and (min-width: 769px) {
  .sidebar {
    display: none;
  }
}

@media screen and (max-width: 452px) {
  .sidebar {
    flex-direction: column;
  }

  .sidebar__menu {
    align-items: flex-start;
  }
}
</style>
