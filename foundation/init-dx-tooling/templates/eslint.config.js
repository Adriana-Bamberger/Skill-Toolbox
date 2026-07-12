import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['node_modules/', 'dist/', '.svelte-kit/', '.vercel/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  configPrettier
);
