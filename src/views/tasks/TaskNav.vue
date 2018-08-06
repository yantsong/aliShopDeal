<!-- nav -->
<template>
<div>
 <nav class="task-nav">
     <a v-for="(item,index) in tablist" :key="index" @click="checkTab(index)">
       <span :class="active==index?'active':''">{{item}} </span>
     </a>
 </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      tablist: ["待操作", "待审核", "已完成", "评价任务", "失败任务"]
    };
  },
  props: ["active"],
  created() {},

  mounted() {},

  methods: {
    checkTab(index) {
      this.$emit("checkTab", index);
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
$org: #ffb643;
.task-nav {
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-around;
  background-color: #fff;
  a {
    width: 120px;
    text-align: center;
    flex: 1;
  }
  span {
    position: relative;
  }
  .active::after {
    content: "";
    width: 90%;
    height: 50%;
    background: radial-gradient(
      rgba(255, 217, 157, 1),
      rgba(255, 217, 157, 0.5),
      rgba(255, 217, 157, 0.1)
    );
    position: absolute;
    bottom: 10%;
    left: 50%;
    border-radius: 40px;
    transform: translateX(-50%);
  }
}
</style>