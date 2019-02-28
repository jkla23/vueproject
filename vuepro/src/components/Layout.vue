<template>
<!-- 管理员主页面 -->
<div>

  <!-- 管理员界面的头部 -->
  <div id="home">
    <div style="height:100%">
      <el-container class="index">
        <el-header class="header-h1">
          <header class="header" style="padding:0 50px">
            <div class="header__logo">
              <h1>
                <a style="display:block;float:left" href="#">锦鲤科技</a> 
                <el-input style="margin:0 100px;display:inline-block;width:300px;float:left"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input22"
                  @input="filterinput"
                  >
                </el-input>
                  <el-tag
                      :key="tag"
                      v-for="tag in dynamicTags"
                      color="white"
                      closable
                      :disable-transitions="true"
                      @close="handleClose(tag)">
                      {{tag}}
                  </el-tag>
              </h1>
            </div>
            <ul class="top-nav">
              <li>
                <div class="user">
                  <div class="user__info">
                    <img class="user__img" src="/static/image/4.jpg" alt>
                    <div class="box">
                      <div class="user__name">您好，{{user}}</div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="dropdown">
                <p @click="showLogin">
                  <i class="el-icon-more"></i>
                </p>
                <div class="dropdown-menu" v-if="isLogin">
                  <p>
                    <span class="dropdown-item" @click="loginOut">注销登录</span>
                  </p>
                </div>
              </li>
            </ul>
          </header>
        </el-header>
        
      </el-container> 
    </div>
  </div>
  <div class="homeTJ">

   <!-- 词云，便于精确搜索 -->
    <div class="tagcloud" ref="myEchart">
      <div style="position:relative;width:80%;height:500px">
         <div class="canvas" ref="canvas">

           <!-- 引入wordcloud模块 -->
             <wordcloud
              :data="text"
              nameKey="name"
              valueKey="value"
              wordPadding=20
              :showTooltip="false"
              :fontSize=[20,80]
              :wordClick="wordClickHandler">
              </wordcloud>
         </div>
      </div>
      <div class="pageX" ref="pageX">

        <!-- 路由导航，包括了3个子路由 -->
       <el-header>
         <ul style="width:100%;height:70px;border-bottom:2px red solid">
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/test" active>基本信息</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/home">备注</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/data">数据设计</router-link></li>
         </ul><router-view  :router-value="routerValue"></router-view>
       </el-header>
      </div>
      
    </div>
  </div>

  <!-- 管理员页面底部栏 -->
  <footer style="position:absolute;bottom:0;height:100px;background:#2196f3;width:100%">
    <p style="text-align:center;color:white;padding-top:50px;font-size:12px">Copyright © 2011-2019 SegmentFault. 当前呈现版本 17.06.16<br>©1995-2004 Macromedia, Inc. All rights reserved.
©2004 Microsoft Corporation. All rights reserved.
©1995-2004 Eric A. and Kathryn S. Meyer. All Rights Reserved.</p></footer>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'
export default {
   components: {
    wordcloud
  },
  data() {
    return {
      flg: true,          
      input22: '',                                //搜索框过滤
      routeList: [],                              //路由权限
      text:[],                                    //词云数组
      routerValue:'',                             //点击词云进行路由的传参
      isLogin: false,                             //登录状态的判定
      user: localStorage.getItem("user"),         //获取登录用户名
       dynamicTags:  [],                          //标签数组
        inputVisible: false,
        inputValue: '',
      defaultWords: [{
          "name": "Cat",
          "value": 26
        },
        {
          "name": "fish",
          "value": 30
        },
        {
          "name": "things",
          "value": 25
        },
        {
          "name": "look",
          "value": 25
        },
        {
          "name": "two",
          "value": 35
        },
        {
          "name": "fun",
          "value": 23
        },
        {
          "name": "know",
          "value": 45
        },
        {
          "name": "good",
          "value": 24
        },
        {
          "name": "play",
          "value": 26
        },
        {
          "name": "Cat",
          "value": 26
        },
        {
          "name": "fish",
          "value": 25
        },
        {
          "name": "things",
          "value": 25
        },
        {
          "name": "look",
          "value": 25
        },
        {
          "name": "two",
          "value": 35
        },
        {
          "name": "fun",
          "value": 23
        },
        {
          "name": "know",
          "value": 19
        },
        {
          "name": "good",
          "value": 24
        },
        {
          "name": "play",
          "value": 26
        }
      ]
    };
  },
  methods: {
           
        //    监听tagcloud 
     wordClickHandler(name, value, vm) {
      this.$refs.canvas.style.cssText='margin-left:0'
      this.$refs.pageX.style.cssText='display:block'
        // localStorage.setItem("routerValue",name);
        this.routerValue=name
        this.dynamicTags.push(name)
        this.input22=name
        this.filterinput()
        this.$router.push('/test')
    },
    showLogin() {
      this.isLogin = !this.isLogin;
    },
    handleClose(tag) {
       this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
       this.input22='';
       this.filterinput()
    },
    loginOut() {
      // localStorage.removeItem("token");
      localStorage.removeItem("user");
      // localStorage.removeItem("routeList");
      // this.$notify({
      //   showClose: true,
      //   title: "成功",
      //   message: "退出成功",
      //   type: "success"
      // });
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    filterinput(){
      this.text=[];
      return this.defaultWords.filter(element=>{
         if(element.name.match(this.input22)){
           this.text.push(element)
         }
         return this.text
      })
    },
  },
  mounted() {
    this.text=this.defaultWords
  }
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  .index {
    color: #333;

    height: 100%;
  }
  .header-h1 {
    .header {
      line-height: 60px;
      .header__logo {
        float: left;
        a {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
        }
        a:hover {
          text-decoration: none;
        }
      }
    }
  }
  #main-nav {
    float: left;
    margin-left: 70px;
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;

    font-size: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    a {
      color: #fff;
      padding: 0 10px;
    }
    a:hover {
      text-decoration: none;
    }
  }
  #main-nav:hover {
    cursor: pointer;
  }
  .top-nav {
    float: right;
    display: flex;
    li:nth-of-type(2) {
      cursor: pointer;
    }
    .school {
      color: #fff;
      margin-right: 20px;
      font-size: 13px;
    }
    .user {
      padding: 0 5px;
      line-height: 100%;
    }
  }
  .dropdown {
    position: relative;
    i {
      padding: 10px;
      border-radius: 3px;
      transition: all 0.3s;
      color: #fff;
    }
    i:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    .dropdown-menu {
      position: absolute;
      width: 120px;
      left: -100px;
      background: #fff;
      font-size: 20px;
      border: 1px solid #eee;
      text-align: center;
      cursor: pointer;
      p {
        padding: 0;
        margin: 0;
        line-height: 50px;
        a {
          color: #6d6d6d;
        }
      }
    }
  }
  .user__info {
    display: flex;
    .user__img {
      width: 30px;
      height: 30px;
      margin-top: 15px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .box {
      box-sizing: border-box;
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      .user__email,
      .user__name {
        align-items: center;
        line-height: 18px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .el-header {
    background-color: #2196f3;
    color: #333;
    // line-height: 72px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    line-height: 270px;
    width: 270px;
    text-align: left;
    height: 100%;
  }
  
}
.tagcloud {
    display: flex;
    justify-content: space-between;
    padding: 0 120px;
}
.cloudCss{
  margin: 0;
  width: 650px;
  height: 650px;
}
.pageX{
   width:40%;
   border-radius: 20px
}
.pageX li{
  font-size:18px;
}
.pageX{
  display: none
}
.canvas{
  width:800px;
  height:500px;
  margin:0 auto;
  padding-top:5%; 
}
  .el-tag + .el-tag {
      margin-left: 10px;
    }
  .tooltip{
    display:none
  }
</style>
