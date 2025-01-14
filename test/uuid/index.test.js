import { UUIDUtil } from '../../src/index'
import { describe, expect } from '@jest/globals'

const { buildUUID, buildShortUUID } = UUIDUtil
describe('buildUUID', () => {
  it('UUID 是否有效', () => {
    const uuid = buildUUID()
    expect(uuid).toHaveLength(32) // UUID 应该是 32 个字符长
    expect(uuid).toMatch(/^[0-9a-f]{32}$/) // UUID 应该是 32 个十六进制字符
  })

  it('两次结果应该不相同', () => {
    const uuid1 = buildUUID()
    const uuid2 = buildUUID()
    expect(uuid1).not.toEqual(uuid2) // 两次生成的 UUID 应该不同
  })
})

describe('buildShortUUID', () => {
  it('简短的UUID', () => {
    const shortUUID = buildShortUUID()
    expect(shortUUID).toMatch(/^_[0-9]{9,10}[1-9][0-9]*$/) // shortUUID 应该是 _ + 9-10 位数字 + 递增的唯一值 + 时间戳
  })

  it('两次应该不相同', () => {
    const shortUUID1 = buildShortUUID()
    const shortUUID2 = buildShortUUID()
    expect(shortUUID1).not.toEqual(shortUUID2) // 两次生成的 shortUUID 应该不同
  })

  it('包含提供前缀', () => {
    const prefix = 'test'
    const shortUUID = buildShortUUID(prefix)
    expect(shortUUID).toMatch(new RegExp(`^${prefix}_[0-9]{9,10}[1-9][0-9]*$`)) // shortUUID 应该包含前缀
  })
})
