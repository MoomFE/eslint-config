import fs from 'fs-extra';
import { build } from 'vite';

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
