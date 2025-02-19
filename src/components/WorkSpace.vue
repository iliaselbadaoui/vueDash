<script setup lang="ts">

</script>

<template>
  <div class="work-space">
    <router-view />
  </div>
</template>

<style scoped>
.work-space
{
  grid-area: 2 / 2 / 6 / 6;
  width: calc(100vw - 250px);
  height: calc(100vh - 100px);
}
</style>