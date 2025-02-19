<script setup lang="ts">
const props = defineProps<{position: string, color: string, icon: string, iconColor: string, value: string, from: string, date: string}>()
const green = "#41D4A8";
const red = "#FF4B4A";
let ValueColor = props.value.includes('-') ? red : green;

</script>

<template>
  <div :class="'transaction ' + position">
    <button class="icon" :style="{backgroundColor: color}">
      <i :class="icon + ' transaction-icon'" :style="{color: iconColor}"></i>
    </button>
    <div class="transaction-infos">
      <span class="from inter-regular">{{from}}</span>
      <span class="date inter-regular">{{date}}</span>
    </div>
    <span class="value inter-regular" :style="'color:'+ValueColor">{{value}}</span>
  </div>
</template>

<style scoped>
.transaction
{
  display: grid;
  grid-template-columns: 64px 6fr 1fr;
  grid-template-rows: 64px;
  grid-column-gap: 0;
  grid-row-gap: 0;
  align-self: center;
}

.transaction-icon
{
  font-size: 24px;
}

.icon
{
  width: 48px;
  height: 48px;
  border-radius: 48px;
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  justify-self: center;
  border: none;
}

.transaction-infos
{
  display: grid;
  grid-area: 1 / 2 / 2 / 3;
}

.value {
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
  justify-self: end;
}

.from
{
  font-size: 16px;
  color: #000000;
  align-self: end;
  justify-self: start;
}

.date {
  font-size: 12px;
  color: #718EBF;
  align-self: start;
  justify-self: start;
}
</style>