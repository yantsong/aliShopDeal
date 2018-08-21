import fetch from '@/utils/fetch';
export default {
  getInviteInfo: () => fetch('/apprenticeIndex'),
  getHistoryCode: (page = 1, pageSize = 10) => fetch(`/existInviteCode?page=${page}&pageSize=${pageSize}`),
  getApprenticeList: (page = 1, pageSize = 10) => fetch(`/apprentices?page=${page}&pageSize=${pageSize}`),
  getIntegralDetail: (page = 1, pageSize = 10) => fetch(`/billRecord?page=${page}&pageSize=${pageSize}`)
}
