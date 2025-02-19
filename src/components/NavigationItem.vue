<script setup lang="ts">
defineProps<{active: boolean, icon: string, title: string, route: string}>()
</script>

<template>
  <div class="navigation-item">
    <div v-if="active" class="selector"></div>
    <i :class="icon + ' item-icon ' + (active ? '':'disabled')"></i>
    <span :class="'title lato-black  '"><router-link :class="(active ? '':'disabled')" :to="route">{{ title }}</router-link></span>
  </div>
</template>

<style scoped>
.selector {
  grid-area: 1 / 1 / 2 / 2;
  width: 6px;
  height: 100%;
  background-color: #2D60FF;
  border-radius: 0 10px 10px 0;
}
.item-icon
{
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
  justify-self: start;
  color: #2D60FF;
  font-size: 20px;
}
.title
{
  grid-area: 1 / 4 / 2 / 5;
  align-self: center;
  justify-self: start;
}
.navigation-item
{
  height: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 6px 32px 48px 1fr;
  grid-template-rows: 60px;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.disabled {
  color: #B1B1B1 !important;
}
</style>