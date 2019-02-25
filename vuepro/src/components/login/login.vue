<template>
  <div
    class="login"
   
  >
    <div class="login-con">
      <div icon="log-in" title="欢迎登录" :bordered="true">
        <div class="form-con">
          <div class="mobliebox" style="background:rgba(0,0,0,0.5);">
            <h1 style="text-align:center;color:#fff;font-size:25px;padding-top:30px">需求查询系统</h1>
            <el-form
              status-icon
              label-width="100px"
              class="demo-ruleForm"
              style="padding: 50px 50px 30px 0px"
            >
              <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm2.user_name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.passwd"></el-input>
              </el-form-item>
              <p style="padding-left:110px;color:red;font-weight:bold">{{logintxt}}</p>
              <el-form-item style="padding:30px 0 0 80px">
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        user_name: "",
        passwd: ""
      },
      logintxt: ""
    };
  },
  methods: {
    submitForm() {
      this.axios({
        url: `login`,
        method: "post",
        data: this.ruleForm2
      }).then(res => {
        if (res.data.error == 0) {
          localStorage.setItem("user", res.data.result.user_name);
          localStorage.setItem(
            "routeList",
            JSON.stringify(res.data.result.permissions)
          );
          this.logintxt = "";
          localStorage.setItem("token", res.data.result.token);
          this.$notify({
            showClose: true,
            title: "成功",
            message: "登录成功",
            type: "success"
          });
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 500);
        } else if (res.data.error == 400) {
          this.logintxt = "用户名或密码错误";
        } else if (res.data.error == 500) {
          this.$notify.error({
            showClose: true,
            title: "失败",
            message: "服务器异常"
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.el-form-item__label {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.login-con{
width: 500px; height:500px; margin:auto;
}
.form-con{
  width:500px;height:500px;padding: 30% 0 0 0 ; 
}
@media screen and (max-width:1000px) {
  /* Remove the padding we set earlier */
  // .mobliebox,
  // .login-con,
  // .log-in,
   
}
</style>
