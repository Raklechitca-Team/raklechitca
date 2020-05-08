<template>
  <div class="video">
    <h3 class="video__heading">
      Истории людей, победивших рак, но не свои привычки
    </h3>
    <p class="video__text">
      Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
      страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
      их историями.
    </p>
    <app-video-iframe class="video__clip" />
    <p class="video__subtitle">
      Все видео вы можете найте на нашем YouTube канале.
    </p>
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

<style scoped></style>
