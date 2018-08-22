import api from '@/api/login'
export default {
  data() {
    return {
      time: 60,
      timer: null
    }
  },
  methods: {
    getCode() {
      api.getCaptcha(this.form.phone).then(res => {
        if (res.data.success) {
          this.$toast('验证码发送成功')
          this.startTimer()
        }
      });
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.time--;
        if (this.time < 0) {
          clearInterval(this.timer)
          this.timer = null
          this.time = 60
        }
      }, 1000)
    }
  }
}
