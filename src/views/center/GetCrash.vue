<!-- 提现 -->
<template>
 <div class="getcrash">
     <section bsd>
         <p>提现到银行卡 <span>{{data.card_bank}}({{data.card_no}})</span></p>
         <p>提现金额</p>
            <div class="money">
                <em>￥</em> <input type="text" v-model="form.amount">
            </div>
            <div class="overage">
                当前余额{{data.balance}}元 <span @click="form.amount = data.balance">全部提现</span>
            </div>
     </section>
     <div btsb @click="docrash"> 提现</div>
 </div>
</template>

<script>
import api from "@/api/center";
export default {
  data() {
    return {
      data: {},
      form: {
        amount: ""
      }
    };
  },

  created() {
    api.getCrash().then(res => {
      if (res.data.success) {
        this.data = res.data.message;
      }
    });
  },

  mounted() {},

  methods: {
    docrash() {
      api.doCarsh(this.form).then(res => {
        if (res.data.success) {
          this.$toast("提现成功!请注意查收");
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.getcrash {
  padding: 26px 26px 0;
  color: black;
  section {
    padding: 0 48px 80px;
    margin-bottom: 34px;
    background-color: #fff;
    font-size: 30px;
    span {
      color: #599aea;
    }
    p {
      line-height: 110px;
      &:nth-last-of-type(2) {
        // line-height: ;
      }
    }
    .money {
      display: flex;
      line-height: 66px;
      border-bottom: 1px #dcdcdc solid;
      input {
        flex: 1;
      }
    }
    .overage {
      font-size: 25px;
      line-height: 1;
    }
  }
}
</style>