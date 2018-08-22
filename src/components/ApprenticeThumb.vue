<!--  -->
<template>
    <section class="apprentices-thumb" bsd fc>
     <div class="apprentices-thumb-avater">
         <img src="@/assets/avt.png" alt="">
         <br>
         <span>{{data.name}}</span>
     </div>
     <div class="apprentices-thumb-info">
         <div class="apprentices-thumb-info-phone">
             <div>
                 <h3>平台ID:{{data.id}}</h3>
                 <p>手机号:{{data.phone || '暂无'}}</p>
             </div>
             <i class="iconfont icon-dianhua"></i>
         </div>
         <div class="apprentices-thumb-info-total">
             <span>任务总数: {{data.task_total}}</span>
             <em>今日完成: {{data.task_tody}}</em>
         </div>
         <div class="apprentices-thumb-info-time">
             注册时间: {{data.create_time}}
         </div>
     </div>
 </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"],

  created() {},

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.apprentices-thumb {
  width: 715px;
  margin: 22px auto;
  padding: 14px 70px 26px 0;
  border-radius: 10px;
  background-color: #fff;
  &-avater {
    width: 236px;
    margin-right: 10px;
    text-align: center;
    img {
      width: 158px;
      height: 158px;
      border-radius: 50%;
      margin-bottom: 12px;
    }
  }
  &-info {
    flex: 1;
    font-size: 28px;
    line-height: 54px;
    &-phone {
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        display: inline-block;
        font-size: 64px;
        color: #ffb643;
      }
    }
    &-total {
      color: #666666;
      em {
        margin-left: 54px;
      }
    }
    &-time {
      font-size: 24px;
      color: #999;
    }
  }
}
</style>