// 建议的 webpack 开发服务, 模拟的就是 webpack-dev-server

const express = require("express");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require("./webpack.config.js");
// 调用这个方法和在命令行输入 webpack 一样的打包效果
const dist = webpack(config);
const app = express();

app.use(webpackDevMiddleWare(dist));

app.listen(2000);
