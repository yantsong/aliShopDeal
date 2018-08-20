<!--  -->
<template>
 <div class="tasks">
   <task-nav :active="active" @checkTab="checkTab"></task-nav>
   <div  v-if="data.length>0">
     <task-thumb v-for="item in data" :key="item.taskId" :data="item" @doActive="actionHandle">
     </task-thumb>
   </div>
     <div v-else style="text-align:center;margin-top:20px">暂无数据</div>
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
      data: [],
      active: ""
    };
  },
  created() {
    this.active = 0;
  },
  watch: {
    active(value) {
      this.data = [];
      console.log(value);
      switch (value) {
        case 0: {
          api.getTaskList().then(res => {
            if (res.data.success) {
              this.data = res.data.message;
            }
          });
          break;
        }
        case 1: {
          api.waitPass().then(res => {
            if (res.data.success) {
              this.data = res.data.message;
            }
          });
          break;
        }
        case 2: {
          api.compelet().then(res => {
            console.log(112312);
            if (res.data.success) {
              this.data = res.data.message;
            }
          });
          break;
        }
        case 3: {
          api.comment().then(res => {
            if (res.data.success) {
              this.data = res.data.message;
            }
          });
          break;
        }
        case 4: {
          api.failed().then(res => {
            if (res.data.success) {
              this.data = res.data.message;
            }
          });
          break;
        }
        default:
          break;
      }
    }
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
    // data: function() {
    //   return this.apiArr[this.active];
    // }
  },
  components: {
    TaskNav,
    TaskThumb
  }
};
</script>
<style lang='scss' scoped>
</style>