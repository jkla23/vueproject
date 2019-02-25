<template>
<div>
  <div id="home">
    <div style="height:100%">
      <el-container class="index">
        <el-header class="header-h1">
          <header class="header" style="padding:0 50px">
            <div class="header__logo">
              <h1>
                <a style="display:block;float:left" href="#">锦鲤科技</a> 
                <el-input style="margin-left:100px;display:inline-block;width:300px;float:left"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input22"
                  >
                </el-input>
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
                  <!-- <p>
                    <a href="#" class="dropdown-item">修改密码</a>
                  </p>-->
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
   
    <div class="tagcloud" ref="myEchart">
      <div class="cloudCss" style="position:relative">
         <tag-cloud style="position:absolute;right:0;left:0;top:0;bottom:0;margin:auto;cursor:pointer" :config={radius:300,rotateAngleYbase:1000,rotateAngleXbase:1000,hover:false} :data="hotTag" @clickTag="clickTagItem"></tag-cloud>
      </div>
      <div class="pageX">
       <el-header>
         <ul style="width:100%;height:70px;border-bottom:2px red solid">
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/test" active>基本信息</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/home">备注</router-link></li>
           <li style="width:33%;line-height:70px;float:left;text-align:center"><router-link to="/data">数据设计</router-link></li>
         </ul><router-view></router-view>
       </el-header>
         
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      flg: true,
      input22: '',
      routeList: [],
      isLogin: false,
      user: localStorage.getItem("user"),
      hotTag: [{"id":"05023f8da31c4b4187cc6899e2a3aec2","name":"镇远县"},{"id":"0ef028e5278f4f5ca31f99f1bd22b1cc","name":"剑河县"},{"id":"1a32ef04d3c548eaa6777abb46da32f2","name":"台江县"},{"id":"2c26488325bd493687d16315fe0e5fdd","name":"岑巩县"},{"id":"3a786111828a4b9f89ae9da25753eedd","name":"黎平"},{"id":"4ed593eed91b4244969995237f5c96c5","name":"丹寨县"},{"id":"615d2c178f1a47cb8d473823e74f5386","name":"凯里市"},{"id":"76f652df03db43349272a9aff492b065","name":"榕江县"},{"id":"8ff29d0d35e548feb945063b34ed9c9b","name":"黄平县"},{"id":"a8ac2170008746fdadc05ea461bc5e37","name":"雷山县"}
      ,{"id":"05023f8da31c4b4187cc6899e2a3aec2","name":"镇远县"},{"id":"0ef028e5278f4f5ca31f99f1bd22b1cc","name":"剑河县"},{"id":"1a32ef04d3c548eaa6777abb46da32f2","name":"台江县"},{"id":"2c26488325bd493687d16315fe0e5fdd","name":"岑巩县"},{"id":"3a786111828a4b9f89ae9da25753eedd","name":"黎平"},{"id":"4ed593eed91b4244969995237f5c96c5","name":"丹寨县"},{"id":"615d2c178f1a47cb8d473823e74f5386","name":"凯里市"},{"id":"76f652df03db43349272a9aff492b065","name":"榕江县"},{"id":"8ff29d0d35e548feb945063b34ed9c9b","name":"黄平县"},{"id":"a8ac2170008746fdadc05ea461bc5e37","name":"雷山县"},

      ]
    };
  },
  methods: {
    clickTagItem (tag) {
      // TODO
      alert('123')
    },
    showLogin() {
      this.isLogin = !this.isLogin;
    },
    loginOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("routeList");
      this.$notify({
        showClose: true,
        title: "成功",
        message: "退出成功",
        type: "success"
      });
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    if (localStorage.getItem("routeList")) {
      this.routeList = JSON.parse(localStorage.getItem("routeList"));
    }
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
   height:800px;
   
   border-radius: 20px
}
.pageX li{
  font-size:18px;
}

</style>
