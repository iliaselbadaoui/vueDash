<script setup lang="ts">
import SingleTransaction from "./SingleTransaction.vue";
</script>

<template>
  <div class="recent-transactions">
    <SingleTransaction position="pos-1" color="#FFF5D9" icon="ri-bank-card-2-line" icon-color="#FFBB38" value="-$850" from="Deposit from my Card" date="28 January 2021"></SingleTransaction>
    <SingleTransaction position="pos-2" color="#E7EDFF" icon="ri-paypal-line" icon-color="#396AFF" value="+$2500" from="Deposit Paypal" date="25 January 2021"></SingleTransaction>
    <SingleTransaction position="pos-3" color="#DCFAF8" icon="ri-exchange-dollar-line" icon-color="#16DBCC" value="+$5400" from="Jemi Wilson" date="21 January 2021"></SingleTransaction>
  </div>
</template>

<style scoped>
.recent-transactions {
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  grid-template-rows: 24px repeat(3, 1fr) 24px;
  grid-column-gap: 0;
  grid-row-gap: 0;
  background-color: #FFFFFF;
  border-radius: 25px;
}
.pos-1 {
  grid-area: 2 / 2 / 3 / 3;
}

.pos-2 {
  grid-area: 3 / 2 / 4 / 3;
}

.pos-3 {
  grid-area: 4 / 2 / 5 / 3;
}

</style>