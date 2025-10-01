module.exports = {
  env: {
    // 当前环境是什么
    browser: true,
    // JS 版本
    es2021: true,
  },
  // 继承某一个已有的规范, 当团队定义不出规范的时候
  // 比如
  // eslint-config-standard
  // eslint-config-airbnb
  // 这个规范也需要安装, 比如 npm eslint-config-standard --save-dev
  extends: ["standard", "plugin: vue:strongly-recommended"],
  // 插件
  // 提供特殊语法的支持
  // 比如 vue 有自己的特殊风格, 这个在 eslint 本身的规则里没有, 插件可以提供额外的规则 并提供一套现成的规范
  // 这个也需要安装, 比如 npm install eslint-plugin-vue -D
  plugins: [
    "vue", // 使用规则
  ],
  // 解析配置
  parserOptions: {
    // es 版本
    ecmaVersion: 6,
    // 模块方案, 引入操作的方式
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 重点, 具体检查细节
    // "no-console": 0, // 0/off: 关闭, 1: warning, 抛警告, 2: error, 报错
    // 这里写的会覆盖 extends 中的设置
  },
};
