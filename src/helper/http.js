import axios from 'axios'
import localstorage from 'src/helper/localstorage'
import config from 'src/config'
// import {message} from 'antd'
axios.defaults.baseURL = config.host||''
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use(function (opt) {
  return opt
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  if (response.data.code !== 1) {
    return logicError(response.data)
  }
  return response.data.data||{}
}, function (error) {
  return Promise.reject(error)
})

function logicError(d) {
  // d.msg && message.error(d.msg)
  return d
}

function httpMethod(method, url, data, dataExt, headers) {
  let map = {
    data: JSON.stringify(data),
    ...dataExt
  }
  const userInfo = localstorage.get('userInfo')
  const {token, appId} = userInfo
  if (method === 'post' && token !== '' && appId !== '') {
    headers = headers || { 'content-type': 'application/json' }
    headers['X-Authorization'] = token
    headers['X-AppId'] = appId
  }

  let opt = { method, url }
  if (headers) opt.headers = headers
  switch (method) {
    case 'get':
      opt.params = map
      break
    default:
      opt.data = map.data
      break
  }
  return axios(opt)
}

export default {
  request: axios.request,
  get(...args) {
    return httpMethod('get', ...args)
  },
  delete(...args) {
    return httpMethod('delete', ...args)
  },
  head: axios.head,
  post(...args) {
    return httpMethod('post', ...args)
  },
  put(...args) {
    return httpMethod('put', ...args)
  },
  patch(...args) {
    return httpMethod('patch', ...args)
  }
}
