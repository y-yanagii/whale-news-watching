import pool from "../postgresql"; // postgresqlの設定ファイル
let router = require("express").Router();

// 記事情報一覧取得
router.get("/", (req, res) => {
  // DB接続
  pool.connect(function(err, client) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      client.query("SELECT * FROM articles ORDER BY published_at", function (err, result) {
        res.json(result.rows);
      });
    }
  });
});

// 記事詳細情報取得
router.get("/:id", (req, res) => {
  console.log("/api/articles/:id");
  const id = req.params.id;
  pool.connect(function(err, client) {
    try {
      if (err) {
        throw err;
      }

      client.query("SELECT * FROM articles WHERE id = $1", [id], function(err, result) {
        res.json(result.rows[0]);
      });
    } catch {
      throw err
    } finally {
      client.release();
    }
  })
});

module.exports = router;