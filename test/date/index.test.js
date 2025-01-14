import { DateUtil } from '../../src/index'
import { describe, expect } from '@jest/globals'
import dayjs from 'dayjs'

const { subtractDate, diff } = DateUtil
describe('日期 模块测试', () => {
  test('格式化日期，返回年月日 时分秒', () => {
    expect(DateUtil.formatToDateTime(Date.now())).toMatch(
      /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/,
    )
  })
  test('格式化日期，返回年月日', () => {
    expect(DateUtil.formatToDate(Date.now())).toMatch(/\d{4}-\d{2}-\d{2}/)
  })
})
describe('subtractDate', () => {
  it('应该正确减去指定数量的天数', () => {
    const numDays = 5
    const result = subtractDate(numDays, 'day')
    const expected = dayjs().subtract(numDays, 'day')
    expect(result.isSame(expected, 'day')).toBe(true)
  })
})

describe('diff', () => {
  it('应该正确计算两个日期之间的天数差', () => {
    const date1 = dayjs().subtract(5, 'day').toDate()
    const date2 = dayjs().toDate()
    const result = diff(date1, date2)
    expect(result.asDays()).toBeCloseTo(-5,0)
  })
})
