import express from 'express';
import ssr from './src/ssr';

const app = express();

app.listen(3000); // 3000番ポートでWebサーバを立てる

// ルーティング
app.get('/', (_, res) => {
  // https://localhost:3000にアクセスがあったらssr()を返す
  res.send(ssr());
});
