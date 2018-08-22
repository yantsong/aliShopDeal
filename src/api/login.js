import fetch from '@/utils/fetch.js'
import qs from 'qs'
export default {
  getCaptcha: phone => fetch.get(`sendVerificationCode?phone=${phone}`),
  register: (parmas) => {
    return fetch.post(`register`, qs.stringify(parmas))
  },
  repassword: (parmas) => {
    return fetch.post(`resetPassword`, qs.stringify(parmas))
  },
  login: parmas => fetch.post(`login`, parmas),
  getTaoCode: () => fetch.get(`panningCommand`),
  getInviteCode: () => fetch.get(`generateInviteCode`),
  commitOrder: () => fetch.get(`commitRzdh`)
}
