//  设置存储项
export function setStorage(key, value, storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  storage.setItem(key, JSON.stringify(value))
}

//  获取存储项
export function getStorage(key, storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  const value = storage.getItem(key)
  return value ? JSON.parse(value) : null
}

//  删除存储项
export function removeStorage(key, storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  storage.removeItem(key)
}

//  清空所有存储项
export function clearStorage(storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  storage.clear()
}

//  检查存储项是否存在
export function hasStorage(key, storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  return storage.getItem(key) !== null
}

//  获取所有存储项
export function getAllStorage(storageType = 'localStorage') {
  const storage = storageType === 'localStorage' ? window.localStorage : window.sessionStorage
  const storageObj = {}
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)!
    const value = storage.getItem(key)
    storageObj[key] = value ? JSON.parse(value) : null
  }
  return storageObj
}
