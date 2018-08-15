<!-- orderok -->
<template>
 <div class="orderok">
     <h1><i class='iconfont icon-gou1'></i>接单成功</h1>
     <ul bsd>
         <li><span>垫付金额</span><em><b>888</b>元</em></li>
         <li><span>垫付金额</span><em><b>888</b>元</em></li>
         <li><span>垫付金额</span><em><b>888</b>元</em></li>
         <li><span>垫付金额</span><em><b>888</b>元</em></li>
         <li><span>垫付金额</span><em><b>888</b></em></li>
         <li><span></span><em><b></b></em></li>
     </ul>
     <div btsb>操作任务</div>
     <div btsb>取消任务</div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {},

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