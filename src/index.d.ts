import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';
import type antfu from '@antfu/eslint-config';

/**
 * @param options 生成 ESLint 配置的选项
 * @param userConfigs 要与生成的 ESLint 配置合并的用户配置
 * @returns 合并的 ESLint 配置
 */
declare function moomfe(
  options?: OptionsConfig,
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): ReturnType<typeof antfu>;

export {
  moomfe as default,
};
