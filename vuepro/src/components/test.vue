<template>
  <div class="pageone">
      <el-row>
        <el-col>
          <el-card :body-style="{ padding: '0px' }">
            <div class="auto">
            <img :src="data[0].img" class="image">
            </div>
            <div style="padding: 14px;">
              <h1 style="padding:15px">{{value}}</h1>
              <span>{{value}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="getroutervalue">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props:['routerValue'],
  data() {
    return {
      data:'',
      currentDate: new Date(),
      value:''
    };
  },
  mounted() {
      this.axios({
        url:'http://localhost:3000/shop',
        methods:'get'
      }).then(res=>{
        this.data=res.data
      })
       this.data=localStorage.getItem("routerValue");
       console.log(this.data)
       this.value=this.routerValue
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    getroutervalue(){
      console.log(this.data)
    }
  },
  watch:{
    routerValue(val){
        this.value=this.routerValue
        console.log(this.value)
    }
  }
};
</script>

<style lang="scss" scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .auto{
    width: 60%;
    height: 60%;
    margin:7% auto; 
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>