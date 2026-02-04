module.exports = {
  root: true,

  ignorePatterns: ['.eslintrc.cjs', 'eslint.config.*', 'dist/', 'node_modules/'],

  env: {
    browser: true,
    es2021: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint', 'react', 'import'],

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],

  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // fs, path
          'external', // react, axios
          'internal', // alias: @/components
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],

        'newlines-between': 'always',

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },

        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],

        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
