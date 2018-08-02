<!-- messages -->
<template>
 <div class="message">
   <MessageItem v-for="item in messages" :key="item.messageId" :message="item" @click="handClick(0)">
   </MessageItem>
 </div>
</template>

<script>
import MessageItem from "./components/MessageItem";
import api from "@/api/message";
export default {
  data() {
    return {
      messages: []
    };
  },

  created() {
    api.getmessages().then(res => (this.messages = res.data.messages));
  },

  mounted() {},

  methods: {
  },

  computed: {},

  components: {
    MessageItem
  }
};
</script>
<style lang='scss' scoped>
.message {
  padding: 0 30px 0 36px;
}
</style>