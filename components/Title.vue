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
  /* Хаз предложил сделать на всю высоту экрана */
  background: #613a93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cover-title__title {
  display: flex;
  /* margin: 290px auto 237px; 
  коммент от Хаза:
  неадекватное использование margin для позиционирования заголовка самого) 
  и отпозиционируете заголовок используя инструменты flex-контейнера, которым является cover-title
  Варя: я предлагаю тогда кнопку может быть абсолютом добавить снизу, нужно подумать здесь*/
  color: #fff;
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
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
/* Варя: добавила здесь, нужно проверить если вдруг хедер по высоте поменяется */

/* коммент Хаза: 
а тут тоже выглядит немного подозрительно. почему высота зависит от ширины?
в обоих случаях здесь vw вместо vh
но я думаю нам уже не особо это актуально, тк высота всей секции изменилась
я закомментирую, но думаю, что можно удалить */
/* @media screen and (max-width: 770px) {
  .cover-title__title {
    height: 101.57vw;
  }
}

@media screen and (max-width: 380px) {
  .cover-title__title {
    height: 150vw;
  }
} */
</style>
