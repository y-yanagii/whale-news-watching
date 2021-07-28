import express from "express";
import path from "path";
import config from "config";
import { logger } from "./logger";
import NewsAPI from "newsapi";

const app = express();

// configurationの導入で環境によって設定を切り替える際に利用する機能
// 例：開発時、本番時APIのhostが違ったりrequest時のportが違ったりする差異をコードベースで環境設定を切り分けれる
const serverConfig = config.get("server");

app.use(express.static(path.resolve("./", "dist")));

app.get("/api", (req, res) => {
  res.send({ data: "test" });
});

app.get("/api/articles", (req, res) => {
  const newsapi = new NewsAPI("94694ec2cdbf458d824851f951c3dd3c");
  try {
    newsapi.v2.everything({
      q: "クジラ",
      categroy: "jp"
    }).then(response => {
      res.json({ articles: response.articles });
      return;
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