<script setup lang="ts">
import Card from "./Card.vue";
import RecentTransactions from "./RecentTransactions.vue";
import type { Owner } from '../types/Types.ts'
import BarChart from "./BarChart.vue";
import PolarChart from "./PolarChart.vue";

const owner : Owner = {
  name: "Jhon Doe",
  balance: 5230.99,
  expire: "10/28",
  number:"5455 **** **** 3400"
}
</script>

<template>
  <div class="overview">
    <div class="cards">
      <span class="big-title lato-bold">My Cards</span>
      <span class="small-title lato-regular">View all</span>
      <Card :owner="owner" theme="dark"></Card>
      <Card :owner="owner" theme="light"></Card>
    </div>
    <div class="transactions">
      <span class="big-title lato-bold">Recent Transactions</span>
      <RecentTransactions></RecentTransactions>
    </div>
    <div class="activity">
      <span class="big-title lato-bold">Weekly Activity</span>
      <BarChart id="weekly-activity"></BarChart>
    </div>
    <div class="expenses">
      <span class="big-title lato-bold">Expense Statistics</span>
      <PolarChart id="expenses"></PolarChart>
    </div>
    <div class="balance">
      <span class="big-title lato-bold">Expense Statistics</span>
    </div>
    <div class="quick">
      <span class="big-title lato-bold">Expense Statistics</span>
    </div>
  </div>
</template>

<style>
.overview {
  padding: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  overflow-y: scroll;
}

.cards {
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 32px 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 0;
}

.transactions {
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  border-radius: 25px;
}

.activity {
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  border-radius: 25px;
}

.expenses {
  grid-area: 2 / 3 / 3 / 4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  border-radius: 25px;
}

.balance {
  grid-area: 3 / 1 / 4 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  border-radius: 25px;
}

.quick {
  grid-area: 3 / 2 / 4 / 4;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  border-radius: 25px;
}

.big-title {
  color: #000000;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  font-size: 20px;
  align-self: center;
}

.small-title {
  color: #000000;
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
  font-size: 17px;
  align-self: center;
}

</style>