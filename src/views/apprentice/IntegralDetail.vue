<!-- integralDetail -->
<template>
 <div class="integral-detail">
     <Integral-list @getMore='getMore'>
       <ul >
         <li v-for="(item,index) in listsData" :key="index">
             <div>
                 <p>{{item.title}}</p>
                 <span :style="{color:item.integral>0?'green':'black'}">{{item.integral>0?`+${item.integral}`:item.integral}}</span>
             </div>
             <p class="time">{{item.time}}</p>
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
    console.log(11);
    api
      .getIntegralDetail()
      .then(res => (this.listsData = res.data.integralList));
  },

  mounted() {},

  methods: {
    getMore() {
      api
        .getIntegralDetail()
        .then(
          res => (this.listsData = this.listsData.concat(res.data.integralList))
        );
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