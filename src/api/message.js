import fetch from '@/utils/fetch'

export default {
  getmessages: (page = 1, pageSize = 10) => fetch.get(`/userNotices?page=${page}&pageSize=${pageSize}`),
  getmessageById: (id) => fetch.get(`/noticeDetail?id=${id}`)
}
