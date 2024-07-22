/* eslint-disable no-console */

// 必须使用分号
let a = 123;

// 允许条件语句中出现赋值操作符, 前提是它们被圆括号括起来
if ((a = 234))
  console.log(a);

// 允许在 if 语句后不换行
if (a) console.log(a);

// 下面这个指令的描述不必填
// @ts-expect-error
// eslint-disable-next-line ts/no-unused-expressions
window.a;
