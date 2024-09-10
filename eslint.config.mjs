import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import nodePlugin from 'eslint-plugin-n';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.js'],
    ignores: ['**/*.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...nodePlugin.configs['flat/recommended-module'],
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',
    },
  },
];
