import fetch from '@/utils/fetch';

export default {
  getBaseInfo: () => fetch.get(`baseinfo`)
}
