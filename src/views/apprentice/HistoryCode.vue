<!-- historyCode -->
<template>
 <div class="history-code">
     <Integral-list @getMore='getMore' :status="status">
       <ul class="history-code-list">
         <li v-for="(item,index) in listsData" :key="index" class="history-code-item">
             <div class="history-code-item-left">
               <dl>
                  <dt>{{item.invite_code}} <em v-if="!item.status">(未使用)</em> <em v-else class="color-style"> （已使用）</em></dt>
                  <dd class="time">{{item.create_time}}</dd>
               </dl>
             <span class="history-code-word" bts @click="doCopy">复制</span>
             </div>
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
      page: 1,
      status: 0
    };
  },

  created() {
    api.getHistoryCode().then(res => {
      if (res.data.success) {
        this.listsData = res.data.message;
      }
    });
  },

  mounted() {},

  methods: {
    getMore() {
      this.page++;
      this.$nextTick();
      api.getHistoryCode(this.page).then(res => {
        if (res.data.success) {
          if (res.data.message.length === 0) {
            this.status = 1;
            return;
          }
          this.listsData = this.listsData.concat(res.data.message);
        }
      });
    },
    doCopy() {
      console.log("copy");
    }
  },

  computed: {},

  components: {
    IntegralList
  }
};
</script>
<style lang='scss' scoped>
.history-code {
  &-list {
    dt {
      font-size: 28px;
      line-height: 30px;
      margin-bottom: 18px;
      em {
        margin-left: 50px;
      }
      .color-style {
        color: #ffb643;
      }
    }
    li {
      .history-code-item-left {
        margin-bottom: 0;
      }
      padding-bottom: 4px;
      span {
        display: inline-block;
        width: 120px;
        line-height: 48px;
        border-radius: 24px;
      }
    }
  }
}
</style>