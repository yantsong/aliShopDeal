import axios from 'axios'
import {
  Toast
} from 'vant'

const BASEURL = 'http://47.75.210.100/sdyw/api/'
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60 * 1000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem('token')
    token && (config.headers['token'] = token)
    return config
  }
)
instance.interceptors.response.use(
  res => {
    console.log(res)
    // eslint-disable-next-line
    if (res.data.message == '登陆凭证已失效，请重新登录！') {
      console.log(res.data.message);
      localStorage.clear()
      window.location.replace('/');
    }
    if (!res.data.success) {
      Toast(res.data.message)
      console.log(res.data.message, 1);
    }
    return res
  },
  err => {
    Toast('网络出错!')
    return err
  }
)

export default instance
