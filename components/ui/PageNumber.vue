<template>
  <div>
    <div class="page__numbers">
      <div class="page__number">1</div>
      <div class="page__number">2</div>
      <div class="page__number">3</div>
      <div class="page__number">4</div>
      <div class="page__number">5</div>
      <div class="page__number">6</div>
      <div class="page__number">7</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page__numbers {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 100px;
}
.page__number {
  width: 50px;
  height: 50px;
  background: #fbfbfb;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.page__numbers:last-child {
  margin-right: 0;
}
.page__number:hover {
  background-color: #f4f4f4;
}
</style>
