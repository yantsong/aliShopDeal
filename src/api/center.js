import fetch from '@/utils/fetch';
import qs from 'qs'
export default {
  getBaseInfo: () => fetch.get(`sdyBindInfo`),
  getBankList: () => fetch.get(`bankList`),
  getCrash: () => fetch.get(`withdrawIndex`),
  getInfo: () => fetch.get(`sdyInfo`),
  bindWx: (params) => fetch.get(`updateWechat`, {
    params
  }),
  bindQQ: (params) => fetch.get(`updateQQ`, {
    params
  }),
  bindBankCard: (params) => fetch.post(`bindBankCard`, qs.stringify(params)),
  doCarsh: (params) => fetch.post(`withdraw`, qs.stringify(params))
}
