import fetch from '@/utils/fetch'
export default {
  getmessages: () => fetch.get('api/messages'),
  getmessageById: (id) => fetch.get(`api/messages/${id}`)
}
