// operationsはredux-thunkで非同期処理を制御する
import { setErrorMessageAction } from "./actions";
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
    }).then(async (res) => {
      console.log("operationsのres");
      const resData = await res.json();
      console.log(resData);
      console.log(res.status);
      if (res.status === 500) {
        // サーバエラー画面に遷移
        dispatch(push("/error"));
        throw new Error(`${res.status} ${res.statusText}`);
      } else if (res.status === 400) {
        // Emailの重複チェックのエラー
        // エラーメッセージを保存
        dispatch(setErrorMessageAction({
          errorMessages: [resData.msg]
        }));
        return false;
      }
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      dispatch(push("/"));
    }).catch((err) => {
      dispatch(push("/error"));
      throw new Error(err);
    })
  }
}