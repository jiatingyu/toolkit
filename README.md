## 简介：

项目整理日常工作常用的函数集，提炼出来，方便可以在多个项目中使用, 使用安装如下

## 安装

```js
npm i @ziyus/toolkit
// or
yarn i @ziyus/toolkit
// or
pnpm i @ziyus/toolkit

```

## 项目代码中引用：

```js
import { DateUtil, ValidateUtil, UUIDUtil } from '@ziyus/toolkit'
console.log('是否时有效邮件地址', ValidateUtil.validateEmail('xxx@qq.com')) // 是否时有效邮件地址 true
console.log('构建一个UUID:', UUIDUtil.buildUUID()) // 构建一个UUID: 96dbb9af1a794e5097b2501eca3ad210

let date1 = DateUtil.dayjs('2022-01-21')
let date2 = DateUtil.dayjs('2022-01-21').add(7, 'day')

console.log('date1 与 date2 相差时间：', DateUtil.diff(date1, date2).days()) // date1 与 date2 相差时间： -7
console.log('格式化时间：', DateUtil.formatToDate(date2)) // 格式化时间： 2022-01-28
```

# 项目技术介绍

## 代码编写

## 测试用例

1. 包安装, 让jest支持ESModule,需要使用babel

```js
yarn add babel-jest @babel/core @babel/preset-env @babel/preset-typescript  --dev
```

2. 添加babel配置新增 `babel.config.js` 文件，添加内容如下

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
}
```

3. 增加`package.json `的script模块

```json
  "scripts": {
    "test": "jest"
  },
```

4. 编写测试用例新增`test\regExp\index.test.js` 文件

```js
import { RegExpUtil } from '../../src/index'

test('adds 1 + 2 to equal 3', () => {
  expect(RegExpUtil.validateUrl('https://www.baidu.com')).toBe(true)
})
```

5. 运行测试用例

```js
yarn test
```

## 代码规范

- 代码风格： `prettier` , 请在 vsCode 中安装 Prettier 插件

```js
module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
}
```

## 语法检查：ESLint

```js
yarn add eslint --dev
yarn eslint --init
```

## 项目打包

使用了`Rollup`对项目进行打包，使用babel对Typescript代码进行编译，最后使用 `rollup-plugin-terser` 压缩代码，使代码体积最小化

> Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，而不是以前的 CommonJS 和 AMD 等特殊解决方案。ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数

`rollup.config.js` 配置文件如下：

```js
// rollup.config.js
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve({ extensions: ['.ts', '.js'] }),
    commonjs(),
    typescript(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
}
```
