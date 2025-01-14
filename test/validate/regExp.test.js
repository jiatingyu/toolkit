import { ValidateUtil } from '../../src'
import { describe, expect } from '@jest/globals'

describe('ValidateUtil 模块测试', () => {
  test('validateEmail', () => {
    expect(ValidateUtil.validateEmail('example@example.com')).toBeTruthy()
    expect(ValidateUtil.validateEmail('example.com')).toBeFalsy()
  })
  test('验证手机号码（以中国大陆为例）', () => {
    expect(ValidateUtil.validatePhone('13812345678')).toBe(true)
    expect(ValidateUtil.validatePhone('12345678901')).toBe(false)
  })
  test('验证密码格式（以包含大小写字母、数字、特殊字符，长度8-16）', () => {
    expect(ValidateUtil.validatePassword('Abc12345678@')).toBe(true)
    expect(ValidateUtil.validatePassword('Abc123@')).toBe(false)
  })
  test('验证身份证号码', () => {
    expect(ValidateUtil.validateIdCard('11010519491231002X')).toBe(true)
    expect(ValidateUtil.validateIdCard('11010519491231002')).toBe(false)
  })
  test('验证网址格式', () => {
    expect(ValidateUtil.validateUrl('https://www.example.com')).toBe(true)
    expect(ValidateUtil.validateUrl('www.example.com')).toBe(true)
  })
  test('提取字符串中的数字', () => {
    expect(ValidateUtil.extractNumbers('abc123def456')).toEqual(['123', '456'])
  })
  test('替换文本中的敏感词', () => {
    expect(
      ValidateUtil.replaceSensitiveWords('这是一段包含敏感词1和敏感词2的文本', [
        '敏感词1',
        '敏感词2',
      ]),
    ).toBe('这是一段包含***和***的文本')
  })
  test('匹配字符串中的日期', () => {
    expect(
      ValidateUtil.matchDate('今天的日期是2025-01-01，明天是2025-01-02'),
    ).toEqual(['2025-01-01', '2025-01-02'])
  })
})
