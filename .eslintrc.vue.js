module.exports = {
  extends: [
    'plugin:vue/essential',
    './.eslintrc.js'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 强制使用一致的缩进
        'indent': 'off',
        // Vue 缩进选项
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1
        }],
        // 强制行的最大长度
        'max-len': ['error', 240, 2, {
          // 忽略含有链接的行
          ignoreUrls: true,
          // 忽略所有拖尾注释和行内注释
          ignoreComments: false,
          // 忽略包含正则表达式的行
          ignoreRegExpLiterals: true,
          // 忽略含有双引号或单引号字符串的行
          ignoreStrings: true,
          // 忽略包含模板字面量的行
          ignoreTemplateLiterals: true,
        }]
      }
    }
  ]
};
