<template>
  <div class="award-wrap">
    <div class="grid grid2">
      <div>보유</div>
      <div>사용</div>
    </div>
    <div class="area_b">
      <nav>
        <button>오늘</button>
        <button>이번주</button>
        <button>이번달</button>
        <button>전체</button>
      </nav>
      <div class="">
        <li>학습</li>
        <li>출석</li>
        <li>칭찬</li>
        <li>아이템교환</li>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.award-wrap {
  .grid2 {
    > div {
      height: 200px;
      border: 1px solid #ddd;
      border-radius: 50px;
    }
  }
}
</style>
