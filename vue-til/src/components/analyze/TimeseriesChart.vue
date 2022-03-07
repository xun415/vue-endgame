<template>
  <div id="timeseriesChart">

  </div>
</template>

<script>
import billboard from 'billboard.js';
export default {
  name: "TimeseriesChart",
  data() {
    return {

    }
  },
  mounted() {
    const chartElement = document.getElementById('timeseriesChart');

    billboard.generate({
      data: {
        x: "x",
        columns: [
          ["x", "2013-01-01", "2013-01-02", "2013-01-03", "2013-01-04", "2013-01-05", "2013-01-06"],
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 130, 340, 200, 500, 250, 350]
        ],
        type:'bar', // for ESM specify as: line()
      },

      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d"
          }
        }
      },
      bindto: chartElement,
    });
  }
}
</script>

<style scoped>
#timeseriesChart{
  width: 500px;
  height: 300px;
}
</style>