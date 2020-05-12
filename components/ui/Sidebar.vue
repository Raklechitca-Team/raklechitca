<template>
  <div class="sidebar">
    <app-menu class="sidebar__menu" />
  </div>
</template>

<script>
import Menu from '@/components/ui/Menu';
export default {
  name: 'Sidebar',
  components: {
    'app-menu': Menu,
  },
};
</script>

<style scoped>
.sidebar {
  top: 0;
  background-color: #fff;
  max-width: 250px;
  height: 100vh;
  padding: 40px 40px;
  position: fixed;
  /* display: none; */
  z-index: 2;
}

.sidebar__menu {
  width: 170px;
}

@media screen and (min-width: 981px) {
  .sidebar {
    display: none;
  }
}
</style>
