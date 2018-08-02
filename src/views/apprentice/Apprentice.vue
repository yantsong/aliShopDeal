<!--  -->
<template>
 <div class="apprentice">
   <ul class="apprentice-count" bsd fc>
     <li>
       <p>任务完成总数</p>
       <span>0</span>
     </li>
     <li>
       <p>任务完成总数</p>
       <span>0</span>
     </li>
   </ul>
   <div class="apprentice-tips">
     <span>一个邀请码只可邀请一个用户</span>
     <em>历史邀请码></em>
   </div>
   <ul class="apprentice-count" invite bsd fc>
     <li>
       <p>xxxxxxx</p>
       <span>复制</span>
     </li>
     <li>
       <p>生成邀请码</p>
       <span>已生成:6/40</span>
     </li>
   </ul>
   <ul class="apprentice-tablist" bsd >
     <li>
       <span>徒弟列表</span>
       <em>></em>
     </li>
     <li>
       <span>徒弟列表</span>
       <em>></em>
     </li>
     <li>
       <span>徒弟列表</span>
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

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.apprentice {
  padding: 0 10px;
  &-tips {
    text-align: left;
    em {
      color: #ffb643;
      margin-left: 30px;
    }
  }
  &-count[invite] {
    li {
      span {
        color: #ffb643;
      }
    }
  }
  &-count {
    margin: 44px auto;
    background-color: #fff;
    text-align: center;
    padding: 34px 0;
    border-radius: 20px;
    color: #333333;
    li {
      width: 49%;
      span {
        display: inline-block;
        font-size: 26px;
        margin-top: 14px;
      }
      p {
        font-size: 28px;
      }
      &:nth-of-type(1) {
        border-right: 1px solid #474747;
      }
    }
  }
  &-tablist {
    background-color: #fff;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 83px;
      color: #333333;
      font-size: 28px;
      border-bottom: 2px solid #eeeeee;
      &:nth-last-of-type(1){
        border:none;
      }
    }
    span {
      margin-left: 25px;
    }
    em{
      margin-right: 25px;
    }
  }
}
</style>