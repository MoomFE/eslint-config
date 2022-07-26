module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 强制使用一致的缩进
        //  - 关闭是因为使用 `vue/script-indent` 配置 `.vue` 文件下的缩进选项
        '@typescript-eslint/indent': 'off',
        // Script 缩进选项
        //  - 配置缩进为 2 个空格
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
        }],
        // 防止使用未知的 DOM 属性
        //  - 在 Vue 中使用 JSX 时, 支持使用 class 设置样式类
        'react/no-unknown-property': ['error', {
          ignore: ['class'],
        }],
      },
    },
  ],
  rules: {
    // 要求或禁止使用分号代替 ASI
    //  - 必须使用分号
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    // 禁止在条件语句中出现赋值操作符
    //  - 允许条件语句中出现赋值操作符, 前提是它们被圆括号括起来
    'no-cond-assign': ['error', 'except-parens'],
    // 禁止使用无规则名称的 `eslint-disable`
    //  - 某些情况下还是需要使用 /* eslint-disable */ 来屏蔽所有规则的
    'eslint-comments/no-unlimited-disable': 'off',
    // Vue 文件中顶级元素的顺序
    'vue/component-tags-order': ['error', {
      order: [
        ['script', 'template'],
        'style',
      ],
    }],
    // 元素属性排序
    'vue/attributes-order': ['error', {
      order: [
        // v-if, v-else-if, v-else, v-show, v-cloak
        'CONDITIONALS',
        // v-for
        'LIST_RENDERING',
        // is, v-is
        'DEFINITION',
        // v-once, v-pre
        'RENDER_MODIFIERS',
        // id
        'GLOBAL',
        // ref, key
        'UNIQUE',
        // slot, v-slot
        'SLOT',
        // v-model
        'TWO_WAY_BINDING',
        // v-custom-directive
        'OTHER_DIRECTIVES',
        // custom-prop="foo", v-bind:prop="foo", :prop="foo"
        'OTHER_ATTR',
        // v-text, v-html
        'CONTENT',
        // @click="functionCall" v-on="event"
        'EVENTS',
      ],
    }],
    // 在单行元素的内容前后需要换行符
    'vue/singleline-html-element-content-newline': 'off',
    // 在 if 语句后必须换行
    'antfu/if-newline': 'off',
    // @ts-expect-error 等指令的描述不必填
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-ignore': 'allow-with-description',
      'minimumDescriptionLength': 0,
    }],
  },
};
