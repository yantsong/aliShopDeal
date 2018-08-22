<!-- 提现记录 -->
<template>
 <div class="integral-detail">
     <Integral-list @getMore='getMore' :status="status">
       <ul >
         <li v-for="(item,index) in listsData" :key="index">
             <div>
                 <p>提现{{item.amount}}元</p>
                 <span :style="{color:color(item.status)}">{{item.status | renderText}}</span>
             </div>
             <p class="time">{{item.apply_time}}</p>
         </li>
     </ul>
     </Integral-list>
 </div>
</template>

<script>
import IntegralList from "@/components/IntegralList.vue";
import api from "@/api/apprentice.js";
export default {
  data() {
    return {
      listsData: [],
      status: 0,
      page: 1
    };
  },

  created() {
    console.log(11);
    api.getCrashHistory().then(res => (this.listsData = res.data.message));
  },

  mounted() {},

  methods: {
    getMore() {
      this.page++;
      this.$nextTick();
      api.getCrashHistory(this.page).then(res => {
        if (res.data.success) {
          if (res.data.message.length === 0) {
            this.status = 1;
            return;
          }
          this.listsData = this.listsData.concat(res.data.message);
        }
      });
    },
    color(val) {
      if (val === 2) {
        return "green";
      } else if (val === 3) {
        return "red";
      } else {
        return "black";
      }
    }
  },
  filters: {
    renderText(val) {
      let map = {
        0: "待审核",
        1: "打款中",
        2: "已打款",
        3: "审核不通过"
      };
      return map[val];
    }
  },

  computed: {},

  components: {
    IntegralList
  }
};
</script>
<style lang='scss' scoped>
</style>