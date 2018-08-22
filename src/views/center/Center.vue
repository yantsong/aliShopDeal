<!--  -->
<template>
 <div class="center">
   <MFooter></MFooter>
   <div class="center-banner" fcs>
     <img src="../../assets/avt.png" alt="">
     <span>{{data.name || '张三'}}</span>
     <p>ID {{data.id || '123'}}</p>
   </div>
   <ul class="center-count" bsd fc>
     <li>
       <span>{{data.zrw_total_cnt}}</span>
       <p>任务完成总数</p>
     </li>
     <li>
       <span>{{data.success_rate * 100}}%</span>
       <p>完成率</p>
     </li>
   </ul>
   <ul class="center-list" bsd>
     <li @click="toCrashHistory">
       <p>
         <i class='iconfont icon-txjl' style="color:#3399cc"></i>
         <span>提现记录</span>
       </p>
       <em>></em>
     </li>
     <li @click="toIntegralDetail" >
       <p>
         <i class='iconfont icon-id_card' style="color:#99cc99"></i>
         <span>积分明细</span>
       </p>
       <em>></em>
     </li>
   </ul>
   <ul class="center-list" bsd>
     <li>
       <p>
         <i class='iconfont icon-help' style="color:#ff6699"></i>
         <span>修改密码</span>
       </p>
       <em>></em>
     </li>
     <li>
       <router-link tag="p" to="/bindinfo">
         <i class='iconfont icon-about' style="color:#ffcc33"></i>
         <span>信息绑定</span>
       </router-link >
       <em>></em>
     </li>
   </ul>
 </div>
</template>

<script>
import api from "@/api/center";
import MFooter from "@/components/MFooter.vue";
export default {
  data() {
    return {
      data: {}
    };
  },

  created() {
    api.getInfo().then(res => {
      if (res.data.success) {
        this.data = res.data.message;
      }
    });
  },

  mounted() {},

  methods: {
    toIntegralDetail() {
      this.$router.push("/integralDetail");
    },
    toCrashHistory() {
      this.$router.push("/CrashHistory");
    }
  },

  computed: {},

  components: {
    MFooter
  }
};
</script>
<style lang='scss' scoped>
.center {
  ul {
    background-color: #fff;
    margin-bottom: 26px;
  }
  &-banner {
    flex-direction: column;
    height: 300px;
    color: #fff;
    font-size: 28px;
    line-height: 48px;
    background-image: url(../../assets/bg0.png);
    background-attachment: fixed;
    background-size: 750px 300px;
    img {
      width: 120px;
      height: 120px;
      margin: 20px 0 0;
    }
  }
  &-count {
    width: 692px;
    margin: 0 auto;
    margin-top: -60px;
    text-align: center;
    padding: 34px 0;
    border-radius: 20px;
    color: #333333;
    li {
      width: 49%;
      span {
        display: inline-block;
        font-size: 35px;
        margin-bottom: 21px;
      }
      p {
        font-size: 28px;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #474747;
      }
    }
  }
  &-list {
    border-radius: 20px;
    padding: 0 18px 0 3px;
    color: #333333;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 84px;
      &:nth-of-type(1) {
        border-bottom: 1px solid #eeeeee;
      }
      p {
        i {
          margin: 0 32px;
        }
        span {
          font-size: 28px;
        }
      }
    }
  }
}
</style>