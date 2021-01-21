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
  plugins: ['prettier', 'react', 'import', 'react-hooks'],
  globals: {},
  // add your custom rules here
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
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
