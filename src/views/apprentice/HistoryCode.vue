<!-- historyCode -->
<template>
 <div class="history-code">
     <Integral-list @getMore='getMore'>
       <ul class="history-code-list">
         <li v-for="(item,index) in listsData" :key="index" class="history-code-item">
             <div class="history-code-item-left">
               <dl>
                  <dt>{{item.inviteCode}} <em v-if="item.ifused">(未使用)</em> <em v-else class="color-style"> （已使用）</em></dt>
                  <dd class="time">{{item.time}}</dd>
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
      listsData: []
    };
  },

  created() {
    api.getHistoryCode().then(res => (this.listsData = res.data.historyCode));
  },

  mounted() {},

  methods: {
    getMore() {
      api
        .getHistoryCode()
        .then(
          res => (this.listsData = this.listsData.concat(res.data.historyCode))
        );
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