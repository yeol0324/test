<template>
  <div class="grid4" v-if="viewTable == 'none'">
    <div @click="turn('한글')">한글</div>
    <div @click="turn('영어')">영어</div>
    <div @click="turn('수학')">수학</div>
    <div @click="turn('자탐')">자연탐구</div>
    <div @click="turn('사회')">사회성</div>
    <div @click="turn('창의')">창의</div>
    <div @click="turn('기본')">기본생활</div>
    <div @click="turn('예술')">예술경험</div>
  </div>
  <div class="table" v-if="viewTable !== 'none'">
    <button @click="turn('none')">뒤로가기</button>
    <div>{{ viewTable }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let viewTable = ref("none");
const turn = (e: string) => {
  viewTable.value = e;
};
</script>
<style lang="scss" scoped>
.grid4 {
  > div {
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 50px;
  }
}
</style>
