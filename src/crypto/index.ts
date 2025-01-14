// 加密相关
import CryptoJS from 'crypto-js'

/** 通过传入，key, 和 偏移量 */
export function createCrypto(
  _key: string = 'ACC408B24462ABD1',
  _iv: string = 'BBJNRU56MDk4NzK6',
) {
  const key = CryptoJS.enc.Utf8.parse(_key)
  const iv = CryptoJS.enc.Utf8.parse(_iv)

  const obj = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    iv,
  }
  const encrypt = (data: string) => {
    const str = JSON.stringify(data)
    return CryptoJS.AES.encrypt(str, key, obj).toString()
  }
  const decrypt = (data: string) => {
    return CryptoJS.AES.decrypt(data, key, obj).toString(CryptoJS.enc.Utf8)
  }
  return {
    encrypt,
    decrypt,
  }
}

export default CryptoJS
