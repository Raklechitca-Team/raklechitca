<template>
  <div class="sidebar">
    <app-menu class="sidebar__menu" @buttonClick="$emit('buttonClick')" />
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
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}

.sidebar__menu {
  align-items: center;
}

@media screen and (max-width: 452px) {
  .sidebar__menu {
    align-items: flex-start;
  }
}
</style>
