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
  min-height: calc(100vh - 76px);
  background: #613a93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cover-title__title {
  display: flex;
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  position: relative;
}

.cover-title__svg-link {
  position: absolute;
  bottom: 40px;
}

.cover-title__svg-link:hover {
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .cover-title__title {
    font-size: calc((100vw - 320px) / (1184 - 320) * (78 - 36) + 36px);
  }
}

@media screen and (max-width: 980px) {
  .cover-title {
    min-height: calc(100vh - 49px);
  }
}
</style>
