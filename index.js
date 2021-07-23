import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3000); // 3000番ポートでWebサーバを立てる

// Webpackでバンドルしたassets/client.jsをクライアントで読み込む必要があるので、Expressでassetsディレクトリ内のファイルを返すように設定
// サーバサイドレンダリングしただけだとhtmlしか返さないので画面で動作するjavascriptも返すためにここで動作ようにWebpackでばんどるしたJSを読み込む
app.use(express.static('assets')); // これでhttp://localhost/client.jsにアクセスすることで、assets/client.jsを取得する

// ルーティング
app.get('/', (_, res) => {
  // https://localhost:3000にアクセスがあったらssr()を返す
  const response = ssr();
  res.send(response);
});
