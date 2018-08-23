<!-- bindinfo -->
<template>
 <div class="bindinfo">
     <ul>
         <li><span>旺旺号</span><em>{{data.ww}}</em></li>
         <li><span>手机号</span><em>{{data.phone}}</em></li>
         <li @click="bindCard(data.card)"><span>绑定银行卡</span><i class='iconfont icon-toright'></i></li>
         <li @click="IDCard(data.id)"><span>身份证号</span><i class='iconfont icon-toright'></i></li>
         <li @click="changeQQ(data.qq, 'QQ')"><span>QQ</span><i class='iconfont icon-toright'></i></li>
         <li @click="changeWe(data.we_chat, '微信')"><span>微信</span><i class='iconfont icon-toright'></i></li>
     </ul>
 </div>
</template>

<script>
import api from "@/api/center";
export default {
  data() {
    return {
      data: ""
    };
  },

  created() {
    api.getBaseInfo().then(res => (this.data = res.data.message));
  },

  mounted() {},

  methods: {
    changeQQ(id, name) {
      if (!id) id = 0;
      this.$router.push(`/changenumber?id=${id}&name=${name}`);
    },
    changeWe(id, name) {
      if (!id) id = 0;
      this.$router.push(`/changenumber?id=${id}&name=${name}`);
    },
    bindCard(id) {
      this.$router.push(`/bindcard?id=${id}`);
    },
    IDCard() {
      this.$router.push(`/idcard`);
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.bindinfo {
  background-color: #fff;
  margin-top: 18px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    font-size: 30px;
    padding: 0 24px 0 36px;
    color: #333;
    border-bottom: 1px solid #bfbfbf;
    em {
      margin-right: 22px;
    }
    i {
      color: #333;
    }
  }
}
</style>