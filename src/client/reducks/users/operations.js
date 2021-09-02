// operationsはredux-thunkで非同期処理を制御する
import { signInAction } from "./actions";
import { push } from "connected-react-router";

// ユーザ登録処理
export const signUp = (name, email) => {
  // 第一引数にdispatchメソッド、第二引数に現在のstate情報が入ってくる
  return async (dispatch) => {
    dispatch(signInAction({name: name, email: email}))
  }
}