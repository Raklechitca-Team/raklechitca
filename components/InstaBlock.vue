<template>
  <div class="insta-story">
    <div class="insta-story__info">
      <h2 class="insta-story__title">Инстаграм</h2>
      <p class="insta-story__prolog">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="insta-story__images">
      <div class="insta-story__image" v-for="el in 8" :key="el"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstaBlock',
};
</script>

<style scoped>
.insta-story {
  padding: 100px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
}

.insta-story__info {
  max-width: 25%;
  flex-direction: column;
}

.insta-story__title {
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 10px;
  text-decoration: underline;
  text-align: left;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.insta-story__prolog {
  text-align: left;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.insta-story__images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  max-width: 74%;
}

.insta-story__image {
  background-color: #ededed;
  height: 195px;
  width: 195px;
}
</style>
