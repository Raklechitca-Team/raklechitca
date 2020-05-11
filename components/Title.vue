<template>
  <div class="cover-title">
    <h1 class="cover-title__title">#РАКЛЕЧИТСЯ</h1>
    <a class="cover-title__svg-link"
      ><img class="cover-title__svg-down" src="/arrow-down.svg"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style scoped>
.cover-title {
  width: 100%;
  background: #613a93;
}
.cover-title__title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vw;
  margin: 0 auto;
  color: #fff;
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
}

.cover-title__svg-down {
  padding-bottom: 1%;
}

.cover-title__svg-link:hover {
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .cover-title__title {
    font-size: calc((100vw - 320px) / (1184 - 320) * (78 - 36) + 36px);
  }
}

@media screen and (max-width: 770px) {
  .cover-title__title {
    height: 101.57vw;
  }
}

@media screen and (max-width: 380px) {
  .cover-title__title {
    height: 150vw;
  }
}
</style>
