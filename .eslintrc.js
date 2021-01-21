module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   // ecmaFeatures: {
  //   //   jsx: true,
  //   //   modules: true,
  //   // },
  // },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  globals: {},
  // add your custom rules here
  rules: {
    'react/prop-types': 'off',
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
