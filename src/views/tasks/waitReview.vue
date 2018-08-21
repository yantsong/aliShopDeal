<!-- 等待审核 -->
<template>
 <div class="waitReview">
     <div class="waitReview-icon">
         <i class='iconfont icon-wait'></i>
     </div>
     <h3>您的任务正在等待审核</h3>
     <div class="waitReview-step">
     <ul>
          <li><i class='iconfont icon-gou1'></i> 已提交成功</li>
          <li><i class='iconfont icon-one'></i> 审核付款对店铺链接是否正确</li>
          <li><i class='iconfont icon-two'></i> 审核付款账号金额是否正确</li>
          <li><i class='iconfont icon-three'></i> 审核付款方式以及人物要求是否符合</li>
          <li><i class='iconfont icon-gou1'></i> 预计在xx时间审核完毕</li>
     </ul>
     </div>
     <div btsb>知道了</div>
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
.waitReview {
  padding: 0 65px;
  height: 100vh;
  background-color: #fff;
  &-icon {
    text-align: center;
    i {
      margin-top: 70px;
      display: inline-block;
      color: #ffb643;
      font-size: 120px;
      margin-bottom: 34px;
    }
  }
  h3 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 88px;
  }
  &-step {
    i {
      font-size: 32px;
      margin-right: 20px;
      color: #ffb643;
    }
    ul {
      font-size: 30px;
      color: #333;
    }
    li {
      margin-bottom: 92px;
      font-size: 30px;
      &:nth-last-of-type(1) {
        i {
          &::after {
            height: 0;
            content: "";
          }
        }
      }
      i {
        position: relative;
        &::after {
          width: 5px;
          height: 100px;
          background-color: #ffb643;
          position: absolute;
          top: 28px;
          left: 13.5px;
          content: "";
        }
      }
    }
  }
}
</style>