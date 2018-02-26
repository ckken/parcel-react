/**
 * Created by Administrator on 2017/6/7.
 */
import config from 'src/config'

var storage = window.localStorage

var pre = config.env + '_' + config.localVersion + '_'
// var pre = ''

function isJSON(obj) {
  var checkjson = typeof (obj) === 'object' && Object.prototype.toString.call(obj).toLowerCase() == '[object object]' && !obj.length
  return checkjson
}

export default {
  set(name, value) {
    if (isJSON(value))value = JSON.stringify(value)
    return storage.setItem(pre + name, value)
  },
  get(name) {
    let data = storage.getItem(pre + name) || `{}`
    try {
      data = JSON.parse(data)
    } catch (e) {

    }
    return data
  },
  remove(name) {
    return storage.removeItem(pre + name)
  }

}
