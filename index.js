import express from 'express';
import App from './views/App';

// webpack-dev-serverをexpressに組み込みオートリロードを実現(F5で)
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const app = express();
app.listen(3000); // 3000番ポートでWebサーバを立てる

// trueの場合、express上のwebpack-dev-server機能が有効になる
// このindex.jsファイルのみでwebpack-dev-server機能をOn/Offできる
const devServerEnabled = true;
if (devServerEnabled) {
  // ホットリロードの設定をwebpack.config.jsのentry.clientに定義
  // reload=trueは単純なブラウザ再読込
  config.entry.client.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
}

// Webpackでバンドルしたdist/client.jsをクライアントで読み込む必要があるので、Expressでdistディレクトリ内のファイルを返すように設定
// サーバサイドレンダリングしただけだとhtmlしか返さないので画面で動作するjavascriptも返すためにここで動作ようにWebpackでばんどるしたJSを読み込む
app.use(express.static('dist')); // これでhttp://localhost/client.jsにアクセスすることで、dist/client.jsを取得する

// ルーティング
app.get('/', (_, res) => {
  // https://localhost:3000にアクセスがあったらApp()を返す
  const response = App();
  res.send(response);
});
