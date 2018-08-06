<!-- templat about history and intergral -->
<template>
 <div class="integral-list">
   <slot></slot>
     <div class="integral-list-more" bts @click="clickMore">
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

  methods: {
    clickMore() {
      this.$emit("getMore");
    },
    clickCopy(id) {
      this.$emit("copy", id);
    }
  },

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
  &-more {
    border-radius: 35px;
    width: 620px;
    line-height: 71px;
    margin: 48px auto 0;
  }
}
</style>