import axios from 'axios'
const BASEURL = 'https://easy-mock.com/mock/5b601e87e5570610098cc864'
const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60 * 1000
})

export default instance