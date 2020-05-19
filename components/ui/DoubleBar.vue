<template>
  <div>
    <app-miniBar :color="'#e4e1e1'" :value="oldValue" :maxValue="maxValue" />
    <app-miniBar :color="'#613a93'" :value="newValue" :maxValue="maxValue" />
  </div>
</template>

<script>
import miniBar from '@/components/ui/miniBar';
export default {
  components: {
    'app-miniBar': miniBar,
  },
  props: {
    oldValue: Number,
    newValue: Number,
    maxValue: Number,
  },
};
</script>

<style scoped></style>
