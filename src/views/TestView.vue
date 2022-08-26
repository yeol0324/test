<template>
  <div>test</div>
  <Calendar
    isExpanded
    :masks="{ title: 'YYYY년 MMMM' }"
    :minDate="new Date('2022-02-20')"
    :maxDate="new Date()"
    :attributes="attributes"
  >
    <!-- <template #day-popover="{ day, dayTitle, attributes }">
      <div>
        <div class="text-xs text-gray-300 font-semibold text-center">
          {{ day }}
          {{ dayTitle }}
        </div>
        <popover-row
          v-for="attr in attributes"
          :key="attr.key"
          :attribute="attr"
        >
          {{ attr.customData.description }}
        </popover-row>
      </div>
    </template> -->
  </Calendar>
</template>
<script setup lang="ts">
import { Calendar } from "v-calendar";
// import PopoverRow from "v-calendar";
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
</script>
