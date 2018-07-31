<!--  -->
<template>
 <div class="center">
   <div class="center-banner" fcs>
     <img src="../../assets/avt.png" alt="">
     <span>名字</span>
     <p>ID XXXXX</p>
   </div>
   <ul class="center-count" bsd fc>
     <li>
       <span>0</span>
       <p>任务完成总数</p>
     </li>
     <li>
       <span>0</span>
       <p>任务完成总数</p>
     </li>
   </ul>
   <ul class="center-list" bsd>
     <li>
       <p>
         <i class='iconfont icon-icon-test'></i>
         <span>提现记录</span>
       </p>
       <em>></em>
     </li>
     <li>
       <p>
         <i class='iconfont icon-icon-test'></i>
         <span>积分明细</span>
       </p>
       <em>></em>
     </li>
   </ul>
   <ul class="center-list" bsd>
     <li>
       <p>
         <i class='iconfont icon-icon-test'></i>
         <span>提现记录</span>
       </p>
       <em>></em>
     </li>
     <li>
       <p>
         <i class='iconfont icon-icon-test'></i>
         <span>积分明细</span>
       </p>
       <em>></em>
     </li>
   </ul>
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
.center {
  ul{
    background-color: #fff;
    margin-bottom: 26px;
  }
  &-banner {
    flex-direction: column;
    height: 300px;
    color: #fff;
    font-size: 28px;
    line-height: 48px;
    background-image: url(../../assets/bg0.png);
    background-attachment:fixed;
    background-size: 750px 300px;
    img {
      width: 120px;
      height: 120px;
      margin: 20px 0 0;
    }
  }
  &-count {
    width: 692px;
    margin: 0 auto;
    margin-top: -60px;
    text-align: center;
    padding: 34px 0;
    border-radius: 20px;
    color: #333333;
    li {
      width: 49%;
      span {
        display: inline-block;
        font-size: 35px;
        margin-bottom: 21px;
      }
      p {
        font-size: 28px;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #474747;
      }
    }
  }
  &-list {
    border-radius: 20px;
    padding: 0 18px 0 3px;
    color:#333333;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 84px;
      &:nth-of-type(1){
        border-bottom: 1px solid #eeeeee;
      }
      p{
        i{
          margin: 0 32px;
        }
        span{
          font-size: 28px;
        }
      }
    }
  }
}
</style>