# Eslint Config

[![npm][npm-badges-src]][npm-href]
[![Downloads][downloads-badges-src]][downloads-href]

## 安装

```bash
pnpm i eslint @moomfe/eslint-config -D
```

## 配置

在项目根目录下创建 `eslint.config.mjs` 文件, 并写入以下内容:

```js
import moomfe from '@moomfe/eslint-config';

export default moomfe();
```

在 package.json 文件中添加以下命令:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code 支持 ( 保存时自动修复 )

安装 [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 插件, 并在 `.vscode/settings.json` 文件中添加以下配置:

```jsonc
{
  // 启用 ESlint 的扁平配置支持
  "eslint.experimental.useFlatConfig": true,

  // 禁用默认格式化程序, 使用 ESlint 代替
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // 自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // 为所有支持的语言启用 ESlint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "gql",
    "graphql"
  ]
}
```

## 定制化

可以参考 [@antfu/eslint-config#Customization](https://github.com/antfu/eslint-config?tab=readme-ov-file#customization) 进行定制化配置

## 迁移

如果你正在使用 `@moomfe/eslint-config` 的 `v2.x` 或 `v1.x` 版本

记得删除项目根目录下的 `.eslintrc` 或 `.eslintrc.js` 文件

## License

[MIT](./LICENSE) License © 2023-PRESENT [Wei Zhang](https://github.com/Zhang-Wei-666)

<!-- Badges -->

[npm-badges-src]: https://img.shields.io/npm/v/@moomfe/eslint-config.svg
[npm-href]: https://www.npmjs.com/package/@moomfe/eslint-config
[downloads-badges-src]: https://img.shields.io/npm/dm/@moomfe/eslint-config.svg
[downloads-href]: https://www.npmjs.com/package/@moomfe/eslint-config
