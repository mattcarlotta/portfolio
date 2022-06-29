module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'jest', 'jest-dom', 'jsx-a11y', 'prettier'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-useless-return': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/prefer-stateless-function': 'warn',
    'react/state-in-constructor': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0
  }
}
