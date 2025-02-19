<script setup lang="ts">
import type {Owner} from "../types/Types.ts";
defineProps<{owner: Owner, theme: string}>()
</script>

<template>
<div :class="theme+'-card'">
  <div class="balance">
    <span class="title inter-light">BALANCE</span>
    <span class="value lato-bold">${{owner.balance}}</span>
  </div>
  <img v-if="theme === 'dark'" src="../assets/white_chip.png" class="chip">
  <img v-if="theme === 'light'" src="../assets/black_chip.png" class="chip">
  <div class="holder-name">
    <span class="title inter-light">CARD HOLDER</span>
    <span class="value lato-bold">{{owner.name}}</span>
  </div>
  <div class="validity">
    <span class="title inter-light">VALID THRU</span>
    <span class="value lato-bold">{{owner.expire}}</span>
  </div>
  <div class="buttom-bar">
    <span class="cc-number lato-bold">{{owner.number}}</span>
    <img v-if="theme === 'dark'" src="../assets/mc_white.png" class="mc">
    <img v-if="theme === 'light'" src="../assets/mc_black.png" class="mc">
  </div>
</div>
</template>

<style scoped>
.light-card {
  grid-area: 2 / 2 / 3 / 3;
  background-color: #FFFFFF;
  border: 1px solid #DFEAF2;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 24px repeat(2, 1fr) 24px;
  grid-template-rows: 24px repeat(3, 1fr) 24px;
  grid-column-gap: 0;
  grid-row-gap: 16px;
}

.light-card .title {
  color: #718EBF;
  justify-self: start;
  font-size: 11px;
  align-self: end;
}
.light-card .value{
  color: #000000;
  justify-self: start;
  font-size: 20px;
  align-self: start;
}

.light-card .cc-number
{
  color: #000000;
  justify-self: start;
  font-size: 20px;
  align-self: start;
  text-indent: 32px;
  align-self: center;
}
.dark-card {
  grid-area: 2 / 1 / 3 / 2;
  background-color: #2D60FF;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 24px repeat(2, 1fr) 24px;
  grid-template-rows: 24px repeat(3, 1fr) 24px;
  grid-column-gap: 0;
  grid-row-gap: 16px;
}

.dark-card .title {
  color: #FFFFFF;
  justify-self: start;
  font-size: 11px;
  align-self: end;
}

.dark-card .value {
  color: #FFFFFF;
  justify-self: start;
  align-self: start;
  font-size: 20px;
}

.dark-card .cc-number
{
  color: #FFFFFF;
  justify-self: start;
  font-size: 20px;
  align-self: start;
  text-indent: 32px;
  align-self: center;
}

.mc {
  align-self: center;
}

.balance {
  grid-area: 2 / 2 / 3 / 3;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.chip {
  grid-area: 2 / 3 / 3 / 4;
  align-self: center;
  justify-self: end;
  height: 27.77px;
  aspect-ratio: initial;
}

.holder-name {
  grid-area: 3 / 2 / 4 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.validity {
  grid-area: 3 / 3 / 4 / 4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.buttom-bar {
  grid-area: 4 / 1 / 6 / 5;
}

.light-card .buttom-bar {
  border: none;
  border-top: 1px solid #DFEAF2;
  border-radius: 0px 0px 25px 25px;
  display: grid;
  grid-template-columns: 1fr 72px;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.dark-card .buttom-bar {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  border: none;
  border-radius: 0px 0px 25px 25px;
  display: grid;
  grid-template-columns: 1fr 72px;
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
</style>