<script setup lang="ts">
import { defineProps, onMounted} from "vue";
import Apexcharts from 'apexcharts'


const props = defineProps<{id: string}>();
onMounted(() => {
  let options = {
    chart: {
      type: "area",
      height: '360px',
      borderRadius: 30
    },
    legend: {
      show: false,
      position: 'top'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 10,
        borderRadiusApplication: 'end'
      },
    },
    series: [
      {
        name: "Balance",
        data: [680, 900, 140, 500, 50, 267.98, 200],
        color: "#1814F3"
      }
    ],
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return "$ " + val
        }
      }
    }
  };

  let chart = new Apexcharts(document.querySelector("#" + props.id), options);
  chart.render();
});
</script>

<template>
  <div :id="id" class="bar-chart"></div>
</template>


<style scoped>
.bar-chart
{
  border-radius: 25px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bar-chart svg{
  height: 360px;
}
</style>