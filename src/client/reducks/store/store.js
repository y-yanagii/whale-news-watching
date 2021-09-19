import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
  // combineReducersに定義したReducerをここで設定
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history), // historyが持っている情報（現在のパスとか）
      users: UsersReducer
    }),
    applyMiddleware( // 扱うミドルウェアをここで引数として渡す
      routerMiddleware(history),
      thunk
    )
  )
}