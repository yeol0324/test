<template>
  <div>test</div>
  <Calendar
    isExpanded
    class="custom-calendar max-w-full"
    :masks="{ title: 'YYYY년 MMMM' }"
    :minDate="new Date('2022-02-20')"
    :maxDate="new Date('2022-09-20')"
    :first-day-of-week="2"
    :attributes="attributes2"
    :disabled-dates="{ start: new Date(), end: null }"
    disable-page-swipe
  >
  </Calendar>
</template>
<style lang="scss">
.custom-calendar.vc-container {
  border: none;
  height: fit-content;
  margin-bottom: 80px;
  --day-border: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  // border-radius: 0;
  width: 100%;
  .vc-arrows-container {
    justify-content: space-evenly;
  }
  & .vc-header {
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
    border: 1px solid #ddd;
    // height: 100%;
    & .vc-weekday {
      background-color: var(--weekday-bg);
      border-bottom: var(--weekday-border);
      border-top: var(--weekday-border);
      padding: 5px 0;
    }
    & .vc-day {
      text-align: left;
      height: 90px;
      min-width: var(--day-width);
      background-color: white;
      // &.weekday-1,
      // &.weekday-7 {
      //   background-color: #eff8ff;
      // }
      justify-content: flex-start;
      align-items: flex-start;
      &.is-today {
        > div {
          background: yellow !important;
        }
      }
      // 시간표
      > div {
        background: yellowgreen;
        height: 100%;
        &.disabled {
          background: none;
        }
        > div {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          > p {
            width: 50px;
            border-radius: 50px;
            &.yet {
              background: gray;
            }
            &.complete {
              background: yellow;
            }
          }
        }
      }
      // 출석부
      .vc-day-box-center-bottom {
        align-items: center;
        .vc-dot {
          height: 70px;
          width: 70px;
        }
      }
      // }
      &:not(.on-bottom) {
        border-bottom: var(--day-border);
      }
      &:not(.on-right) {
        border-right: var(--day-border);
      }
    }
  }
}
</style>
<script setup lang="ts">
// calender
import { Calendar } from "v-calendar";
import "v-calendar/dist/style.css";

const attributes = [
  {
    dot: true,
    dates: [
      new Date(2022, 7, 1), // Jan 1st
      new Date(2022, 7, 10), // Jan 10th
      new Date(2022, 7, 22), // Jan 22nd
    ],
  },
];
const getSbjCode = (Code: string) => {
  switch (Code) {
    case "M":
      return "수학";
    case "E":
      return "영어";
    case "K":
      return "한글";
  }
};
const month = new Date().getMonth();
const year = new Date().getFullYear();
const attributes2 = [
  {
    key: 1,
    customData: {
      title: getSbjCode("M"),
      class: "complete",
    },
    dates: new Date(year, month, 1),
  },
  {
    key: 2,
    customData: {
      title: getSbjCode("M"),
      class: "complete",
    },
    dates: new Date(year, month, 1),
  },
  {
    key: 3,
    customData: {
      title: getSbjCode("M"),
      class: "notyet",
    },
    dates: new Date(year, month, 1),
  },
];
</script>
