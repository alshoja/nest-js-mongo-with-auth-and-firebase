module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
  '@typescript-eslint/eslint-plugin',  
  'import',
  'prettier',
  'no-only-tests',
  'security',
  'simple-import-sort'
],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-process-env': 'error',
    'no-console': 'error',
    'require-await': 'error',
    eqeqeq: ['error', 'smart'],
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
