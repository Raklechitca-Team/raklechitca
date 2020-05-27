<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="$emit('closeClick')"
  >
    <path
      d="M0.928862 0.928879L15.071 15.071M0.928711 15.071L15.0708 0.928833"
      stroke="black"
      stroke-width="2"
    />
  </svg>
</template>

<script>
export default {
  name: 'close-button',
};
</script>

<style scoped></style>
