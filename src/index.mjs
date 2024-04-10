import antfu, { GLOB_VUE } from '@antfu/eslint-config';

export default (options, ...userConfigs) => {
  return antfu(
    {
      stylistic: {
        // 必须使用分号
        semi: true,
      },
      ...options,
    },
    {
      name: 'moomfe/ts/rules',
      rules: {
        // 允许条件语句中出现赋值操作符, 前提是它们被圆括号括起来
        'no-cond-assign': ['error', 'except-parens'],
        // 允许使用 /* eslint-disable */ 屏蔽所有规则
        'eslint-comments/no-unlimited-disable': 'off',
        // 允许在 if 语句后不换行
        'antfu/if-newline': 'off',
        // @ts-expect-error 等指令的描述不必填
        'ts/ban-ts-comment': ['error', {
          'ts-ignore': 'allow-with-description',
          'minimumDescriptionLength': 0,
        }],
      },
    },
    {
      name: 'moomfe/vue/rules',
      files: [GLOB_VUE],
      rules: {
        // <script> 缩进选项
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
        }],
        // 与 `vue/script-indent` 规则冲突
        'style/indent': 'off',
        // 组件顶级元素顺序
        'vue/block-order': ['error', {
          order: [
            ['script', 'template'],
            'style',
          ],
        }],
        // 选项式组件属性排序
        'vue/order-in-components': ['error', {
          order: [
            'name',
            'extends',
            'functional',
            'model',
            ['provide', 'inject'],
            ['props', 'propsData'],
            'emits',
            'setup',
            'data',
            'computed',
            'methods',
            ['template', 'render'],
            'watch',
            'LIFECYCLE_HOOKS',
            ['components', 'directives', 'filters'],
            'mixins',
          ],
        }],
        // 属性顺序
        'vue/attributes-order': ['error', {
          order: [
            // v-if, v-else-if, v-else, v-show, v-cloak
            'CONDITIONALS',
            // v-for
            'LIST_RENDERING',
            // ref, key
            'UNIQUE',
            // is, v-is
            'DEFINITION',
            // v-once, v-pre
            'RENDER_MODIFIERS',
            // v-slot, slot
            'SLOT',
            // v-model
            'TWO_WAY_BINDING',
            // v-text, v-html
            'CONTENT',
            // v-custom-directive
            'OTHER_DIRECTIVES',
            // id
            'GLOBAL',
            // ATTR_STATIC: prop="foo" custom-prop="foo"
            // ATTR_DYNAMIC: v-bind:prop="foo", :prop="foo"
            // ATTR_SHORTHAND_BOOL: boolean-prop
            'OTHER_ATTR',
            // @click="functionCall", v-on="event"
            'EVENTS',
          ],
        }],
      },
    },
    ...userConfigs,
  );
};
