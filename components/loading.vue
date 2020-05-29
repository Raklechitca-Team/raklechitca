<template>
  <div class="wrapper" v-if="loading">
    <span class="loader">
      <span class="loader-inner"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SquareFill',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 4px solid #807292;
  animation: loader 2s infinite ease-in;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #807292;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>
