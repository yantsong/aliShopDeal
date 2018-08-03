<!-- integralDetail -->
<template>
 <div>
     <Integral-list :listsData="listsData"></Integral-list>
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
    api.getIntegralDetail().then(res => (this.listsData = res.data.integralList));
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {
    IntegralList
  }
};
</script>
<style lang='scss' scoped>
</style>