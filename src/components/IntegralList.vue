<!-- templat about history and intergral -->
<template>
 <div class="integral-list">
     <ul slot>
         <li v-for="(item,index) in listsData" :key="index">
             <div>
                 <p>{{item.title}}</p>
                 <span :style="{color:item.integral>0?'green':'black'}">{{item.integral>0?`+${item.integral}`:item.integral}}</span>
             </div>
             <p class="time">{{item.time}}</p>
         </li>
     </ul>
     <div class="integral-list-more" bts>
         加载更多
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["listsData"],

  created() {},

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.integral-list {
  ul {
    padding-bottom: 10px;
    li {
      background-color: #fff;
      margin-bottom: 10px;
      padding: 28px 31px 23px;
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 28px;
        line-height: 28px;
        margin-bottom: 20px;
      }
      .time {
        font-size: 22px;
        color: #666666;
      }
    }
  }
  &-more{
      border-radius: 35px;
      width: 620px;
      line-height: 71px;
      margin: 48px auto 0;
  }
}
</style>