/**
 *  判断是否只包含数字
 */
export const validateOnlyNum = (data: string) => {
  const reg = /^\d{1,}$/g
  if (reg.test(data)) return true
}


//  验证邮箱格式
export function validateEmail(email: string) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return regex.test(email)
}

// 验证手机号码（以中国大陆为例）
export function validatePhone(phone: string) {
  const regex = /^1[3-9]\d{9}$/
  return regex.test(phone)
}

//  验证密码格式（以包含大小写字母、数字、特殊字符，长度8-16位）
export function validatePassword(password: string) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
  return regex.test(password)
}

// 验证身份证号码
export function validateIdCard(idCard: string) {
  const regex =
    /^[1-9]\d{5}(18|19|20)?\d{2}((0[1-9])|(10|11|12))(([0|1|2][0-9])|10|20|30|31)\d{3}(\d|[Xx])$/
  return regex.test(idCard)
}

// 验证网址格式
export function validateUrl(url: string) {
  const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  return regex.test(url)
}

// 提取字符串中的数字
export function extractNumbers(str: string) {
  const regex = /\d+/g
  return str.match(regex)
}

// 替换文本中的敏感词
export function replaceSensitiveWords(text: string, sensitiveWords: string[]) {
  const regex = new RegExp(sensitiveWords.join('|'), 'gi')
  return text.replace(regex, '***')
}

// 匹配字符串中的日期（以YYYY-MM-DD格式为例）
export function matchDate(str: string) {
  const regex = /\b\d{4}-\d{2}-\d{2}\b/g
  return str.match(regex)
}
