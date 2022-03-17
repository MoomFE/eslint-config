# Eslint Config


## 安装

```bash
// Pnpm
> pnpm add eslint @moomfe/eslint-config -D

// Yarn
> yarn add eslint @moomfe/eslint-config -D

// NPM
> npm install eslint @moomfe/eslint-config -D
```


## 配置

> 安装 `VS Code` 的 `ESLint` 扩展

> 在项目根目录创建 `.eslintrc` 文件, 写入以下内容

```json
{
  "extends": "@moomfe"
}
```

> 在 `VS Code` 设置 `settings` 中写入以下规则

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```