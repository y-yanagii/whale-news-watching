// operationsはredux-thunkで非同期処理を制御する
import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";

// ユーザ登録処理
export const signUp = (username, email) => {
  // 第一引数にdispatchメソッド、第二引数に現在のstate情報が入ってくる
  return async (dispatch) => {
    // ログイン情報を保持
    dispatch(signInAction({username: username, email: email}))
  }
}

// ログイン処理
export const signIn = (username, email) => {
  // 第一引数にdispatchメソッド、第二引数に現在のstate情報が入ってくる
  return async (dispatch) => {
    // ログイン情報を保持
    await dispatch(signInAction({username: username, email: email}));
    // 一覧画面に遷移
    await dispatch(push("/articles"));
  }
}

// 認証状態チェック(リロードしてもログイン状態を保つ)
export const listenAuthState = () => {
  return async (dispatch) => {
    // 認証済みチェック
    const url = "api/users/auth";
    fetch(url)
    .then(res => res.json())
    .then((resData) => {
      if (typeof resData === "undefined") {
        // ログイン画面に遷移
        dispatch(push("/signin"));
      } else {
        // ユーザ情報をredux管理
        dispatch(signInAction({
          username: resData.username,
          email: resData.email
        }));
      }
    });
  }
}

// ログアウト処理
export const signOut = () => {
  return async (dispatch) => {
    // 認証情報の削除
    const url = "api/users/logout";
    fetch(url)
    .then(res => res.json())
    .then((resData) => {
      // reduxで管理しているログイン情報を削除
      dispatch(signOutAction());
      // スタートページに遷移
      dispatch(push("/"));
    })
  }
}
