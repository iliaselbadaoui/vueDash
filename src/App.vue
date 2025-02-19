<script setup lang="ts">
import SideNavigation from "./components/SideNavigation.vue";
import Header from "./components/Header.vue";
import WorkSpace from "./components/WorkSpace.vue";
import { useRoute } from 'vue-router'
import { ref, watch } from "vue";

function formatPath(path: string): string {
  const section = path === '/' ? 'Overview' : path.split('/')[1];
  return section.charAt(0).toUpperCase() + section.slice(1);
}


const route = useRoute();
const tmp = ref(formatPath(route.path));

watch(() => route.path, (newPath) => {
  tmp.value = formatPath(newPath);
});
</script>

<template>
  <Header :current='tmp'></Header>
  <SideNavigation></SideNavigation>
  <WorkSpace></WorkSpace>
</template>

<style scoped>

</style>
