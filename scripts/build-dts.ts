import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

(async () => {
  const bundle = await rollup({
    input: 'eslint.config.mjs',
    external: ['@antfu/eslint-config'],
    plugins: [
      dts({ respectExternal: true }),
    ],
  });

  await bundle.write({
    file: 'dist/index.d.ts',
    format: 'es',
  });
})();
