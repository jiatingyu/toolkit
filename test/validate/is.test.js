import { ValidateUtil } from '../../src/index'
import { describe, expect } from '@jest/globals'
describe('数据监测模板', () => {
  test('监测身份证有效性', () => {
    expect(ValidateUtil.validateRealIdCard('341181198809150011')).toBeTruthy()
    expect(ValidateUtil.validateRealIdCard('341181198809150012')).not.toBeTruthy()
  })
  test('字符串中只包含数字', () => {
    expect(ValidateUtil.validateOnlyNum('341181198809150011')).toBeTruthy()
  })
})
