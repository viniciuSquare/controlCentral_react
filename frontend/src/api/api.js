import axios from 'axios'

const api = axios.create({
  baseURL : 'http://172.168.1.88:3001/',
  withCredentials: false
})

export default api