import fetch from '@/utils/fetch.js'

export default {
  getCaptcha: phone => fetch.get(`sendVerificationCode?phone=${phone}`),
  register: (parmas) => fetch.post(`register`, parmas, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }),
  login: parmas => fetch.post(`login`, parmas),
  getTaoCode: () => fetch.get(`panningCommand`),
  commitOrder: () => fetch.get(`commitRzdh`)
}
