<!-- bindcard -->
<template>
 <div class="bindcard" >
     <div class="bindcard-binded" bsd v-if="false">
         <p>您已绑定银行卡</p>
         <span bts>重新绑定</span>
     </div>
     <div class="bindcard-bind" v-else>
         <section>
             <dl>
                 <dt>持卡人姓名</dt>
                 <dd><input type="text" placeholder="请填写姓名" v-model="form.name"></dd>
             </dl>
             <dl>
                 <dt>填写开户行</dt>
                 <dd>
                  <select name="none" id="select" v-model="form.bank">
                    <option value="">请填写开户银行</option>
                    <option :value="item.id" v-for="(item,index) in banks" :key="index">{{item.name}}</option>
                  </select>
                </dd>
             </dl>
             <dl>
                 <dt>银行卡号</dt>
                 <dd><input type="text" placeholder="请填写银行卡号" v-model.trim="form.card_no"></dd>
             </dl>
             <p>
                 如果您选择的银行全称没有在选项列表中,请更换列表中有的银行卡
             </p>
         </section>
         <div class="bindcard-bind-btn" bts @click="_bindHandel">
             提交绑定
         </div>
     </div>
 </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
// import { Select, Option } from "element-ui";
import api from "@/api/center";
export default {
  data() {
    return {
      banks: [],
      form: {
        bank: "",
        name: "",
        card_no: ""
      }
    };
  },

  created() {},

  mounted() {
    api.getBankList().then(res => (this.banks = res.data.message));
  },

  methods: {
    _bindHandel() {
      api.bindBankCard(this.form).then(res => {
        if (res.data.success) {
          this.$router.go(-1);
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
#select {
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  line-height: 60px;
  height: 60px;
  text-indent: 26px;
  border: 1px solid #d2d2d2;
  outline: none;
  color: #666;
}
.bindcard {
  &-binded {
    width: 714px;
    margin: 28px auto 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    height: 100px;
    span {
      line-height: 62px;
      width: 210px;
      border-radius: 30px;
    }
  }
  &-bind {
    section {
      background-color: #fff;
      padding: 0 52px;
      dl {
        padding: 22px 0;
        dt {
          font-size: 30px;
          line-height: 60px;
          text-align: left;
        }
        dd {
          font-size: 24px;
          input {
            width: 100%;
            border-radius: 8px;
            line-height: 60px !important;
            text-indent: 26px;
            border: 1px solid #d2d2d2;
            outline: none;
          }
        }
      }
      p {
        font-size: 26px;
        line-height: 46px;
        padding: 36px 0;
      }
    }
    &-btn {
      margin: 70px auto 0;
      width: 634px;
      line-height: 72px;
      border-radius: 36px;
    }
  }
}
</style>
