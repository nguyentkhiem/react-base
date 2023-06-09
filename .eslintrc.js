module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2020,
    // parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'linebreak-style': 'off',
    'anchor-is-valid': 'off',
    'jsx-one-expression-per-line': 'off',
    'no-irregular-whitespace': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-curly-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        semi: true,
        singleQuote: true,
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        endOfLine: 'auto',
        parser: 'flow',
      },
    ],
    'no-undef': ['off'],
    eqeqeq: ['off'],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': ['off'],
  },
};
