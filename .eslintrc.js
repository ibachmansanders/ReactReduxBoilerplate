module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
      browser: true,
      node: true,
      es6: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'no-template-curly-in-string': 0,
    'max-len': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-prototype-builtins': 0,
    'camelcase': 0,
    'no-underscore-dangle': 0,
    'no-loop-func': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'no-shadow': 0,
    'func-names':0,
    'no-unused-vars': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
  },
};