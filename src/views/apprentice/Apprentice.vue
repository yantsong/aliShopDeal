<!--  -->
<template>
 <div class="apprentice">
   <ul class="apprentice-count" bsd fc>
     <li>
       <p>上月积分余额</p>
       <span>{{info&&info.last_month}}</span>
     </li>
     <li>
       <p>本月收入</p>
       <span>{{info&&info.this_month}}</span>
     </li>
   </ul>
   <div class="apprentice-tips">
     <span>一个邀请码只可邀请一个用户</span>
     <em @click="toHistoryCode">历史邀请码></em>
   </div>
   <ul class="apprentice-count" invite bsd fc>
     <li>
       <p>{{info&&info.invite_code}}</p>
       <span>复制</span>
     </li>
     <li>
       <p>生成邀请码</p>
       <span>已生成:{{info&&info.cnt_invite_code}}/{{info&&info.max_invite_code}}</span>
     </li>
   </ul>
   <ul class="apprentice-tablist" bsd >
     <li @click="toIntegralDetail">
       <span>积分明细</span>
       <em>></em>
     </li>
     <li  @click="toList">
       <span>徒弟列表</span>
       <em>></em>
     </li>
   </ul>
 </div>
</template>

<script>
import api from "@/api/apprentice";
export default {
  data() {
    return {
      info: ""
    };
  },
  created() {
    api.getInviteInfo().then(res => (this.info = res.data.message));
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    toIntegralDetail() {
      this.$router.push("/integralDetail");
    },
    toHistoryCode() {
      this.$router.push("/historyCode");
    },
    toList() {
      this.$router.push("/apprenticesList");
    }
  }
};
</script>
<style lang='scss' scoped>
.apprentice {
  padding: 0 10px;
  &-tips {
    text-align: left;
    font-size: 26px;
    em {
      color: #ffb643;
      margin-left: 30px;
    }
  }
  &-count[invite] {
    li {
      span {
        color: #ffb643;
      }
    }
  }
  &-count {
    margin: 44px auto;
    background-color: #fff;
    text-align: center;
    padding: 34px 0;
    border-radius: 20px;
    color: #333333;
    li {
      width: 49%;
      span {
        display: inline-block;
        font-size: 26px;
        margin-top: 14px;
      }
      p {
        font-size: 28px;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #474747;
      }
    }
  }
  &-tablist {
    background-color: #fff;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 83px;
      color: #333333;
      font-size: 28px;
      border-bottom: 2px solid #eeeeee;
      &:nth-last-of-type(1) {
        border: none;
      }
    }
    span {
      margin-left: 25px;
    }
    em {
      margin-right: 25px;
    }
  }
}
</style>