<template>
  <div class="video-iframe">
    <iframe
      width="867"
      height="450"
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
.video-iframe {
  border: none;
}
</style>
