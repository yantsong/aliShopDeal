<!-- orderok -->
<template>
 <div class="orderok">
     <h1><i class='iconfont icon-gou'></i>接单成功</h1>
     <ul bsd>
         <li><span>垫付金额</span><em><b>{{data&&data.prepay}}</b>元</em></li>
         <li><span>任务佣金</span><em><b>{{data&&data.reward}}</b>元</em></li>
         <li><span>限时完成</span><em><b>60</b>分钟</em></li>
         <li><span>任务执行者</span><em><b>{{data&&data.tb}}</b></em></li>
         <li style="border:none"><span></span><em><b></b></em></li>
     </ul>
     <div btsb @click="_submit(data.id)">操作任务</div>
     <div btsb @click="_cancel(data.id)">取消任务</div>
 </div>
</template>

<script>
import api from "@/api/order";
export default {
  data() {
    return {
      data: ""
    };
  },

  created() {
    let id = this.$route.params.id;
    console.log(api);
    api.getOrder(id).then(res => {
      console.log(111);
      if (res.data.success) {
        this.data = res.data.message;
      }
    });
  },

  mounted() {},

  methods: {
    _cancel(id) {
      this.$router.push(`/orderCancel/${id}`);
    },
    _submit(id) {
      this.$router.push(`/getOrder/${id}`);
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.orderok {
  padding: 0 60px;
  h1 {
    margin: 70px auto 48px;
    text-align: center;
    font-size: 50px;
    line-height: 74px;
    color: #ffb643;
    i {
      font-size: 74px;
      display: inline-block;
      height: 74px;
      width: 74px;
      margin-right: 15px;
      vertical-align: bottom;
    }
  }
  ul {
    padding: 0 42px;
    margin-bottom: 100px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30px;
      height: 100px;
      border-bottom: 1px solid #ddd;
      b {
        color: #ffb643;
      }
    }
  }
  & > div {
    margin-bottom: 36px;
  }
  & > div:nth-last-of-type(1) {
    color: #ffb643;
    background-color: transparent;
    border: 1px solid #ffb643;
  }
}
</style>