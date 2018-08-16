import fetch from '@/utils/fetch';
import qs from 'qs'
export default {
  getBaseInfo: () => fetch.get(`sdyBindInfo`),
  getBankList: () => fetch.get(`bankList`),
  bindWx: (params) => fetch.get(`updateWechat`, {
    params
  }),
  bindQQ: (params) => fetch.get(`updateQQ`, {
    params
  }),
  bindBankCard: (params) => fetch.post(`bindBankCard`, qs.stringify(params))
}
