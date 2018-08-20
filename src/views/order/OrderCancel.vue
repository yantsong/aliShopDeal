<!-- orderchancel -->
<template>
 <div class="ordercancel">
     <h1>选择取消原因
     </h1>
     <ul bsd>
         <li @click="active=index" v-for="(item,index) in reason" :key="index"><span>{{item}}</span><i class='iconfont icon-gou1' :class="active== index ? 'active': ''"></i></li>
     </ul>
     <div btsb @click="cancel">申请取消并派送给其他用户</div>
 </div>
</template>

<script>
import api from "@/api/order";
export default {
  data() {
    return {
      reason: [
        "商品找不到",
        "达不到商家备注的要求",
        "不想做了",
        "本金不够",
        "没时间做",
        "任务问题"
      ],
      active: 0
    };
  },

  created() {},

  mounted() {},

  methods: {
    cancel() {
      let id = this.$route.params.id;
      let remark = this.reason[this.active];
      api.cancelOrder(id, remark).then(res => {
        if (res.data.success) {
          this.$toast("放弃任务成功");
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.ordercancel {
  padding: 0 60px;
  h1 {
    font-size: 30px;
    line-height: 126px;
    text-align: left;
  }
  ul {
    padding: 0 42px 48px;
    margin-bottom: 100px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30px;
      height: 100px;
      border-bottom: 1px solid #ddd;
      i {
        display: inline-block;
        height: 28px;
        width: 28px;
        font-size: 28px;
      }
      i.active {
        color: #ffb643;
      }
    }
  }
}
</style>