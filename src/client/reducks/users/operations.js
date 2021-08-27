// operationsはredux-thunkで非同期処理を制御する
import { push } from "connected-react-router";

// ユーザ登録処理
export const signUp = (name, email, password, passwordConfirmation) => {
  // 第一引数にdispatchメソッド、第二引数に現在のstate情報が入ってくる
  return async (dispatch) => {
    const url = "/api/users/regist";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      })
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      return res.blob();
    }).then((blob) => {
      console.log(blob);
      dispatch(push("/"));
    }).catch((err) => {
      throw err;
    })
  }
}