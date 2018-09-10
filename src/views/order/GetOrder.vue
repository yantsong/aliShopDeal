<!-- getorder -->
<template>
 <div class="getorder">
     <section class="getorder-timer" bsd>
         <i class='iconfont icon-gou1'></i>
         <span >任务倒计时:</span>
         <span>00:</span>
         <span>{{ minute }}:</span>
         <span>{{second}}</span>
         <em bts @click="_cancel">放弃任务</em>
     </section>
     <section class="getorder-thumb" bsd>
         <img src="@/assets/avt.png" alt="">
         <dl>
             <dt>{{data.goods_title}}</dt>
             <dd>￥{{data.price}}</dd>
             <dd >
                 <span>北京</span>
                 <span>付款人数888</span>
             </dd>
         </dl>
     </section>
     <section class="getorder-list" bsd>
         <div>
             <input type="text" placeholder="搜索关键字" v-model="keywords">
             <em bts :data-clipboard-text="keywords">点击复制</em>
        </div>
         <ul>
             <li><span>拍下单价</span><em>{{data.goods_price}}元</em></li>
             <li><span>购买数量</span><em>{{data.num}}</em></li>
             <li><span>应付总额</span><em>{{data.prepay}}元</em></li>
             <li><span>奖励佣金</span><em>{{data.reward}}元</em></li>
             <li><span>商家要求</span><em>{{data.remark||'暂无要求'}}</em></li>
         </ul>
         <p>核验任务</p>
         <p>
             商家店铺名称:{{data.store_name}}
         </p>
         <div>
             <input type="text" placeholder="请粘贴分享淘口令或商品链接">
             <em bts>点击核对</em>
         </div>

     </section>
     <section class="getorder-uporder" bsd>
         <h3>提交订单</h3>
         <p>请确定是用绑定的 <span>123456</span> 账号下单</p>
         <h3>注意事项</h3>
         <ul>
             <li v-for="(item,index) in step" :key="index"><i class='iconfont icon-gou1'></i>{{item}}</li>
         </ul>
     </section>
     <div btsb @click="_submit">提交任务</div>
 </div>
</template>

<script>
import api from "@/api/order";
export default {
  data() {
    return {
      step: [
        `已确认是账号12345下单`,
        "已确认未使用/信用卡/淘宝客/返利方式付款",
        "已确认下单金额以及下单要求符合任务要求",
        "我会在1小时内付款并提交任务,防止任务呗释放"
      ],
      time: 60 * 15,
      data: {},
      keywords: ""
    };
  },

  created() {
    let id = this.$route.params.id;
    api.getOrder(id).then(res => {
      if (res.data.success) {
        this.data = res.data.message;
      }
    });
  },

  mounted() {
    setInterval(() => this.time--, 1000);
  },

  methods: {
    _submit() {
      let id = this.$route.params.id;
      this.$router.push(`/submitOrder/${id}`);
    },
    _cancel() {
      let id = this.$route.params.id;
      this.$router.push(`/orderCancel/${id}`);
    }
  },
  watch: {
    time: function() {
      if (this.time === 0) {
        this.$router.push("/");
      }
    }
  },

  computed: {
    second: function() {
      return this.time % 60 < 10 ? "0" + this.time % 60 : this.time % 60;
    },
    minute() {
      let time = parseInt(this.time / 60);
      return time < 10 ? "0" + time : time;
    }
  },

  components: {}
};
</script>
<style lang='scss' scoped>
.getorder {
  padding: 12px 22px 0;
  &-timer {
    background-color: #fff;
    height: 80px;
    padding: 0 18px;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    em {
      width: 192px;
      line-height: 50px;
    }
  }
  &-thumb {
    background-color: #fff;
    margin-bottom: 12px;
    height: 220px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 162px;
      height: 162px;
      border-radius: 50%;
    }
    dl {
      height: 162px;
      margin-left: 42px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
    dt {
      font-size: 28px;
    }
    dd:nth-of-type(2) {
      width: 100%;
      font-size: 26px;
      color: #505050;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &-list {
    background-color: #fff;
    padding: 30px 36px 84px 22px;

    & > div {
      input {
        display: inline-block;
        width: 470px;
        height: 60px;
        margin-right: 30px;
        line-height: 60px;
        border-radius: 30px;
        text-indent: 30px;
        border: 1px solid #b5b5b5;
        background-color: #fafafa;
      }
      em {
        display: inline-block;
        font-size: 26px;
        line-height: 60px;
        width: 138px;
        border-radius: 26px;
      }
      margin-bottom: 30px;
    }
    ul {
      li {
        padding-bottom: 24px;
        margin-bottom: 30px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        em {
          margin-right: 28px;
        }
      }
    }
    p {
      font-size: 30px;
      margin-bottom: 36px;
    }
  }
  &-uporder {
    padding: 20px 20px 30px;
    margin: 12px 0;
    background-color: #fff;
    h3 {
      line-height: 86px;
      font-size: 30px;
      font-weight: 500;
    }
    p {
      font-size: 30px;
      line-height: 54px;
    }
    ul {
      li {
        font-size: 28px;
        line-height: 64px;
      }
    }
  }
  & > div {
    margin-bottom: 36px;
  }
}
</style>