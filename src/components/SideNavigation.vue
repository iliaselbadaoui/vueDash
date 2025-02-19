<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

function formatPath(path: string): string {
  const section = path === '/' ? 'Overview' : path.split('/')[1];
  return section.charAt(0).toUpperCase() + section.slice(1);
}

function createItem(route:string, title:string, icon:string, active:boolean=false) {
  return { route: route, title: title, icon: icon, active: active };
}


const route = useRoute();
const tmp = ref(formatPath(route.path));
const menu = ref([
  createItem('/', 'Overview', 'ri-home-2-line', tmp.value === 'Overview'),
  createItem('/transactions', 'Transactions', 'ri-exchange-dollar-line', tmp.value === 'Transactions'),
  createItem('/account', 'Account', 'ri-user-line', tmp.value === 'Account'),
  createItem('/investment', 'Investment', 'ri-bar-chart-line', tmp.value === 'Investment'),
  createItem('/cards', 'Cards', 'ri-bank-card-line', tmp.value === 'Cards'),
  createItem('/loans', 'Loans', 'ri-hand-coin-line', tmp.value === 'Loans'),
  createItem('/services', 'Services', 'ri-customer-service-2-line', tmp.value === 'Services'),
  createItem('/privileges', 'Privileges', 'ri-lightbulb-flash-line', tmp.value === 'Privileges'),
  createItem('/settings', 'Settings', 'ri-settings-2-line', tmp.value === 'Settings'),
])

watch(() => route.path, (newPath) => {
  tmp.value = formatPath(newPath);
  menu.value = [
    createItem('/', 'Overview', 'ri-home-2-line', tmp.value === 'Overview'),
    createItem('/transactions', 'Transactions', 'ri-exchange-dollar-line', tmp.value === 'Transactions'),
    createItem('/account', 'Account', 'ri-user-line', tmp.value === 'Account'),
    createItem('/investment', 'Investment', 'ri-bar-chart-line', tmp.value === 'Investment'),
    createItem('/cards', 'Cards', 'ri-bank-card-line', tmp.value === 'Cards'),
    createItem('/loans', 'Loans', 'ri-hand-coin-line', tmp.value === 'Loans'),
    createItem('/services', 'Services', 'ri-customer-service-2-line', tmp.value === 'Services'),
    createItem('/privileges', 'Privileges', 'ri-lightbulb-flash-line', tmp.value === 'Privileges'),
    createItem('/settings', 'Settings', 'ri-settings-2-line', tmp.value === 'Settings'),
  ]
});
</script>

<template>
  <div class="side-navigation">
    <NavigationItem v-for="item in menu" :title="item.title" :active="item.active" :icon="item.icon" :route="item.route"></NavigationItem>
  </div>
</template>

<style scoped>
.side-navigation {
  grid-area: 2 / 1 / 6 / 2;
  width: 250px;
  height: calc(100vh - 100px);
  background-color: #FFFFFF;
}
</style>