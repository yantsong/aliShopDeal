import fetch from '@/utils/fetch'

export default {
  getIndexInfo: id => fetch.get(`api/index/${id}`)
}
