import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";

const Auth = ({children}) => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);

  // componentDidMountと同じ動き
  useEffect(() => {
    // ユーザがサインしてなければ、listenAuthState()を呼び認証済みチェックを行う
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);

  if (!isSignedIn) {
    // サインしていない場合<Auth></Auth>の中身を渡さずログイン前に見せるrouterのみにする
    return <></>
  } else {
    // サインイン済みは<Auth></Auth>の子要素を返す(Router.jsxの<Auth></Auth>の中身)
    return children
  }
}

export default Auth;
