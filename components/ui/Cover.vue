<template>
  <div class="cover">
    <h2 class="cover__title">
      Проект Благотворительного Фонда<br />Константина Хабенского
    </h2>
    <p class="cover__subtitle">#РАКЛЕЧИТСЯ</p>
    <p class="cover__quote">
      Истории людей, победивших рак,<br />но не свои привычки
    </p>
    <p class="cover__excerpt">
      Есть вещи, которые не лечатся.<br />
      Особенности характера, страстные<br />
      увлечения, привычки, ставшие частью<br />
      нашего «я», фобии, которые мы приобрели в<br />
      детстве. Но это точно не рак. Рак лечится.<br />
      Лучшее доказательство — люди с их<br />
      историями.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Cover',
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.cover {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #7a29a3;
}

.cover__title {
  padding-top: 55px;
  margin: auto 0;
  text-align: center;
  width: 100%;
  color: #fff;
  font-weight: 100;
  letter-spacing: 2.5px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Intro', Arial, sans-serif;
}

.cover__subtitle {
  padding-top: 80px;
  margin: auto 0;
  text-align: center;
  width: 100%;
  color: #ffffff;
  font-size: 90px;
  font-weight: 600;
  font-family: 'Intro', Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.cover__quote {
  padding-top: 30px;
  margin: auto 0;
  text-align: center;
  align-self: center;
  width: 100%;
  color: #ffffff;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
  font-family: 'Intro', Arial, sans-serif;
}

.cover__excerpt {
  padding-top: 55px;
  padding-bottom: 70px;
  margin: auto 0;
  text-align: center;
  align-self: center;
  width: 100%;
  color: #ffffff;
  line-height: 26px;
  text-align: center;
  font-family: 'Intro', Arial, sans-serif;
}
</style>
