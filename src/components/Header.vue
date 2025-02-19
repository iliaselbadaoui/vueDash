<script setup lang="ts">
import Search from "./Search.vue";
defineProps<{"current": String}>()
</script>

<template>
  <div class="header">
    <div class="inner-header-container">
      <img src="../assets/logo.svg" class="logo" alt="BankDash Logo"/>
      <span class="current-path inter-bold"> {{current}}</span>
      <Search></Search>
      <button class="settings">
        <i class="ri-settings-2-line"></i>
      </button>
      <button class="notifications">
        <i class="ri-notification-4-line"></i>
      </button>
      <img src="../assets/female.png" class="user-image" alt="Female user image"/>
    </div>
  </div>
</template>

<style scoped>
.header {
  grid-area: 1 / 1 / 2 / 6;
  width: 100vw;
  height: 100px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.current-path
{
  font-size: 2rem;
  color: #343C6A;
  align-self: center;
}
.inner-header-container
{
  width: calc(100vw - 38px);
  display: grid;
  grid-template-columns: 212px 1fr 2fr repeat(3, 96px);
  grid-template-rows: 100px;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
.logo {
  width: 183px;
  height: 36px;
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  justify-self: center;
}
.settings {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 48px;
  background-color: #E6EFF5;
  grid-area: 1 / 4 / 2 / 5;
  align-self: center;
  justify-self: center;
}
.user-image
{
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 48px;
  grid-area: 1 / 6 / 2 / 7;
  align-self: center;
  justify-self: center;
}
.settings i{
  font-size: 20px;
  color: #718EBF;
}
.notifications {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 48px;
  background-color: #E6EFF5;
  grid-area: 1 / 5 / 2 / 6;
  align-self: center;
  justify-self: center;
}
.notifications i{
  font-size: 20px;
  color: #FE5C73;
}
</style>