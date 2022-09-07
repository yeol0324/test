<template>
  <nav>
    <a @click="turn('AR학습관')">AR학습관</a> |
    <a @click="turn('동화')">동화</a> | <a @click="turn('동요')">동요</a> |
    <a @click="turn('영어')">영어</a>
  </nav>
  <div class="grid grid4">
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
    <div>{{ viewTable }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let viewTable = ref("AR학습관");
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
