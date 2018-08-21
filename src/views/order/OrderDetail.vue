<!-- getorder -->
<template>
 <div class="getorder">
     <section class="getorder-thumb" bsd>
         <img src="@/assets/avt.png" alt="">
         <dl>
             <dt>标题标题标题标题标题</dt>
             <dd>￥888</dd>
             <dd >
                 <span>北京</span>
                 <span>付款人数888</span>
             </dd>
         </dl>
     </section>
     <section class="getorder-list" bsd>
         <ul>
             <li><span>拍下数量</span><em>99元</em></li>
             <li><span>购买数量</span><em>99元</em></li>
             <li><span>应付总额</span><em>99元</em></li>
             <li><span>奖励佣金</span><em>99元</em></li>
             <li><span>商家要求</span><em>99元</em></li>
         </ul>
         <p>核验任务</p>
         <p>
             商家店铺名称:xxxx
         </p>
     </section>
     <div btsb @click="_submit">提交任务</div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    _submit() {
      let id = this.$route.params.id;
      this.$router.push(`/orderOk/${id}`);
    }
  },
  watch: {},

  computed: {},

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