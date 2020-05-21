<template>
  <div class="video-iframe__container">
    <iframe
      class="video-iframe"
      :src="src"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoIframe',
  props: {
    src: String,
  },
};
</script>

<style scoped>
.video-iframe__container {
  border: 0;
}
.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
