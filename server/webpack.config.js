
const path = require('path');

const webpack = require('webpack');

let externals = _externals();

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./app.js", // string | object | array
  // 默认为 ./src
  // 这里应用程序开始执行
  // webpack 开始打包
  target: 'node', // 这是最关键的
  output: {
    // webpack 如何输出结果的相关选项
    path:path.resolve(__dirname, "dist"), // string (default)
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "app.js", // string (default)
  },
  resolve: {
    extensions: ['', '.js']
  },
  externals: externals,
}




function _externals() {
  let manifest = require('./package.json');

  let dependencies = manifest.dependencies;

  let externals = {};

  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p;

  }

  return externals;

}