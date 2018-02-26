
function matchString(str, arr) {
  if (str == '' || arr.length == 0) {
    return false
  }
  for (let v = 0; v < arr.length; v++) {
    if (str.indexOf(arr[v]) > 0) {
      return true
      break
    }
  }
  return false
}

function isWeixin() { // 判断是否微信
  let ua = navigator.userAgent.toLowerCase()
  let arr = new Array('micromessenger')
  return matchString(ua, arr)
}

// 是否苹果客户端
function isIphone() {
  let ua = navigator.userAgent.toLowerCase()
  let arr = new Array('ipad', 'iphone', 'ipod')
  return matchString(ua, arr)
}

// 是否Android
function isAndroid() {
  let ua = navigator.userAgent.toLowerCase()
  let arr = new Array('android')
  return matchString(ua, arr)
}

function isQQ() {
  let ua = navigator.userAgent.toLowerCase()
  let arr = new Array('qq')
  return matchString(ua, arr)
}

function isWeibo() {
  let ua = navigator.userAgent.toLowerCase()
  let arr = new Array('weibo')
  return matchString(ua, arr)
}

export default {
  isWeixin,
  isIphone,
  isAndroid,
  isQQ,
  isWeibo
}
