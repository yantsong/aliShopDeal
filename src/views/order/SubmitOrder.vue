<!-- 提交资料 -->
<template>
 <div class="submitOrder">
     <ul bsd>
         <li><span>订单号</span><input type="text"  placeholder="输入订单号" v-model="form.id"></li>
         <li><span>实付金额</span><input type="text"  placeholder="输入金额" v-model="form.bill"></li>
         <li>
           <span>提示</span>
         <p>
             实付金额超过商家指定金额50元以上请勿付款；实拍订单内的宝贝如未通过验证，请不要继续提交
         </p>
         </li>
     </ul>
     <div class="submitOrder-plus">
       <input type="file" accept="image/jpeg,image/x-png,image/gif" @change="add_img">
       <span>+</span>
       <p>提交付款后订单截图，需要包含店铺名和实付金额，否则不通过</p>
     </div>
     <div btsb @click="submit">
       提交任务
     </div>
 </div>
</template>

<script>
import api from "@/api/order.js";
export default {
  data() {
    return {
      form: {
        id: "",
        bill: ""
      },
      form1: "",
      img: ""
    };
  },

  created() {},

  mounted() {},

  methods: {
    add_img(event) {
      console.log(event);
      // let reader = new FileReader();
      let img1 = event.target.files[0];
      this.img = img1;
      let size = img1.size; //文件的大小，判断图片的大小
      if (size > 3145728) {
        alert("请选择3M以内的图片！");
        return false;
      }
      let form = new FormData();
      form.append("certificate", img1, img1.name);
      this.form1 = form;
    },
    submit() {
      this.form1.append("id", this.$route.params.id);
      this.form1.append("bill", this.form.id);
      api
        .submitPic(this.form1)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          alert("上传图片出错！");
        });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.submitOrder {
  padding: 32px 25px 0 25px;
  ul {
    background-color: #fff;
    p {
      flex: 1;
      width: auto;
      line-height: 46px;
      font-size: 24px;
      color: #bf676f;
    }
    input {
      font-size: 22px;
      flex: 1;
    }
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    height: 100px;
    span {
      width: 134px;
      font-size: 26px;
      text-align: center;
    }
  }
  &-plus {
    width: 446px;
    height: 414px;
    margin: 124px auto;
    padding: 15px 30px;
    text-align: center;
    background-color: #fff;
    position: relative;
    input {
      width: 100%;
      height: 80%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
    span {
      font-size: 176px;
      line-height: 322px;
    }
    p {
      font-size: 24px;
      line-height: 34px;
      text-align: left;
      color: #bf676f;
    }
  }
}
</style>