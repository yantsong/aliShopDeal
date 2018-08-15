import axios from 'axios'
const BASEURL = 'http://47.75.210.100/sdyw/api/'
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60 * 1000
})

export default instance
