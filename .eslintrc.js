module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    // ecmaFeatures: {
    //   jsx: true,
    //   modules: true,
    // },
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react', 'import', 'react-hooks'],
  globals: {},
  // add your custom rules here
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'react/prop-types': 'off',
    'import/no-anonymous-default-export': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
};
