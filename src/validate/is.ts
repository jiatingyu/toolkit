import { isNil, isUndefined, pickBy } from 'lodash-es'

/**
 * 校验位的检测
 * @param card
 * @returns {boolean}
 */
function checkParity(card) {
  //15位转18位
  card = changeFifteenToEighteen(card)
  const len = card.length
  if (len == 18) {
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    let sum = 0,
      i
    for (i = 0; i < 17; i++) {
      sum += card.charAt(i) * arrInt[i]
    }
    const checkCode = arrCh[sum % 11]
    return checkCode == card.substring(17).toLocaleUpperCase()
  }
  return false
}

function changeFifteenToEighteen(card) {
  if (card.length == 15) {
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    let sum = 0,
      i
    card = card.substring(0, 6) + '19' + card.substring(6)
    for (i = 0; i < 17; i++) {
      sum += card.charAt(i) * arrInt[i]
    }
    const checkCode = arrCh[sum % 11]
    return card + checkCode
  }
  return card
}

/**
 * 身份证真实有效性校验
 *  */
export function validateRealIdCard(idCard) {
  const vcity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  }
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  const reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
  if (!reg.test(idCard)) {
    return false
  }
  //检查省份
  const provinceCode = idCard.substring(0, 2)
  if (vcity[provinceCode] == undefined) return false
  //检验位的检测
  return checkParity(idCard) != false
}


const toString = Object.prototype.toString

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function isNotEmpty(val: any): boolean {
  return !isNil(val) && !isEmpty(val)
}
export function isValidParams(val: { [key in string]: any }) {
  return pickBy(val, isValidValue)
}
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}
export function isValidValue(val: any): boolean {
  return !isNull(val) && !isUndefined(val) && !isEmpty(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, 'Promise') &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  )
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isFunction(val: unknown) {
  return typeof val === 'function'
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map')
}

export function isUrl(path: string): boolean {
  const reg =
    /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

