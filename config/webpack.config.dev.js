// これにより webpack-dev-serverで/api/ でアクセスした場合のみ、3000に向けてリクエストするProxyが立ち上がります。
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

// Expressサーバを建てたことでバックエンドAPIを利用できる
// しかしこのままの状態ではリクエストした際にポートが違うためCORSで弾かれる
// それを回避するためProxyを開発サーバ側に建てる↓↓↓
// Proxyは代理という意味で内部ネットワークから中継サーバとして使う
// この場合8080（フロント）と3000（サーバ）が両方あるため8080から3000にアクセスして3000自体をそのまま使わない
module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    inline: true,
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    }
  }
});