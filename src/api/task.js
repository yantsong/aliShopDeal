import fetch from '@/utils/fetch.js'

export default {
  getTaskList: fetch.get('api/taskList')
}
