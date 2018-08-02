<!--  -->
<template>
 <div class="message-detail">
     <h2>{{message && message.messageTitle}}</h2>
     <section>
         <p>
         {{message && message.messageDetail}}
         </p>
         <div>
             <span>
             {{message && message.messageTime}}
             </span>
         </div>
     </section>
 </div>
</template>

<script>
import api from "@/api/message";
export default {
  data() {
    return {
      message: ''
    };
  },

  created() {
    api.getmessageById(0).then(res => (this.message = res.data));
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.message-detail{
    padding: 35px 35px 0 35px;
    h2{
        background-color: #fff;
        line-height: 74px;
        font-size: 30px;
        color: #000;
        margin: 18px 0;
        text-indent: 32px;
    }
    section{
        background-color: #fff;
        padding: 20px;
        p{
            font-size: 28px;
            line-height: 44px;
            margin: 40px 0 ;
        }
        div{
            text-align: right;
        }
        span{
            font-size: 24px;
            color: #666;
        }
    }
}
</style>