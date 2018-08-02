<!--  -->
<template>
 <div class="message-item" @click="handClick(message.messageId)">
     <div class="message-item-time"> <span>{{message.messageTime}}</span></div>
     <div class="message-item-detail" bsd>
         <dl>
             <dt>{{message.messageTitle}}</dt>
             <dd>{{message.messageDetail}}</dd>
         </dl>
         <div class="line"></div>
         <p><strong>查看详情</strong> <em>></em></p>
     </div>
    <p></p>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["message"],

  created() {},

  mounted() {},

  methods: {
    handClick(id) {
      this.$router.push(`/message/${id}`);
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
@svg square {
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 100%;
  }
}
.line {
  height: 1px;
  background: white svg(square param(--color #dcdcdc));
}
.message-item {
  &-time {
    text-align: center;
    margin: 20px auto;
    span {
      font-size: 20px;
      line-height: 30px;
      color: #000000;
      background-color: #c8c8c8c8;
    }
  }
  &-detail {
    background-color: #fff;
    padding: 18px 20px;
    dt {
      font-size: 30px;
      color: #000000;
      margin: 18px 0 28px;
    }
    dd {
      font-size: 28px;
      line-height: 50px;
      margin-bottom: 20px;
    }
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 44px;
    margin-top:12px;
    strong {
      font-size: 26px;
    }
  }
}
</style>