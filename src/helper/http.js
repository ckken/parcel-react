import axios from 'axios'
import qs from 'qs'
import localstorage from 'helper/localstorage'

axios.defaults.baseURL = 'https://ct-test.yy.com'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.interceptors.request.use(function (opt) {
  return opt
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

function httpMethod(method, url, data, headers) {
  let map = {
    data: JSON.stringify(data),
    appId: 'cocktail'
  }
  let token = localstorage.get('token') || ''
  let appId = localstorage.get('appId') || ''
  console.log('token', token)
  console.log('appId', appId)
  if (method === 'post' && token !== '' && appId !== '') {
    console.log('post提交')
    // headers = headers || { 'content-type': 'application/x-www-form-urlencoded' }
    headers = headers || { 'content-type': 'application/json' }
    headers['X-Authorization'] = token
    headers['X-AppId'] = appId
    delete map.appId
    // opt.data = {}
  }

  let opt = { method, url }
  if (headers) opt.headers = headers
  switch (method) {
    case 'get':
      opt.params = map
      break
    default:
      console.log('map', map.data)
      opt.data = map.data
      // opt.data = qs.stringify(map)
      break
  }
  console.log('opt', opt)
  return axios(opt)
}
export default {
  request: axios.request,
  get(url, map, headers) {
    return httpMethod('get', url, map, headers)
  },
  delete(url, map, headers) {
    return httpMethod('delete', url, map, headers)
  },
  head: axios.head,
  post(url, map, headers) {
    return httpMethod('post', url, map, headers)
  },
  put(url, map, headers) {
    return httpMethod('put', url, map, headers)
  },
  patch(url, map, headers) {
    return httpMethod('patch', url, map, headers)
  }
}
/**
 * 环境切换域名
 * @param name
 */
export const env = process.env.proJectEnv
export const isDev = env !== 'prod'
export const yydomain = function (path, type = 2) { // 1 登录注册 跟 2 登录以后的协议，域名不一样!!!
  let hostname = (isDev) ? 'https://cxuaas-test.yy.com' : 'https://cxuaas.yy.com'
  hostname = (type === 1) ? hostname : (isDev) ? 'https://ct-test.yy.com' : 'https://ct.yy.com'
  return `${hostname}${path}`
}
