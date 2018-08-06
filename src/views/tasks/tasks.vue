<!--  -->
<template>
 <div class="tasks">
   <task-nav :active="active" @checkTab="checkTab"></task-nav>
   <div>
     <task-thumb v-for="item in data" :key="item.taskId" :data="item" @doActive="actionHandle">
     </task-thumb>
   </div>
 </div>
</template>

<script>
import TaskNav from "./TaskNav.vue";
import TaskThumb from "./components/TaskThumb.vue";
import api from "@/api/task";
export default {
  data() {
    return {
      basedata: [],
      active: 0
    };
  },
  created() {
    api.getTaskList.then(res => (this.basedata = res.data.tasks));
  },

  mounted() {},

  methods: {
    actionHandle(status) {
      console.log(status);
    },
    checkTab(index) {
      this.active = index;
    }
  },

  computed: {
    data: function() {
      return this.basedata.filter(item => item.status === this.active);
    }
  },

  components: {
    TaskNav,
    TaskThumb
  }
};
</script>
<style lang='scss' scoped>
</style>