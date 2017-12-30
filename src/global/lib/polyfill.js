/**
 * http://babeljs.io/docs/usage/polyfill/
 *
 * 我们使用了transform-runtime按需转换不支持的API，
 * 但是transform-runtime并不能转换实例方法，
 * 所以我们全局引入了这些不支持的API（部分常用）
 *
 * 更多请参考：https://github.com/zloirock/core-js
 */
import 'core-js/fn/array/copy-within'
import 'core-js/fn/array/fill'
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'
import 'core-js/fn/array/includes'

// import 'core-js/fn/function/name'

// import 'core-js/fn/regexp/flags'

// import 'core-js/fn/string/code-point-at'
import 'core-js/fn/string/ends-with'
import 'core-js/fn/string/includes'
import 'core-js/fn/string/repeat'
import 'core-js/fn/string/starts-with'
import 'core-js/fn/string/pad-start'
import 'core-js/fn/string/pad-end'

// requestAnimationFrame, cancelAnimationFrame
(function () {
  const vendors = ['webkit', 'moz', 'ms']
  for (let i = 0, len = vendors.length; i < len && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = window[`${vendors[i]}RequestAnimationFrame`]
    window.cancelAnimationFrame = window[`${vendors[i]}CancelAnimationFrame`] || // Webkit中此取消方法的名字变了
    window[`${vendors[i]}CancelRequestAnimationFrame`]
  }

  let lastTime = 0
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      let currTime = new Date().getTime()
      let timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      let id = window.setTimeout(function () {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}())
