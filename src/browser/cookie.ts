/**
 *  设置 Cookie
 * @param name
 * @param value
 * @param days 有效期天数
 */

export function setCookie(name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`
}

// setCookie('username', 'Alice', 7) // 设置一个名为 'username' 的 Cookie，值为 'Alice'，有效期为 7 天

//  获取 Cookie
export function getCookie(name) {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length))
  }
  return null
}

//  删除 Cookie
export function removeCookie(name) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

//  检查 Cookie 是否存在
export function hasCookie(name) {
  return getCookie(name) !== null
}

//  获取所有 Cookie
export function getAllCookies() {
  const cookies = document.cookie.split(';')
  const cookieObj = {}
  cookies.forEach((cookie) => {
    const [name, value] = cookie.split('=')
    cookieObj[decodeURIComponent(name.trim())] = decodeURIComponent(value)
  })
  return cookieObj
}
