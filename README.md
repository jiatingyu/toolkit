## 创建组织范围的包中英

在命令行上，使用您要创建的包的名称创建一个目录。

```js
mkdir packageName
//导航到新创建的包目录。
cd packageName
```

## 要创建组织范围的包，请在命令行上运行：

```js
npm init --scope=your_org_name
// 要验证包是否使用您的组织范围，请在文本编辑器中打开包的 package.json 文件并检查名称是否为 @your_org_name/pkg_name，将 your_org_name 替换为您的组织名称。
```

## npm 发包

```js

npm login --registry https://registry.npmjs.org

npm publish --registry https://registry.npmjs.org

// 撤销发包
npm unpublish mikey-npm-test@1.0.0 --force --registry https://registry.npmjs.org


```

## 后续更新 npm 包

`npm version patch` , npm version 后面参数说明：

- patch：小变动，比如修复 bug 等，版本号变动  v1.0.0->v1.0.1
- minor：增加新功能，不影响现有功能,版本号变动  v1.0.0->v1.1.0
- major：破坏模块对向后的兼容性，版本号变动  v1.0.0->v2.0.0

## 组织发布

```js
// 发布有组织的包，默认是私有的，
npm publish --access public
```

或者在包的 package.json 中添加以下配置

```json
"publishConfig": {
    "access": "public"
}
```
