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

  }
}

// ログアウト処理
export const signOut = () => {
  return async (dispatch) => {
    dispatch(signOutAction());
    // トップページに遷移
    dispatch(push("/"));
  }
}
