# [@ziyus/toolkit](https://github.com/jiatingyu/toolkit) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jiatingyu/toolkit/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@ziyus/toolkit.svg?style=flat)](https://www.npmjs.com/package/@ziyus/toolkit)

<img align="right" width="33%" style="margin-bottom: 2em" src="https://owlbertsio-resized.s3.amazonaws.com/Popper.psd.full.png">

## 项目描述

- 项目整理日常工作中常用的函数集，提炼出来统一维护，方便可以在多个项目中使用公用
- 项目中包含常用`lodash-es`、`dayjs`库，同时暴露出来了`DateUtil.dayjs` , `lodash`
- 项目使用typescript编写，使用Rollup进行打包，支持ESM,CMD
- 项目函数使用 `JEST` 进行测试

## 安装指南

```js
npm i @ziyus/toolkit
// or
yarn add @ziyus/toolkit
// or
pnpm install @ziyus/toolkit
```

## 使用方法：

### ESM

```js
import { DateUtil, ValidateUtil, UUIDUtil } from '@ziyus/toolkit'
console.log('是否时有效邮件地址', ValidateUtil.validateEmail('xxx@qq.com')) // 是否时有效邮件地址 true
console.log('构建一个UUID:', UUIDUtil.buildUUID()) // 构建一个UUID: 96dbb9af1a794e5097b2501eca3ad210

let date1 = DateUtil.dayjs('2022-01-21')
let date2 = DateUtil.dayjs('2022-01-21').add(7, 'day')

console.log('date1 与 date2 相差时间：', DateUtil.diff(date1, date2).days()) // date1 与 date2 相差时间： -7
console.log('格式化时间：', DateUtil.formatToDate(date2)) // 格式化时间： 2022-01-28
```

### CMD

```js
const { DateUtil, ValidateUtil, UUIDUtil } = require('@ziyus/toolkit')
console.log('是否时有效邮件地址', ValidateUtil.validateEmail('xxx@qq.com')) // 是否时有效邮件地址 true
console.log('构建一个UUID:', UUIDUtil.buildUUID()) // 构建一个UUID: 96dbb9af1a794e5097b2501eca3ad210

let date1 = DateUtil.dayjs('2022-01-21')
let date2 = DateUtil.dayjs('2022-01-21').add(7, 'day')

console.log('date1 与 date2 相差时间：', DateUtil.diff(date1, date2).days()) // date1 与 date2 相差时间： -7
console.log('格式化时间：', DateUtil.formatToDate(date2)) // 格式化时间： 2022-01-28
```

## 模块介绍：

## 贡献指南

- fork仓库（`Fork the repository`）
- 创建一个新的分支（`git checkout -b feature/your-feature`）。
- 提交你的更改（`git commit -m 'Add some feature'`）。
- 推送到你的分支（`git push origin feature/your-feature`）。
- 创建一个新的 Pull Request。

## 许可证

本项目采用 MIT License 许可证。

## 联系信息

如果你有任何问题或建议，请联系 [CSDN 主页](ziyus.blog.csdn.net) ， 邮箱地址：jiatingyu94@gmail.com
