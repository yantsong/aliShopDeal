import fetch from '@/utils/fetch'

export default {
  getIndexInfo: id => fetch.get(`sdyIndex`),
  watingOrder: () => fetch.get(`toTakeRW`),
  takeOrder: (id) => fetch.get(`/takeRw?rwid=${id}`)
}
