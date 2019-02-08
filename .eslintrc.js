module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": ["error", {
    "singleline": 10,
      "multiline": {
        "max": 19,
        "allowFirstLine": true
      }
    }],
    "vue/singleline-html-element-content-newline": "off"
  }
}
