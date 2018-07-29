<!--  -->
<template>
 <div class="mfooter" >
   <router-link to="/index"  class="mfooter-tabs">
     <i class='iconfont icon-piaoliusanicon-geren-'></i>
     <span>首页</span>
   </router-link>
   <router-link to="/xx"  class="mfooter-tabs">
     <i class='iconfont icon-piaoliusanicon-geren-'></i>
     <span>已接任务</span>
   </router-link>
   <router-link to="/cc"  class="mfooter-tabs">
     <i class='iconfont icon-piaoliusanicon-geren-'></i>
     <span>消息</span>
   </router-link>
   <router-link to="/aa"  class="mfooter-tabs">
     <i class='iconfont icon-piaoliusanicon-geren-'></i>
     <span>徒弟</span>
   </router-link>
   <router-link to="/qq"  class="mfooter-tabs">
     <i class='iconfont icon-piaoliusanicon-geren-'></i>
     <span>个人中心</span>
   </router-link>

 </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.mfooter{
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  text-align: center;
  color:red;
  &-tabs{
    width: 96px;
    display: inline-block;
    i{
      font-size: 46px;
      display: inline-block;
    }
    span{
      display: inline-block;
      width: 96px;
      height: 22px;
      font-size: 22px;
      margin-top: 6px;
    }
  }
  .router-link-active{
    color:#ffb643;
  }
  .router-link{
    color:black;
  }
}
</style>
