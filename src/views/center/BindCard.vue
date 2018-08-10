<!-- bindcard -->
<template>
 <div class="bindcard" >
     <div class="bindcard-binded" bsd v-if="false">
         <p>您已绑定银行卡</p>
         <span bts>重新绑定</span>
     </div>
     <div class="bindcard-bind" v-else>
         <section>
             <dl>
                 <dt>持卡人姓名</dt>
                 <dd><input type="text" placeholder="请填写姓名"></dd>
             </dl>
             <dl>
                 <dt>持卡人姓名</dt>
                 <dd>
                  <select name="none" id="select" value="2222">
                    <option value="111">请填写开户银行</option>
                    <option value="2222">2222</option>
                    <option value="3333">3333</option>
                    <option value="4444">4444</option>
                  </select>
                </dd>
             </dl>
             <dl>
                 <dt>持卡人姓名</dt>
                 <dd><input type="text" placeholder="请填写银行卡号"></dd>
             </dl>
             <p>
                 如果您选择的银行全称没有在选项列表中,请更换列表中有的银行卡
             </p>
         </section>
         <div class="bindcard-bind-btn" bts>
             提交绑定
         </div>
     </div>
 </div>
</template>
<script>
/* eslint-disable no-unused-vars*/
import { Select, Option } from "element-ui";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },

  created() {},

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>

<style lang='scss' scoped>
#select {
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  line-height: 60px;
  height: 60px;
  text-indent: 26px;
  border: 1px solid #d2d2d2;
  outline: none;
  color: #666;
}
.bindcard {
  &-binded {
    width: 714px;
    margin: 28px auto 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    height: 100px;
    span {
      line-height: 62px;
      width: 210px;
      border-radius: 30px;
    }
  }
  &-bind {
    section {
      background-color: #fff;
      padding: 0 52px;
      dl {
        padding: 22px 0;
        dt {
          font-size: 30px;
          line-height: 60px;
          text-align: left;
        }
        dd {
          font-size: 24px;
          input {
            width: 100%;
            border-radius: 8px;
            line-height: 60px !important;
            text-indent: 26px;
            border: 1px solid #d2d2d2;
            outline: none;
          }
        }
      }
      p {
        font-size: 26px;
        line-height: 46px;
        padding: 36px 0;
      }
    }
    &-btn {
      margin: 70px auto 0;
      width: 634px;
      line-height: 72px;
      border-radius: 36px;
    }
  }
}
</style>
