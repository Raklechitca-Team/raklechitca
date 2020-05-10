<template>
  <div>
    <app-header />
    <h1>Story {{ $route.params.id }}</h1>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: '_id',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
  // async asyncData({$axios, params}) {
  //   // const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
  //   return {user}
  // },
};
</script>

<style scoped></style>
