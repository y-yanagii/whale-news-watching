const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

// html-webpack-pluginはtemplateとfile名を指定することでdistされたhtmlに自動的にReactのコードへのリンクが埋め込まれる
const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebPackPlugin],
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}