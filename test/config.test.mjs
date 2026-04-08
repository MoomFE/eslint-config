import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterAll, expect, it } from 'vitest';
import moomfe from '../src/index.mjs';

const GLOB_UVUE = '**/*.uvue';
const tempDirs = [];

afterAll(async () => {
  await Promise.allSettled(tempDirs.map(dir => rm(dir, { force: true, recursive: true })));
});

async function createProject({ vue = false } = {}) {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'moomfe-eslint-config-'));

  tempDirs.push(dir);

  await writeFile(path.join(dir, 'package.json'), JSON.stringify({
    name: 'fixture',
    private: true,
    type: 'module',
  }, null, 2));

  if (vue) {
    const vueDir = path.join(dir, 'node_modules', 'vue');

    await mkdir(vueDir, { recursive: true });
    await writeFile(path.join(vueDir, 'package.json'), JSON.stringify({
      name: 'vue',
      version: '3.0.0',
    }, null, 2));
  }

  return dir;
}

async function withCwd(cwd, fn) {
  const previousCwd = process.cwd();

  process.chdir(cwd);

  try {
    return await fn();
  }
  finally {
    process.chdir(previousCwd);
  }
}

function hasVuePlugin(configs) {
  return configs.some(config => 'vue' in (config.plugins ?? {}));
}

function hasVueRules(configs) {
  return configs.some(config => Object.keys(config.rules ?? {}).some(rule => rule.startsWith('vue/')));
}

it.sequential('不会在非 Vue 项目中注入 Vue 插件或规则', async () => {
  const dir = await createProject();
  const configs = await withCwd(dir, () => moomfe());

  expect(hasVuePlugin(configs)).toBe(false);
  expect(hasVueRules(configs)).toBe(false);
  expect(configs.some(config => config.name === 'antfu/vue/rules')).toBe(false);
});

it.sequential('会在 Vue 项目中保留自定义 Vue 规则并支持 uvue', async () => {
  const dir = await createProject({ vue: true });
  const configs = await withCwd(dir, () => moomfe());
  const vueRulesConfig = configs.find(config => config.name === 'antfu/vue/rules');

  expect(vueRulesConfig).toBeTruthy();
  expect(Array.isArray(vueRulesConfig.files)).toBe(true);
  expect(vueRulesConfig.files).toContain(GLOB_UVUE);
  expect(vueRulesConfig.languageOptions?.parserOptions?.extraFileExtensions).toContain('.uvue');
  expect(vueRulesConfig.rules['vue/script-indent']).toEqual(['error', 2, {
    baseIndent: 1,
    switchCase: 1,
  }]);
  expect(vueRulesConfig.rules['style/indent']).toBe('off');
  expect(vueRulesConfig.rules['vue/attribute-hyphenation']).toBe('off');
});
