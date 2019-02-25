<template>
  <div class="pageone">
      321
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    
    
  }
};
</script>

<style lang="scss" scoped>
 
</style>