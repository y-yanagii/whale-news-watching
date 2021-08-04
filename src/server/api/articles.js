import pool from "../postgresql"; // postgresqlの設定ファイル
let router = require("express").Router();

router.get("/*", (req, res) => {
  // 記事情報一覧取得(DB接続)
  pool.connect(function(err, client) {
    if (err) {
      console.log(err);
    } else {
      client.query("SELECT * FROM articles ORDER BY published_at", function (err, result) {
        console.log(result.rows);
        res.json(result.rows);
      });
    }
  });
});

module.exports = router;