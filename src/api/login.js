import fetch from '@/utils/fetch.js'
import qs from 'qs'
export default {
  getCaptcha: phone => fetch.get(`sendVerificationCode?phone=${phone}`),
  register: (parmas) => {
    return fetch.post(`register`, qs.stringify(parmas), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  login: parmas => fetch.post(`login`, parmas),
  getTaoCode: () => fetch.get(`panningCommand`),
  getInviteCode: () => fetch.get(`generateInviteCode`),
  commitOrder: () => fetch.get(`commitRzdh`)
}
