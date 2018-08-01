<!-- index.vue -->
<template>
 <div class="page-index">
     <MFooter></MFooter>
     <div class="index-announcement" fcs bsd>
         <i class="iconfont icon-laba"></i>
         <span>公告</span>
         <h2>{{info.announcement}}</h2>
     </div>
     <div class="index-myinfo" bsd>
         <div class="myinfo" fcs>
             <img src="../assets/avt.png" alt="" class="avater">
             <ul>
                 <li>UID:{{info.user.UUID}}</li>
                 <li>您的师傅:{{info.user.teacher}}</li>
                 <li>旺旺号:{{info.user.wangwang}}</li>
             </ul>
         </div>
         <div class="myintegral">
             <p>我的积分:{{info.user.intergarl}}</p>
             <span bts>提现</span>
         </div>
     </div>
     <ul class="index-tab-list">
         <li bsd fccm>
             <i class='iconfont icon-jinri'></i>
             <span>今日已接</span>
             <span>{{info.order.today.compelet}}/{{info.order.today.total}}</span>
         </li>
         <li bsd fccm>
             <i class='iconfont icon-jinri'></i>
             <span>今日已接</span>
             <span>{{info.order.day7.compelet}}/{{info.order.day7.total}}</span>
         </li>
         <li bsd fccm>
             <i class='iconfont icon-jinri'></i>
             <span>今日已接</span>
             <span>{{info.order.day30.compelet}}/{{info.order.day30.total}}</span>
         </li>
     </ul>
     <div class="index-cancel" v-if="true">
         <p bts>取消接单</p>
         <img src="../assets/bg1.png" alt="">
     </div>
     <div class="index-bgimg" v-else>
         <img src="../assets/bg2.png" alt="">
     </div>

 </div>
</template>

<script>
import MFooter from "@/components/MFooter.vue";
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
      }
    };
  },

  components: {
    MFooter
  },
  created() {
    api.getIndexInfo(0).then(res => {
      this.info = { ...res.data };
      this.info.user = { ...res.data.user };
    });
  },
  computed: {},

  mounted() {},

  methods: {}
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
    i {
      margin: 0 32px;
    }
    span {
      font-size: 24px;
    }
    h2 {
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
