import express from "express";
import path from "path";
import config from "config";
import { logger } from "./logger";
import NewsAPI from "newsapi";
import pool from "./postgresql"; // postgresqlの設定ファイル
import jsonData from "../../sample.json";

const app = express();

// configurationの導入で環境によって設定を切り替える際に利用する機能
// 例：開発時、本番時APIのhostが違ったりrequest時のportが違ったりする差異をコードベースで環境設定を切り分けれる
const serverConfig = config.get("server");

app.use(express.static(path.resolve("./", "dist")));

app.get("/api", (req, res) => {
  // 記事情報一覧取得(DB接続)
  pool.connect(function(err, client) {
    if (err) {
      console.log(err);
    } else {
      client.query("SELECT * FROM articles", function (err, result) {
        console.log("query結果 --------------------");
        console.log(result);
        res.json(result.rows);
      });
    }
  });

  // サンプル
  // res.json(jsonData);
});

// 記事一覧初期表示
app.get("/api/articles", async (req, res) => {
  const newsapi = new NewsAPI("94694ec2cdbf458d824851f951c3dd3c");
  try {
    await newsapi.v2.everything({
      q: "クジラ",
      categroy: "jp"
    }).then(response => {
      // console.log(response.articles);
      res.json({ articles: response.articles});
    }).catch(error => {
      throw error;
    });
  } catch(error) {
    console.log(error);
    throw error;
  }
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve("./", "dist", "index.html"))
});

app.listen(serverConfig.port, () => {
  logger.info(`server starting -> [port] ${serverConfig.port} [env] ${process.env.NODE_ENV}`);
});