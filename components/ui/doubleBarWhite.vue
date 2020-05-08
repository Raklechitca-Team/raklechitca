//<div class="statistics__bar-value half-staus-bar" :style="style"></div>
<template>
    <div>
        <div class="statistics__bar half-staus-bar" :style="style"></div>
    </div>
</template>

<script>
    export default {
        name: 'fullBar',
        props: {
            value: Number,
            maxValue: Number
        },
        computed: {
            style() {
                return `width: ${this.value / this.maxValue * 100}%`
            }
        }
    }
</script>

<style scoped>
.statistics__bar {
  background-color: #e4e1e1;
}
.half-staus-bar {
  height: 20px;
}
</style>
