/*
* @Author: chenchao
* @Date: 2018-01-29 16:24:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-30 10:43:57
*/

/**
 * [share 微信分享页面必须加载的时候注入配置信息 一般在vue的created或者react的componentDidMount执行]
 * @param  {Object} option [配置信息]
 * @return {[type]}        [description]
 */
export function share(option = {}) {
    if(!util.browser.isWechat){
        return false
    }
    const wx = window.wx;
    let signatureUrl = '';
    if(__DEV__){
        signatureUrl = ''
    }
    common.ajax(signatureUrl).then((res) => {
        const {appId, timestamp, nonceStr, signature} = res.data;
        wx.config({
            debug: false,
            appId,
            timestamp,
            nonceStr,
            signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        })
        wx.ready(() => {
            const config = Object.assign({
                type: 'link', //不填默认为link 如果是分享到朋友圈(可为music、video、link)           
                title: '快来围观啦', //分享标题
                link: 'http://www.chenchaoc.top', //分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致  公众号设置-->功能设置-->js接口安全域名
                imgUrl: 'http://www.chenchaoc.top/cc.jpeg', //分享图标
                dataUrl: '', //默认为空,朋友圈分享(如果type是music或video,则要提供数据链接)
                desc: 'cc个人网站', //分享描述
                success: () => {}, //用户确认分享后执行的回调函数
                cancel: () => {}, //用户取消分享后执行的回调函数
            }, option)
            wx.onMenuShareTimeline({
                type: config.type,
                title: config.title,
                link: config.link,
                imgUrl: config.imgUrl,
                desc: config.desc,               
                success: config.success,
                cancel: config.cancel
            })
            wx.onMenuShareAppMessage({
                type: config.type, //可以为link、music、video
                title: config.title,
                link: config.link,
                imgUrl: config.imgUrl,
                desc: config.desc,
                dataUrl: config.dataUrl,
                success: config.success,
                cancel: config.cancel                
            })
        })
    })
}