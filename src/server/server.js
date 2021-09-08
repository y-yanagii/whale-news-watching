import express from "express";
import path from "path";
import config from "config";
import { logger } from "./logger";
import passport from "passport";
import NewsAPI from "newsapi";

const app = express();

// configurationの導入で環境によって設定を切り替える際に利用する機能
// 例：開発時、本番時APIのhostが違ったりrequest時のportが違ったりする差異をコードベースで環境設定を切り分けれる
const serverConfig = config.get("server");

app.use(express.static(path.resolve("./", "dist")));

// 認証ミドルウェアの設定
app.use(passport.initialize());

// post通信を扱うためのミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api用のrouter読み込み(即時関数)
app.use("/api", (() => {
  let router = express.Router();
  router.use("/articles", require("./api/articles.js")); // 記事情報関連API
  router.use("/users", require("./api/users.js")); // ユーザ情報関連API
  // router.use("/sample", require("./api/sample.js")); // テストデータ作成
  return router;
})());

// 記事一覧初期表示
// app.get("/api/articles", async (req, res) => {
//   const newsapi = new NewsAPI("94694ec2cdbf458d824851f951c3dd3c");
//   try {
//     await newsapi.v2.everything({
//       q: "クジラ",
//       categroy: "jp"
//     }).then(response => {
//       // console.log(response.articles);
//       res.json({ articles: response.articles});
//     }).catch(error => {
//       throw error;
//     });
//   } catch(error) {
//     console.log(error);
//     throw error;
//   }
// });

app.get("*", function(req, res) {
  res.sendFile(path.resolve("./", "dist", "index.html"))
});

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
});
