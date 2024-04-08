import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isTestBuild = mode === 'test-build';

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, isTestBuild ? 'dist' : 'src'),
      },
    },
    test: {
      globals: true,
      coverage: {
        enabled: true,
        provider: 'v8',
        all: false,
      },
    },
  };
});
