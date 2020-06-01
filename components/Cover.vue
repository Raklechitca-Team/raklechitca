<template>
  <div class="cover">
    <h1 class="cover__title">{{ dataTitleBlock.hashtag }}</h1>
    <a class="cover__svg-link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    dataTitleBlock: Object,
  },
};
</script>

<style scoped>
.cover {
  width: 100%;
  min-height: calc(100vh - 77px);
  background: #613a93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cover__title {
  display: flex;
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  position: relative;
}
.cover__svg-link {
  position: absolute;
  margin: 0 auto;
  bottom: 30px;
}
.cover__svg-link:hover {
  cursor: pointer;
}
@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: calc((100vw - 320px) / (1184 - 320) * (78 - 36) + 36px);
  }
}
@media screen and (max-width: 980px) {
  .cover {
    min-height: calc(100vh - 49px);
  }
}
</style>
