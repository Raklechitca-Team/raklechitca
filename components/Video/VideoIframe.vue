<template>
  <div class="video-iframe__container">
    <iframe
      class="video-iframe"
      src="https://www.youtube.com/embed/coOppM34GtI"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoIframe',
};
</script>

<style scoped>
.video-iframe__container {
  border: 0;
}
.video-iframe {
  width: 867px;
  height: 450px;
}
</style>
