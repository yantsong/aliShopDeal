import fetch from '@/utils/fetch.js'
const Parmas = {
  page: 1,
  pageSize: 10
}
export default {
  getTaskList: (number = 1) => fetch.get(`sdyToDoRws?page=${number}&pageSize=${Parmas.pageSize}`),
  waitPass: (number = 1) => fetch.get(`sdyToAuditRws?page=${number}&pageSize=${Parmas.pageSize}`),
  waitPass2: (number) => fetch.get(`sdyToAuditRws`, Parmas),
  compelet: (number = 1) => fetch.get(`sdyFinishRws?page=${number}&pageSize=${Parmas.pageSize}`),
  comment: (number = 1) => fetch.get(`sdyFinishRws?page=${number}&pageSize=${Parmas.pageSize}`),
  failed: (number = 1) => fetch.get(`sdyFailRws?page=${number}&pageSize=${Parmas.pageSize}`)
}
