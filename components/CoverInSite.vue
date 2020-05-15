<template>
  <div class="cover__background">
    <container>
      <h2 class="cover__title">
        {{ text }}<span class="cover__title_bold"> #ЭТОНЕЛЕЧИТСЯ</span>
      </h2>
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container';
export default {
  name: 'Cover_in_site',
  props: ['text'],
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.cover__background {
  font-family: 'Inter', 'Arial', sans-serif;
  width: 100%;
  background-color: #613a93;
  color: #ffffff;
}

.cover__title {
  max-width: 750px;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
}

.cover__title_bold {
  font-weight: bold;
}
</style>
