<!--  -->
<template>
<div>
    <div v-for="(item, index) in data" :key="index">
        <ApprenticeThumb :data="item"></ApprenticeThumb>
    </div>
</div>
</template>

<script>
import ApprenticeThumb from "@/components/ApprenticeThumb";
import api from "@/api/apprentice";
export default {
  data() {
    return {
      data: ""
    };
  },

  created() {
    api.getApprenticeList().then(res => (this.data = res.data.apprentices));
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {
    ApprenticeThumb
  }
};
</script>
<style lang='scss' scoped>
</style>