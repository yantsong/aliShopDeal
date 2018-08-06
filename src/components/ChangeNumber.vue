<!-- change qq and wechat templat -->
<template>
 <div class="changenumber">
     <ul>
         <li>当前{{name}}号:
         </li>
         <li>
             <span>
                  新{{name}}号:
            </span>
            <input type="text" :placeholder="holderText">
         </li>
     </ul>
 </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      name: "",
      holderText: ""
    };
  },
  created() {
    console.log(111);
    // this.number = this.$router.query.id;
    // this.name = this.$router.query.name;
    // this.holderText = `请输入要绑定的${this.$router.query.name}号`;
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {}
};
</script>
<style lang='scss' scoped>
.changenumber {
  li {
    width: auto;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    color: #000;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>