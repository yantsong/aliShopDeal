<!-- 找回密码 -->
<template>
 <div class="repassword">
<div class="repassword-repass">
       <ul>
         <li>
           <em>手机号</em>
           <input type="text" placeholder="请输入手机号" v-model="form.phone">
           <span bts @click="getCode" v-if="!timer">获取验证码</span>
           <span bts v-else>{{time}}s</span>
         </li>
         <li>
           <em>验证码</em>
           <input type="text" placeholder="请输入验证码" v-model="form.code">
         </li>
         <li>
           <em>设置登录密码</em>
           <input type="text" placeholder="请输入新密码" v-model.trim="form.password">
         </li>
         <li>
           <em>重新输入密码</em>
           <input type="text" placeholder="请重新输入密码" v-model.trim="repassword">
         </li>
       </ul>
       <div bts @click="_repassword">
         重置密码
       </div>
</div>
 </div>
</template>

<script>
import api from "@/api/login";
import getcodemixin from "@/mixin/getcode";
export default {
  data() {
    return {
      repassword: "",
      form: {
        phone: "",
        code: "",
        password: ""
      }
    };
  },
  mixins: [getcodemixin],

  created() {},

  mounted() {},

  methods: {
    _repassword() {
      api.repassword(this.form).then(res => {
        if (res.data.success) {
          this.$toast("密码重置成功");
          this.$router.push("/login");
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.repassword {
  padding: 90px 64px 0;
  height: 100vh;
  background-color: #fff;
  &-repass {
    div[bts] {
      margin-top: 30px;
      line-height: 70px;
      border-radius: 36px;
    }
    li {
      height: 54px;
      line-height: 54px;
      margin-bottom: 54px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #e5e5e5;
      &:nth-child(1) {
        border: 0;
        span {
          flex: 0 0 160px;
        }
        em {
          flex: 0 0 auto;
        }
        em,
        input {
          height: 54px;
          border-bottom: 1px solid #e5e5e5;
        }
      }
      &:nth-of-type(2) {
        margin-bottom: 184px;
      }
      &:nth-of-type(4) {
        margin-bottom: 84px;
      }
      em {
        font-size: 30px;
        padding-right: 40px;
      }
      input {
        flex: 1;
      }
    }
  }
}
</style>