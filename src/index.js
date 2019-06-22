module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@filtu/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
  },
};
