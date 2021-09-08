import pool from "../postgresql";
import bcrypt from "bcrypt"; // ハッシュ化
import { check, validationResult } from "express-validator"; // バリデーション
let router = require("express").Router();

// ユーザ登録のバリデーションチェック・ルール
const registrationValidationRules = [
  check("username").not().isEmpty().withMessage("ユーザ名を入力してください"),
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

  const username = req.body.username;
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
        // BadRequestとメッセージを返す
        const data = { msg: "既に登録されているメールアドレスです" };
        return res.status(400).json(data);
      }

      // ユーザ登録
      await client.query("INSERT INTO users (name, email, crypted_password) VALUES ($1, $2, $3)", [username, email, hashedPassword]);
      // DB反映
      await client.query("COMMIT");

      return res.status(200).json({
        msg: "ユーザ登録が成功しました!!"
      });
    } catch(err) {
      await client.query("ROLLBACK"); // DB変更を元に戻す
      throw err;
    } finally {
      // DB切断
      client.release();
    }
  })().catch(err => {
    res.json({
      msg: "ユーザ登録に失敗しました!!"
    });
    throw err;
  });

});

// ログイン処理のバリデーションチェックルール
const loginValidationRules = [
  check("email").not().isEmpty().withMessage("メールアドレスを入力してください"),
  check("password").not().isEmpty().withMessage("パスワードを入力してください").isLength({ min: 6 }).withMessage("6文字以上入力してください")
];

// ユーザログイン処理
router.post("/login", loginValidationRules, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // バリデーションエラーの場合、フロント側でエラーチェックしているためサーバーエラーとする
    return res.status(500).json(errors.array());
  }

  const email = req.body.email;
  const password = req.body.password;
  
  (async () => {
    const client = await pool.connect();
    try {
      // メールアドレスで検索
      let users = await client.query("SELECT * FROM users WHERE email = $1", [email]);
      if (users.rows.length > 0) {
        // ユーザ取得ができた場合、パスワードチェック
        const user = users.rows[0];
        if (bcrypt.compareSync(password, user.crypted_password)) {
          // 入力パスワードとハッシュ化したパスワードを比較
          res.status(200).json({
            msg: "ログインに成功しました!!"
          });
        } else {
          // ログイン失敗（パスワード入力エラー）
          res.status(400).json({
            msg: "ログインに失敗しました。"
          });
        }
      }
    } catch(err) {
      res.status(400).json({
        msg: "ログインに失敗しました。"
      });
      throw err;
    } finally {
      // DB切断
      client.release();
    }
  })().catch(err => {
    throw err;
  });
});

module.exports = router;