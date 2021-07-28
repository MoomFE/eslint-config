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
        }],
        // 属性断字
        'vue/attribute-hyphenation': ['error', 'always'],
        // 标签右括号换行
        'vue/html-closing-bracket-newline': ['error', {
          // 单行时是否需要在右括号前换行
          singleline: 'never',
          // 多行时是否需要在右括号前换行
          multiline: 'always'
        }],
        // 标签右括号前的间距
        'vue/html-closing-bracket-spacing': ['error', {
          // 开始标签是否需要间距
          startTag: 'never',
          // 结束标签是否需要间距
          endTag: 'never',
          // 自闭合标签是否需要间距
          selfClosingTag: 'always'
        }],
        // 必须有结束标签
        'vue/html-end-tags': ['error'],
        // HTML 缩进选项
        'vue/html-indent': ['error', 2, {
          // 属性缩进倍数
          attribute: 1,
          // 根节点缩进倍数
          baseIndent: 1,
          // 标签右括号缩进倍数
          closeBracket: 0,
          // 多行时, 是否需要与第一行垂直对齐
          alignAttributesVertically: false
        }],
        // 引号
        'vue/html-quotes': ['error', 'double', {
          // 只要该字符串包含必须以其他方式转义的引号, 允许使用单引号或双引号
          avoidEscape: true
        }],
        // 自关闭标签
        'vue/html-self-closing': ['error', {
          // HTML 元素
          html: {
            // 空元素
            void: 'never',
            // 默认元素
            normal: 'always',
            // Vue 组件
            component: 'always'
          },
          // SVG 元素
          svg: 'always',
          // MathML 元素
          math: 'always'
        }],
        // 统一插值语法的间距
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        // 禁止标签中连续的空格
        'vue/no-multi-spaces': ['error', {
          // 忽略对象的属性
          ignoreProperties: true
        }],
        // 禁止属性的等号周围有空格
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        // 统一 Vue 组件 Prop 名称风格
        'vue/prop-name-casing': ['error', 'camelCase'],
        // 统一 Vue 组件中 v-bind 指令风格
        'vue/v-bind-style': ['error', 'shorthand'],
        // 统一 Vue 组件中 v-bind 指令风格
        'vue/v-on-style': ['error', 'shorthand'],
        // 元素属性排序
        'vue/attributes-order': ['error', {
          // 排序顺序
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
            'EVENTS'
          ]
        }],
        // 不应该传递多个参数给作用域插槽
        'vue/no-multiple-slot-args': ['error'],
        // Vue 组件的属性排序
        'vue/order-in-components': ['error', {
          // 排序顺序
          order: [
            'name',
            'el',
            'functional',
            ['props', 'propsData'],
            'setup',
            ['provide', 'inject'],
            'data',
            'computed',
            ['template', 'render'],
            'methods',
            'LIFECYCLE_HOOKS',
            'watch',
            'components',
            'mixins'
          ]
        }],
        // 防止在模板中使用 this
        'vue/this-in-template': ['error', 'never'],
        // Script 缩进选项
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1
        }]
      }
    }
  ]
};
