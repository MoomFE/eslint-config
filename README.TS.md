# Eslint Config

| [基础版本](./README.md) | 基础版本 + TS 支持 |<br>
| [基础版本 + Vue2 支持](./README.VUE.md) | [基础版本 + Vue2 + TS 支持](./README.VUE.TS.md) |<br>
| [基础版本 + Vue3 支持](./README.VUE3.md) | [基础版本 + Vue3 + TS 支持](./README.VUE3.TS.md) |

## 安装

```bash
// NPM
> npm install @moomfe/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import typescript @typescript-eslint/parser --save-dev

// Yarn
> yarn add @moomfe/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import typescript @typescript-eslint/parser --dev
```

## 配置

> 安装 `VS Code` 的 `ESLint` 扩展

> 在项目根目录创建 `.eslintrc.js` 文件, 写入以下内容

```js
module.exports = {
  root: true,
  extends: [
    '@moomfe/eslint-config/.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
};
```

> 在 `VS Code` 设置 `settings.json` 中写入以下规则

```json
"editor.tabSize": 2,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
