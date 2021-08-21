module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
}
