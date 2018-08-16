<!-- register -->
<template>
 <div class="register">
     <div class="register-progress" fc>
         <span :class="step==1?'active':''">1.邀请注册 ></span>
         <span :class="step==2?'active':''">2.账号绑定 ></span>
         <span :class="step==3?'active':''">3.等待审核</span>
     </div>
     <div class="register-step1" v-if="step == 1">
       <ul>
         <li>
           <em>手机号</em>
           <input type="text" placeholder="请输入手机号" v-model="form.phone">
           <span bts @click="getCode">获取验证码</span>
         </li>
         <li>
           <em>验证码</em>
           <input type="text" placeholder="请输入验证码" v-model="form.code">
         </li>
         <li>
           <em>邀请码</em>
           <p>您是xxx的邀请注册的用户</p>
         </li>
         <li>
           <em>设置登录密码</em>
           <input type="text" placeholder="请输入密码" v-model.trim="form.password">
         </li>
         <li>
           <em>重新输入密码</em>
           <input type="text" placeholder="请重新输入密码" v-model.trim="repassword">
         </li>
       </ul>
       <div bts @click="_register">
         确认注册进入下一步
       </div>
     </div>
     <div class="register-step2" v-if="step == 2">
        <section lr-is>
            <input type="text" placeholder=" 淘口令" v-model="taoCode">
            <span bts>复制淘口令</span>
        </section>
        <div>1.请复制上方的淘口令,并打开手机淘宝</div>
        <div>2.拍下宝贝,不要付款</div>
         <section lr-is>
            <input type="text" placeholder="订单号">
            <span bts>粘贴</span>
        </section>
        <div>3.粘贴已拍下的订单号</div>
        <p class="btn" @click="_commitOrder" bts> 确认并绑定</p>
        <p>审核人员会根据您拍下的淘宝号自动绑定该账号哦</p>
     </div>
    <div class="register-step3" v-if="step == 3">
      <dl>
        <dt><i class='iconfont icon-gou1'></i> 已提交成功</dt>
        <dd> <i class='iconfont icon-gou1'></i> 预计在xxxx完成审核</dd>
      </dl>
        <p> 审核结果将通知到您的手机短信</p>
        <div bts> 返回</div>
    </div>
 </div>
</template>

<script>
import api from "@/api/login";
// eslint-disable-next-line
import { Toast } from "vant";

export default {
  data() {
    return {
      step: 1,
      repassword: "",
      taoCode: "",
      form: {
        phone: "",
        password: "",
        code: "",
        invite_code: ""
      }
    };
  },

  created() {},

  mounted() {
    this._getTaoCode();
    this._getInviteCode();
  },

  methods: {
    getCode() {
      api.getCaptcha(this.form.phone).then(res => console.log(res));
    },
    _getTaoCode() {
      api.getTaoCode().then(res => (this.taoCode = res.data.message));
    },
    _getInviteCode() {
      api
        .getInviteCode()
        .then(res => (this.form.invite_code = res.data.message));
    },
    _commitOrder() {
      api.commitOrder().then(res => {
        if (res.data.success) {
          this.step = 3;
          setTimeout(() => this.$router.push("/index"), 500);
        }
      });
    },
    _register() {
      api.register(this.form).then(res => {
        if (res.data.success) {
          window.localStorage.setItem("token", res.data.message);
          this.$toast.clear();
          this.step = 2;
          this._getTaoCode();
        }
      });
      this.$toast.loading();
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.register {
  padding: 0 64px;
  height: 100vh;
  background-color: #fff;
  &-progress {
    height: 130px;
    line-height: 1;
    text-align: center;
    span {
      font-size: 30px;
      color: #333;
    }
    span.active {
      font-weight: 600;
    }
  }
  &-step1 {
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
          width: 186px;
        }
        em,
        input {
          height: 54px;
          border-bottom: 1px solid #e5e5e5;
        }
      }
      &:nth-of-type(3) {
        margin-bottom: 184px;
      }
      &:nth-of-type(5) {
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
  &-step2 {
    section {
      margin: 50px 0;
    }
    & > div {
      font-size: 30px;
      line-height: 70px;
      &:nth-of-type(2) {
        color: #e90000;
      }
    }
    & > p {
      font-size: 26px;
    }
    .btn {
      height: 70px;
      line-height: 70px;
      border-radius: 36px;
      margin: 60px 0 40px 0;
      color: #fff;
    }
  }
  &-step3 {
    i {
      font-size: 32px;
      margin-right: 20px;
      color: #ffb643;
    }
    dl {
      font-size: 30px;
      color: #333;
    }
    dt {
      margin-bottom: 92px;
      i {
        position: relative;
        &::after {
          width: 5px;
          height: 100px;
          background-color: #ffb643;
          position: absolute;
          top: 28px;
          left: 13.5px;
          content: "";
        }
      }
    }
    p {
      margin: 25px 0 105px 58px;
      font-size: 26px;
      color: #333;
    }
    div[bts] {
      height: 70px;
      line-height: 70px;
      border-radius: 36px;
    }
  }
}
</style>