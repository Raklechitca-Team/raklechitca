<template>
  <div class="video">
    <div class="video__text-container">
      <h3 class="video__title">
        Истории людей, победивших рак, но не свои привычки
      </h3>
      <p class="video__subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <div class="video__arrows">
        <button class="video__arrow">
          <img class="video__arrow_image" src="@/static/arrow-left.svg" />
        </button>
        <button class="video__arrow">
          <img class="video__arrow_image" src="@/static/arrow-right.svg" />
        </button>
      </div>
    </div>

    <div class="video__container">
      <div class="video__cap">
        <img class="video__cap_ellipse" src="@/static/ellipse.svg" />
      </div>
      <app-video-iframe class="video__clip" />
      <p class="video__paragraph">
        Все видео вы можете найте на нашем
        <a
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          class="video__paragraph_link"
          target="_blank"
          >YouTube канале</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import VideoIframe from '@/components/ui/VideoIframe';
export default {
  name: 'Video',
  components: {
    'app-video-iframe': VideoIframe,
  },
};
</script>

<style scoped>
.video {
  display: flex;
  padding: 100px 60px 74px;
  justify-content: space-between;
}

.video__text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.video__title {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 413px;
  width: 100%;
  text-align: left;
}

.video__subtitle {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  max-width: 340px;
  width: 100%;
  text-align: left;
  margin: 32px 0 0;
}

.video__arrows {
  display: flex;
  align-self: flex-start;
  margin: 155px 0 0;
  width: 80px;
}

.video__arrow {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  border: none;
  margin: 0;
  cursor: pointer;
}

.video__arrow:focus {
  outline: none;
}

.video__cap {
  width: 867px;
  height: 450px;
  background: #ededed;
  position: absolute;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.video__cap_ellipse {
  width: 90px;
  height: 90px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

.video__cap_ellipse:hover {
  transform: scale(1.2, 1.2);
}

.video__clip {
  width: 867px;
  height: 450px;
}

.video__paragraph {
  font-family: 'Inter', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  width: 100%;
  text-align: left;
  margin: 10px 0 0;
}

.video__paragraph_link {
  color: #666666;
}

@media screen and (max-width: 1280px) {
}
</style>
