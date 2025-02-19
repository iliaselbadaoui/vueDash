<script setup lang="ts">
import { defineProps, onMounted} from "vue";
import Apexcharts from 'apexcharts'


const props = defineProps<{id: string}>();
onMounted(() => {
  let options = {
    chart: {
      type: "polarArea",
      height: '360px',
      borderRadius: 30
    },
    legend: {
      show: true,
    },
    plotOptions: {

    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 1
    },
    xaxis: {
      lines: {
        show: false,
      }
    },
    yaxis: {
      lines: {
        show: false,
      }
    },
    series: [480, 900, 821.87, 1339.8],
    labels: ['Entertainment', "Bill Expenses", "Other", "Investment"],
    colors: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"],
    tooltip: {
      y: {
        formatter: function (val) {
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