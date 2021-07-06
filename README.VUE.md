# Eslint Config

| [基础版本](./README.md) | 基础版本 + Vue 支持 | 

## 安装

```bash
// NPM
> npm install @moomfe/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import babel-eslint eslint-plugin-vue --save-dev

// Yarn
> yarn add @moomfe/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import babel-eslint eslint-plugin-vue --dev
```

## 配置

> 安装 `VS Code` 的 `ESLint` 扩展

> 在 `VS Code` 中按 `Ctrl + Shift + P` 快捷键打开命令面板 ( 或者点击菜单 `查看 -> 命令面板` ), 输入 `ESLint: Manage Library Execution` 选择该命令并回车, 然后选择 `Allow` 选项

> 在项目根目录创建 `.eslintrc.js` 文件, 写入以下内容

```js
module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    './node_modules/@moomfe/eslint-config/.eslintrc.vue.js'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
};
```

> 在 `VS Code` 设置 `settings.json` 中写入以下规则

```json
"editor.tabSize": 2,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
