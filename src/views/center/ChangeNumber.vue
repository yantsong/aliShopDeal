<!-- change qq and wechat templat -->
<template>
 <div class="changenumber">
     <ul>
         <li>当前{{name}}号: {{number}}
         </li>
         <li>
             <span>
                  新{{name}}号:
            </span>
            <input type="text" :placeholder="holderText" v-model="newnumber">
         </li>
     </ul>
     <div class="changenumber-button" bts> 确认修改</div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      name: "",
      holderText: "",
      newnumber: ""
    };
  },
  created() {
    this.number = this.$route.query.id;
    this.name = this.$route.query.name;
    this.holderText = `请输入要绑定的${this.$route.query.name}号`;
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.changenumber {
  background-color: #fff;
  height: 100vh;
  text-align: left;
  padding: 70px 56px 0 74px;
  li {
    width: auto;
    height: 60px;
    margin: 40px 0;
    font-size: 30px;
    line-height: 60px;
    color: #000;
    border-bottom: 1px solid #e5e5e5;
    &:nth-child(1) {
      width: 450px;
    }
  }
  input {
    border: none;
    outline: none;
    margin-left: 32px;
    line-height: 50px;
  }
  & > div {
    width: 620px;
    line-height: 71px;
    font-size: 26px;
    border-radius: 35.5px;
    margin-top: 63px;
  }
}
</style>