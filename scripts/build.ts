import { build } from 'vite';
import fs from 'fs-extra';

(async () => {
  await build({
    build: {
      outDir: 'dist',
      lib: {
        entry: 'src/index.mjs',
        formats: ['es', 'cjs'],
        fileName: format => `index.${format === 'es' ? 'mjs' : format}`,
      },
      minify: false,
      emptyOutDir: true,
      rollupOptions: {
        external: ['@antfu/eslint-config'],
      },
    },
  });

  await fs.copy('src/index.d.ts', 'dist/index.d.ts');
})();
