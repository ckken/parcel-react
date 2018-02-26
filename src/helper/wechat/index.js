import http from 'src/helper/http'
import wx from 'src/helper/wechat/weixin'
export const share = function (opt, success, cancel) {
  const url = encodeURIComponent(window.location.href)
  console.log(url)
  http.get(`https://wap.yy.com/mobileweb/share/weixinSign?url=${url}`).then((d) => {
    if (d.code === 0) {
      const config = d.data
      config.debug = false
      config.jsApiList = [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
      wx.config(config)
      var op = {
        title: '',
        link: '',
        imgUrl: '',
        desc: '',
        type: '',
        dataUrl: '',
        cb: false,
        activityType: '', // 活动类型
        activityId: ''// 活动id

      }
      success = success || function () {
      }
      cancel = cancel || function () {
      }
      var shareRecord = function (shareType) {
        // ::TODO record 记录用户行为
      }

      Object.assign(op, opt)
      wx.ready(function () {
        // 分享给朋友圈
        wx.onMenuShareTimeline({
          title: op.title, // 分享标题
          link: op.link, // 分享链接
          imgUrl: op.imgUrl, // 分享图标
          success: function () {
            shareRecord('timeline')
            // 用户确认分享后执行的回调函数
            success()
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
          }
        })
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: op.title, // 分享标题
          desc: op.desc, // 分享描述
          link: op.link, // 分享链接
          imgUrl: op.imgUrl, // 分享图标
          type: op.type, // 分享类型,music、video或link，不填默认为link
          dataUrl: op.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户确认分享后执行的回调函数
            shareRecord('shareAppMessage')
            success()
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
          }
        })
        // 分享到QQ
        wx.onMenuShareQQ({
          title: op.title, // 分享标题
          desc: op.desc, // 分享描述
          link: op.link, // 分享链接
          imgUrl: op.imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            shareRecord('shareQQ')
            success()
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
          }
        })
        // 分享到腾讯微博
        wx.onMenuShareWeibo({
          title: op.title, // 分享标题
          desc: op.desc, // 分享描述
          link: op.link, // 分享链接
          imgUrl: op.imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            shareRecord('shareWeibo')
            success()
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            cancel()
          }
        })
      })

      wx.error(function (res) {
        op.error && op.error(res)
      })

      if (op.cb && typeof op.cb === 'function') {
        op.cb()
      }
    }
  })
}
