<!-- integralDetail -->
<template>
 <div class="integral-detail">
     <Integral-list @getMore='getMore' :status="status">
       <ul >
         <li v-for="(item,index) in listsData" :key="index">
             <div>
                 <p>{{item.bill_type| renderText}}{{item.amount}} <span v-if="item.remark">({{item.remark}})</span> </p>
                 <span :style="{color:color(item.bill_type)>0?'green':'black'}">{{item.bill_type|renderSign}}{{item.amount}}</span>
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
    api.getIntegralDetail().then(res => (this.listsData = res.data.message));
  },

  mounted() {},
  filters: {
    renderText(val) {
      let map = {
        0: "任务佣金",
        1: "任务抽成",
        2: "充值",
        3: "提现",
        4: "提现手续费",
        5: "任务本金"
      };
      return map[val];
    },
    renderSign(val) {
      if (val === 0 || val === 2) {
        return "+";
      } else if (val === 5) {
        return "";
      } else {
        return "-";
      }
    }
  },

  methods: {
    getMore() {
      this.page++;
      this.$nextTick();
      api.getIntegralDetail(this.page).then(res => {
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
      if (val === 0 || val === 2) {
        return true;
      } else if (val === 5) {
        return false;
      } else {
        return false;
      }
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