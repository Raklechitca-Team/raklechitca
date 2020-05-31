<template>
  <nuxt-link to="/stories" class="more-articles">Больше статей</nuxt-link>
</template>

<script></script>

<style scoped>
.more-articles {
  text-decoration: none;
  font-weight: normal;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  padding: 31px;
  margin: 0 auto;
  display: block;
  text-align: center;
  background-color: #fbfbfb;
  transition: all 0.3s ease-in-out;
}
.more-articles:hover {
  background-color: #f8f8f8;
}
@media screen and (max-width: 1280px) {
  .more-articles {
    margin: 60px auto 90px;
    padding: 29px;
  }
}
@media screen and (max-width: 1024px) {
  .more-articles {
    font-size: 13px;
    line-height: 20px;
    padding: 17px;
    margin: 46px 0 80px;
  }
}
@media screen and (max-width: 768px) {
  .more-articles {
    font-size: 13px;
    line-height: 16px;
    width: 100%;
    margin: 40px auto 80px;
  }
}
@media screen and (max-width: 320px) {
  .more-articles {
    margin: 40px auto 50px;
  }
}
</style>
