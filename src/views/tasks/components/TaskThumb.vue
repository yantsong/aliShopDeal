<!-- taskThumb -->
<template>
 <div class="task-thumb" @click="orderDetail">
     <div class="task-thumb-time" v-if="data.status == 1">
       <span>
       预计明天{{data.preTime}}完成审核
       </span>
       </div>
     <section class="task-thumb-detail" bsd>
       <div class="task-thumb-detail-shopinfo" fc>
         <img src="@/assets/avt.png" alt="">
         <dl>
           <dt>店铺名:{{data.store_name}}</dt>
           <dd>垫付金额:{{data.prePay}}</dd>
           <dd class="order-sum">拍下数量:1</dd>
           <dd class="order-money">￥{{data.goods_price}}</dd>
         </dl>
         <div class="task-thumb-detail-shopinfo-act" @click="doActive(data.status)">
          <span v-if="data.status == 0" @click="_submitOrder">继续操作</span>
          <span v-if="data.status == 1" @click="_submitOrder">继续操作</span>
          <span v-if="data.status == 2">已完成</span>
          <span v-if="data.status == 3">评价任务</span>
          <span v-if="data.status == -1">查看失败原因</span>
         </div>
       </div>
       <div class="line"></div>
       <div class="task-thumb-detail-id">
         <p>任务号:{{data.jhrw_id}}</p>
         <span class="cpbtn" bts v-if="!status" :data-clipboard-text="data.jhrw_id">复制</span>
         <span bts v-else @click.stop="takeOrder(data.jhrw_id)">点击接单</span>
       </div>
       <div class="task-thumb-detail-cptime" v-if="data.status == 2">
         {{data.compeletTime}}
       </div>

     </section>
 </div>
</template>

<script>
import api from "@/api/index.js";
import { Toast } from "vant";
export default {
  data() {
    return {};
  },
  props: {
    data: Object,
    status: {
      default: 0
    }
  },
  created() {},

  mounted() {},

  methods: {
    _submitOrder() {
      this.$router.push(`/getOrder/${this.data.jhrw_id}`);
    },
    doActive(status) {
      this.$emit("doactive", status);
    },
    takeOrder(id) {
      api.takeOrder(id).then(res => {
        if (res.data.success) {
          this.$toast("接单成功");
          this.$router.push(`/orderOk/${id}`);
        }
      });
    },
    orderDetail() {
      let id = this.data.jhrw_id;
      this.status && this.$router.push(`/OrderDetail/${id}`);
    }
  },

  computed: {},

  components: {
    Toast
  }
};
</script>
<style lang='scss' scoped>
$org: #ffb643;
.task-thumb {
  width: 720px;
  margin: 0 auto;
  &-time {
    text-align: center;
    margin: 12px auto;
    span {
      display: inline-block;
      line-height: 30px;
      font-size: 20px;
      color: #333;
      background-color: rgba($color: $org, $alpha: 0.17);
    }
  }
  &-detail {
    margin: 20px 0;
    padding: 25px 26px;
    background-color: #fff;
    font-size: 28px;
    line-height: 42px;
    .line {
      height: 1px;
      background-color: #b5b5b5;
    }
    &-shopinfo {
      justify-content: flex-start;
      padding-bottom: 24px;
      color: #333;
      text-align: left;
      img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        margin-right: 60px;
      }
      .order-sum {
        color: #666;
      }
      .order-money {
        font-size: 35px;
        color: #fa2626;
      }
      &-act {
        flex: 1;
        align-self: flex-start;
        text-align: right;
        color: $org;
        font-size: 26px;
      }
    }
    &-id {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      padding: 8px 0;
      span {
        width: 142px;
        line-height: 52px;
        color: #fff;
      }
    }
  }
}
</style>