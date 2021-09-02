import pool from "../postgresql";
import bcrypt from "bcrypt"; // ハッシュ化
import { check, validationResult } from "express-validator"; // バリデーション
let router = require("express").Router();

// バリデーションチェック・ルール
const registrationValidationRules = [
  check("name").not().isEmpty().withMessage("ユーザ名を入力してください"),
  check("email").not().isEmpty().withMessage("メールアドレスを入力してください"),
  check("password").not().isEmpty().withMessage("パスワードを入力してください")
                    .isLength({ min: 6 }).withMessage("6文字以上入力してください")
                    .custom((value, { req }) => {
                      if (req.body.password !== req.body.passwordConfirmation) {
                        throw new Error("パスワード（確認）と一致しません");
                      }

                      return true;
                    })
];

// ユーザ登録処理
router.post("/regist", registrationValidationRules, (req, res) => {
  const errors = validationResult(req); // バリデーションチェックの結果を格納

  if (!errors.isEmpty()) {
    // バリデーションエラーの場合、フロント側でエラーチェックしているためサーバーエラーとする
    return res.status(500).json(errors.array());
  }

  const name = req.body.name;
  const email = req.body.email;
  const hashedPassword = bcrypt.hashSync(req.body.password, 10); // パスワードのハッシュ化

  // 即時関数で囲うことでasync awaitが使用可能
  ( async () => {
    const client = await pool.connect();
    try {
      // トランザクション開始
      await client.query("BEGIN");
      // 重複チェックとして入力したメールアドレスでユーザ情報取得
      let users = await client.query("SELECT * FROM users WHERE email = $1", [email]);

      // ユーザ情報の重複チェック
      if (users.rows.length > 0) {
        await client.query("ROLLBACK"); // DB変更を元に戻す
        client.release();
        // BadRequestとメッセージを返す
        const data = { msg: "既に登録されているメールアドレスです" };
        console.log("fjiejfoiewjiof");
        return res.status(400).json(data);
      }

      // ユーザ登録
      await client.query("INSERT INTO users (name, email, crypted_password) VALUES ($1, $2, $3)", [name, email, hashedPassword]);
      // DB反映
      await client.query("COMMIT");

      return res.json({
        msg: "ユーザ登録が成功しました!!"
      });
    } catch(err) {
      console.log("ROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACKROLLBACK");
      await client.query("ROLLBACK"); // DB変更を元に戻す
      throw err;
    } finally {
      console.log("finallyfinallyfinallyfinallyfinallyfinallyfinallyfinallyfinallyfinallyfinally");
      client.release();
    }
  })().catch(err => {
    res.json({
      msg: "ユーザ登録が成功しました!!"
    });
    throw err;
  });

});

module.exports = router;