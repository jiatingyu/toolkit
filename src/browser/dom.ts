//  获取浏览器窗口尺寸
export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}


//  滚动到页面顶部
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}


//  滚动到页面底部

export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}


//  滚动到元素位置

export function scrollToElement(element) {
  element.scrollIntoView({ behavior: 'smooth' })
}

//  检查元素是否在视口中

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}


//  获取当前 URL 参数
export function getURLParameters() {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(params)
}


//  设置 URL 参数
export function setURLParameter(key, value) {
  const params = new URLSearchParams(window.location.search)
  params.set(key, value)
  window.history.replaceState(
    {},
    '',
    `${window.location.pathname}?${params.toString()}`,
  )
}

//  删除 URL 参数
export function removeURLParameter(key) {
  const params = new URLSearchParams(window.location.search)
  params.delete(key)
  window.history.replaceState(
    {},
    '',
    `${window.location.pathname}?${params.toString()}`,
  )
}

//  检查浏览器类型
export function getBrowserType() {
  const userAgent = navigator.userAgent
  if (userAgent.match(/firefox|fxios/i)) return 'Firefox'
  if (userAgent.match(/safari/i)) return 'Safari'
  if (userAgent.match(/edg/i)) return 'Edge'
  if (userAgent.match(/opr|opera/i)) return 'Opera'
  if (userAgent.match(/chrome|chromium|crios/i)) return 'Chrome'
  return 'Unknown'
}

//  检查浏览器版本

export function getBrowserVersion() {
  const userAgent = navigator.userAgent
  const browser = getBrowserType()
  let version

  if (browser === 'Firefox') {
    version = userAgent.match(/firefox\/(\d+)/i)![1]
  } else if (browser === 'Safari') {
    version = userAgent.match(/version\/(\d+)/i)![1]
  } else if (browser === 'Edge') {
    version = userAgent.match(/edg\/(\d+)/i)![1]
  } else if (browser === 'Opera') {
    version = userAgent.match(/opr|opera\/(\d+)/i)![1]
  } else if (browser === 'Chrome') {
    version = userAgent.match(/chrome\/(\d+)/i)![1]
  }

  return version
}

//  检查是否为移动设备

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}


//  检查是否为触摸设备
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

//  获取屏幕方向  
// 返回 'portrait-primary' 或 'landscape-primary' 等
export function getScreenOrientation() {
  return window.screen.orientation.type
}


//  监听屏幕方向变化
export function listenScreenOrientationChange(callback) {
  window.screen.orientation.addEventListener('change', callback)
}

