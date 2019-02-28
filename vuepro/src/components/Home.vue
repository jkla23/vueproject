<template>
  <div class="pageone">
      <button @click="getdata()">data</button>
      <ul>
        <li v-for="item in texts">{{ item.name }}</li>
      </ul>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
        texts:[{name:1},{name:2}]
    };
  },
  mounted() {
    // this.axios({
    //   url: `${this.host}v1/product/fee/orders/total`,
    //   method: "post",
    //   headers: {
    //     "X-Token": localStorage.getItem("token")
    //   }
    // }).then(res => {
    //   if (res.data.error == 0) {
    //     this.today_money = res.data.result.today_money;
    //     this.month_money = res.data.result.month_money;
    //     this.jidu_money = res.data.result.jidu_money;
    //     this.year_money = res.data.result.year_money;
    //     this.listData[0] = res.data.result.three_money;
    //     this.listData[1] = res.data.result.front_money;
    //     this.listData[2] = res.data.result.month_money;
    //     this.initChart();
    //   } else if (res.data.error == 401) {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("routeList");
    //     this.$notify({
    //       showClose: true,
    //       title: "错误",
    //       message: "登录过期",
    //       type: "error"
    //     });
    //     this.$router.go(0);
    //   }
    // });
  },
  
  methods: {
    getdata(){
      this.axios({
        url:'http://localhost:3000/shop',
        methods:'get'
      }).then(res=>{
         for(var i=0;i<res.data.length;i++){
            this.texts.push(res.data[i])
         }
      })
    }
    
  }
};
</script>

<style lang="scss" scoped>
 
</style>
