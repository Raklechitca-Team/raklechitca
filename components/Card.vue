<template>
  <a class="card">
    <div class="card__image-wrapper">
      <div class="card__image"></div>
    </div>
    <h3 class="card__title">Татьяна Полетаева</h3>
    <p class="card__subtitle">
      Я всегда стремлюсь получать новые знания, и это не лечится,
    </p>
    <p class="card__subtitle">в отличие от рака</p>
    <date class="card__date">17.04.2020</date>
    <p class="card__learn-more">Читать всю историю &rarr;</p>
  </a>
</template>

<script></script>

<style scoped>
.card {
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  font-family: Arial;
  /* вообще Intro, но не стала подключать, может поменяется в макете */
  text-align: left;
}
.card__image-wrapper {
  width: 100%;
  height: 260px;
  margin-bottom: 20px;
}
.card__image {
  height: 100%;
  background-image: url('../images/IMG-20200414-WA0010.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card__title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.35;
}
.card__subtitle {
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  line-height: 1.55;
}
.card__date {
  margin-top: 15px;
  font-size: 10px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.5);
}
.card__learn-more {
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
}
</style>
