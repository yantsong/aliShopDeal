<!-- login -->
<template>
 <div class="login">
     <ul>
         <li>
             <span>手机号</span>
             <input type="text" placeholder="请输入手机号" v-model="form.phone">
         </li>
         <li>
             <span>密码</span>
             <input type="text" placeholder="请输入密码" v-model="form.password">
         </li>
     </ul>
     <div class="login-check">
     <p><i></i> <span>记住账号密码</span></p>
     <em>忘记密码</em>
     </div>
     <div class="login-button" @click="_login" bts>
       登录
     </div>
     <div class="login-fast">
         快速登录
     </div>
 </div>
</template>

<script>
import api from "@/api/login";
export default {
  data() {
    return {
      form: {
        phone: "",
        password: ""
      }
    };
  },

  created() {},

  mounted() {},

  methods: {
    _login() {
      api.login(this.form).then(res => {
        if (res.data.success) {
          window.localStorage.setItem("token", res.data.message);
          this.$router.push("/");
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.login {
  padding: 60px 108px 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  ul {
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 60px;
      padding-bottom: 18px;
      line-height: 42px;
      height: 42px;
      border-bottom: 1px solid #eee;
      span {
        width: 134px;
        font-size: 28px;
        text-align: left;
      }
      input {
      }
    }
  }
  &-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 106px;
    p {
      line-height: 22px;
    }
    span {
      display: inline-block;
      color: #999;
      font-size: 22px;
      margin-left: 18px;
    }
    i {
      vertical-align: middle;
      display: inline-block;
      height: 22px;
      width: 22px;
      border-radius: 50%;
      border: 2px solid #d8d8d8;
    }
    em {
      font-size: 22px;
      color: #ffb643;
    }
  }
  &-button {
    font-size: 28px;
    line-height: 74px;
    border-radius: 36px;
  }
  &-fast {
    font-size: 22px;
    margin-top: 44px;
    color: #ffb643;
    text-align: center;
  }
}
</style>