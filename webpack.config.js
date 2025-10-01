// commonjs
// 基于 node 语法, commonjs,
// es6 的语法, 不认识

// 引入 Eslint 插件
const eslintplugin = require("eslint-webpack-plugin");
module.exports = {
  // 指定是生产还是开发
  // 生产 production: 会简化, 会压缩 (webpack3 中要自己写)
  // 开发 development: 没有压缩和简化
  mode: "development", // none, development, production
  optimization: {},

  // 单入口
  // entry: ["./app.js", "./app2.js"]  两个文件同时作为一个入口
  // entry: "./app.js"

  // 多入口
  // entry: {
  //   app1: "./app.js",
  //   app2: "./app2.js"
  // },

  // 推荐, 直接写为一个对象
  entry: {
    app: "./app.js",
  },

  output: {
    // 出口的路径一定要按照绝对路径来写
    // __dirname -> node 中的全局变量, 当前目录的绝对路径
    path: __dirname + "/dist",
    // 可以直接写死, 但是多入口的时候会互相顶掉, 所以加上[name], 这是入口名
    // 还可以加上 [hash] 值, 每次打包之后, 如果打包内容没有改变, 这个值也不会变
    // :4 截取 hash 值前四位
    filename: "[name].[hash:4].bundle.js",
  },
  devServer: {},
  resolve: {},

  // loader
  module: {
    rules: [
      // 每个对象都是一个 loader
      // {
      //   test: /\.js/, // 处理什么文件
      //   loader: "babel-loader",
      // },
      {
        test: /\.js$/,
        // loader: "babel-loader",  不用配置时可以这样, 或者用 use 跟 数组
        // use 跟数组的话, 就是这个类型的文件要用多个 loader, 从数组的 从后往前 依次处理
        // 如果要配置, 跟对象,
        // use 跟对象的话, 就可以跟配置, 如果不给配置, 不会把 es6 编译到 es5, 只是打包
        use: {
          loader: "babel-loader",
          // preset -> @babel/preset-env, 指定编译规范
          // options: {}, 这个不写, 写到 .babelrc 中
        },
      },
    ],
  },
  // 插件, 注意这是 list, module 是对象
  plugins: [
    // new eslintplugin({
    //   // 可以直接在这里定义规范, 但是会很多, 导致文件臃肿
    // })
    new eslintplugin(),
  ],
};
