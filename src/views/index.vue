<!-- index.vue -->
<template>
 <div class="page-index">
     <MFooter></MFooter>
     <div class="index-announcement" fcs bsd>
       <div>
         <i class="iconfont icon-laba"></i>
        <span>公告</span>
       </div>
         <h2>
           {{info.notice}}</h2>
      </div>
     <div class="index-myinfo" bsd>
         <div class="myinfo" fcs>
             <img src="../assets/avt.png" alt="" class="avater">
             <ul>
                 <li>UID:{{info.id}}</li>
                 <li>您的师傅:{{info.sf}}</li>
                 <li>旺旺号:{{info.ww}}</li>
             </ul>
         </div>
         <div class="myintegral">
             <p>我的积分:{{info.amount}}</p>
             <span bts @click="_getCrash">提现</span>
         </div>
     </div>
     <ul class="index-tab-list">
         <li bsd fccm>
             <i class='iconfont icon-jinri'></i>
             <span>今日已接</span>
             <span>{{info.today_complete}}/{{info.today_count}}</span>
         </li>
         <li bsd fccm>
             <i class='iconfont icon-image4'></i>
             <span>本周已接</span>
             <span>{{info.week_complete}}/{{info.week_count}}</span>
         </li>
         <li bsd fccm>
             <i class='iconfont icon-icon-test2'></i>
             <span>本月已接</span>
             <span>{{info.month_complete}}/{{info.month_count}}</span>
         </li>
     </ul>
     <div class="index-cancel" v-if="status">
         <p bts @click="status = 0">取消接单</p>
         <div v-if="data.length">
         <task-thumb v-for="item in data" :key="item.taskId" :data="item" :status="1">
     </task-thumb>
         </div>
     <img src="../assets/bg1.png" alt="" v-else>
     </div>
     <div class="index-bgimg" v-else @click="_getOrder">
         <img src="../assets/bg2.png" alt="">
     </div>

 </div>
</template>

<script>
import MFooter from "@/components/MFooter.vue";
import TaskThumb from "@/views/tasks/components/TaskThumb.vue";
import { NoticeBar } from "vant";
import api from "@/api/index";
export default {
  data() {
    return {
      info: {
        user: {},
        order: {
          today: {
            total: 0,
            compelet: 0
          },
          day7: {
            total: 0,
            compelet: 0
          },
          day30: {
            total: 0,
            compelet: 0
          }
        }
      },
      status: 0
    };
  },

  components: {
    MFooter,
    TaskThumb,
    NoticeBar
  },
  created() {
    api.getIndexInfo(0).then(res => {
      if (res.data.success) {
        this.info = res.data.message;
      }
    });
  },
  computed: {},

  mounted() {},

  methods: {
    _getOrder() {
      api.watingOrder().then(res => {
        if (res.data.success) {
          this.status = 1;
          this.data = res.data.message;
        }
      });
    },
    _getCrash() {
      this.$router.push("/getCrash");
    }
  }
};
</script>
<style lang="scss" scoped>
.page-index {
  padding: 0 18px;
  color: black;
  .index-announcement {
    height: 74px;
    margin: 20px 0;
    background-color: #fff;
    & > div {
      width: 154px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    i {
    }
    span {
      font-size: 24px;
    }
    h2 {
      flex: 1;
      padding-right: 40px;
      font-size: 24px;
      overflow: hidden;
    }
  }
  .index-myinfo {
    padding: 0 64px;
    margin-bottom: 20px;
    background-color: #fff;
    .myinfo {
      padding: 12px 0;
      img {
        margin-right: 48px;
        border-radius: 50%;
        height: 107px;
        width: 107px;
      }
      li {
        font-size: 28px;
        line-height: 48px;
      }
    }
    .myintegral {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      height: 130px;
      p {
        font-size: 26px;
      }
      span {
        display: inline-block;
        width: 166px;
        line-height: 54px;
      }
    }
  }
  .index-tab-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      width: 207px;
      height: 140px;
      justify-content: space-around;
      padding-top: 10px;
      background-color: #fff;
      i {
        font-size: 48px;
        color: #ffb643;
      }
      span {
        font-size: 28px;
      }
    }
  }
  .index-bgimg {
    position: absolute;
    bottom: 100px;
    left: 0;
    img {
      width: 100%;
    }
  }
  .index-cancel {
    text-align: center;
    p {
      width: 620px;
      line-height: 72px;
      border-radius: 35px;
      margin: 56px auto 70px;
    }
    img {
      width: 211px;
      height: 174px;
    }
  }
}
</style>
