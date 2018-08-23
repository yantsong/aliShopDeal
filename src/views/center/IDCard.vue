<!-- 实名认证 -->
<template>
 <div class="idcard">
     <ul class="idcard-info">
         <li><span>姓名</span><input type="text" v-model="name"></li>
         <li><span>身份证号</span><input type="text" v-model="IDCard"></li>
     </ul>
     <ul class="idcard-pic">
         <li>
             <span>正面</span>
             <dl @click="clickHandel('img_idcard_front')">
                 <dt>
                     <img :src="img_idcard_front" alt="">
                 </dt>
                 <dd btsb>
                     点击上传
                 </dd>
             </dl>
         </li>
         <li>
             <span>身份证反面</span>
             <dl  @click="clickHandel('img_idcard_reverse')">
                 <dt>
                     <img :src="img_idcard_reverse" alt="">
                 </dt>
                 <dd btsb>
                     点击上传
                 </dd>
             </dl>
         </li>
     </ul>
     <p>平台对上传的证件信息加水印、安全加密、确保信息安全,仅用于平台实名认证,无法二次使用</p>
     <div btsb @click="sumbit">绑定身份证</div>
     <input type="file" name="img_idcard_front" ref="img_idcard_front" class="upcard" @change="upfile"  accept="image/gif,image/jpeg,image/jpg,image/png">
     <input type="file" name="img_idcard_reverse" ref="img_idcard_reverse" class="upcard" @change="upfile"  accept="image/gif,image/jpeg,image/jpg,image/png" >
 </div>
</template>

<script>
import api from "@/api/order";
export default {
  data() {
    return {
      name: "",
      IDCard: "",
      img_idcard_front: "http://ou2puub88.bkt.clouddn.com/1181962170004602.png",
      img_idcard_reverse:
        "http://ou2puub88.bkt.clouddn.com/723174888694456345.png"
    };
  },

  created() {
    this.form = new FormData();
  },

  mounted() {},

  methods: {
    upfile(e) {
      this.form.append("name", this.name);
      this.form.append("IDCard", this.IDCard);
      this.form.append(e.target.name, e.target.files[0]);
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = a => {
        this[e.target.name] = a.target.result;
      };
    },
    clickHandel(ref) {
      this.$refs[ref].click();
    },
    sumbit() {
      api.submitId(this.form).then(res => {
        if (res.data.success) {
          this.$toast("资料提交成功");
          setTimeout(() => this.$router.go(-1), 1000);
        }
      });
    }
  },

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.idcard {
  .upcard {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
  }
  ul {
    background-color: #fff;
    padding: 15px 100px;
    span {
      flex: 0 0 auto;
      width: 158px;
      font-size: 30px;
      text-indent: 8px;
      margin-right: 30px;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  &-info {
    li {
      border-bottom: 1px solid #aaaaaa;
      padding: 30px 0 15px;
      input {
        flex: 1;
      }
    }
  }
  &-pic {
    li {
      align-items: flex-start !important ;
    }
    img {
      width: 100%;
      height: 100%;
    }
    dt {
      flex: 1;
      width: 350px;
      height: 216px;
    }
    dd {
      margin: 35px;
    }
  }
  p {
    background-color: #fff;
    margin-bottom: 35px;
    padding: 0 30px;
    font-size: 30px;
    color: #ff0000;
    line-height: 54px;
  }
}
</style>