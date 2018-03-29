import axios from 'axios'
import qs from 'qs'

let baseURL = 'http://202.5.16.37:3000'

const instance = axios.create({baseURL})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // 公共参数
  let commomParams = {state: 1}
  // commomParams = {}
  if (config.method === 'get') {
    config.params = { ...config.params, ...commomParams }
  } else if (config.method === 'post') {
    config.data = { ...config.data, ...commomParams}
  }
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

const request = ({method = 'POST', url = '', params = {}}) => {
  if (method.toUpperCase() === 'POST') {
    return instance.post(url, qs.stringify(params))
  } else if (method.toUpperCase() === 'GET') {
    return instance.get(url, { params })
  }
}

const axiosGet = function (url = '', params = {}) {return request({method: 'get', url, params})}
const axiosPost = function (url = '', params = {}) { return request({method: 'post', url, params}) }

export {
    axiosGet,
    axiosPost
}
