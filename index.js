/* eslint-disable no-console */

module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 强制使用一致的缩进
        '@typescript-eslint/indent': 'off',
        // Script 缩进选项
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
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
      },
    },
  ],
  rules: {
    // 要求或禁止使用分号代替 ASI
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
  },
};
