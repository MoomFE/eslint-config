import { build } from 'vite';

(async () => {
  await build({
    build: {
      outDir: 'dist',
      lib: {
        entry: 'eslint.config.mjs',
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
})();
