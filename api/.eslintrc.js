module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  },
  overrides: [
    {
      files: ['node_modules/*', 'node_modules/**/*', '__tests__/*', '__tests__/**/*'],
      // env: {
      //   jest: true
      // }
    }
  ]
}
