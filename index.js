import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3000); // 3000番ポートでWebサーバを立てる

// ルーティング
app.get('/', (_, res) => {
  // https://localhost:3000にアクセスがあったらssr()を返す
  const response = ssr();
  res.send(response);
});
