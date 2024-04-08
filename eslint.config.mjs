import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    // 必须使用分号
    semi: true,
  },

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
});
