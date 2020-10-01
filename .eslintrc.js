module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    'assert': 'readonly',
    'Atomics': 'readonly',
    'devRequire': 'readonly',
    'devRewire': 'readonly',
    'dynamo': 'readonly',
    'mapDynamoToObject': 'readonly',
    'mapReadToDynamo': 'readonly',
    'mapWriteToDynamo': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'Sequelize': 'readonly',
    'sinon': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'rules': {
    'array-bracket-spacing': ['warn', 'never', { 'objectsInArrays': false }],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-scoped-var': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'curly': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'func-call-spacing': 'warn',
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { 'code': 120 }],
    'multiline-ternary': ['warn', 'never'],
    'no-confusing-arrow': 'error',
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-extra-semi': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implied-eval': 'error',
    'no-irregular-whitespace': 'warn',
    'no-multi-spaces': 'warn',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-unexpected-multiline': 'warn',
    'no-unused-vars': ['warn', { 'args': 'all', 'argsIgnorePattern': '_', 'varsIgnorePattern': '_' }],
    'no-useless-return': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'warn',
    'operator-linebreak': 'warn',
    'prefer-const': 'error',
    'quotes': ['warn', 'single', { 'avoidEscape': true }],
    'quote-props': ['warn', 'as-needed'],
    'radix': 'error',
    '/jsx-indent': ['warn', 2],
    'require-await': 'error',
    'semi': ['warn', 'always'],
    'semi-spacing': 'warn',
    'space-before-blocks': 'warn',
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'strict': ['error', 'never'],
  },
};