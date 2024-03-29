let path = require('path');
let htmlWebpackPlugin = require("html-webpack-plugin");
// import path from "path";
// import htmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), 
  mode: 'production',
  output: {path: path.resolve(__dirname, './dist'), 
  filename: 'bundle.js', 
},
plugins: [

  new htmlWebpackPlugin({
    template: "./src/index.html",
    inject: true,}),
],
module: {
rules: [  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
},], },
};

