const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "development",
  // devtool: "eval-cheap-source-map",
  entry: {
    app: "./app.js",
  },
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "[name].[chunkhash:4].bundle.js",
    clean: true, // 每次打包清理 dist
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    port: 1000,
    // 是否使用热更新
    // 本身理解的热更新, 就是在源码中修改一个东西, 实时更新渲染到页面上
    hot: true,
  },
};
